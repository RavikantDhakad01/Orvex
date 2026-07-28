import Tab from "../components/Tab.jsx"
import { ArrowLeft, EllipsisVertical, Pencil, Trash2, Users, Folder,BriefcaseBusiness,FolderOpen,UsersRound,MailOpen,ListChecks} from "lucide-react"
import { useState } from "react"
import Avatar from "../components/Avatar.jsx"
import WorkspaceOverview from "../components/WorkspaceOverview.jsx"
import EmptyStats from "../components/EmptyStats.jsx"
import Button from "../components/Button.jsx"
import Projects from "../components/projects.jsx"
import Members from "../components/Members.jsx"
import { act } from "react"
import Model from "../components/Model.jsx"
import EditModel from "../components/EditModel.jsx"
import DeleteModel from "../components/DeleteModel.jsx"

function WorkspaceDetails() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isModelOpen, setIsModelOpen] = useState(false)
  return (
    <div className="relative">

      <div className="flex justify-between ">
        <ArrowLeft size={26} className="cursor-pointer"/>
        <h1 className="font-bold text-xl">{"Orvex Team"}</h1>
        <EllipsisVertical size={26} onClick={() => setIsMenuOpen(pre => !pre)} className="cursor-pointer"/>

        {isMenuOpen && (
          <div className="absolute top-10 right-0 bg-white shadow-lg rounded-2xl flex flex-col p-4 gap-6">
            <div className="flex gap-2 items-center cursor-pointer" onClick={()=>setIsModelOpen(true)}>
              <Pencil size={22} strokeWidth={1.5} />
              <span className="text-lg ">Edit Workspace</span>
            </div>
            <div className="flex gap-2 items-center text-red-500" onClick={()=>setIsModelOpen(true)}>
              <Trash2 size={22} strokeWidth={1.5} />
              <span className="text-lg">Delete Workspace</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6"><Tab tabs={["Overview", "Projects", "Members"]} onClick={(tab) => setActiveTab(tab)} activeTab={activeTab} /></div>

 {/* <WorkspaceOverview/>   */}
 {/* <Members/>  */}
  <Projects/>
   {isModelOpen && <Model><EditModel setIsModelOpen={setIsModelOpen}/></Model>}  
    </div>

    
  )
}
export default WorkspaceDetails