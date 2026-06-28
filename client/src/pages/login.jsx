import { Hexagon } from "lucide-react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { login } from "../services/auth.services.js";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!email.trim()) {
            newErrors.email = "Email is required"
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email =
                "Please enter a valid email address";
        }

        if (!password.trim()) {
            newErrors.password = "password is required"
        }

        if (password && password.length < 8) {
            newErrors.password = "Password must be at least 8 characters"
        }
        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            return
        }

        try {
            const data = await login({
                email,
                password
            })

            navigate("/dashboard")
            
        } catch (error) {
            setErrors({
                server: error.response.data.message
            })
        }
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
                        <h1 className="text-2xl font-bold">Welcome back 👋</h1>
                        <p className="text-sm text-gray-500 text-center">Sign in your account to continue</p>
                    </div>
                    {
                        errors.server && (
                            <p className="text-sm text-red-500 text-center">{errors.server}</p>
                        )
                    }
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <Input label="Email" type="email" placeholder="Enter your email" name="email" id="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                            setErrors((pre) => {
                                const newErrors = { ...pre }
                                delete newErrors.email
                                delete newErrors.server
                                return newErrors
                            })
                        }}
                            frontIcon={<Mail size={20} strokeWidth={1.25} />} />

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
                                delete newErrors.server
                                return newErrors

                            })
                        }} frontIcon={<Lock size={20} strokeWidth={1.25} />} backIcon={showPassword ? <EyeOff size={20} strokeWidth={1.25} onClick={() => setShowPassword(!showPassword)} /> : <Eye size={20} strokeWidth={1.25} onClick={() => setShowPassword(!showPassword)} />} />

                        {
                            errors.password && (
                                <p className="text-sm text-red-500">{errors.password}</p>
                            )
                        }

                        <Link to="/forgot-password" className="text-blue-500 text-right">Forgot password?</Link>

                        <Button type="submit" text="Sign In" className="mt-2" />
                    </form>
                    <div className="flex gap-1 justify-center">
                        <p>Don't have an account?</p>
                        <Link to="/signup" className="text-blue-500 cursor-pointer">Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login 