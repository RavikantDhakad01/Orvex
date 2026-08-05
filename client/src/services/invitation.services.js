import api from "../api/axios.js";

const inviteMember = async (data,workspaceId) => {
    const res = await api.post(`/invitations/workspace/${workspaceId}`, data)
    return res.data
}

const getUserInvitations = async () => {
    const res = await api.get("/invitations")
    return res.data
}

const acceptInvitation = async (data) => {
    const res = await api.patch("/invitations/:invitationId", data)
    return res.data
}

const rejectInvitation = async () => {
    const res = await api.delete("/invitations/:invitationId")
    return res.data
}


export {
    inviteMember,
    getUserInvitations,
    acceptInvitation,
    rejectInvitation
}