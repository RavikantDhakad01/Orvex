import { twMerge } from "tailwind-merge";

function Avatar({className,text,color}){
    return (
      <div className={twMerge(
                "flex justify-center items-center bg-yellow-100 text-yellow-400 rounded-md h-10 w-10 p-4",
                className
            )}>
{text}
      </div>
    )
}
export default  Avatar

