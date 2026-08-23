import { Router } from "express"
import { authorizeProject, authorizeTask } from "../middlewares/permission.middleware.js"
import {
    createTask,
    getUserTasks,
    getTaskById,
    updateTask,
    deleteTask
} from "../controllers/task.controllers.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js"
import { WORKSPACE_ROLE } from "../constants.js"

const router = Router()
router.route("/projects/:projectId/tasks").post(verifyJwt, authorizeProject([WORKSPACE_ROLE.OWNER]), createTask)
router.route("/user").get(verifyJwt, getUserTasks)
router.route("/:taskId").get(verifyJwt, authorizeTask([WORKSPACE_ROLE.OWNER, WORKSPACE_ROLE.MEMBER]), getTaskById).patch(verifyJwt, authorizeTask([WORKSPACE_ROLE.OWNER, WORKSPACE_ROLE.MEMBER]), updateTask).delete(verifyJwt, authorizeTask([WORKSPACE_ROLE.OWNER]), deleteTask)

export default router
