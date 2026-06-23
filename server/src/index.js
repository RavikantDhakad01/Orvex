import dotenv from "dotenv"
dotenv.config()
import connectDb from "./db/index.js"
import app from "./app.js"

const port = process.env.PORT || 3000

const serverStart = async () => {
    try {
        await connectDb()
        app.listen(port, () => {
            console.log(`Server is listening at:http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Mongodb Connection failure:", error)
        process.exit(1)
    }
}

serverStart()
