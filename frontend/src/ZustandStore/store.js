import { create } from 'zustand'
import toast from 'react-hot-toast'


export const authStore = create((set) => ({
    authUser: null,
    setauthUser: (obj) => {
        set({authUser: obj})
        toast.success("Changed user to " + (obj ? obj.fullName : "null"));
        console.log(obj)
    },
}))


export const conversationStore = create((set) => ({
    selectedConversation: null,
    setselectedConversation: (newlyselectedconversation) => set({selectedConversation: newlyselectedconversation}),

    messages: [],
    setMessages: (msgs) => set({messages: msgs})
}))