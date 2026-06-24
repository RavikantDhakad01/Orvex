import User from "../models/user.model.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

const generateAccessAndRefreshTokens = async (userId) => {

    const user = await User.findById(userId)
    if (!user) {
        throw new ApiError(404, "User not found")
    }

    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()
    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })

    return { accessToken, refreshToken }

}

const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        if ([username, email, password].some((field) => !field?.trim())) {
            throw new ApiError(400, "All fields are required")
        }
        
        if (password.trim().length < 8) {
            throw new ApiError(400,"Password must be at least 8 characters long")
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

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email?.trim() || !password?.trim()) {
            throw new ApiError(400, "Email and password are required")
        }

        const user = await User.findOne({ email: email.trim().toLowerCase() })
        if (!user) {
            throw new ApiError(404, "User does not exist")
        }

        const isPasswordValid = await user.isPasswordCorrect(password)
        if (!isPasswordValid) {
            throw new ApiError(400, "Password is invalid")
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

        if (!loggedInUser) {
            throw new ApiError(500, "Something went wrong while sign in")
        }

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        }
        return res.status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new ApiResponse(200, loggedInUser, "User logged in successfully"))

    } catch (error) {
        next(error)
    }
}

const getCurrentUser = async (req, res, next) => {
    try {
        return res.status(200).json(new ApiResponse(200, req.user, "User details fetched successfully"))
    } catch (error) {
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $unset: {
                    refreshToken: 1
                }
            }
        )

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        }

        return res.status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200, {}, "User logged out successfully"))
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