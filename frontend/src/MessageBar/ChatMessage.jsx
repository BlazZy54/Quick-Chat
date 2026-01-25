import getTime from "../emojisandtime/getTime.js";
import useListenMessages from "../Socket/useListenMessages.js";
import { authStore, conversationStore } from "../ZustandStore/store.js";


const ChatMessage = ({msg}) => {
  const {authUser} = authStore()
  const {selectedConversation} = conversationStore()

  const fromMe = authUser._id === msg.senderId

  const calculatedTime = getTime(msg.updatedAt)

  useListenMessages()   // to get real time messages through socket id 

  const shakeClass = msg.shouldShake ? "shake" : "" //shake class

  return (
    <div className={`flex ${fromMe ? 'justify-end' : 'justify-start'} items-end gap-2 mb-3 mt-2 relative`}>
      
      <div className={`flex flex-col items-end `}>
        <div
          className={`flex flex-col`}
        >
          <span className={`px-4 py-2 rounded-2xl flex flex-col content-end
                     bg-linear-to-r ${fromMe ? 'bg-blue-500 relative right-10 rounded-br-md' : 'bg-black/50 relative left-10 rounded-bl-md'}
                     text-white text-sm max-w-xs ${shakeClass}`}>{msg.message}</span>

          <span className={`text-[10px] text-gray-400 mt-1 ${fromMe ? 'self-end relative right-10': 'relative left-10'}`}>
          {calculatedTime}
        </span>
        </div>
      </div>

     
      <img
      src={fromMe ? authUser.profilePic : selectedConversation.profilePic}
        className={`h-8 w-8 rounded-full
                   bg-white/20 border border-white/30
                   flex items-center justify-center absolute ${fromMe ? 'right-1' : 'left-1'}`}
      />
    </div>
  );
};

export default ChatMessage;

