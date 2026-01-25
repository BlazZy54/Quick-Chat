import React from 'react'
import SidebarContainer from '../Sidebar/SidebarContainer.jsx'
import MessageContainer from '../MessageBar/MessageContainer.jsx'
import EmptyMessageContainer from '../MessageBar/WelcomeMsgContainer.jsx'
import { conversationStore } from '../ZustandStore/store.js'

const Home = () => {
  const {selectedConversation} = conversationStore()

  return (
    <div className="h-screen flex items-center justify-center p-[5vw]">
      <div className='w-[60vw] h-[70vh] p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white flex '>
      <SidebarContainer/>
      {selectedConversation ? <MessageContainer/> :<EmptyMessageContainer/>}
      </div>
    </div>
  )
}

export default Home