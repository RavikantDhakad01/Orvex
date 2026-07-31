import Button from "../components/Button.jsx"
import WorkspaceCard from "../components/WorkspaceCard.jsx"
import { useState, useEffect } from "react"
import Model from "../components/Model.jsx"
import CreateModel from "../components/CreateModel.jsx"
import EmptyStats from "../components/EmptyStats.jsx"
import { BriefcaseBusiness } from "lucide-react"
import { getUserWorkspaces, createWorkspace } from "../services/workspace.services.js"
import toast from "react-hot-toast";
import Loader from "../components/Loader.jsx"

function Workspace() {
    const [isModelOpen, setModelOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [workspaces, setWorkspaces] = useState([])


    useEffect(() => {

        const fetchWorkspaces = async () => {

            try {
                const workspaces = await getUserWorkspaces();
                setWorkspaces(workspaces.data);
                console.log(workspaces.data)
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
                console.log("finally")
            }
        };

        fetchWorkspaces();

    }, []);

    if (loading) {
        return <Loader/>;
    }
    return (
        <>
            {
                workspaces.length > 0 ? (
                    <>
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">Workspaces</h1>
                            <Button text="+ Create" className="py-1 cursor-pointer" onClick={() => setModelOpen(true)} />
                        </div>

                        <div className="flex flex-col gap-4 mt-6">

                            {workspaces.map((w) => <WorkspaceCard workspace={w.workspace} key={w._id} />)}

                        </div>
                    </>) : (<>
                        <EmptyStats icon={<BriefcaseBusiness size={54}
                            strokeWidth={1.25} className="text-blue-500" />} heading="No workspaces yet" note="Get started by creating your first workspace">
                            <Button text="+ Create Workspace" className="w-full py-4 cursor-pointer" onClick={() => setModelOpen(true)} />
                        </EmptyStats>
                    </>)
            }
            {isModelOpen && <Model><CreateModel setModelOpen={setModelOpen} /></Model>}
        </>
    )
}
export default Workspace