import User from "../models/user.model.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"


const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        if ([username, email, password].some((field) => !field?.trim())) {
            throw new ApiError(400, "All fields are required")
        }

        const existedUser = await User.findOne({
            $or: [{ email: email.trim().toLowerCase() }, { username: username.trim().toLowerCase() }]
        })
        if (existedUser) {
            throw new ApiError(409, "User already exists with this email or username")
        }

        const user = await User.create({
            username: username.trim().toLowerCase(),
            email: email.trim().toLowerCase(),
            password: password.trim()
        })

        const createdUser = await User.findById(user._id).select("-password -refreshToken")

        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering user")
        }

        return res.status(201).json(new ApiResponse(201, createdUser, "User registered successfully"))

    } catch (error) {
        next(error)
    }
}

const getCurrentUser = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

export {
    register,
    login,
    getCurrentUser,
    logout
}