import { Router } from "express"
import { authorizeWorkspace } from "../middlewares/permission.middleware.js"
import {
    inviteMember,
    getUserInvitations,
    acceptInvitation,
    rejectInvitation
} from "../controllers/invitation.controllers.js"

import { verifyJwt } from "../middlewares/auth.middlewares.js"
import { WORKSPACE_ROLE } from "../constants.js"

const router = Router()
router.route("/workspace/:workspaceId").post(verifyJwt, authorizeWorkspace([WORKSPACE_ROLE.OWNER]), inviteMember)
router.route("/").get(verifyJwt, getUserInvitations)
router.route("/:invitationId").patch(verifyJwt, acceptInvitation).delete(verifyJwt, rejectInvitation)

export default router