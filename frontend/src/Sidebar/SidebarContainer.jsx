import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import LogoutBtn from './LogoutBtn'
import useGetConversation from '../Hooks/useGetConversation'
import getRandomActivityEmoji from '../emojisandtime/getEmojis.js'



const Sidebar = () => {
  const {loading, conversations} = useGetConversation()
  
  return (
    <div className=' w-[21vw] relative mr-9'>
      <SearchInput />
      <hr className='text-white/20 m-5 relative right-5 w-[20vw]' />

      <div className='overflow-auto h-[53vh]'>
        {loading ? <div className='text-center mt-20'> Loading Chats...</div> :

         (conversations).map((conversation)=>{
          return (<Conversation key={conversation._id} conversation={conversation} emoji={getRandomActivityEmoji(conversation._id)}/>)
         })
        }
      </div>

      <span className='relative top-10 right-2'>
        <LogoutBtn />
      </span>
    </div>
  )
}

export default Sidebar