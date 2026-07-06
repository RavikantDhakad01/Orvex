import { Link } from "react-router-dom";
import { LayoutDashboard, BriefcaseBusiness, FolderKanban, ListTodo,X} from "lucide-react";
import logo from "../assets/logo.svg"
import { useState } from "react";
function Sidebar({ isSildebarOpen, setIsSildebarOpen }) {
    
    return (
        <aside className={`flex flex-col gap-7 w-64 bg-white min-h-screen p-3 shadow-lg border-r border-gray-200 z-20 fixed left-0 top-0  lg:static transition-transform duration-300 ${isSildebarOpen?"translate-x-0":"-translate-x-full lg:translate-x-0"}`}>
            <div className="flex flex-row gap-2 relative">
                 <img src={logo} alt="Orvex Logo" className="w-8 h-8" />
               
                <h1 className="text-xl font-bold">Orvex</h1>
                <X size={26} strokeWidth={2.5} className="absolute right-2 top-0 lg:hidden" onClick={()=>setIsSildebarOpen(false)}/>
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
    )
}
export default Sidebar