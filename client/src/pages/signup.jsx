import { Hexagon } from "lucide-react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

function Signup() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}

        if (!fullName.trim()) {
            newErrors.fullName = "Full name is required"
        }

        if (!email.trim()) {
            newErrors.email = "Email is required"
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email =
                "Please enter a valid email address";
        }

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
    }

    return (
        <>
            <div className="bg-slate-50  min-h-screen flex  justify-center items-center px-4">
                <div className="bg-white flex flex-col gap-6 shadow-lg p-8 w-full max-w-md rounded-2xl">
                    <div className="flex gap-2 justify-center">
                        <div className="cursor-pointer"><Hexagon
                            size={40}
                            className="text-blue-600"
                        /></div>
                        <h1 className="text-3xl font-bold">Orvex</h1>
                    </div>
                    <div className="flex items-center flex-col">
                        <h1 className="text-2xl font-bold">Create your account 🚀</h1>
                        <p className="text-sm text-gray-500 text-center">Sign up to get started with Orvex</p>
                    </div>

                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

                        <Input label="Full Name" type="text" placeholder="Enter your full name" name="fullName" id="fullName" value={fullName} onChange={(e) => {
                            setFullName(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.fullName
                                return newErrors
                            })
                        }} frontIcon={<User size={20} strokeWidth={1.25} />} />
                        {
                            errors.fullName && (
                                <p className="text-sm text-red-500">{errors.fullName}</p>
                            )
                        }
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

                        <Input label="Password" type={showPassword ? "text" : "password"} placeholder="Enter your password" name="password" id="password" value={password} onChange={(e) => {
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
                        <Input label="Confirm Password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => {
                            setConfirmPassword(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.confirmPassword
                                return newErrors
                            })
                        }} frontIcon={<Lock size={20} strokeWidth={1.25} />} backIcon={showConfirmPassword ? <EyeOff size={20} strokeWidth={1.25} onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <Eye size={20} strokeWidth={1.25} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />} />

                        {
                            errors.confirmPassword && (
                                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                            )
                        }
                        <Button type="submit" text="Sign Up" className="mt-2" />
                    </form>
                    <div className="flex gap-1 justify-center">
                        <p>Already have an account?</p>
                        <Link to="/login" className="text-blue-500">Sign in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup