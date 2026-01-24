import { create } from 'zustand'

export const authStore = create((set) => ({
    authUser: false,
    setauthUser: (isauth) => {
        set({authUser: isauth})
        console.log("inside store"+isauth)
    }
}))