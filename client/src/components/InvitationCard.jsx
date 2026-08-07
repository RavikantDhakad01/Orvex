import Avatar from "./Avatar.jsx"
import Button from "./Button.jsx"
import { getTimeAgo } from "../utils/getTimeAgo.js"
import { useState } from "react"
import { acceptInvitation, rejectInvitation } from "../services/invitation.services.js"
import toast from "react-hot-toast"

function InvitationCard({ id, sender, workspace, invitationDate, fetchInvitations }) {
    const [rejectLoading, setRejectLoading] = useState(false)
    const [acceptLoading, setAcceptLoading] = useState(false)

    const handleReject = async () => {
        setRejectLoading(true)
        try {
            const response = await rejectInvitation(id)
            toast.success(response.message)
            await fetchInvitations()
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message)
            }
            else if (error.request) {
                toast.error("Please check your internet connection")
            }
            else {
                toast.error("Something went wrong. Please try again")
            }
        } finally {
            setRejectLoading(false)
        }
    }
    const handleAccept = async () => {
        setAcceptLoading(true)
        try {
            const response = await acceptInvitation(id)
            toast.success(response.message)
            await fetchInvitations()
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message)
            }
            else if (error.request) {
                toast.error("Please check your internet connection")
            }
            else {
                toast.error("Something went wrong. Please try again")
            }
        } finally {
            setAcceptLoading(false)
        }
    }
    return (
        <div className="flex flex-col  gap-4 shadow-md p-4 rounded-lg">
            <div className="flex gap-6 ">
                <Avatar name={workspace.name} color={workspace.avatarColor} />
                <div>
                    <h2 className="font-bold text-lg">
                        {workspace.name}
                    </h2>
                    <p className="text-gray-700">{`Invited by ${sender.username}`}</p>
                    <span className="text-gray-600">Invited {getTimeAgo(invitationDate)}</span>
                </div>

            </div>

            <div className="flex justify-center gap-6 ">
                <Button text={rejectLoading ? "Rejecting..." : "Reject"} className="bg-transparent text-red-700 border border-red-500 w-full cursor-pointer" onClick={handleReject} disabled={rejectLoading} />
                <Button text={acceptLoading?"Accepting...":"Accept"} className={`w-full ${acceptLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={handleAccept} disabled={acceptLoading}/>
            </div>
        </div>
    )
}
export default InvitationCard

