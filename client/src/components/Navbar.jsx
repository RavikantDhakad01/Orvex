import { LogOut, User, ChevronDown, Mail, } from "lucide-react";
import { useState } from "react"
import { logout } from "../services/auth.services.js"
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx"
import toast from "react-hot-toast";

function Navbar() {

    const [open, setOpen] = useState(false)
    const { user, setUser } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const data = await logout()
            setUser(null)
            toast.success(data.message)

            navigate("/login")
        } catch (error) {
            toast.error("Failed to logout")
        }
    }
    return (
        <header className="z-10 sticky top-0">
            <nav>
                <ul className="bg-white shadow flex items-center justify-end p-4 border-b border-gray-200">
                    <li className="relative">
                        <button className="cursor-pointer flex items-center" onClick={() => setOpen(!open)}>
                            <div className="text-blue-800 flex justify-center items-center w-7 h-7 bg-blue-200 rounded-full">{user?.username?.charAt(0).toUpperCase()}</div>
                            <ChevronDown size={16} />
                        </button>
                        {
                            open && (
                                <div className="flex flex-col gap-2 absolute  right-0 top-11  w-64 bg-white shadow-md rounded-xl border border-gray-200 p-4 z-30">
                                    <div className="flex gap-2 items-center">
                                        <User size={18} /><span>{user?.username}</span></div>
                                    <div className="flex gap-2 items-center text-gray-600
text-sm">
                                        <Mail size={18} />
                                        <span>{user?.email}</span>
                                    </div>

                                    <button className="flex mt-3 pt-2 px-1 border-t border-gray-300 gap-2 items-center cursor-pointer hover:text-red-500
transition-colors" onClick={handleLogout}><LogOut size={22} /> <span>Logout</span></button>
                                </div>
                            )
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar