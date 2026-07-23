import { X } from "lucide-react"
import Input from "../components/Input.jsx"
import { useState } from "react"
import TextArea from "../components/TestArea.jsx"
import Button from "./Button.jsx"


function EditModel({ setIsModelOpen }) {
    const [name, setName] = useState("Over Team")
   const [description, setDescription] = useState("sjdj nasjf jansjnj bajj")
    return (
        <>
            <div className="flex relative flex-col">
                <h1 className="text-center font-bold text-lg">Edit Workspace</h1>
                <X size={26} strokeWidth={2} className="cursor-pointer absolute top-0 right-0" onClick={() => setIsModelOpen(false)} />
                <form className="flex flex-col gap-4">
                    <Input label="Name" type="text" placeholder="Enter workspace name" name="workspaceName" id="workspaceName" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />

                    <TextArea label="Description (optional)" type="text" placeholder="Enter description" name="workspaceDescription" id="workspaceDescription" value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} />

                    <div className="flex justify-center gap-4">
                        <Button text="Cancel" className="text-black border border-gray-600 bg-white py-0"/>
                         <Button text="Save Changes"/>
                    </div>
                </form>
            </div>

        </>
    )
}
export default EditModel