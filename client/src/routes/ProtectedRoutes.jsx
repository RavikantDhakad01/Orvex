import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

function ProtectedRoutes() {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loader/>
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    } 
        
    return <Outlet />
    
}

export default ProtectedRoutes