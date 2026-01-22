import { connToDB } from "./DBconfig/connectTomongoDB.js"

import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()
app.use(express.json()) //to parse incoming requests from JSON payloads and get json data in req.body
app.use(cookieParser()) //reads cookies from incoming HTTP requests and makes them available as req.cookies.

//middlewares that handles routes
app.use('/api/auth',authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/user', userRoutes)



app.listen(PORT, () => {
    connToDB()
    console.log("Server running on http://localhost:" + PORT)
})