import React from 'react'
import CardActivities from './CardActivities';

const CardContainerActivities = () => {
  return (
    <div className='w-[100%] grid grid-cols-12 mt-[24px] gap-x-4 gap-y-2'>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
            <div className='col-span-6 flex justify-center items-center mt-[0.5rem]'>
              <CardActivities/>
            </div>
          </div>
  )
}

export default CardContainerActivities;