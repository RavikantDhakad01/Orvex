import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login.jsx"
import Signup from "../pages/Signup.jsx"
import ForgotPassword from "../pages/ForgotPassword.jsx"
import ResetPassword from "../pages/ResetPassword.jsx"
import LandingPage from "../pages/LandingPage.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import DashboardLayout from "../layouts/DashboardLayout.jsx"

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes