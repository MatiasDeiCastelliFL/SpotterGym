"use client"
import React, { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import spotterLogo from '../../../public/spooter-logo.svg';
import Image from 'next/image';
import aplaudir from "../../../public/aplaudir.png"
import Link from 'next/link';

export default function Page(){
    const router = useRouter()
    const searchParams = useSearchParams()
    const firstName = searchParams.get('firstName')
    const lastName = searchParams.get('lastName')
    const email = searchParams.get('email')
    //console.log(firstName, lastName, email)

  return (
    <Suspense>
      <div className='bg-black w-full flex flex-col items-center justify-center h-screen'>
      <div className='bg-#1E1E1E'>
          <Link href={"/"}>
            <Image
            className='w-[266px] h-[80px] text-white'
            src={spotterLogo}
            alt={'logo'}
          />
          </Link>
        </div>
        
        <h1 className='w-full mt-4 flex flex-col justify-between items-center'> <p className='font-bold text-[3rem] mx-2'>Felicidades!!! </p> <Image className='w-[5rem] h-[5rem] mx-2' src={aplaudir} alt='aplaudir' /></h1>
        <p className='w-[300px] sm:w-[600px] font-extrabold text-center text-[1.5rem]'> {firstName} {lastName} su cuenta ha sido creada y activada exitosamente con el siguiente email: <span className='text-[1rem]'> {email} </span> </p>
        <button onClick={()=>{router.push("/acceso")}} type="button" className="mt-6 text-black  bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-bold rounded-lg text-[1.1rem]  px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
          Inicia sesion
        </button>
    </div>
    </Suspense>
    
  )
}

