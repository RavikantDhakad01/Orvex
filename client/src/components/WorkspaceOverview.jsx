import { Users, Folder } from "lucide-react"
import Avatar from "./Avatar"

function WorkspaceOverview() {
    return (
        <div className="flex flex-col mt-4 gap-8">
            <div>
 <span className="text-xl font-bold">description</span>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciun accusantium alias adipisci!</p>
            </div>     
            <div className="flex justify-center gap-4">
                <div className="flex flex-col shadow-lg rounded-lg px-10 py-4 items-center gap-2"><Folder /> <span>Projects</span> <span>2</span>
                </div>
                <div className="flex flex-col shadow-lg rounded-lg  px-10 py-4 items-center gap-2"><Users /> <span>Members</span> <span>8</span></div>
            </div>
            <div>
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-lg">Created by</span>
                    <div className="flex gap-6 items-center">
                        <Avatar className="rounded-full"/>
                        <span className="font-bold text-base">Ravi</span>
                        <span className="bg-yellow-100 text-yellow-400 rounded-lg py-1 px-2">Owner</span>
                    </div>
                </div>
                <div className="flex flex-col mt-4 font-bold text-lg gap-1">
                    <span >Created on</span>
                    <span>{"20 jun 2026"}</span>
                </div>
            </div>
        </div>
    )
}
export default WorkspaceOverview