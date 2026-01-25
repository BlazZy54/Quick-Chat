import { connToDB } from "./DBconfig/connectTomongoDB.js"

import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import verifycookieRoutes from "./routes/verifycookie.routes.js"

import { server, app } from './socket/socket.js'

// const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()
app.use(express.json()) //to parse incoming requests from JSON payloads and get json data in req.body
app.use(cookieParser()) //reads cookies from incoming HTTP requests and makes them available as req.cookies.

//middlewares that handles routes
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/user', userRoutes)
app.use('/api/verifycookie', verifycookieRoutes)


//DEPLOYMENT
import path from "path"
const __dirname = path.resolve() //root directory

//express.static to serve static files publically
app.use(express.static(path.join(__dirname, "/frontend/dist")))  //middleware

if (process.env.NODE_ENV == 'deployment') {
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname, "frontend", "dist", "index.html")      //serve the builded frontend files
    })
}


server.listen(PORT, () => {
    connToDB()
    console.log("Server running on http://localhost:" + PORT)
})