function Input({ label, type, placeholder, name, id, value, onChange, frontIcon,backIcon,disabled}) {
    return (
        <>
            <div className="flex flex-col gap-1 text-lg">
                <label htmlFor={id} className="font-bold">{label}</label>

                <div className="flex gap-2 border border-gray-400 rounded-md p-2 relative">
                    <div className="cursor-pointer">{frontIcon}</div>
                    <input type={type} name={name} placeholder={placeholder} id={id} value={value} onChange={onChange} className="outline-none"/>
                    <div className="cursor-pointer absolute right-3">{backIcon}</div>
                </div>
            </div>

        </>
    )
}
export default Input