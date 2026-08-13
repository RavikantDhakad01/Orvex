import api from "../api/axios.js";

const createProject = async (data,workspaceId) => {
    const res = await api.post(`/projects/workspaces/${workspaceId}/projects`, data)
    return res.data
}

const getUserProjects = async () => {
    const res = await api.get("/projects")
    return res.data
}

const getProjectById = async (projectId) => {
    const res = await api.get(`/projects/${projectId}`)
    return res.data
}

const updateProject = async (data, projectId) => {
    const res = await api.patch(`/projects/${projectId}`, data)
    return res.data
}

const deleteProject = async (projectId) => {
    const res = await api.delete(`/projects/${projectId}`)
    return res.data
}

export {
    createProject,
    getUserProjects,
    getProjectById,
    updateProject,
    deleteProject
}