import Sidebar from "../components/Sidebar.jsx"
import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import { useState } from "react"
function DashboardLayout() {
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    return (
        <div className="flex  w-full">

            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <div className="w-full">
                <Navbar setIsSidebarOpen={setIsSidebarOpen}/>
                <main className="p-6">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
export default DashboardLayout