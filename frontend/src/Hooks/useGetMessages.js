import { useState } from "react"
import { conversationStore } from "../ZustandStore/store"
import { useEffect } from "react"
import toast from "react-hot-toast"


const useGetMessages = () => {
    const [loading, setloading] = useState(false)
    const {selectedConversation, messages, setMessages} = conversationStore()

    useEffect(()=>{
        setloading(true)
        const getMessage = async () => {
            try{
                const res = await fetch(`/api/messages/${selectedConversation._id}`)
                const data = await res.json()

                setMessages(data)
            }
            catch(err){
                toast.error(err.message)
            }
            finally{
                setloading(false)
            }
        }

        if(selectedConversation?._id) getMessage()
    }, [selectedConversation?._id, setMessages])

    return {loading, messages}
}

export default useGetMessages