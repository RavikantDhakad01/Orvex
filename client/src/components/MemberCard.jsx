import Avatar from "./Avatar.jsx"
import { EllipsisVertical } from "lucide-react"

function MemberCard() {
    return (
        <div className="flex gap-6 items-center rounded-lg">
            <Avatar className="rounded-full"/>
            <span className="font-bold text-lg">Ravi kumar</span>

        </div>
    )
}
export default MemberCard

