import { useState } from "react"
import toast from 'react-hot-toast'
import {authStore} from '../ZustandStore/store.js'


const useLogin = () => {
    const [loading, setloading] = useState(false)
    const {setauthUser} = authStore()

    const login = async (username, password) => {
        setloading(true)
        try{
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
            })
            const data = await res.json()

            if(data.error) throw new Error(data.error)

            setauthUser(data.user)

            toast.success("Logged In successfully")
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setloading(false)
        }
    }

    return {loading, login}
}

export default useLogin