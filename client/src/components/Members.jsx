import MemberCard from "./MemberCard.jsx"
import Button from "./Button.jsx"
import { useState } from "react"
import InviteModel from "../components/InviteModel.jsx"
import Model from "./Model.jsx"

function Members({ isOwner, workspaceData }) {
    const [isInviteModelOpen, setIsInviteModelOpen] = useState(false)
    return (
        <>
            <div className=" flex flex-col gap-10 mt-8">
                <div className=" flex flex-col gap-5">
                    {
                        workspaceData.members.map((member) => <MemberCard key={member._id} member={member.user} isOwner={member.user._id.toString() === workspaceData.workspace.owner._id.toString()} />)
                    }

                </div>
                {isOwner && <Button text="+ Invite Member" onClick={() => setIsInviteModelOpen(true)} className="cursor-pointer"/>}

            </div>
            {isInviteModelOpen && <Model><InviteModel setIsInviteModelOpen={setIsInviteModelOpen} /></Model>}
        </>

    )
}
export default Members


