import { createContext, useState, useEffect } from "react";
import { currentUser } from "../services/auth.services.js"

const AuthContext = createContext()

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const getCurrentUser = async () => {

            try {
                const user = await currentUser();
                setUser(user.data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getCurrentUser();

    }, []);
    return (
        <AuthContext.Provider
            value={{ user, setUser, loading }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
export { AuthProvider }