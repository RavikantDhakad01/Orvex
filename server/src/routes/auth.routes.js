import { Router } from "express"
import { register, login, getCurrentUser, logout } from "../controllers/auth.controllers.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js"

const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/current-user").get(verifyJwt,getCurrentUser)
router.route("/logout").post(verifyJwt,logout)

export default router