import React from 'react'
import { useState } from 'react'
import { FaExclamation, FaEye,FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { serverUrl } from '../App';

const SignUp = () => {
    const maincolour = "oklch(70.5% 0.213 47.604)"
    const bordercolour="#e2e8f0"

    const [showPassword ,setShowPassword]=useState(false)
    const [role,setRole]=useState("user")
    const navigate = useNavigate()
    const[fullName ,setFullName]=useState("")
    const[email ,setemail]=useState("")
    const[password ,setPassword]=useState("")
    const[mobile ,setMobile]=useState("")

    const handleSignUp =async()=>{
        try {
            const result=await axios.post(`${serverUrl}/api/auth/signup`,{
                fullName,email,password,mobile,role
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
            <p className='text-gray-600 mb-8 text-xs'>Create our account to get started with delicious food deliveries</p>

            {/* fullName */}
            <div className='mb-4 '>
                <label htmlFor="fullName"className='block text-gray-700 font-medium mb-1'>Full Name</label>
                <input type="text"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter Your Full Name'
                onChange={(e)=>setFullName(e.target.value)}
                value={fullName}/>
            </div>

            {/* email */}
            <div className='mb-4 '>
                <label htmlFor="email"className='block text-gray-700 font-medium mb-1'>Email</label>
                <input type="email"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter Your Email'
                onChange={(e)=>setemail(e.target.value)}
                value={email}/>
            </div>

            {/* mobile no. */}
            <div className='mb-4 '>
                <label htmlFor="mobile"className='block text-gray-700 font-medium mb-1'>Mobile No.</label>
                <input type="number"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter Your Mobile No.'
                onChange={(e)=>setMobile(e.target.value)}
                value={mobile}/>
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

             {/* role */}
             
            <div className='mb-4 '>
                <label htmlFor="role"className='block text-gray-700 font-medium mb-1'>Role</label>
                <div className='relative flex gap-2'>
                
                {["user","owner","deliveryBoy"].map((r)=>(
                    <button className='flex-1 border rounded-lg px-3 py-2 text-center cursor-pointer
                    font-medium transition-colors'
                    onClick={()=>setRole(r)}
                    style={
                        role==r?
                        {backgroundColor:maincolour,color:"white"}
                        :{border:`1px solid grey` ,color:maincolour}
                    }>{r}</button>
                ))}
                
                </div>
                <button className='w-full mt-4 flex items-center justify-center gap-2
                border rounded-lg px-4 py-2 transition duration-200 bg-orange-500 text-white cursor-pointer'
                onClick={handleSignUp}>
                    SignUp</button>
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
              <p className='text-center mt-4 text-gray-500 cursor-pointer'onClick={()=>navigate("/signin")}>Already have an account? <span className='text-orange-500 
              cursor-pointer'>Sign In</span></p>
            </div>
              


        </div>
      
    </div>
  )
}

export default SignUp
