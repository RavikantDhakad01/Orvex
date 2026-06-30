import { Hexagon } from "lucide-react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Eye, EyeOff } from "lucide-react";

function ResetPassword() {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!password.trim()) {
            newErrors.password = "Password is required"
        }

        if (password && password.length < 8) {
            newErrors.password = "Password must be at least 8 characters"
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm password is required"
        }

        if (
            password &&
            confirmPassword &&
            password !== confirmPassword
        ) {
            newErrors.confirmPassword = "Passwords do not match";
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
                        <h1 className="text-2xl font-bold">Reset Password 🔑</h1>
                        <p className="text-sm text-gray-500 text-center">Enter your new password below</p>
                    </div>

                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <Input label="Password" type={showPassword ? "text" : "password"} placeholder="Enter your new password" name="password" id="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.password
                                return newErrors
                            })
                        }} frontIcon={<Lock size={20} strokeWidth={1.25} />} backIcon={showPassword ? <EyeOff size={20} strokeWidth={1.25} onClick={() => setShowPassword(!showPassword)} /> : <Eye size={20} strokeWidth={1.25} onClick={() => setShowPassword(!showPassword)} />} />

                        {
                            errors.password && (
                                <p className="text-sm text-red-500">{errors.password}</p>
                            )
                        }

                        <Input label="Confirm Password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your new password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => {
                            setConfirmPassword(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.confirmPassword
                                return newErrors
                            })
                        }} frontIcon={<Lock size={20} strokeWidth={1.25} />} backIcon={showConfirmPassword ? <EyeOff size={20} strokeWidth={1.25} onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <Eye size={20} strokeWidth={1.25} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />} />

                        {
                            errors.confirmPassword && (
                                <p className="text-sm text-red-500">{errors.
                                    confirmPassword}</p>
                            )
                        }

                        <Button type="submit" text="Reset Password" className="mt-2 opacity-50 cursor-not-allowed"  disabled={true} />
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
export default ResetPassword