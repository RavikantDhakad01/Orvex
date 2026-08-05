import { Users, Folder } from "lucide-react"
import Avatar from "./Avatar"

function WorkspaceCard({ workspaceDetails,onClick }) {

    return (
        <div className="flex flex-col gap-3 shadow-md rounded-lg p-4 cursor-pointer" onClick={onClick}>

            <div className="flex gap-4">
                <Avatar name={workspaceDetails.workspace.name} color={workspaceDetails.workspace. avatarColor}/>
                <div>
                    <h2 className="font-bold text-lg">
                        {workspaceDetails.workspace.name}
                    </h2>
                    <p className="text-gray-600 line-clamp-2">{workspaceDetails.workspace.
                        description}</p>
                </div>

            </div>

            <div className="flex gap-8">
                <div className="flex gap-2 items-center"><Folder strokeWidth={1.5} size={18} /> <p>{`${0} projects`}</p></div>
                <div className="flex gap-2 items-center"><Users strokeWidth={1.5} size={18} /> <p>{`${workspaceDetails.
                    memberCount} members`}</p></div>
            </div>

        </div>
    )
}
export default WorkspaceCard
