import { authStore } from "../ZustandStore/store.js";



const ChatWelcome = () => {
  const { authUser } = authStore()
  return (

    <div
      className="text-center px-6 py-8
                   bg-white/5 backdrop-blur-md
                   rounded-xl
                   text-white w-full 
                   flex flex-col justify-center"
    >
      <h2 className="text-2xl font-semibold mb-2">
        Welcome 👋 {authUser?.fullName} 😺
      </h2>

      <p className=" text-gray-200 mb-6">
        Select a chat to start messaging
      </p>

      <div className="flex justify-center opacity-80">
        {/* Chat icon */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      </div>
    </div>

  );
};

export default ChatWelcome;
