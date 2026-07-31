import { Users, Folder } from "lucide-react"
import Avatar from "./Avatar"

function WorkspaceCard({workspace}) {

    const getAvatarInitials = (name) => {
    if (!name?.trim()) return "?";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
        return words[0][0].toUpperCase();
    }

    return (words[0][0] + words[1][0]).toUpperCase();
};

    return (
        <div className="flex flex-col gap-3 shadow-md rounded-lg p-4 cursor-pointer">

         <div className="flex gap-4">
                <Avatar text={getAvatarInitials(workspace.name)}/>
            <div>
                <h2 className="font-bold text-lg">
                    {workspace.name}
                </h2>
                <p className="text-gray-600 line-clamp-2">{workspace.
description}</p>
            </div>

         </div>

         <div className="flex gap-8">
            <div className="flex gap-2 items-center"><Users strokeWidth={1.5} size={18}/> <p>{`${4} members`}</p></div>
            <div className="flex gap-2 items-center"><Folder strokeWidth={1.5} size={18}/> <p>{`${4} projects`}</p></div>   
        </div>

         </div>
    )
}
export default WorkspaceCard
 