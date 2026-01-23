import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-800/80 h-[10%] flex font-extrabold items-center gap-5 pl-5'>
        <span className='text-gray-300'>To:</span> 
        <span className='text-black/70'>John doe</span>
    </div>
  )
}

export default Header