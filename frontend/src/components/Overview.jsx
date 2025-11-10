import React from 'react'
import OverviewCard from '../parts/OverviewCard'
import { IoBagRemoveOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
const Overview = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold flex px-20 
      mt-10 items-center shadow-xs py-2
      '>Overview</h1>
      
   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-10' >
      <OverviewCard title="Today's Orders" value={52} icon={<IoBagRemoveOutline className='text-blue-300'/>} />
      <OverviewCard title="Today's Revenue" value={13} icon={<RiMoneyRupeeCircleLine className='text-green-300'/>}/>
      <OverviewCard title="Average Rating" value={98} icon={<IoIosStarOutline className='text-yellow-300'/>} />
      <OverviewCard title="Menu Items" value={5} icon={<GiKnifeFork className='text-purple-400'/>} />
   </div>
    
    </div>
  )
}

export default Overview
