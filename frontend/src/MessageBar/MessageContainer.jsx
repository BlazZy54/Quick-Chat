import React from 'react'
import Header from './Header'
import MessageInput from './MessageInput'
import ChatSection from './ChatSection'




const MessageContainer = () => {
  return (
    <div className=' w-[60%] relative'>
        <Header/>
        <ChatSection/>
        <MessageInput/>
    </div>
  )
}

export default MessageContainer