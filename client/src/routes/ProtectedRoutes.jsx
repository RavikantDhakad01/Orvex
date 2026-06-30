import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

function ProtectedRoutes() {
    const { user, loading } = useAuth()
    if (loading) {
        return <Loader/>
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    } 
        
    return <Outlet />
    
}

export default ProtectedRoutes