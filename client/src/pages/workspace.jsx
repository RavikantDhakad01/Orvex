import Button from "../components/Button.jsx"
import WorkspaceCard from "../components/WorkspaceCard.jsx"
import { useState } from "react"
import Model from "../components/Model.jsx"
import CreateModel from "../components/CreateModel.jsx"
function Workspace() {
    const [isModelOpen, setModelOpen] = useState(false)

    return (
        <>
           
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Workspaces</h1>
                    <Button text="+ Create" className="py-1 cursor-pointer" onClick={() => setModelOpen(true)} />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <WorkspaceCard />
                    <WorkspaceCard />
                    <WorkspaceCard />
                </div>
            
            {isModelOpen && <Model><CreateModel setModelOpen={setModelOpen}/></Model>}
        </>
    )
}
export default Workspace