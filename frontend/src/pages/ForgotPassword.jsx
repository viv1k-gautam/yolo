import axios from 'axios';
import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';

const ForgotPassword = () => {
    const  [step ,setStep]=useState(1)
    const[email ,setemail]=useState("")
    const navigate =useNavigate()
    const[otp, setOtp]=useState("")
    const[newpassword, setNewpassword]=useState("")
      const[confirmpassword, setConfirmpassword]=useState("")
       const[err, setErr]=useState("")

      const handleSendOtp=async()=>{
        try {
            const result=await axios.post(`${serverUrl}/api/auth/send-otp`,{email},
                {withCredentials:true})
                console.log(result)
                setErr("")
                setStep(2)
            
        } catch (error) {
            
            setErr(error?.response?.data?.message)
            
        }
      }

      const handleVerifyOtp=async()=>{
        try {
            const result=await axios.post(`${serverUrl}/api/auth/verify-otp`,{email,otp},
                {withCredentials:true})
                console.log(result)
                setErr("")
                setStep(3)
            
        } catch (error) {
            setErr(error?.response?.data?.message)
            
        }
      }

      const handleresetPassword=async()=>{
        if(newpassword!=confirmpassword){
            return null
        }
        try {
            const result=await axios.post(`${serverUrl}/api/auth/reset-password`,{email, newPassword:newpassword},
                {withCredentials:true})
                setErr("")
                console.log(result)
                navigate('/signin')
            
        } catch (error) {
            setErr(error?.response?.data?.message)
            
        }
      }
  return (
    <div className='flex w-full items-center justify-center min-h-screen
    p-4 bg-amber-100'>
        <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8
        '>
            <div className='flex items-center gap-4 mb-6'>
                <IoMdArrowRoundBack size={30} className='text-gray-500  cursor-pointer' 
                onClick={()=>navigate("/signin")}/>
            <h1 className='text-2xl font-bold text-center text-orange-500 '>Forgot Password</h1>
            </div>
            {step==1 && 
            <div>
                <div className='mb-4 '>
                <label htmlFor="email"className='block text-gray-700 font-medium mb-1'>Email</label>
                <input type="email"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter Your Email'
                onChange={(e)=>setemail(e.target.value)}
                value={email} required/>
            </div>  
            <button className='w-full mt-4 flex items-center justify-center gap-2
                border rounded-lg px-4 py-2 transition duration-200 bg-orange-500 text-white cursor-pointer'
                onClick={handleSendOtp}>
                    Send OTP</button>
                       {err && <p className='text-red-500 text-center m-2'>*{err}</p>}
                </div>}

                {step==2 &&
                 <div>
                <div className='mb-4 '>
                <label htmlFor="otp"className='block text-gray-700 font-medium mb-1'>OTP</label>
                <input type="otp"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter OTP'
                onChange={(e)=>setOtp(e.target.value)}
                value={otp}/>
            </div>  
            <button className='w-full mt-4 flex items-center justify-center gap-2
                border rounded-lg px-4 py-2 transition duration-200 bg-orange-500 text-white cursor-pointer'
                onClick={handleVerifyOtp}>
                    Verify OTP</button>
                      {err && <p className='text-red-500 text-center m-2'>*{err}</p>}
                </div>}

                {step==3 &&
                 <div>
                <div className='mb-4 '>
                <label htmlFor="newpassword"className='block text-gray-700 font-medium mb-1'>New password</label>
                <input type="newpassword"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Enter new password'
                onChange={(e)=>setNewpassword(e.target.value)}
                value={newpassword}/>
            </div>
            <div className='mb-4 '>
                <label htmlFor="Confirmpassword"className='block text-gray-700 font-medium mb-1'>Confirm password</label>
                <input type="Confirmpassword"className='w-full border rounded-lg px-3 py-2 focus:outline-none
                focus:border-orange-500 border-[1px] border-zinc-300' placeholder='Confirm password'
                onChange={(e)=>setConfirmpassword(e.target.value)}
                value={confirmpassword}/>
            </div>  
            <button className='w-full mt-4 flex items-center justify-center gap-2
                border rounded-lg px-4 py-2 transition duration-200 bg-orange-500 text-white cursor-pointer'
                onClick={handleresetPassword}>
                    Reset Password </button>
                    {err && <p className='text-red-500 text-center m-2'>*{err}</p>}
                </div>}

        </div>
      
    </div>
  )
}

export default ForgotPassword
