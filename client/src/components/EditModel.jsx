import Input from "../components/Input.jsx"
import { useState } from "react"
import TextArea from "../components/TestArea.jsx"
import Button from "./Button.jsx"


function EditModel({ setIsEditModelOpen }) {
    const [name, setName] = useState("Over Team")
    const [description, setDescription] = useState("sjdj nasjf jansjnj bajj")
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!name.trim()) {
            newErrors.name = "Workspace name is required"
        }
        else if (name.trim().length < 3) {
            newErrors.name = "Workspace must have atleats 3 min characters"
        }
        else if (name.trim().length > 50) {
            newErrors.name = "Workspace can have max 50 characters"
        }

        if (description && description.trim().length > 200)
            newErrors.description = " descriptioncan have max 200 characters"

        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) {
            return
        }

        setLoading(true)
        try {
            console.log("pass")
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <div className="flex relative flex-col">
                <h1 className="text-center font-bold text-lg">Edit Workspace</h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <Input label="Name" type="text" placeholder="Enter workspace name" name="workspaceName" id="workspaceName" value={name} onChange={(e) => {
                            setName(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.name
                                return newErrors
                            })
                        }} />
                        {
                            errors.name && (
                                <p className="text-sm text-red-500">{errors.name}</p>
                            )
                        }
                    </div>

                    <div className="flex flex-col gap-2">
                        <TextArea label="Description (optional)" type="text" placeholder="Enter description" name="workspaceDescription" id="workspaceDescription" value={description} onChange={(e) => {
                            setDescription(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.description
                                return newErrors
                            })
                        }} />

                        {
                            errors.description && (
                                <p className="text-sm text-red-500">{errors.description}</p>
                            )
                        }

                    </div>

                    <div className="flex justify-center gap-4">
                        <Button text="Cancel" className="text-black border border-gray-600 bg-white cursor-pointer" onClick={() => setIsEditModelOpen(false)} />
                        <Button text="Save Changes" className="cursor-pointer" />
                    </div>
                </form>
            </div>

        </>
    )
}
export default EditModel