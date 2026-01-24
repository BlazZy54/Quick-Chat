import React from 'react'
import { conversationStore } from '../ZustandStore/store'


const Conversation = ({conversation, emoji}) => {
  const {selectedConversation, setselectedConversation} = conversationStore()

  const isSelected = selectedConversation ? selectedConversation._id === conversation._id : false
  //handles err if theres !selectingConvo (by accessing random ._id value)
  return (
    <div className={`flex items-center justify-between gap-3 px-4 h-[6vh] w-[20vw] rounded-full backdrop-blur-md border border-white/20 text-white mb-5  ${isSelected ? `bg-blue-100` : `bg-white/10`}`}
     onClick={() => {setselectedConversation(conversation)}}
    >

      <div className="flex items-center gap-2">
        
        <img src={conversation.profilePic} 
        className={`h-10 w-10 rounded-full border  flex items-center justify-center ${isSelected ? `border-black` : `border-white/40`}`} 
        />
        <span className="h-2 w-2 rounded-full bg-green-400 relative right-5 bottom-4 border border-black/60"></span>
        <span 
        className={`text-sm font-medium ${isSelected ? `text-black` : ``}`}>
          {conversation.fullName}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
      </div>
      
    </div>
  )
}

export default Conversation