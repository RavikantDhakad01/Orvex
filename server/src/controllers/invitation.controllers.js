import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import Invitation from "../models/invitation.model.js"
import User from "../models/user.model.js"
import WorkspaceMember from "../models/workspaceMember.model.js"
import validator from "validator";
import { INVITATION_STATUS } from "../constants.js"

const inviteMember = async (req, res, next) => {
    try {
        const { workspaceId } = req.params
        const { email } = req.body
        if (
            typeof email !== "string" ||
            !validator.isEmail(email.trim())
        ) {
            throw new ApiError(400, "Invalid email address");
        }

        const existedUser = await User.findOne({ email: email.trim().toLowerCase() })
        if (!existedUser) {
            throw new ApiError(404, "User does not exist");
        }
        if (existedUser._id.toString() === req.user._id.toString()) {
            throw new ApiError(409, "Owner cannot send invitation to himself")
        }

        const workspaceMember = await WorkspaceMember.findOne({ workspace: workspaceId, user: existedUser._id })
        if (workspaceMember) {
            throw new ApiError(409, "User is already a member in workspace")
        }

        const existedInvitation = await Invitation.findOne({ workspace: workspaceId, receiver: existedUser._id, status: INVITATION_STATUS.PENDING })

        if (existedInvitation) {

            if (existedInvitation.expiresAt >= new Date()) {
                throw new ApiError(409, "You have already sent invitation to user")
            }
            await Invitation.findByIdAndDelete(existedInvitation._id)

        }
        const invitation = await Invitation.create({
            workspace: workspaceId,
            sender: req.user._id,
            receiver: existedUser._id,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        })

        return res.status(201).json(new ApiResponse(201, invitation, "Invitation sent successfully"))
    } catch (error) {
        next(error)
    }
}

const getUserInvitations = async (req, res, next) => {
    try {
        const userPendingInvitations = await Invitation.find({ receiver: req.user._id, status: INVITATION_STATUS.PENDING }).populate("workspace","name").populate("sender","username email")
        return res.status(200).json(new ApiResponse(200, userPendingInvitations, "User pending invitations fetched successfully"))
    } catch (error) {
        next(error)
    }
}

const acceptInvitation = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

const rejectInvitation = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

export {
    inviteMember,
    getUserInvitations,
    acceptInvitation,
    rejectInvitation
}