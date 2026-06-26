
import { Link } from "react-router-dom";

function LandingPage(){
return (
    <>
    <div className="flex gap-4">
        <Link to="/login" className=" text-white bg-blue-500">login</Link>
     <Link to="/signup" className=" text-white bg-blue-500">signup</Link>
    </div>
    </>
)
}

export default LandingPage