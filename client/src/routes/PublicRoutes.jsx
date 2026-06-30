import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

function PublicRoutes() {
    const { user, loading } = useAuth()
    if (loading) {
        return <Loader />
    }
    if (user) {
        return <Navigate to="/dashboard" replace />
    }

    return <Outlet />
}

export default PublicRoutes