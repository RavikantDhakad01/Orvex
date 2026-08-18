import Avatar from "./Avatar.jsx"
import {getTimeAgo} from "../utils/getTimeAgo.js"
import { useNavigate } from "react-router-dom"
import { ListTodo } from "lucide-react"
function ProjectCard({project,showWorkspace,showTask,taskCount=0,workspaceName}) {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col justify-center shadow-md py-5 px-4 rounded-lg cursor-pointer gap-4" onClick={()=>navigate(`/project/${project._id}`)}>
      <div className="flex gap-6 items-start">
        <Avatar className="rounded-lg p-4" name={project.name} color={project.avatarColor}/>
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <h2 className="font-bold text-lg">{project.name}</h2>
          {showWorkspace &&(<>
          <p className="font-bold text-gray-600">Workspace: {workspaceName}</p>
          <p className="text-gray-600 truncate">{project.description}</p>
          </>)}
        </div>
      </div>
      <div className="flex justify-between">
        {showTask && (<div className="flex gap-1"><ListTodo strokeWidth={1.25}/><span className="text-gray-600">{`${taskCount} Tasks`}</span></div>)}
        <p className="text-gray-600">Updated {getTimeAgo(project.updatedAt)}</p>
      </div>
    </div>
  )
}
export default ProjectCard

