import React from 'react'
import RestaurantCard from '../parts/Menucard'
const MenuManage = () => {
  return (
    <div>
       <h1 className='text-3xl font-bold flex px-20 
      mt-10  shadow-xs py-2
      '>Menu Management</h1>
<div className='flex justify-center items-center text-xl
 font-bold mt-5 mr-5 text-white py-2 rounded-2xl 
 ml-[94%]
bg-orange-500 '>+Add</div>
       <div className="flex px-10 mt-10">
      <RestaurantCard
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F22%2F371886-food-pizza.jpg&f=1&nofb=1&ipt=7880ee6c3dde3ba0abbe0e549be5346f742150dc8e8e7f1dab0ee3fa97e39922"
        name="Mario's Pizza Palace"
        cuisines={["Italian", "Pizza", "Pasta"]}
        rating="4.8"
        time="25-30 min"
        delivery="2.99"
      />
    </div>
    </div>
  )
}

export default MenuManage
