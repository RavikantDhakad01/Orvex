import mongoose, { Schema } from "mongoose";
const workspaceMemberSchema = new Schema({

    workspace: {
        type: Schema.Types.ObjectId,
        ref: "Workspace",
        required: true

    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    role: {
        type: String,
        enum: ["member", "owner"],
        default: "member"
    }
},
    { timestamps: true })

const WorkspaceMember = mongoose.model("WorkspaceMember", workspaceMemberSchema)
export default WorkspaceMember