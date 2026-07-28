import Avatar from "./Avatar.jsx"
import { EllipsisVertical } from "lucide-react"

function ProjectCard() {
  return (
    <div className="flex justify-between items-center shadow-md py-6 px-4 rounded-lg">
      <div className="flex gap-6 items-center">
        <Avatar className="rounded-full"/>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Orvex Mobile</h1>
          <p className="text-gray-600">Updated 2 days ago</p>
        </div>
      </div>
      <EllipsisVertical className="cursor-pointer"/>
    </div>
  )
}
export default ProjectCard

