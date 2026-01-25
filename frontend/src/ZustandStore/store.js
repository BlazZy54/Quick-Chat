import { create } from 'zustand'

export const authStore = create((set) => ({
    authUser: null,
    setauthUser: (obj) => {
        set({authUser: obj})
        // toast.success("Changed user to " + (obj ? obj.fullName : "null"));
    },
}))


export const conversationStore = create((set) => ({
    selectedConversation: null,
    setselectedConversation: (newlyselectedconversation) => set({selectedConversation: newlyselectedconversation}),

    messages: [],
    setMessages: (msgs) => set({messages: msgs})
}))

export const socketStore = create((set) => ({
  socket: null,
  onlineUsers: [],
  setSocket: (s) => set({ socket: s }),
  setonlineUsers: (users) => set({ onlineUsers: users }),
}));
