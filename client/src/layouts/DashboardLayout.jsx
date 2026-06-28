import Sidebar from "../components/Sidebar.jsx"
import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"

function DashboardLayout() {
    return (
        <div className="flex  w-full">
            
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <main className="p-8">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
export default DashboardLayout