import mongoose, { Schema } from "mongoose";
import { AVATAR_COLORS, TASK_STATUS, TASK_PRIORITY } from "../constants.js"

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    avatarColor: {
        type: String,
        enum: AVATAR_COLORS,
        required: true
    },
    description: {
        type: String,
        maxlength: 200,
        trim: true
    },
    status: {
        type: String,
        default: TASK_STATUS.todo,
        enum: Object.values(TASK_STATUS)
    },
    priority: {
        type: String,
        default: TASK_PRIORITY.medium,
        enum: Object.values(TASK_PRIORITY)
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    workspace: {
        type: Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    dueDate: Date
}, { timestamps: true })

const Task = mongoose.model("Task", taskSchema)
export default Task