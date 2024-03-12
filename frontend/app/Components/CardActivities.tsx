import Image from 'next/image'
import React from 'react'
import office from "../../public/card-header.png"
import Link from 'next/link'
function CardActivities() {
    return (
        <div className="w-[100%] rounded-[20px]  border border-gray-200  shadow bg-trasparent">
                <Image src={office} className='rounded-t-[20px] w-full' alt='image' />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-[16px] font-[500] tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 text-[12px] font-[400] text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button  className=" rounded-lg inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primaryDefault focus:ring-4 focus:outline-none">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>

        )
}

export default CardActivities