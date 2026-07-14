import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import Workspace from "../models/workspace.model.js"
import WorkspaceMember from "../models/workspaceMember.model.js"
import { WORKSPACE_ROLE } from "../constants.js"
import Invitation from "../models/invitation.model.js"

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
        if (description !== undefined) {
            if (typeof description !== "string" || description.trim() === "") {
                throw new ApiError(400, "Workspace description is invalid")
            }

            if (description.trim().length > 200) {
                throw new ApiError(400, "Workspace description can only have max 200 character")
            }
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
        const members = await WorkspaceMember.find({ user: req.user._id }).populate({
            path: "workspace",
            select: "name description owner"
        })
        return res.status(200).json(new ApiResponse(200, members, "User workspaces fechted successfully"))
    } catch (error) {
        next(error)
    }
}

const getWorkspaceById = async (req, res, next) => {
    try {
        const { workspaceId } = req.params

        const workspace = await Workspace.findById(workspaceId)
        if (!workspace) {
            throw new ApiError(404, "Workspace does not exist")
        }
        return res.status(200).json(new ApiResponse(200, workspace, "Workspace details fetched successfully"))
    } catch (error) {
        next(error)
    }
}

const updateWorkspace = async (req, res, next) => {
    try {
        const { workspaceId } = req.params
        const { name, description } = req.body


        if (name === undefined && description === undefined) {
            throw new ApiError(400, "Atleast one field is required to upadte workspace")
        }

        const updateFields = {}
        if (name !== undefined) {

            if (typeof name !== "string" || name.trim() === "") {
                throw new ApiError(400, "Workspace name is invalid or missing")
            }

            if (name.trim().length < 3 || name.trim().length > 50) {
                throw new ApiError(400, "Workspace must be atleast 3 character or max 50 character long")
            }

            const existedWorkspace = await Workspace.findOne({
                name: name.trim().toLowerCase(),
                owner: req.user._id,
                _id: { $ne: workspaceId }
            })
            if (existedWorkspace) {
                throw new ApiError(409, "Workspace with the same name already exists")
            }

            updateFields.name = name.trim().toLowerCase()
        }


        if (description !== undefined) {
            if (typeof description !== "string" || description.trim() === "") {
                throw new ApiError(400, "Workspace description is invalid")
            }

            if (description.trim().length > 200) {
                throw new ApiError(400, "Workspace description can only have max 200 character")
            }

            updateFields.description = description.trim()
        }

        const updatedWorkspace = await Workspace.findByIdAndUpdate(workspaceId, updateFields, { new: true }

        )
        if (!updatedWorkspace) {
            throw new ApiError(404, "Workspace does not exist")
        }

        return res.status(200).json(new ApiResponse(200, updatedWorkspace, "Workspace updated successfully"))

    } catch (error) {
        next(error)
    }
}

const deleteWorkspace = async (req, res, next) => {
    const session = await mongoose.startSession();
    try {
        const { workspaceId } = req.params

        session.startTransaction()

        const deletedWorkspace = await Workspace.findByIdAndDelete(workspaceId, { session })
        if (!deletedWorkspace) {
            throw new ApiError(404, "Workspace does not exist");
        }
        
        await WorkspaceMember.deleteMany({ workspace: workspaceId }, { session })
        await Invitation.deleteMany({ workspace: workspaceId }, { session })

        await session.commitTransaction()
        return res.status(200).json(new ApiResponse(200, deletedWorkspace, "Workspace deleted successfully"))

    } catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        next(error)
    } finally {
        session.endSession();
    }
}

export {
    createWorkspace,
    getUserWorkspaces,
    getWorkspaceById,
    updateWorkspace,
    deleteWorkspace
}