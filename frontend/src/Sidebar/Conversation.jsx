import React from 'react'

const Conversation = () => {
  return (
    <div className="flex items-center justify-between gap-3 px-4 h-[6vh] w-[20vw] rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-5">

      <div className="flex items-center gap-2">
        
        <img src='https://api.dicebear.com/7.x/bottts/svg?seed=557' className='h-10 w-10 rounded-full border border-white/40 flex items-center justify-center' />
        <span className="h-2 w-2 rounded-full bg-green-400 relative right-4 bottom-5 border border-black/60"></span>
        <span className="text-sm font-medium">John Doe</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">🎃</span>
      </div>
      
    </div>
  )
}

export default Conversation