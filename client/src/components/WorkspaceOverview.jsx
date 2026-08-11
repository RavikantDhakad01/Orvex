import { Users, Folder } from "lucide-react"
import Avatar from "./Avatar"
import OwnerBadge from "../components/OwnerBadge.jsx"
import {formatDate} from "../utils/formatDate.js"

function WorkspaceOverview({ workspaceData }) {
    return (
        <div className="flex flex-col mt-4 gap-8">
            {workspaceData.workspace.description !== "" && <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-gray-700">Description</span>
                <p className="text-lg">{workspaceData.workspace.description}</p>
            </div>}

            <div className="flex flex-col gap-8 md:flex-row md:justify-around">
                 <div className="flex justify-center gap-4 mt-8">
                <div className="flex flex-col shadow-lg rounded-lg px-10 py-4 items-center gap-2"><Folder /> <span>Projects</span> <span>{workspaceData.projects.length}</span>
                </div>
                <div className="flex flex-col shadow-lg rounded-lg  w-36 py-4 items-center gap-2"><Users /> <span>Members</span> <span>{workspaceData.members.length}</span></div>
            </div>
            <div className="shadow-lg p-8 rounded-lg">
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-lg">Created by</span>
                    <div className="flex gap-10">
                        <div className="flex items-center gap-4">
                            <Avatar className="rounded-full" name={workspaceData.workspace.owner.username} color={workspaceData.workspace.owner.avatarColor} />
                            <span className="font-bold text-lg">{workspaceData.workspace.owner.username}</span>
                        </div>
                        <OwnerBadge />
                    </div>
                </div>
                <div className="flex flex-col mt-4 font-bold text-lg gap-1">
                    <span >Created on</span>
                    <span>{formatDate(workspaceData.workspace.createdAt)}</span>
                </div>
            </div>
            </div>
           
        </div>


    )
}
export default WorkspaceOverview