import api from "../api/axios.js"

const register = async (data)=>{
    const res = await api.post("/auth/register",data)
    return res.data
}

const login = async (data)=>{
    const res= await api.post("/auth/login",data)
    return res.data
}

const currentUser = async () => {
    const res = await api.get("/auth/current-user")
    return res.data
}

const logout = async () => {
    const res= await api.post("/auth/logout")
    return res.data
}

export {
    register,
    login,
    currentUser,
    logout
}