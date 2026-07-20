import Button from "../components/Button.jsx"
import WorkspaceCard from "../components/WorkspaceCard.jsx"
function Workspace(){
    return (
        <>
        <div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Workspaces</h1>
<Button text="+ Create" className="py-1 cursor-pointer"/>
            </div>

            <div className="flex flex-col gap-4 mt-6">
<WorkspaceCard/>
<WorkspaceCard/>
<WorkspaceCard/>
            </div>
        </div>
        </> 
    )
}
export default  Workspace