import { LayoutDashboard, BriefcaseBusiness, FolderKanban, Mail, ListTodo, X } from "lucide-react";
import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom";

function Sidebar({ isSidebarOpen, setIsSidebarOpen, invitations }) {

    return (
        <aside className={`flex flex-col gap-7 w-64 bg-white h-screen p-3 shadow-lg border-r border-gray-200 z-40 fixed left-0 top-0  lg:static transition-transform duration-300 ease-in-out  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
            <div className="flex flex-row gap-2 relative">
                <img src={logo} alt="Orvex Logo" className="w-8 h-8" />

                <h1 className="text-xl font-bold">Orvex</h1>
                <X size={26} strokeWidth={2.5} className="cursor-pointer absolute right-3 top-1 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
            </div>
            <nav>
                <ul className="flex flex-col gap-2">
                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => `flex gap-2 rounded-lg py-1 px-2 transition-colors ${isActive ? "bg-blue-100 text-blue-600" : "text-slate-600 hover:bg-slate-100"}`} onClick={() => setIsSidebarOpen(false)}>

                            <LayoutDashboard size={22} className="font-bold" /> <span className="text-base ">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/workspace" className={({ isActive }) => `flex gap-2 rounded-lg py-1 px-2 transition-colors ${isActive ? "bg-blue-100 text-blue-600" : "text-slate-600 hover:bg-slate-100"}`} onClick={() => setIsSidebarOpen(false)}>
                            <BriefcaseBusiness size={22} className="font-bold" /> <span className="text-base "> Workspace</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/invitation" className={({ isActive }) => `flex justify-between transition-colors rounded-lg py-1 px-2 ${isActive ? "bg-blue-100 text-blue-600" : "text-slate-600 hover:bg-slate-100"}`} onClick={() => setIsSidebarOpen(false)}>
                            <div className="flex gap-2">
                                < Mail size={22} className="font-bold" /> <span className="text-base "> Invitations</span>
                            </div>

                            {invitations.length > 0 && <div className="bg-blue-600 text-white rounded-full h-5 w-5 flex justify-center items-center">{invitations.length}</div>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" className={({ isActive }) => `flex gap-2 rounded-lg py-1 px-2 transition-colors ${isActive ? "bg-blue-100 text-blue-600" : "text-slate-600 hover:bg-slate-100"}`} onClick={() => setIsSidebarOpen(false)}>
                            <FolderKanban size={22} className="font-bold" /> <span className="text-base">Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/task" className={({ isActive }) => `flex gap-2 rounded-lg py-1 px-2 transition-colors ${isActive ? "bg-blue-100 text-blue-600" : "text-slate-600 hover:bg-slate-100"}`} onClick={() => setIsSidebarOpen(false)}>
                            <ListTodo size={22} className=" font-bold" /> <span className="text-base ">Tasks</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </aside>
    )
}
export default Sidebar

//flex gap-2  text-slate-700 hover:bg-slate-100 transition-colors rounded-lg py-1 px-2

//flex gap-2  bg-blue-100 rounded-lg py-1 px-2 text-blue-700

//flex justify-between  text-slate-700 hover:bg-slate-100 transition-colors rounded-lg py-1 px-2