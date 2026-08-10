import { Router } from "express"
import { authorizeWorkspace, authorizeProject } from "../middlewares/permission.middleware.js"
import {
    createProject,
    getUserProjects,
    getProjectById,
    updateProject,
    deleteProject
} from "../controllers/project.controllers.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js"
import { WORKSPACE_ROLE } from "../constants.js"

const router = Router()
router.route("/workspaces/:workspaceId/projects").post(verifyJwt,authorizeWorkspace([WORKSPACE_ROLE.OWNER]), createProject)
router.route("/").get(verifyJwt, getUserProjects)

router.route("/:projectId").get(verifyJwt,  authorizeProject([WORKSPACE_ROLE.MEMBER, WORKSPACE_ROLE.OWNER]), getProjectById).patch(verifyJwt, authorizeProject([WORKSPACE_ROLE.OWNER]), updateProject).delete(verifyJwt, authorizeProject([WORKSPACE_ROLE.OWNER]), deleteProject)

export default router