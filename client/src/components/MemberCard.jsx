import Avatar from "./Avatar.jsx"
import { EllipsisVertical } from "lucide-react"
import OwnerBadge from "./OwnerBadge.jsx"
function MemberCard({ member, isOwner }) {
    return (
        <div className="flex gap-6 items-center rounded-lg">
            <Avatar className="rounded-full" name={member.username} color={member.avatarColor} />
            <span className="font-bold text-lg">{member.username}</span>
           {isOwner && <OwnerBadge />}
        </div>
    )
}
export default MemberCard

