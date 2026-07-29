import Sidebar from "../components/Sidebar.jsx"
import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import { useState } from "react"

function DashboardLayout() {
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return (
        <div className="flex  w-full">

            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

            <div className=" flex flex-col w-full min-h-screen" onClick={()=>{
                if(isSidebarOpen){
                    setIsSidebarOpen(false)
                }
            }}>
                <Navbar setIsSidebarOpen={setIsSidebarOpen} setIsDropdownOpen={setIsDropdownOpen} isDropdownOpen={isDropdownOpen}/>

                <main className="flex-1 p-6" onClick={()=>setIsDropdownOpen(false)}>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
export default DashboardLayout