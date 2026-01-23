import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import LogoutBtn from './LogoutBtn'



const Sidebar = () => {
  return (
    <div className=' w-[25vw] relative'>
      <SearchInput/>
      <hr className='text-white/20 m-5 relative right-5 w-[20vw]'/>
      <Conversation/>

      <LogoutBtn/>
    </div>
  )
}

export default Sidebar