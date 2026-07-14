import mongoose, { Schema } from "mongoose";

const workspaceSchema = new Schema({

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

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    { timestamps: true })

const Workspace = mongoose.model("Workspace", workspaceSchema)
export default Workspace