import { Router } from "express"
import { authorizeWorkspace } from "../middlewares/permission.middleware.js"
import {
    createWorkspace,
    getUserWorkspaces,
    getWorkspaceById,
    updateWorkspace,
    deleteWorkspace
} from "../controllers/workspace.controllers.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js"
import { WORKSPACE_ROLE } from "../constants.js"

const router = Router()
router.route("/").post(verifyJwt, createWorkspace).get(verifyJwt, getUserWorkspaces)

router.route("/:workspaceId").get(verifyJwt, authorizeWorkspace([WORKSPACE_ROLE.MEMBER, WORKSPACE_ROLE.OWNER]), getWorkspaceById).patch(verifyJwt, authorizeWorkspace([WORKSPACE_ROLE.OWNER]), updateWorkspace).delete(verifyJwt, authorizeWorkspace([WORKSPACE_ROLE.OWNER]), deleteWorkspace)

export default router