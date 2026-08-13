import mongoose, { Schema } from "mongoose";
import {AVATAR_COLORS} from "../constants.js"

const workspaceSchema = new Schema({

    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
        required: true
    },

    description: {
        type: String,
        trim: true,
        maxlength: 200,
        default: ""
    },
    avatarColor: {
        type: String,
        enum: AVATAR_COLORS,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    { timestamps: true })

const Workspace = mongoose.model("Workspace", workspaceSchema)
export default Workspace