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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            fullName,
            email,
            password,
            confirmPassword
        })
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
                        <h1 className="text-2xl font-bold">Create your account</h1>
                        <p className="text-sm text-gray-500">Sign up to get started with Orvex</p>
                    </div>

                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

                        <Input label="Full Name" type="text" placeholder="Enter your full name" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} frontIcon={<User size={20} strokeWidth={1.25} />} />

                        <Input label="Email" type="email" placeholder="Enter your email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} frontIcon={<Mail size={20} strokeWidth={1.25} />} />

                        <Input label="Password" type={showPassword ? "text" : "password"} placeholder="Enter your password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} frontIcon={<Lock size={20} strokeWidth={1.25} />} backIcon={showPassword ? <EyeOff size={20} strokeWidth={1.25} onClick={() => setShowPassword(!showPassword)} /> : <Eye size={20} strokeWidth={1.25} onClick={() => setShowPassword(!showPassword)} />} />


                        <Input label="Confirm Password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} frontIcon={<Lock size={20} strokeWidth={1.25} />} backIcon={showConfirmPassword ? <EyeOff size={20} strokeWidth={1.25} onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <Eye size={20} strokeWidth={1.25} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />} />


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