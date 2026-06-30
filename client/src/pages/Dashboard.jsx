import useAuth from "../hooks/useAuth.jsx"
function Dashboard() {
const {user} = useAuth()
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl">Welcome to Orvex 🚀</h1>
                <h3 className="font-semibold text-lg">Hello, { user?.username}👋</h3>
            </div>
        </>
    )
}

export default Dashboard