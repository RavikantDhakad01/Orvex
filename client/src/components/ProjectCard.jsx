import Avatar from "./Avatar.jsx"
import { EllipsisVertical } from "lucide-react"
import {getTimeAgo} from "../utils/getTimeAgo.js"
import { useNavigate } from "react-router-dom"

function ProjectCard({project}) {
  const navigate=useNavigate()
  return (
    <div className="flex justify-between items-center shadow-md py-6 px-4 rounded-lg cursor-pointer" onClick={()=>navigate(`/project/${project._id}`)}>
      <div className="flex gap-6 items-center">
        <Avatar className="rounded-full" name={project.name} color={project.avatarColor}/>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{project.name}</h1>
          <p className="text-gray-600">Updated {getTimeAgo(project.updatedAt)}</p>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard

