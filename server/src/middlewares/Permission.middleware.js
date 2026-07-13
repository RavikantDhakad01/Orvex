import ApiError from "../utils/ApiError.js"
import WorkspaceMember from "../models/workspaceMember.model.js"

const authorizeWorkspace = (roles = []) => {
    return async (req, res, next) => {
        try {
            const { workspaceId } = req.params

            if (!workspaceId) {
                throw new ApiError(400, "Workspace id is required")
            }

            const workspaceMember = await WorkspaceMember.findOne({
                workspace: workspaceId,
                user: req.user._id
            })

            if (!workspaceMember) {
                throw new ApiError(403, "User is not the member of workspace")
            }

            const userRole = workspaceMember.role

            if (!roles.includes(userRole)) {
                throw new ApiError(403, "You don't have permit to perform this action")
            }

            req.workspaceMember = workspaceMember
            next()

        } catch (error) {
            next(error)
        }
    }
}
export { authorizeWorkspace }