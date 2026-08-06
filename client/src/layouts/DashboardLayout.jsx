import Sidebar from "../components/Sidebar.jsx"
import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import { useState,useEffect } from "react"
import { getUserInvitations } from "../services/invitation.services.js"

function DashboardLayout() {
    const [invitations, setInvitations] = useState([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const fetchInvitations = async () => {
        try {
            const invitationsData = await getUserInvitations();
            setInvitations(invitationsData.data);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong. Please refresh");
            } else if (error.request) {
                toast.error("Please check your internet connection");
            } else {
                toast.error("Something went wrong. Please refresh");
            }

            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchInvitations()
    }, [])

    return (
        <div className="flex  w-full">

            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} invitations={invitations} />

            <div className=" flex flex-col w-full min-h-screen" onClick={() => {
                if (isSidebarOpen) {
                    setIsSidebarOpen(false)
                }
            }}>
                <Navbar setIsSidebarOpen={setIsSidebarOpen} setIsDropdownOpen={setIsDropdownOpen} isDropdownOpen={isDropdownOpen} />

                <main className="flex-1 p-6" onClick={() => setIsDropdownOpen(false)}>
                    <Outlet context={{ invitations, fetchInvitations }} />
                </main>
            </div>

        </div>
    )
}
export default DashboardLayout