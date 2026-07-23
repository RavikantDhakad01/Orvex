import MemberCard from "./MemberCard.jsx"
import Button from "./Button.jsx"

function Members(){
    return (
      <div className=" flex flex-col gap-10 mt-8">
            <div  className=" flex flex-col gap-8">
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
            <Button text="+ Invite Member" />
        </div>
    )
}
export default  Members

