import express from "express"
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import { connToDB } from "./DBconfig/connectTomongoDB.js"

const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()
app.use(express.json()) //to parse incoming requests from JSON payloads and get json data in req.body


//from auth routes : middleware that handles routes
app.use('/api/auth',authRoutes)






app.listen(PORT, () => {
    connToDB()
    console.log("Server running on http://localhost:" + PORT)
})