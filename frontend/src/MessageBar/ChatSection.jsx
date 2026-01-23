import React from 'react'
import ChatMessage from './ChatMessage'



const ChatSection = () => {
  return (
    <div className='w-full  h-[94%] backdrop-blur-md relative flex flex-col'>
      <div className=' h-[88%] overflow-auto'>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      </div>
    </div>
  )
}

export default ChatSection