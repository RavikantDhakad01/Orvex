import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import Workspace from "../models/workspace.model.js"
import WorkspaceMember from "../models/workspaceMember.model.js"
import { WORKSPACE_ROLE } from "../constants.js"

const createWorkspace = async (req, res, next) => {
    const session = await mongoose.startSession();
    try {
        const { name, description } = req.body

        if (typeof name !== "string" || name.trim() === "") {
            throw new ApiError(400, "Workspace name is invalid or missing")
        }

        if (name.trim().length < 3 || name.trim().length > 50) {
            throw new ApiError(400, "Workspace must be atleast 3 character or max 50 character long")
        }

        const existedWorkspace = await Workspace.findOne({
            name: name.trim().toLowerCase(),
            owner: req.user._id
        })

        if (existedWorkspace) {
            throw new ApiError(409, "Workspace with the same name already exists")
        }

        session.startTransaction()

        const [workspace] = await Workspace.create([{
            name: name.trim().toLowerCase(),
            description: description?.trim(),
            owner: req.user._id
        }], { session })

         await WorkspaceMember.create([{
            workspace: workspace._id,
            user: req.user._id,
            role: WORKSPACE_ROLE.OWNER
        }], { session })

        await session.commitTransaction()
        return res.status(201).json(new ApiResponse(201, workspace, "Workspace created successfully"))

    } catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error)
    } finally {
        session.endSession();
    }
}

const getUserWorkspaces = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

const getWorkspaceById = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

const updateWorkspace = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

const deleteWorkspace = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

export {
    createWorkspace,
    getUserWorkspaces,
    getWorkspaceById,
    updateWorkspace,
    deleteWorkspace
}