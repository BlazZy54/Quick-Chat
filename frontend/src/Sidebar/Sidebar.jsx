import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'



const Sidebar = () => {
  return (
    <div className=' w-[25vw]'>
      <SearchInput/>
      <hr className='text-white/20 m-5 relative right-5 w-[20vw]'/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default Sidebar