import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import crypto from "crypto"
import mongoose, { Schema } from "mongoose";
import { type } from "os";

const userSchema = new Schema({

    avatar: {
        url: {
            type: String,
            default: "https://placehold.co/200x200"
        },
        localPath: {
            type: String,
            default: ""
        }
    },

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    fullName: {
        type: String,
        trim: true
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    isEmailVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: String,
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    emailVerificationToken: String,
    emailVerificationExpiry: Date

}, {
    timestamps: true
})

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateTemporaryToken = function () {
    const unhashedToken = crypto.randomBytes(20).toString("hex")
    const hashedToken = crypto.createHash("sha256").update(unhashedToken).digest("hex")
    const tokenExpiry = Date.now() + (20 * 60 * 1000)
    return { unhashedToken, hashedToken, tokenExpiry }
}

const User = mongoose.model("User", userSchema)
export default User