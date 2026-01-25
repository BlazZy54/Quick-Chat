import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useGetConversation from '../Hooks/useGetConversation.js';
import { conversationStore } from '../ZustandStore/store.js';
import toast from 'react-hot-toast'



const SearchInput = () => {

  const [input, setInput] = useState()

  const {conversations} = useGetConversation()  //loading too
  const {selectedConversation, setselectedConversation} = conversationStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!input) return

    const founded = conversations.find((conversation) =>  conversation.fullName.toLowerCase().includes(input.toLowerCase()))
    if(!founded) toast.error('No such user exist')

    setselectedConversation(founded)
  }
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>

      <div className="flex items-center px-4 h-11 w-80 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none placeholder-gray-300 text-sm"
          value={input} onChange={e => setInput(e.target.value)}
        />
      </div>

  
      <button className="h-11 w-11 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition border border-black"
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchInput