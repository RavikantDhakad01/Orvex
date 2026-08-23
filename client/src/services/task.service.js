import api from "../api/axios.js";

const createTask = async (data, projectId) => {
    const res = await api.post(`/tasks/projects/${projectId}/tasks`, data)
    return res.data
}

const getUserTasks = async () => {
    const res = await api.get("/tasks/user")
    return res.data
}

const getTaskById = async (taskId) => {
    const res = await api.get(`/tasks/${taskId}`)
    return res.data
}

const updateTask = async (data, taskId) => {
    const res = await api.patch(`/tasks/${taskId}`, data)
    return res.data
}

const deleteTask = async (taskId) => {
    const res = await api.delete(`/tasks/${taskId}`)
    return res.data
}

export {
    createTask,
    getUserTasks,
    getTaskById,
    updateTask,
    deleteTask
}