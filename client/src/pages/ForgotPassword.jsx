import { Hexagon } from "lucide-react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function ForgotPassword() {

    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

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

        //Api call
    }
    return (
        <>
            <div className="bg-slate-50  min-h-screen flex  justify-center items-center px-4">
                <div className="bg-white flex flex-col gap-4 shadow-lg p-8 w-full max-w-md rounded-2xl">
                    <div className="flex gap-2 justify-center">
                        <div className="cursor-pointer"><Hexagon
                            size={40}
                            className="text-blue-600"
                        /></div>
                        <h1 className="text-3xl font-bold">Orvex</h1>
                    </div>
                    <div className="flex items-center flex-col">
                        <h1 className="text-xl font-bold">Forgot Password? 🔒</h1>
                        <p className="text-sm text-gray-500 text-center">Enter your email and we'll send you a reset link</p>
                    </div>

                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <Input label="Email" type="email" placeholder="Enter your email" name="email" id="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.email
                                return newErrors
                            })
                        }} frontIcon={<Mail size={20} strokeWidth={1.25} />} />
                        {
                            errors.email && (
                                <p className="text-sm text-red-500">{errors.email}</p>
                            )
                        }
                        <Button type="submit" text="Send Reset Link" className="mt-2 opacity-50 cursor-not-allowed"  disabled={true}/>
                    </form>


                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-300"></div>

                        <span className="text-gray-500 text-sm">
                            or
                        </span>

                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <div className="mx-auto text-lg">
                        <Link to="/login" className="text-blue-500">← Back to Sign In</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ForgotPassword