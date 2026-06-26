import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login.jsx"
import Signup from "../pages/Signup.jsx"
import ForgotPassword from "../pages/ForgotPassword.jsx"
import ResetPassword from "../pages/ResetPassword.jsx"
import LandingPage from "../pages/LandingPage.jsx"

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </>
    )
}
export default AppRoutes