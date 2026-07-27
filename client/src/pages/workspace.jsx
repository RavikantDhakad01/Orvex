import Button from "../components/Button.jsx"
import WorkspaceCard from "../components/WorkspaceCard.jsx"
import { useState } from "react"
import Model from "../components/Model.jsx"
import CreateModel from "../components/CreateModel.jsx"
import EmptyStats from "../components/EmptyStats.jsx"
import {BriefcaseBusiness} from "lucide-react"

function Workspace() {
    const [isModelOpen, setModelOpen] = useState(false)

    return (
        <>
           
                {/* <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Workspaces</h1>
                    <Button text="+ Create" className="py-1 cursor-pointer" onClick={() => setModelOpen(true)} />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <WorkspaceCard />
                    <WorkspaceCard />
                    <WorkspaceCard />
                </div>
            
            {isModelOpen && <Model><CreateModel setModelOpen={setModelOpen}/></Model>} */}

            <EmptyStats icon={<BriefcaseBusiness size={54}
    strokeWidth={1.25} className="text-blue-500"/>} heading="No workspaces yet" note="Get started by creating your first workspace">
<Button text="+ Create Workspace" className="w-full py-4"/>
    </EmptyStats>
        </>
    )
}
export default Workspace