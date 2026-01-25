
import { conversationStore, socketStore } from '../ZustandStore/store.js'
import { useEffect } from 'react'
import noti_sound from "../sounds/noti_sound.mp3"

const useListenMessages = () => {
    const { socket, setSocket } = socketStore()
    const { messages, setMessages } = conversationStore()

    useEffect(() => {
        if (!socket) return;

        //chatgpt
        const handler = (new_msg) => {
            setMessages((prev) => [...prev, new_msg]);
            const sound = new Audio(noti_sound);
            sound.volume = 0.005;
            sound.play();
        };

        socket.on("NewMessage", handler);

        return () => socket.off("NewMessage", handler);
    }, [socket]);


}

export default useListenMessages



//og -> 
// useEffect(() => {
//     // socket.on() is used to listen to the events and can be used both on server side and on client side
//     socket?.on("NewMessage", (new_msg) => {
//         setMessages([...messages, new_msg])
//         new_msg.shouldShake = true
//         const sound = new Audio(noti_sound)
//         sound.volume = 0.005;
//         sound.play()
//     })

//     //cleanup function
//     return () => socket?.off("NewMessage")  //important
// }, [socket, setMessages])