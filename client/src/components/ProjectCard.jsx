import Avatar from "./Avatar.jsx"
import { EllipsisVertical } from "lucide-react"
import {getTimeAgo} from "../utils/getTimeAgo.js"

function ProjectCard({project}) {
  return (
    <div className="flex justify-between items-center shadow-md py-6 px-4 rounded-lg">
      <div className="flex gap-6 items-center">
        <Avatar className="rounded-full" name={project.name} color={project.avatarColor}/>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{project.name}</h1>
          <p className="text-gray-600">{getTimeAgo(project.updatedAt)}</p>
        </div>
      </div>
      <EllipsisVertical className="cursor-pointer"/>
    </div>
  )
}
export default ProjectCard

