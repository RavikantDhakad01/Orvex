import InvitationCard from "../components/InvitationCard.jsx"
function Invitation(){
    return (
      
            <div>
                 <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">My Invitations</h1>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <InvitationCard />
                    <InvitationCard />
                    <InvitationCard />
                </div>
            </div>   
           
    )
}
export default  Invitation

