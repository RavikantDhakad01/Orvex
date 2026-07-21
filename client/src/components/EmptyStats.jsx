function EmptyStats({ icon, heading, note, button }) {
    return (
        <div className="flex flex-col items-center gap-20 mt-14">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center bg-blue-100 w-22 h-22 rounded-full">{icon}</div>
                <div className=" flex flex-col items-center gap-1">
                    <h1 className="font-bold text-xl">{heading}</h1>
                    <p className="text-lg text-gray-800">{note}</p>
                </div>

            </div>
            {button}
        </div>
    )
}
export default EmptyStats

