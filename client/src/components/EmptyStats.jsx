function EmptyStats({ icon, heading, note, button,children}) {
    return (
        <div className="flex flex-col items-center gap-16  pt-20">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center bg-blue-100 w-24 h-24 rounded-full">{icon}</div>
                <div className=" flex flex-col items-center gap-1">
                    <h1 className="font-bold text-xl">{heading}</h1>
                    <p className="text-lg text-gray-600 text-center max-w-xs">{note}</p>
                </div>

            </div>
            {children}
        </div>
    )
}
export default EmptyStats

