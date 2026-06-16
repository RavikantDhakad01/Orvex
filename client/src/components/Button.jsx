function Button ({text,type,classes="bg-blue-500 text-white p-2 rounded-lg cursor-pointer text-lg"}){
    return (
        <>
        <button type={type} className={`${classes}`}>{text}</button>
        </>
    )
}
export default Button