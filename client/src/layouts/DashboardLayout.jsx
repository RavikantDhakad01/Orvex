import Sidebar from "../components/Sidebar.jsx"
import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import { currentUser } from "../services/auth.services.js"
import { useEffect, useState, useContext } from "react"
import AuthContext from "../context/AuthContext.jsx"

function DashboardLayout() {
    const { setUser } = useContext(AuthContext)
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const user = await currentUser()
                setUser(user.data) //
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
                <Navbar/>
                <main className="p-8">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}
export default DashboardLayout