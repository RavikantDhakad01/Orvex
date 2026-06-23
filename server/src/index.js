import dotenv from "dotenv"
dotenv.config()
import connectDb from "./db/index.js"

const serverStart = async () => {
    try {
        await connectDb()

    } catch (error) {
        console.log("Mongodb Connection failure:", error)
        process.exit(1)
    }
}

serverStart()
