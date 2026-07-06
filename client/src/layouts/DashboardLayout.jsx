import Sidebar from "../components/Sidebar.jsx"
import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import { useState } from "react"
function DashboardLayout() {
    const [isSildebarOpen,setIsSildebarOpen]=useState(false)
    return (
        <div className="flex  w-full">

            <Sidebar isSildebarOpen={isSildebarOpen} setIsSildebarOpen={setIsSildebarOpen}/>
            <div className="w-full">
                <Navbar setIsSildebarOpen={setIsSildebarOpen}/>
                <main className="p-8">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
export default DashboardLayout