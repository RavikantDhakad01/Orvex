import { twMerge } from "tailwind-merge";
function Button ({text,type,disabled=false,onClick,className=""}){
    return (
        <>
        <button type={type} className={twMerge(
                "bg-blue-500 text-white p-2 rounded-lg text-lg",
                className
            )}
            disabled={disabled} onClick={onClick}>{text}</button>
        </>
    )
}
export default Button
