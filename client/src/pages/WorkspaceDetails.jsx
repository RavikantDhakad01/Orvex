import Tab from "../components/Tab.jsx"
import { ArrowLeft, EllipsisVertical, Pencil, Trash2, Users, ListChecks } from "lucide-react"
import { useState, useEffect } from "react"
import Avatar from "../components/Avatar.jsx"
import WorkspaceOverview from "../components/WorkspaceOverview.jsx"
import EmptyStats from "../components/EmptyStats.jsx"
import Button from "../components/Button.jsx"
import Projects from "../components/projects.jsx"
import Members from "../components/Members.jsx"
import { act } from "react"
import Model from "../components/Model.jsx"
import EditWorkspaceModel from "../components/EditWorkspaceModel.jsx"
import DeleteModel from "../components/DeleteModel.jsx"
import InviteModel from "../components/InviteModel.jsx"
import { useNavigate, useParams } from "react-router-dom";
import { getWorkspaceById } from "../services/workspace.services.js"
import useAuth from "../hooks/useAuth.jsx"
import Loader from "../components/Loader.jsx"
import toast from "react-hot-toast"
import {deleteWorkspace} from "../services/workspace.services.js"

function WorkspaceDetails() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEditModelOpen, setIsEditModelOpen] = useState(false)
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false)
  const { user } = useAuth()
  const [workspaceData, setWorkspaceData] = useState(null)
  const navigate = useNavigate()
  const { workspaceId } = useParams();
  const isOwner = user._id.toString() === workspaceData?.workspace?.owner?._id.toString()

  const fetchWorkspaceDetails = async () => {

    try {
      const response = await getWorkspaceById(workspaceId);
      setWorkspaceData(response.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong. Please refresh");
      } else if (error.request) {
        toast.error("Please check your internet connection");
      } else {
        toast.error("Something went wrong. Please refresh");
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchWorkspaceDetails();

  }, [workspaceId]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="relative">

      <div className="flex justify-between">
        <ArrowLeft size={26} className="cursor-pointer" onClick={() => { navigate("/workspace") }} />
        <h1 className="font-bold text-xl">{workspaceData?.workspace?.name}</h1>
        <div className="w-6">
          {isOwner && <EllipsisVertical size={26} onClick={() => setIsMenuOpen(pre => !pre)} className="cursor-pointer" />}
        </div>


        {isMenuOpen && (
          <div className="absolute top-10 right-0 bg-white shadow-lg rounded-2xl flex flex-col p-4 gap-6">
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => {
              setIsEditModelOpen(true)
            }}>
              <Pencil size={22} strokeWidth={1.5} />
              <span className="text-lg ">Edit Workspace</span>
            </div>
            <div className="flex gap-2 items-center text-red-500 cursor-pointer" onClick={() => {
              setIsDeleteModelOpen(true)
            }}>
              <Trash2 size={22} strokeWidth={1.5} />
              <span className="text-lg">Delete Workspace</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6"><Tab tabs={["Overview", "Projects", "Members"]} onClick={(tab) => setActiveTab(tab)} activeTab={activeTab} /></div>

      <div onClick={() => setIsMenuOpen(false)}>
        {activeTab === "Overview" && (<WorkspaceOverview workspaceData={workspaceData} />)}
        {activeTab === "Projects" && (<Projects isOwner={isOwner} projects={workspaceData.projects}/>)}
        {activeTab === "Members" && (<Members isOwner={isOwner} workspaceData={workspaceData} />)}
      </div>


      {isEditModelOpen && <Model><EditWorkspaceModel setIsEditModelOpen={setIsEditModelOpen} workspace={workspaceData.workspace} fetchWorkspaceDetails={fetchWorkspaceDetails} setIsMenuOpen={setIsMenuOpen}/></Model>}

      {isDeleteModelOpen && <Model><DeleteModel setIsDeleteModelOpen={setIsDeleteModelOpen} title="Delete Workspace ?" id={workspaceData.workspace._id} onSuccess={()=>navigate("/workspace")} deleteService={deleteWorkspace}/></Model>}
    </div>


  )
}
export default WorkspaceDetails