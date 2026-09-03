import Avatar from './Avatar.jsx';
import OwnerBadge from './OwnerBadge.jsx';
function MemberCard({ member, isMemberOwner }) {
  return (
    <div className="flex justify-between items-center rounded-lg shadow-md p-4">
      <div className="flex items-center gap-4">
        <Avatar
          className="rounded-full"
          name={member.username}
          color={member.avatarColor}
        />
        <div>
          <span className="font-semibold text-lg">{member.username}</span>

          <p className="text-base text-gray-500">{member.email}</p>
        </div>
      </div>
      {isMemberOwner && <OwnerBadge />}
    </div>
  );
}
export default MemberCard;
