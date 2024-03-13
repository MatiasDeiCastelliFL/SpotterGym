import React from 'react'

function TabChartStatics() {
  return (
    
    <div className="mt-[18px] inline-flex justify-center items-center rounded-md shadow-sm w-full" role="group">
        <button type="button" className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-primaryDefault rounded-s-lg   focus:z-10 focus:ring-2 focus:ring-primaryDefault focus:bg-primaryDefault focus:text-white dark:border-white dark:text-white dark:hover:text-white">
            Día
        </button>
        <button type="button" className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b focus:ring-primaryDefault focus:bg-primaryDefault border-primaryDefault  hover:bg-primaryDefault hover:text-white focus:z-10 focus:ring-2  focus:text-white dark:border-white dark:text-white dark:hover:text-white">
            Semana
        </button>
        <button type="button" className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border  rounded-e-lg border-primaryDefault focus:ring-primaryDefault focus:bg-primaryDefault  hover:text-white focus:z-10 focus:ring-2  focus:text-white dark:border-white dark:text-white dark:hover:text-white ">
            Mes
        </button>
    </div>
    
    )
}

export default TabChartStatics