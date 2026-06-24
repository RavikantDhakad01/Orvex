import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js"
import User from "../models/user.model.js"

const verifyJwt = async (req, res, next) => {
    try {
        const { accessToken } = req.cookies || req.header("Authorization")?.replace("Bearer ", "")

        if (!accessToken) {
            throw new ApiError(401, "Unauthorized access")
        }

        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decoded._id).select("-password -refreshToken")

        if (!user) {
            throw new ApiError(401, "Invaid access token")
        }

        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

export {
    verifyJwt
}