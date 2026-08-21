import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import getRandomAvatarColor from "../utils/randomColor.js"
import Task from "../models/task.model.js"
import WorkspaceMember from "../models/workspaceMember.model.js"
import { TASK_STATUS, TASK_PRIORITY } from "../constants.js"
import mongoose from "mongoose"

const createTask = async (req, res, next) => {
    try {
        const { title, description, status, priority, assignedTo, dueDate } = req.body
        if (typeof title !== "string" || title.trim() === "") {
            throw new ApiError(400, "Title is invalid or missing")
        }

        if (title.trim().length < 3 || title.trim().length > 50) {
            throw new ApiError(400, "Title must be at least 3 characters and at most 50 characters long")
        }

        if (description !== undefined) {
            if (typeof description !== "string") {
                throw new ApiError(400, "Description is invalid");
            }

            if (description.trim().length > 200) {
                throw new ApiError(
                    400,
                    "Description can only have a maximum of 200 characters"
                );
            }
        }

        if (status !== undefined) {
            if (typeof status !== "string" || !Object.values(TASK_STATUS).includes(status)) {
                throw new ApiError(400, "status is invalid");
            }
        }

        if (priority !== undefined) {
            if (typeof priority !== "string" || !Object.values(TASK_PRIORITY).includes(priority)) {
                throw new ApiError(400, "priority is invalid");
            }
        }

        if (assignedTo !== undefined) {

            if (!mongoose.isValidObjectId(assignedTo)) {
                throw new ApiError(400, "Assigned user id is invalid")
            }
            const workspaceMember = await WorkspaceMember.findOne({
                workspace: req.project.workspace._id,
                user: assignedTo
            })

            if (!workspaceMember) {
                throw new ApiError(400, "Assigned user does not exist or is not a member of the workspace")
            }
        }
        let parsedDueDate = null
        if (dueDate !== undefined) {
            const date = new Date(dueDate)

            if (isNaN(date.getTime())) {
                throw new ApiError(400, "Due date is invalid")
            }

            if (date < new Date()) {
                throw new ApiError(400, "Due date cannot be in the past")
            }

            parsedDueDate = date
        }

        const task = await Task.create({
            title: title.trim(),
            description: description?.trim() || "",
            status: status || TASK_STATUS.todo,
            priority: priority || TASK_PRIORITY.medium,
            assignedTo: assignedTo || null,
            dueDate: parsedDueDate,
            workspace: req.project.workspace._id,
            avatarColor: getRandomAvatarColor(),
            project: req.project._id,
            createdBy: req.user._id
        })
        return res.status(201).json(new ApiResponse(201, task, "Task created successfully"))
    } catch (error) {
        next(error)
    }
}

const getProjectTasks = async (req, res, next) => {
    try {
        const projectTasks = await Task.find({
            project: req.project._id
        })

        return res.status(200).json(new ApiResponse(200, projectTasks, "Project tasks fetched successfully"))

    } catch (error) {
        next(error)
    }
}
const getUserTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({
            assignedTo: {
                $in: [req.user._id, null]
            }
        })

        return res.status(200).json(new ApiResponse(200, tasks, "User tasks fetched successfully"))

    } catch (error) {
        next(error)
    }
}

const getTaskById = async (req, res, next) => {
    try {
        return res.status(200).json(new ApiResponse(200, req.task, "Task details fetched successfully"))
    } catch (error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
    try {
        const { title, description, status, priority, assignedTo, dueDate } = req.body

        if (title === undefined && description === undefined && status === undefined && priority === undefined && assignedTo === undefined && dueDate === undefined) {
            throw new ApiError(400, "At least one field is required to update task")
        }

        const updateFields = {}
        if (title !== undefined) {
            if (typeof title !== "string" || title.trim() === "") {
                throw new ApiError(400, "Title is invalid or missing")
            }

            if (title.trim().length < 3 || title.trim().length > 50) {
                throw new ApiError(400, "Title must be at least 3 characters and at most 50 characters long")
            }

            updateFields.title = title.trim()
        }

        if (description !== undefined) {
            if (typeof description !== "string") {
                throw new ApiError(400, "Description is invalid");
            }

            if (description.trim().length > 200) {
                throw new ApiError(
                    400,
                    "Description can only have a maximum of 200 characters"
                );
            }

            updateFields.description = description.trim()
        }

        if (status !== undefined) {
            if (typeof status !== "string" || !Object.values(TASK_STATUS).includes(status)) {
                throw new ApiError(400, "Status is invalid");
            }

            updateFields.status = status
        }

        if (priority !== undefined) {
            if (typeof priority !== "string" || !Object.values(TASK_PRIORITY).includes(priority)) {
                throw new ApiError(400, "Priority is invalid");
            }

            updateFields.priority = priority
        }

        if (assignedTo !== undefined) {
            if (assignedTo !== null) {
                if (!mongoose.isValidObjectId(assignedTo)) {
                    throw new ApiError(400, "Assigned user id is invalid")
                }
                const workspaceMember = await WorkspaceMember.findOne({
                    workspace: req.project.workspace._id,
                    user: assignedTo
                })

                if (!workspaceMember) {
                    throw new ApiError(400, "Assigned user does not exist or is not a member of the workspace")
                }
            }
            updateFields.assignedTo = assignedTo
        }

        if (dueDate !== undefined) {
            const date = new Date(dueDate)
            if (isNaN(date.getTime())) {
                throw new ApiError(400, "Due date is invalid")
            }

            if (date < new Date()) {
                throw new ApiError(400, "Due date cannot be in past")
            }

            updateFields.dueDate = date
        }

        const updatedTask = await Task.findByIdAndUpdate(req.task._id, updateFields, { new: true }

        )
        if (!updatedTask) {
            throw new ApiError(404, "Task does not exist")
        }

        return res.status(200).json(new ApiResponse(200, updatedTask, "Task updated successfully"))

    } catch (error) {
        next(error)
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.task._id)
        if (!deletedTask) {
            throw new ApiError(404, "Task does not exist");
        }

        return res.status(200).json(new ApiResponse(200, deletedTask, "Task deleted successfully"))
    } catch (error) {
        next(error)
    }
}

export {
    createTask,
    getProjectTasks,
    getUserTasks,
    getTaskById,
    updateTask,
    deleteTask
}