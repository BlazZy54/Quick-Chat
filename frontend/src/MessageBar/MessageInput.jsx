import React, { useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";
import useSendMessage from '../Hooks/useSendMessage';




const MessageInput = () => {
  const [message, setMessage] = useState('')

  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(message === '') return
    
    await sendMessage(message)
    setMessage('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='absolute bottom-2 border border-amber-50 flex content-center 
     h-[7%] w-[90%] ml-8 justify-between pr-3'>
        <input className='p-2 w-full bg-transparent outline-none placeholder-gray-300 text-sm'
          placeholder='Send a Message'
          value={message} onChange={e => setMessage(e.target.value)}
        />
      </div>

      <button className='absolute bottom-5 right-11 '>
        {!loading ? <BsFillSendFill /> :

          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <style>{`.spinner_P7sC {transform-origin: center; animation: spinner_svv2 .75s infinite linear;}@keyframes spinner_svv2 {100% { transform: rotate(360deg); }}`}</style>
            <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" className="spinner_P7sC" />
          </svg>}
      </button>
    </form>
  )
}

export default MessageInput