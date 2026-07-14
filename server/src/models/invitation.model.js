import mongoose, { Schema } from "mongoose";

const invitationSchema = new Schema({

    workspace: {
        type: Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    },

    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    role: {
        type: String,
        enum: ["member"],
        default: "member"
    },

    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },

    expiresAt: {
        type: Date,
        required: true
    }
},
    { timestamps: true })

const Invitation = mongoose.model("Invitation", invitationSchema)
export default Invitation