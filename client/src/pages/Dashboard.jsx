import useAuth from "../hooks/useAuth.jsx"
function Dashboard() {
const {user} = useAuth()
    return (
        <>
            <div className="flex justify-center items-center text-xl text-gray-600">
                comming soon...
            </div>
        </>
    )
}

export default Dashboard