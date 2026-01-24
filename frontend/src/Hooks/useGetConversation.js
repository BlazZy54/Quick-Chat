import { useEffect, useState } from "react"
import toast from 'react-hot-toast'

const useGetConversation = () => {
    const [loading, setloading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(()=>{                           
        const getConversation = async () => {          
            setloading(true)
            try{
                const res = await fetch('/api/user/getUsersforSidebar')
                const data = await res.json()

                if(data.error) throw new Error(data.error)
                
                setConversations(data)
            }
            catch(error){
                toast.error(error.message)
            }
            finally{
                setloading(false)
            }
        }
        getConversation()

    }, [])

    return {loading, conversations}
}

export default useGetConversation