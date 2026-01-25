import http from "http"
// for creating a new server because Because Socket.IO needs the actual HTTP server
// Express app is not a server. It’s just a request handler function.

import express from "express"
//to create a  request handler function from which we create the server so that server knows how to handles request

import { Server } from "socket.io"
//import the socket server



const app = express()   //create a request handler function

const server = http.createServer(app)   //create a server with the request handler `app`


// now attach the Socket.io to the server by using {Server} from "socket.io" 
const io = new Server(server, {

    //add cors policy rules in Socket.io
    cors: {
        origin: ["http://localhost:5173"], // frontend url
        methods: ['GET', 'POST']
    }
})

const userSocketMap = {}   // {userId -> socketId} mapping

// This runs whenever a new client connects to your server and socket is an object which we get from this fucntion
io.on('connection', (socket) => {
    console.log(`A user connected with socket id: ${socket.id}`)



    const userId = socket.handshake.query.userId //get the id from our frontend
    if (userId) userSocketMap[userId] = socket.id // add to our Map

    //io.emit() is used to send events to all connected clients (broadcast to everyone)
    io.emit("getOnlineUsers", Object.keys(userSocketMap))       // sending userIds(as keys only) from the updatedMap under the getOnlineUsers

    //socket.on() is used to listen to the events and can be used both on server side and on client side
    socket.on('disconnect', () => {
        console.log(`User disconnected with Socket id ${socket.id}`)


        delete userSocketMap[userId]  // removing disconnected users from our Map
        io.emit("getOnlineUsers", Object.keys(userSocketMap)) // sending userIds(as keys only) from the updatedMap under the getOnlineUsers
    })
})

export { app, io, server }
//export and consume it

// function to getReceiversocketId -> after data is saved in DB we emit message specifically to this receiver SocketID if hes online
export const getReceiversocketId = (receiverId) => {
    return userSocketMap[receiverId]
}
