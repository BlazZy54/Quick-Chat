import React, { useRef } from 'react'
import ChatMessage from './ChatMessage.jsx'
import MessageInput from './MessageInput.jsx'
import useGetMessages from '../Hooks/useGetMessages.js'
import ChatSkeleton from "./ChatSkeleton.jsx"
import { useEffect } from 'react'

const ChatSection = () => {
  const { loading, messages } = useGetMessages() //
  const bottomRef = useRef()
  
  useEffect(() => {                           // 3 changes
  bottomRef.current?.scrollIntoView();
}, [messages]);

  return (
    <div className='w-full  h-[96%] backdrop-blur-md relative flex flex-col'>
      <div className=' h-[91%] overflow-auto'>
        {loading ? <ChatSkeleton /> :
          messages.length == 0 ?
            <h1 className='text-center mt-2 text-white/90'>Send a message to start a conversation</h1>
            :
            messages.map((msg) => {
              return(
                <div key={msg._id} ref={bottomRef}>  
                  <ChatMessage msg={msg}/>
                </div>
              )
            })
        }
      </div>
      <MessageInput />
    </div>
  )
}

export default ChatSection


