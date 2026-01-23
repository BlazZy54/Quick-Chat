import React from 'react'
import { BsFillSendFill } from "react-icons/bs";




const MessageInput = () => {
  return (
    <>
    <div className='absolute bottom-0 border border-amber-50 flex content-center 
     h-[7%] w-[90%] ml-8 justify-between pr-3'>
        <input className='p-2 w-full bg-transparent outline-none placeholder-gray-300 text-sm'
         placeholder='Send a Message'
        />
    </div>
    <BsFillSendFill className='absolute bottom-3 right-11 '/>
    </>
  )
}

export default MessageInput