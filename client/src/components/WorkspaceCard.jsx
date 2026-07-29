import { Users, Folder } from "lucide-react"
import Avatar from "./Avatar"
function WorkspaceCard() {
    return (
        <div className="flex flex-col gap-3 shadow-md rounded-lg p-4 cursor-pointer">

         <div className="flex gap-4">
                <Avatar />
            <div>
                <h2 className="font-bold text-lg">
                    {"Orvex Team"}
                </h2>
                <p className="text-gray-600 line-clamp-2">{"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, deleniti?"}</p>
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
 