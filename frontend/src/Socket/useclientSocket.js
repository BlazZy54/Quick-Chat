import { useEffect } from 'react'
import { authStore, socketStore } from '../ZustandStore/store.js'
import { io } from 'socket.io-client'

const useclientSocket = () => {
    const { authUser } = authStore()
    const {socket, setSocket, setonlineUsers} = socketStore()

    useEffect(() => {
        if (authUser) {
            //'io' is used to connect the frontend to your Socket.
            const socket1 = io('https://quick-chat-j6vv.onrender.com', {
                query: {
                    userId: authUser._id
                }
            })
            setSocket(socket1) //set a new socket server

            // socket.on() is used to listen to the events and can be used both on server side and on client side
            socket1.on("getOnlineUsers", (users) => setonlineUsers(users))


            //clean up function runs when unmounts
            return () => {
                socket1.off("getOnlineUsers");
                socket1.close()
            }

        }
        else { //else if no authUsers
            if (socket) {           //and a socket server is open
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])
}

export default useclientSocket //now import this in App.jsx