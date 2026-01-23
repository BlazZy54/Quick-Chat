const SentMessage = () => {
  return (
    <div className="flex justify-end items-end gap-2 mb-3">
      {/* Message bubble */}
      <div className="flex flex-col items-end">
        <div
          className="px-4 py-2 rounded-2xl rounded-br-md
                     bg-gradient-to-r from-blue-500 to-sky-400
                     text-white text-sm max-w-xs"
        >
          Hi! What is upp?
        </div>

        {/* Time */}
        <span className="text-[10px] text-gray-400 mt-1">
          12:42
        </span>
      </div>

      {/* Avatar icon */}
      <div
        className="h-8 w-8 rounded-full
                   bg-white/20 border border-white/30
                   flex items-center justify-center"
      >
        👤
      </div>
    </div>
  );
};

export default SentMessage;
