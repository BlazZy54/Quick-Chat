import { useState } from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
    const [loading, setloading] = useState(false)


    const signup = async (inputs) => {

        const { fullName, username, password, confirmPass, gender } = inputs
        if (!handle_errors(fullName, username, password, confirmPass, gender)) return

        setloading(true)
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName: fullName, username: username, password: password, confirmPassword: confirmPass, gender: gender })
            })

            //get data from response
            const data = await res.json()

            if (data.error) throw new Error(data.error) //will get catched

            toast.success('Account created successfully')

        }
        catch (error) {
            toast.error(error.message)
        }
        finally {
            setloading(false)
        }
    }

    return {loading, signup}
}

export default useSignup
const handle_errors = (fullName, username, password, confirmPass, gender) => {
    if (!fullName || !username || !password || !confirmPass || !gender) {
        toast.error('Please fill all the fields')
        return false
    }
    else if (password !== confirmPass) {
        toast.error('Password does not match')
        return false
    }
    else if (password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false
    }
    return true
}

