import React from 'react'
import SidebarContainer from '../Sidebar/SidebarContainer'
import MessageContainer from '../MessageBar/MessageContainer'
import EmptyMessageContainer from '../MessageBar/WelcomeMsgContainer'
import { conversationStore } from '../ZustandStore/store'

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