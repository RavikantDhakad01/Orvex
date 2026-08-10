import mongoose, { Schema } from "mongoose";
import { AVATAR_COLORS } from "../constants.js"

const projectSchema = new Schema({

    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
        required: true,
        lowercase: true
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
    workspace: {
        type: Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    { timestamps: true })

const Project = mongoose.model("Project", projectSchema)
export default Project