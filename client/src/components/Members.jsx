import MemberCard from "./MemberCard.jsx"
import Button from "./Button.jsx"
import { useState } from "react"
import InviteModel from "../components/InviteModel.jsx"
import Model from "./Model.jsx"
import EmptyStats from "./EmptyStats.jsx"
import {UsersRound} from "lucide-react"

function Members() {
    const [isInviteModelOpen, setIsInviteModelOpen] = useState(false)
    return (
        <>
            {/* <div className=" flex flex-col gap-10 mt-8">
                <div className=" flex flex-col gap-5">
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
                <Button text="+ Invite Member" onClick={() => setIsInviteModelOpen(true)} />

            </div> */}

            <EmptyStats icon={<UsersRound size={54}
                strokeWidth={1.25} className="text-blue-500" />} heading="No members yet" note="Get started by inviting your first member">
                <Button text="+ Invite Member" className="w-full py-4 cursor-pointer" onClick={() => setIsInviteModelOpen(true)} />
            </EmptyStats>
            {isInviteModelOpen && <Model><InviteModel setIsInviteModelOpen={setIsInviteModelOpen} /></Model>}
        </>

    )
}
export default Members

// 

