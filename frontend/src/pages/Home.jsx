import React from 'react'
import SearchInput from '../Sidebar/SearchInput'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center p-[5vw]">
      <div className='w-[60vw] h-[70vh] p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white flex '>
      <Sidebar/>
      </div>
    </div>
  )
}

export default Home