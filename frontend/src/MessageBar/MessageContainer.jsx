import Header from './Header'
import ChatSection from './ChatSection'
import { conversationStore } from '../ZustandStore/store'
import { useEffect } from 'react'




const MessageContainer = () => {
  const {setselectedConversation} = conversationStore()

  useEffect(()=>{
    return () => setselectedConversation(null) //when unmounts set it to null so that theres no selected convo when login again
  },[])

  return (
    <div className=' w-[60%] h-[95%] relative'>
        <Header/>
        <ChatSection/>
    </div>
  )
}

export default MessageContainer