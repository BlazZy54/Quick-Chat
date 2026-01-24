const ChatSkeleton = () => {
  return (
    <div className="space-y-4 p-4">
      {Array.from({ length: 10 }).map((_, i) => {
        const isLeft = i % 2 === 0;

        return (
          <div
            key={i}
            className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[70%] w-[260px] rounded-2xl px-4 py-3 animate-pulse ${isLeft ? "bg-white/10" : "bg-blue-500/20"
                }`}
            >
              <div className="h-3 w-3/4 rounded bg-white/10" />
              <div className="mt-2 h-3 w-1/2 rounded bg-white/10" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatSkeleton;
