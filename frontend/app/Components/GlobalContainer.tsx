import React from 'react'


function GlobalContainer({children}:{children:React.ReactNode}) {
  return (
    <div className='w-[100%] px-[16px] pt-[32px]'>
        {children}
    </div>
  )
}

export default GlobalContainer;