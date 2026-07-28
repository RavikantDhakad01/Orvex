import ProjectCard from "../components/ProjectCard.jsx"
import Button from "./Button.jsx"

function Projects({ className }) {
    return (
        <div className=" flex flex-col gap-10 mt-8">
            <div  className=" flex flex-col gap-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <Button text="+ Add Project" className="py-3" />
        </div>
    )
}
export default Projects

