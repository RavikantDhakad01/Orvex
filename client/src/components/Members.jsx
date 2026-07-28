import MemberCard from "./MemberCard.jsx"
import Button from "./Button.jsx"
import { useState } from "react"
import InviteModel from "../components/InviteModel.jsx"
import Model from "./Model.jsx"
function Members() {
    const [isModelOpen, setIsModelOpen] = useState(false)
    return (
        <>
            <div className=" flex flex-col gap-10 mt-8">
                <div className=" flex flex-col gap-5">
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
                <Button text="+ Invite Member" onClick={() => setIsModelOpen(true)} />

            </div>
            {isModelOpen && <Model><InviteModel setIsModelOpen={setIsModelOpen} /></Model>}
        </>

    )
}
export default Members

// 

