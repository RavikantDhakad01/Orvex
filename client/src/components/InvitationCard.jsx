import Avatar from "./Avatar.jsx"
import Button from "./Button.jsx"

function InvitationCard(){
    return (
      <div className="flex flex-col  gap-4 shadow-md p-4 rounded-lg">
     <div className="flex gap-6 ">
                <Avatar />
            <div>
                <h2 className="font-bold text-lg">
                    Orvex Team
                </h2>
                <p className="text-gray-700">Invited by Ravi kumar</p>
                <span className="text-gray-600">2 days ago</span>
            </div>

         </div>

         <div className="flex justify-center gap-6 ">
<Button text="Reject" className="bg-transparent text-red-700 border border-red-500 w-full"/>
<Button text="Accept" className="w-full"/>
         </div>
      </div>
    )
}
export default  InvitationCard

