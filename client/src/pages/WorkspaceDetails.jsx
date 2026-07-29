import Tab from "../components/Tab.jsx"
import { ArrowLeft, EllipsisVertical, Pencil, Trash2, Users,ListChecks} from "lucide-react"
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
import InviteModel from "../components/InviteModel.jsx"
import { useNavigate } from "react-router-dom";

function WorkspaceDetails() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isEditModelOpen, setIsEditModelOpen] = useState(false)
   const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false)
   const navigate = useNavigate()
  return (
    <div className="relative">

      <div className="flex justify-between ">
        <ArrowLeft size={26} className="cursor-pointer" onClick={()=>{navigate("/workspace")}}/>
        <h1 className="font-bold text-xl">{"Orvex Team"}</h1>
        <EllipsisVertical size={26} onClick={() => setIsMenuOpen(pre => !pre)} className="cursor-pointer"/>

        {isMenuOpen && (
          <div className="absolute top-10 right-0 bg-white shadow-lg rounded-2xl flex flex-col p-4 gap-6">
            <div className="flex gap-2 items-center cursor-pointer"  onClick={()=>{setIsEditModelOpen(true)
              }}>
              <Pencil size={22} strokeWidth={1.5}/>
              <span className="text-lg ">Edit Workspace</span>
            </div>
            <div className="flex gap-2 items-center text-red-500 cursor-pointer" onClick={()=>{setIsDeleteModelOpen(true)
              }}>
              <Trash2 size={22} strokeWidth={1.5} />
              <span className="text-lg">Delete Workspace</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6"><Tab tabs={["Overview", "Projects", "Members"]} onClick={(tab) => setActiveTab(tab)} activeTab={activeTab} /></div>


  {activeTab==="Overview"&& (<WorkspaceOverview/> )}
  {activeTab==="Projects"&& (<Projects/> )}
  {activeTab==="Members"&& (<Members/> )}

   {isEditModelOpen && <Model><EditModel setIsEditModelOpen={setIsEditModelOpen}/></Model>}  
   {isDeleteModelOpen && <Model><DeleteModel setIsDeleteModelOpen={setIsDeleteModelOpen}/></Model>}  
    </div>

    
  )
}
export default WorkspaceDetails