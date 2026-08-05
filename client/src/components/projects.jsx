import ProjectCard from "../components/ProjectCard.jsx"
import Button from "./Button.jsx"
import EmptyStats from "./EmptyStats.jsx"
import {FolderOpen} from "lucide-react"

function Projects({ className,isOwner}) {
    return (
        // <div className=" flex flex-col gap-10 mt-8">
        //     <div  className=" flex flex-col gap-4">
        //         <ProjectCard />
        //         <ProjectCard />
        //         <ProjectCard />
        //         <ProjectCard />
        //     </div>
        //     <Button text="+ Add Project" className="py-3" />
        // </div>

          <EmptyStats icon={<FolderOpen size={54}
                strokeWidth={1.25} className="text-blue-500" />} heading="No projects yet" note={isOwner ? "Get started by creating your first project" : ""}>
               {isOwner && <Button text="+ Create Project" className="w-full py-4 cursor-pointer" />}
            </EmptyStats>
    )
}
export default Projects

