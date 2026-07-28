import { X } from "lucide-react"
import Input from "../components/Input.jsx"
import { useState } from "react"
import TextArea from "../components/TestArea.jsx"
import Button from "./Button.jsx"

function InviteModel({ setModelOpen }) {
    const [email, setEmail] = useState("")
   
    return (
        <>
            <div className="flex relative flex-col">
                <h1 className="text-center font-bold text-xl">Invite Member</h1>
                <X size={26} strokeWidth={2} className="cursor-pointer absolute top-0 right-0" onClick={() => setModelOpen(false)} />
                <form className="flex flex-col gap-8">
                    <Input label="Email" type="text" placeholder="Enter email address" name="email" id="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />

                    <div className="flex justify-center gap-4">
                        <Button text="Cancel" className="text-black border border-gray-600 bg-white "/>
                         <Button text="Send Invitation"/>
                    </div>
                </form>
            </div>

        </>
    )
}
export default InviteModel