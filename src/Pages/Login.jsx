import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Login')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmithandler = async (e) => {
        e.preventDefault()
    }


    return (
        <form onSubmit={onSubmithandler} className='flex flex-col items-center justify-center w-full mb-6 mt-5'>
            <div className='bg-white flex flex-col items-center justify-center gap-2 p-6'>
                <p className='text-3xl font-medium text-[#044fc0]'>{currentState}</p>
                <div className='mb-2'>
                    {
                        currentState === 'Login'
                            ? <div className='flex gap-2'>
                                <p className='text-[15px] text-gray-400'>Are you new customer?</p>
                                <button onClick={() => setCurrentState("Sign Up")} className='text-blue-400 font-medium cursor-pointer'>Create a account</button>
                            </div>
                            : <div className='flex gap-2'>
                                <p className='text-[15px] text-gray-400'>Are you old customer?</p>
                                <button onClick={() => setCurrentState("Login")} className='text-blue-400 font-medium cursor-pointer'>Login</button>
                            </div>
                    }
                </div>
                <div className='flex flex-col'>
                    {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} className='border w-70 p-2 mb-2 outline-none' type="text" placeholder='Enter Your Username..' />}
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border w-70 p-2 mb-2 outline-none' type="email" placeholder='Enter Your Email..' />
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border w-70 p-2 mb-2 outline-none' type="password" placeholder='Type password' />
                    {currentState === "Sign Up" ? '' : <p className='text-[12px] text-gray-400 font-medium'>Forget password?</p>}
                </div>
                <button className='bg-blue-700 w-70 p-2 text-white text-[18px] cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
            </div>
        </form>
    )
}

export default Login
