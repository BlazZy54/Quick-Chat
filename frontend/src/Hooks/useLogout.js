import { useState } from "react"
import toast from "react-hot-toast"
import { authStore } from "../ZustandStore/store"



const useLogout = () => {
    const [loading, setloading] = useState(false)
    const {setauthUser } = authStore()

    const logout = async () => {
        setloading(true)

        try{
            const res = await fetch('/api/auth/logout')
            const data = await res.json()
            if(data.error) throw new Error(data.error)

            setauthUser(false)
            
            toast.success("Logged out successfully")
        }
        catch(err){
            toast.error(err.message)
            console.log(err)
        }
        finally{
            setloading(false)
        }
    }

    return {loading, logout}
}

export default useLogout