import Image from 'next/image'
import React from 'react'
import chartline from "../../public/NBcharts-lineChats.png"
function ChartsLine() {
  return (
    <div className='w-full my-[20px]'>
        <Image alt='chart' src={chartline}/>
    </div>
  )
}

export default ChartsLine;