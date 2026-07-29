import InvitationCard from "../components/InvitationCard.jsx"
import EmptyStats  from "../components/EmptyStats.jsx"
import {MailOpen} from "lucide-react"
import Button from "../components/Button.jsx"

function Invitation(){
    return (
      
            // <div>
            //      <div className="flex justify-between">
            //         <h1 className="text-2xl font-bold">My Invitations</h1>
            //     </div>

            //     <div className="flex flex-col gap-4 mt-6">
            //         <InvitationCard />
            //         <InvitationCard />
            //         <InvitationCard />
            //     </div>
            // </div> 
            
             <EmptyStats icon={<MailOpen size={54}
                strokeWidth={1.25} className="text-blue-500" />} heading="No invitations yet" className="pt-40" />
            
           
    )
}
export default  Invitation

