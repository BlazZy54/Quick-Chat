import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../Hooks/useSignup'

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPass: '',
    gender: ''
  })

  const [checks, setChecks] = useState({
    Male: false, Female: false, Other: false
  })

  const handleChecks = (e) => {
    const value = e.target.value
    setChecks({Male: 'Male'=== value, Female: 'Female'=== value, Other: 'Other'=== value})
    setInputs({...inputs, gender: e.target.value})
  }


  const {loading, signup} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault() //prevents refreshing of page on form submission
    await signup(inputs)
    setInputs({fullName: '', username: '', password: '', confirmPass: '', gender: ''})
    setChecks({Male: false, Female: false, Other: false})

  }

  return (
    <div className="h-screen flex items-center justify-center p-[5vw]"
    >
      <form className="w-150 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white"
      onSubmit={handleSubmit}
      >

        <h2 className="text-2xl font-semibold text-center mb-6">
          SignUp <span className="text-blue-400">Quick-Chat</span>
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm opacity-80">Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="Name"
              value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="username"
              value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="password"
              value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="password"
              value={inputs.confirmPass} onChange={(e) => setInputs({...inputs, confirmPass: e.target.value})}
            />
          </div>

          <div className='flex gap-10'>
            <span>
              <input type="radio" id="male" name="gender" value="Male" className='mr-2' 
               onChange={handleChecks} checked={checks.Male}/>
              <label htmlFor="male" className="text-sm opacity-80">Male</label>
            </span>
            <span>
              <input type="radio" id="female" name="gender" value="Female" className='mr-2'
              onChange={handleChecks}  checked={checks.Female}/>
              <label htmlFor="female" className="text-sm opacity-80">Female</label>
            </span>
            <span>
              <input type="radio" id="other" name="gender" value="Other" className='mr-2'
              onChange={handleChecks}  />
              <label htmlFor="other" className="text-sm opacity-80">Other</label>
            </span>
            
          </div>

          <Link to='/login' className="text-sm opacity-70 cursor-pointer hover:underline">
            Already have an account?
          </Link>

          <button className="w-full mt-2 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition">
            {loading? "Please wait..." : "SignUp"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup