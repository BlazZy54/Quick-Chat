import { conversationStore } from '../ZustandStore/store'

const Header = () => {
  const {selectedConversation} = conversationStore()

  return (
    <div className='bg-gray-800/80 h-[10%] flex font-extrabold items-center gap-5 pl-5 '>
        <span className='text-gray-100'>To:</span> 
        <span className='text-gray-100'>{selectedConversation.fullName}</span>
    </div>
  )
}

export default Header