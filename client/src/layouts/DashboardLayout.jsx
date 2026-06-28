import Sidebar from "../components/Sidebar.jsx"
import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import { currentUser } from "../services/auth.services.js"
import { useEffect, useState } from "react"

function DashboardLayout() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const user = await currentUser()
                setUser(user.data)
            } catch (error) {
                console.log(error.response.data.message)
            }
        }
        getCurrentUser()
    }, [])
    return (
        <div className="flex  w-full">

            <Sidebar />
            <div className="w-full">
                <Navbar user={user} />
                <main className="p-8">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
export default DashboardLayout