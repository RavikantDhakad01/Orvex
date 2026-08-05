import InvitationCard from "../components/InvitationCard.jsx"
import EmptyStats from "../components/EmptyStats.jsx"
import { MailOpen } from "lucide-react"
import Button from "../components/Button.jsx"
import { getUserInvitations } from "../services/invitation.services.js"
import { useEffect, useState } from "react"
import Loader from "../components/Loader.jsx"

function Invitation() {
    const [invitations, setInvitations] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchInvitations = async () => {

        try {
            const invitationsData = await getUserInvitations();
            setInvitations(invitationsData.data);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong. Please refresh");
            } else if (error.request) {
                toast.error("Please check your internet connection");
            } else {
                toast.error("Something went wrong. Please refresh");
            }

            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchInvitations()
    }, [])

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            {
                invitations.length > 0 ? (<>
                    <div>
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">My Invitations</h1>
                        </div>

                        <div className="flex flex-col gap-4 mt-6">
                            {
                                invitations.map((invitation) => <InvitationCard key={invitation._id} sender={invitation.sender
} workspace={invitation.workspace
} invitationDate={invitation.createdAt}/>)
                            }
                        </div>
                    </div>
                </>) : (<>
                    <EmptyStats icon={<MailOpen size={54}
                        strokeWidth={1.25} className="text-blue-500" />} heading="No invitations yet" className="pt-40" />

                </>)
            }
        </>
    )
}
export default Invitation

