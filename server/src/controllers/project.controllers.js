import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import getRandomAvatarColor from "../utils/randomColor.js"
import Project from "../models/project.model.js"
import WorkspaceMember from "../models/workspaceMember.model.js"

const createProject = async (req, res, next) => {

    try {
        const { workspaceId } = req.params
        const { name, description } = req.body

        if (typeof name !== "string" || name.trim() === "") {
            throw new ApiError(400, "Project name is invalid or missing")
        }

        if (name.trim().length < 3 || name.trim().length > 50) {
            throw new ApiError(400, "Project must be atleast 3 character or max 50 character long")
        }

        if (description !== undefined) {
            if (typeof description !== "string") {
                throw new ApiError(400, "Project description is invalid");
            }

            if (description.trim().length > 200) {
                throw new ApiError(
                    400,
                    "Project description can only have a maximum of 200 characters"
                );
            }
        }
        const existedProject = await Project.findOne({
            name: name.trim().toLowerCase(),
            workspace: workspaceId
        })

        if (existedProject) {
            throw new ApiError(409, "Project with the same name already exists")
        }

        const project = await Project.create({
            name: name.trim().toLowerCase(),
            description: description?.trim() || "",
            avatarColor: getRandomAvatarColor(),
            workspace: workspaceId,
            createdBy: req.user._id
        })

        return res.status(201).json(new ApiResponse(201, project, "Project created successfully"))

    } catch (error) {
        next(error)
    }
}

const getUserProjects = async (req, res, next) => {
    try {
        const members = await WorkspaceMember.find({ user: req.user?._id }).select("workspace")
        const userWorkspaces = members.map((member) => member.workspace)
        const projects = await Project.find({ workspace: { $in: userWorkspaces } })

        //todo :add task count for each project later

        return res.status(200).json(new ApiResponse(200, projects, "User workspaces projects fechted successfully"))
    } catch (error) {
        next(error)
    }
}

const getProjectById = async (req, res, next) => {
    try {
        const { projectId } = req.params

        const project = await Project.findById(projectId)
        if (!project) {
            throw new ApiError(404, "Project does not exist")
        }

        //todo : fetch tasks 
        const tasks = []

        return res.status(200).json(new ApiResponse(200, { project, tasks }, "Project details fetched successfully"))
    } catch (error) {
        next(error)
    }
}

const updateProject = async (req, res, next) => {
    try {
        const { projectId } = req.params

        const project = await Project.findById(projectId)
        if (!project) {
            throw new ApiError(404, "Project does not exist")
        }
        const { name, description } = req.body


        if (name === undefined && description === undefined) {
            throw new ApiError(400, "At least one field is required to update project")
        }

        const updateFields = {}
        if (name !== undefined) {

            if (typeof name !== "string" || name.trim() === "") {
                throw new ApiError(400, "Project name is invalid or missing")
            }

            if (name.trim().length < 3 || name.trim().length > 50) {
                throw new ApiError(400, "Project name must be at least 3 characters and at most 50 characters long")
            }

            const existedProject = await Project.findOne({
                name: name.trim().toLowerCase(),
                workspace: project.workspace,
                _id: { $ne: projectId }
            })
            if (existedProject) {
                throw new ApiError(409, "Project with the same name already exists")
            }

            updateFields.name = name.trim().toLowerCase()
        }


        if (description !== undefined) {
            if (typeof description !== "string") {
                throw new ApiError(400, "Project description is invalid")
            }

            if (description.trim().length > 200) {
                throw new ApiError(400, "Project description can only have max 200 character")
            }

            updateFields.description = description.trim()
        }

        const updatedProject = await Project.findByIdAndUpdate(projectId, updateFields, { new: true }

        )
        if (!updatedProject) {
            throw new ApiError(404, "Project does not exist")
        }

        return res.status(200).json(new ApiResponse(200, updatedProject, "Project updated successfully"))

    } catch (error) {
        next(error)
    }
}

const deleteProject = async (req, res, next) => {
    try {
        const { projectId } = req.params

        const deletedProject = await Project.findByIdAndDelete(projectId)
        if (!deletedProject) {
            throw new ApiError(404, "Project does not exist");
        }

        //todo: add transition and delete projects task latter

        return res.status(200).json(new ApiResponse(200, deletedProject, "Project deleted successfully"))

    } catch (error) {
        next(error)
    } 
}

export {
    createProject,
    getUserProjects,
    getProjectById,
    updateProject,
    deleteWorkspace
}