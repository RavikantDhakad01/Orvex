import { Link } from "react-router-dom";
import { LayoutDashboard, Hexagon, BriefcaseBusiness, FolderKanban, ListTodo } from "lucide-react";

function Sidebar() {
    return (
        <aside className="flex flex-col gap-7 w-64 bg-white min-h-screen p-3 shadow-lg border-r border-gray-200 z-20">
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
    )
}
export default Sidebar