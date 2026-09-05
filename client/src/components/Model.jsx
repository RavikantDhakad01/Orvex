function Model({children}) {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-xl p-6 w-[90%] max-w-md">
               {children}
            </div>
        </div>
    )
}

export default Model