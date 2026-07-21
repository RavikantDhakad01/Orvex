import { twMerge } from "tailwind-merge";

function Avatar({className}){
    return (
      <div className={twMerge(
                "flex justify-center items-center bg-yellow-100 text-yellow-400 rounded-md h-10 w-10 p-4",
                className
            )}>
R
      </div>
    )
}
export default  Avatar

