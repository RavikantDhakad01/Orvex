import Workspace from "../models/workspace.model.js"
import ApiError from "../utils/ApiError.js"
import WorkspaceMember from "../models/workspaceMember.model.js"

const authorizeWorkspace = (roles = []) => {
    return async (req, res, next) => {
        try {
            const { workspaceId } = req.params
            const workspace = await Workspace.findOne({ _id: workspaceId })

            if (!workspace) {
                throw new ApiError(404, "workspace does not exist")
            }

            const workspaceMember = await WorkspaceMember.findOne({
                workspace: workspaceId,
                user: req.user._id
            })

            if (!workspaceMember) {
                throw new ApiError(402, "User is not the member of workspace")
            }

            if (!roles.includes(givenRole)) {
                throw new ApiError(401, "you don't have permit to perform this action")
            }

            const givenRole = workspaceMember.role
            req.user.role = givenRole

            next()

        } catch (error) {
            next(error)
        }
    }
}
export { authorizeWorkspace }