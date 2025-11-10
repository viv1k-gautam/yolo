import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { RiNotification2Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { serverUrl } from '../App';
import { setUserData } from '../redux/user.slice';
import axios from "axios"

function Nav() {
    const {userData,city,country}=useSelector(state=>state.user)
    // const {myShopData}=useSelector(state=> state.owner)
    const [showInfo,setShowInfo]=useState(false)
    const dispatch = useDispatch()
    const handleLogout=async()=>{
        try {
            const result = await axios.get(`${serverUrl}/api/auth/signout`,
                {withCredentials:true})
                dispatch(setUserData(null))
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="w-full h-[60px] flex items-center justify-between px-2 md:px-16 bg-white shadow-sm fixed top-0 left-0 z-[9999]">
      {/* Logo */}
      <div className="text-orange-500 font-extrabold text-3xl tracking-tight">
        Yolo
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
        <a href="#" className="hover:text-orange-500 transition">Home</a>
        <a href="#" className="hover:text-orange-500 transition">Restaurants</a>
        <a href="#" className="hover:text-orange-500 transition">Orders</a>
        <a href="#" className="hover:text-orange-500 transition">Account</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Location */}
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-orange-500 transition">
          <FaLocationDot size={25} className="text-orange-500" />
          <p className="text-sm font-medium">{`${city},${country}`}</p>
          <IoIosArrowDown />
        </div>

        {/* Cart */}

        {userData.role=="user"&& <div className="relative cursor-pointer">
          <LuShoppingCart size={25} className="text-gray-700 hover:text-orange-500 transition" />
          <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
            1
          </div>
        </div>}

        {userData.role=="owner"&& <div className="relative cursor-pointer">
          <RiNotification2Line size={25} className="text-gray-700 hover:text-orange-500 transition" />
          <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
            1
          </div>
        </div>}
        

        {/* Profile */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="bg-purple-500 w-9 h-9 rounded-full overflow-hidden border border-gray-300
          flex items-center justify-center font-bold text-xl text-white" onClick={()=>setShowInfo(prev=>!prev)}>
            {/* <img
              src="https://i.pravatar.cc/150?img=3"
              alt="profile"
              className="w-full h-full object-cover"
            /> */}
            {userData?.fullName?.slice(0,1).toUpperCase()}

           

            


          </div>
          {/* <IoIosArrowDown size={18} className="text-gray-700" /> */}
        </div>
         {showInfo && <div className='fixed top-[70px] right-[10px] md:right-[2%]
            lg:right-[2%] w-[140px] bg-white shadow-2xl rounded-xl p-[20px] flex 
            flex-col gap-[10px] z-[9999] text-black' >
                <div className='text-[17px] font-medium px-2 '>{userData.fullName}</div>
                <div className='md:hidden text-[17px] font-semibold text-orange-500 px-2'>My Orders</div>
                <div className='text-red-600 text-[18px] px-2  font-semibold cursor-pointer
                'onClick={handleLogout}>Log Out</div>
            </div>}
      </div>
    </div>
  )
}

export default Nav
