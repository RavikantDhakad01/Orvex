import api from "../api/axios.js";

const createWorkspace = async (data) => {
    const res = await api.post("/workspaces", data)
    return res.data
}

const getUserWorkspaces = async () => {
    const res = await api.get("/workspaces")
    return res.data
}

const getWorkspaceById = async () => {
    const res = await api.get("/workspaces/:workspaceId")
    return res.data
}

const updateWorkspace=async (data) => {
    const res = await api.patch("/workspaces/:workspaceId", data)
    return res.data
}

const deleteWorkspace = async () => {
    const res = await api.delete("/workspaces/:workspaceId")
    return res.data
}

export {
createWorkspace,
getUserWorkspaces,
getWorkspaceById,
updateWorkspace,
deleteWorkspace
}