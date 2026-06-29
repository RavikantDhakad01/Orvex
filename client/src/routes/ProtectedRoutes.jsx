import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                 <h1>Loading...</h1>
            </div>
       )
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    } else {
        return <Outlet />
    }
}

export default ProtectedRoutes