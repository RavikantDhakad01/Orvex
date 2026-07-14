import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import errorHandler from "./middlewares/error.middleware.js"
const app = express()

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

app.use(cookieParser())

app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",")||["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))

import healthCheckRouter  from "./routes/healthcheck.routes.js"
import authRouter from "./routes/auth.routes.js"
import workspaceRouter from "./routes/workspace.routes.js"
import invitationRouter  from "./routes/invitation.routes.js"

app.use("/api/v1/healthcheck",healthCheckRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/workspaces",workspaceRouter)
app.use("/api/v1/invitations",invitationRouter)
app.use(errorHandler)

export default app