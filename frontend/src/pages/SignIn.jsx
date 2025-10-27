import React from 'react'
import { useState } from 'react'
import { FaExclamation, FaEye,FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { serverUrl } from '../App';

const SignIn = () => {
    const maincolour = "oklch(70.5% 0.213 47.604)"
    const bordercolour="#e2e8f0"

    const [showPassword ,setShowPassword]=useState(false)  
    const navigate = useNavigate()
    const[email ,setemail]=useState("")
    const[password ,setPassword]=useState("")
    

    const handleSignIn =async()=>{
        try {
            const result=await axios.post(`${serverUrl}/api/auth/signin`,{
                email,password,
            },{withCredentials:true})
            console.log(result)
        } catch (error) {
            
            console.log(error)
        }
    }
  return (
    <div className='min-h-screen w-full flex items-center justify-center
    p-4 bg-amber-100'>
        <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px] border-zinc-300 `}>
            <h1 className={`text-3xl font-bold mb-2 text-orange-500`}>Yolo</h1>
            <p className='text-gray-600 mb-8 text-xs'>SignIn our account to get started with delicious food deliveries</p>


            {/* email */}
            <div className='mb-4 '>
                <label htmlFor="email"className='block text-gray-700 font-medium mb-1'>Email</label>
                <input type="email"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter Your Email'
                onChange={(e)=>setemail(e.target.value)}
                value={email}/>
            </div>


             {/* password */}
             
            <div className='mb-4 '>
                <label htmlFor="password"className='block text-gray-700 font-medium mb-1'>Password</label>
                <div className='relative'>
                <input type={`${showPassword?"text":"password"}`}className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter Your Password'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}/>

                <button className='absolute right-3 top-3 text-gray-500 cursor-pointer'
                   onClick={()=>setShowPassword(prev=>!prev)}> {!showPassword?<FaEye />:<FaEyeSlash />}</button>
                </div>
            </div>
            <div className='text-orange-500 text-right font-medium mb-4 cursor-pointer '
            onClick={()=>navigate('/forgot-password')}>
              Forgot Password
            </div>

 
             
            <div className='mb-4 mt-10'>
                
              
                <button className='w-full mt-4 flex items-center justify-center gap-2
                border rounded-lg px-4 py-2 transition duration-200 bg-orange-500 text-white cursor-pointer'
                onClick={handleSignIn}>
                    SignIn</button>
                    <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-500 text-sm">Or continue with</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <button className='w-full flex mt-4 items-center justify-center gap-2 border rounded-lg px-4 py-2 cursor-pointer
              transition duration-200 border-gray-400 hover:bg-gray-100'> 
                <FcGoogle size={20}/>
                <span>Sign Up with google</span>

              </button>
              <p className='text-center mt-4 text-gray-500 cursor-pointer'onClick={()=>navigate("/signup")}>Want to create an account? <span className='text-orange-500 
              cursor-pointer'>Sign Up</span></p>
            </div>
              


        </div>
      
    </div>
  )
}

export default SignIn
