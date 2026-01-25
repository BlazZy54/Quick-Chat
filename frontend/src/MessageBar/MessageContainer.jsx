import Header from './Header.jsx'
import ChatSection from './ChatSection.jsx'
import { conversationStore } from '../ZustandStore/store.js'
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