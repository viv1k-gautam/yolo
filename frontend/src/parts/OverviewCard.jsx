import React from 'react'

const OverviewCard = ({title, value,icon}) => {
  return (
    <div>
      <div className='rounded-2xl shadow h-[120px] ml-5 mt-[30px] 
bg-white hover:shadow-xl transition-all duration-300 flex flex-col 
px-6'>
        <div className='flex flex-col py-2 gap-y-5'>
        <p className='flex items-center'>{title}</p>
        <h3 className='flex font-bold text-2xl items-center justify-between pr-5'>{value}
            <div className='text-3xl '>{icon}</div>
        </h3>
        
        </div>
      </div>
      
    </div>
  )
}

export default OverviewCard
