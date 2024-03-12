import Image from 'next/image';
import React from 'react'
import flecha from "../../public/Arrow - Right 2.svg";
import Link from 'next/link';



function SectionButton({section, description, active = true}:{section:string, description:string, active:boolean}) {
  return (
        <div className='w-[100%] flex justify-between items-center py-1 mt-3'>
          <div>
              <h2 className='text-[16px] font-medium'>{section}</h2>
              <p className='text-[9px] font-light'>{description}</p>
          </div>
          <div className=''>
              {active && 
                <Link href={`/${section}`} >
                  <Image className='w-[24px] h-[24px] ' src={flecha} alt='arrow' />
                </Link>
              }
          </div>
        </div>
      
    
  )
}

export default SectionButton;