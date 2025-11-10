import React from 'react'
import Nav from './Nav'
import HeroOwner from './HeroOwner'
import Overview from './Overview'
import RestaurantInfo from './RestaurntInfo'
import MenuManage from './MenuManage'
import { FaUtensils } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OwerDashboard = () => {
  const navigate =useNavigate()
  const {myShopDate}=useSelector(state=>state.owner)
  return (
    <div className="p-6 sm:p-10 md:p-20 bg-orange-50 min-h-screen">
      <Nav />
      <HeroOwner />

      {!myShopDate && (
        <div className="flex items-center justify-center mt-10 px-4 sm:px-6">
          <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <FaUtensils
                size={70}
                className="text-orange-500 mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Add Your Restaurant
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Add your restaurant details to start managing your menu,
                orders, and analytics. Create your online presence in just a few
                simple steps.
              </p>

              <button
                className="bg-orange-500 hover:bg-orange-600 text-white mt-5 px-6 py-2 sm:px-8 
                rounded-full font-medium shadow-md transition-transform transform hover:scale-105"
                onClick={()=>navigate("/restaurant-info")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Uncomment these when restaurant data is available */}
      {/* <Overview /> */}
      {/* <MenuManage /> */}
      {/* <RestaurantInfo /> */}
    </div>
  )
}

export default OwerDashboard
 