import Input from "../components/Input.jsx"
import { useState } from "react"
import TextArea from "../components/TestArea.jsx"
import Button from "./Button.jsx"

function InviteModel({ setIsInviteModelOpen }) {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!email.trim()) {
            newErrors.email = "Email is required"
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email =
                "Please enter a valid email address";
        }

         setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }
        setLoading(true)
        try {
            console.log("pass")
        } catch (error) {
            
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="flex relative flex-col">
                <h1 className="text-center font-bold text-xl">Invite Member</h1>

                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                          <Input label="Email" type="email" placeholder="Enter email address" name="email" id="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                         setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.email
                                return newErrors
                            })
                    }} />

                     {
                            errors.email && (
                                <p className="text-sm text-red-500">{errors.email}</p>
                            )
                        }
                    </div>
                  

                    <div className="flex justify-center gap-4">
                        <Button text="Cancel" className="text-black border border-gray-600 bg-white cursor-pointer" onClick={() => setIsInviteModelOpen(false)} />
                        <Button text="Send Invitation" className="cursor-pointer" />
                    </div>
                </form>
            </div>

        </>
    )
}
export default InviteModel