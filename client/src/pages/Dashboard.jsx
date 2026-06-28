import { currentUser } from "../services/auth.services.js"
import { useEffect, useState } from "react"
import { LayoutDashboard, LogOut, Hexagon, User, ChevronDown, Mail, BriefcaseBusiness, FolderKanban, ListTodo } from "lucide-react";
import { Link } from "react-router-dom";
function Dashboard() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="flex  w-full">

                <aside className="flex flex-col gap-7 w-64 bg-white min-h-screen p-3 shadow-lg border-r border-gray-200">
                    <div className="flex flex-row gap-1">
                        <Hexagon size={36} className="text-blue-800" />
                        <h1 className="text-xl font-bold">Orvex</h1>
                    </div>
                    <nav>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link to="/dashboard" className="flex gap-2  bg-blue-100 rounded-lg py-1 px-2 text-blue-700">
                                    <LayoutDashboard size={22} className="font-bold" /> <span className="text-base ">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/workspace" className="flex gap-2  text-slate-700 hover:bg-slate-100 transition-colors rounded-lg py-1 px-2">
                                    <BriefcaseBusiness size={22} className="font-bold" /> <span className="text-base "> Workspace</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/project" className="flex gap-2  text-slate-700 hover:bg-slate-100 transition-colors rounded-lg py-1 px-2">
                                    <FolderKanban size={22} className="font-bold" /> <span className="text-base">Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/task" className="flex gap-2  text-slate-700 hover:bg-slate-100 transition-colors rounded-lg py-1 px-2">
                                    <ListTodo size={22} className=" font-bold" /> <span className="text-base ">Tasks</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </aside>

                <div className="w-full">
                    <header>
                        <nav>
                            <ul className="bg-white shadow flex items-center justify-end p-4 border-b border-gray-200">
                                <li className="relative">
                                    <button className="cursor-pointer flex items-center" onClick={() => setOpen(!open)}>
                                        <div className="text-blue-800 flex justify-center items-center w-7 h-7 bg-blue-200 rounded-full">{"R"}</div>
                                        <ChevronDown size={16} />
                                    </button>
                                    {
                                        open && (
                                            <div className="flex flex-col gap-2 absolute  right-0 top-11  w-64 bg-white shadow-md rounded-xl border border-gray-200 p-4 z-30">
                                                <div className="flex gap-2 items-center">
                                                    <User size={18} /><span>{"Ravikant"}</span></div>
                                                <div className="flex gap-2 items-center text-gray-600
text-sm">
                                                    <Mail size={18} />
                                                    <span>{"ravi@gmail.com"}</span>
                                                </div>

                                                <button className="flex mt-3 pt-2 px-1 border-t border-gray-300 gap-2 items-center cursor-pointer hover:text-red-500
transition-colors"><LogOut size={22} /> <span>Logout</span></button>
                                            </div>
                                        )
                                    }
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <main className="p-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-2xl">Welcome to Orvex 🚀</h1>
                            <h3 className="font-semibold text-lg">Hello,{" Ravikant"}👋</h3>
                        </div>
                    </main>
                </div>

            </div>
        </>
    )
}

export default Dashboard