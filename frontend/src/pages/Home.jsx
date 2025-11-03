import React from 'react'
import { useSelector } from 'react-redux'
import UserDashboard from '../components/UserDashboard'
import OwerDashboard from '../components/OwerDashboard'
import DeliveryboyDashboard from '../components/DeliveryboyDashboard'

function Home () {
    const {userData}=useSelector(state=>state.user)
  return (
    <div className='w-[100vw] min-h-[100vh]'>
        {userData.role=="user"&& <UserDashboard/>}
        {userData.role=="owner"&& <OwerDashboard/>}
        {userData.role=="deliveryBoy"&& <DeliveryboyDashboard/>}
      
    </div>
  )
}

export default Home
