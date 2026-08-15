import EmptyStats from "./EmptyStats.jsx"
import { ListTodo } from "lucide-react"
function Tasks (){
    return (
        <>
<EmptyStats icon={
              <ListTodo
                size={54}
                strokeWidth={1.25}
                className="text-blue-500"
              />
            }
            heading="No tasks yet"
            note=""/>
        </>
    )
}
export default Tasks