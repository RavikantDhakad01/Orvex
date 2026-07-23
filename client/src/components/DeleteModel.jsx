import { useState } from "react"
import Button from "./Button.jsx"
import {Trash2} from "lucide-react"

function DeleteModel({ setIsModelOpen }) {
    const [name, setName] = useState("Over Team")
   const [description, setDescription] = useState("sjdj nasjf jansjnj bajj")
    return (
        <>
          <div className="flex flex-col items-center gap-20 mt-14">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center bg-red-100 w-22 h-22 rounded-full text-red-600">{<Trash2/>}</div>
                <div className=" flex flex-col items-center gap-1">
                    <h1 className="font-bold text-xl">{"Delete Workspace?"}</h1>
                    <p className="text-lg text-gray-800">{"This action cannot be undone."}</p>
                </div>

            </div>

           <div className="flex flex-col gap-4 w-full">
            <Button text="Delete Workspace" className="bg-red-600 py-3 "/>
             <Button text="Cancel" className="text-black border border-gray-600 bg-white py-3"/>
           </div>
        </div>

        </>
    )
}
export default DeleteModel