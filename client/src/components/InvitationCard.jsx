import Avatar from "./Avatar.jsx"
import Button from "./Button.jsx"
import {getTimeAgo} from "../utils/getTimeAgo.js"

function InvitationCard({sender,workspace,invitationDate}){
    return (
      <div className="flex flex-col  gap-4 shadow-md p-4 rounded-lg">
     <div className="flex gap-6 ">
                <Avatar name={workspace.name} color={workspace.avatarColor}/>
            <div>
                <h2 className="font-bold text-lg">
                   {workspace.name}
                </h2>
                <p className="text-gray-700">{`Invited by ${sender.username}`}</p>
                <span className="text-gray-600">Created {getTimeAgo(invitationDate)}</span>
            </div>

         </div>

         <div className="flex justify-center gap-6 ">
<Button text="Reject" className="bg-transparent text-red-700 border border-red-500 w-full cursor-pointer"/>
<Button text="Accept" className="w-full cursor-pointer"/>
         </div>
      </div>
    )
}
export default  InvitationCard

