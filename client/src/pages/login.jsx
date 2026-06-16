import { Hexagon } from "lucide-react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <>
            <div className="bg-slate-50  min-h-screen flex  justify-center items-center px-4">
                <div className="bg-white flex flex-col gap-6 shadow-lg p-8 w-full max-w-md rounded-2xl">
                    <div className="flex gap-2 justify-center">
                        <div><Hexagon
                            size={40}
                            className="text-blue-600"
                        /></div>
                        <h1 className="text-3xl font-bold">Orvex</h1>
                    </div>
                    <div className="flex items-center flex-col">
                        <h1 className="text-2xl font-bold">Welcome back 👋</h1>
                        <p className="text-lg">Sign in your account to continue</p>
                    </div>

                    <form className="flex flex-col gap-2">
                        <Input label="Email" type="email" placeholder="Enter your email" name="email" id="email" value={email} onChange={(e) => { return setEmail(e.target.value) }} frontIcon={<Mail/>}/>

                        <Input label="Password" type="password" placeholder="Enter your password" name="password" id="password" value={password} onChange={(e) => { return setPassword(e.target.value) }} frontIcon={<Lock/>} backIcon={<Eye/>}/>

                        <Link to="/forgot-password" className="text-blue-500 cursor-pointer text-right">Forgot password?</Link>

                        <Button type="submit" text="Sign In" disabled="flase"/>
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