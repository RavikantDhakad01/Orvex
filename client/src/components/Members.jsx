import MemberCard from './MemberCard.jsx';
import Button from './Button.jsx';
import { useState } from 'react';
import InviteModel from '../components/InviteModel.jsx';
import Model from './Model.jsx';
import { Users } from 'lucide-react';

function Members({ isOwner, workspaceData }) {
  const [isInviteModelOpen, setIsInviteModelOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-6 mt-6 px-1">
        {isOwner && (
          <div className="flex justify-between items-center px-3">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-full">
                <Users strokeWidth={1.25} size={18} />
              </div>

              <span>{workspaceData.members.length} Members</span>
            </div>
            <Button
              text="+ Invite"
              onClick={() => setIsInviteModelOpen(true)}
              className="cursor-pointer p-1"
            />
          </div>
        )}
        <div className=" flex flex-col gap-5">
          {workspaceData.members.map((member) => (
            <MemberCard
              key={member._id}
              member={member.user}
              isMemberOwner={
                member.user._id.toString() ===
                workspaceData.workspace.owner._id.toString()
              }
            />
          ))}
        </div>
      </div>
      {isInviteModelOpen && (
        <Model>
          <InviteModel setIsInviteModelOpen={setIsInviteModelOpen} />
        </Model>
      )}
    </>
  );
}
export default Members;
