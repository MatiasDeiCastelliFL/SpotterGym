'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import logoPrincipal from "../public/Frame - princial.svg"
import imageBg from "../public/noiseEffect Presentation.png";
import { useGlobalStore } from './store/GlobalStore';



export default function Page() {
  const router = useRouter()
  const {rolUser} = useGlobalStore<any>((state)=>state);
  //console.log(rolUser)

  const redirectToApp =()=>{
    if(rolUser === "cliente"){
      router.push("/inicio/cliente")
    }
    if(rolUser === "profesor"){
      router.push("/inicio/profesor")
    }
    if(rolUser === "duennio"){
      router.push("/inicio/duennio")
    }
  }

  return (
    <div className="bg-black ">

      <div className='relative w-full h-screen '>
          <Image src={imageBg} alt='fondo' className='w-full h-full md:w-1/2 lg:w-1/3' layout="fill" objectFit="cover" />

        <div className='px-[16px] pt-[32px] absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
          <div>
            <Image src={logoPrincipal}  alt='logo-principal' className='w-[500px] '/>
          </div>
          <p className=' items-start text-[.9rem] sm:text-[1.6rem]  font-extrabold'>Cada repetición cuenta. Cada meta es tuya.</p>
          {
            rolUser === "" ? (
              <div className='mt-[1rem]'>
            <button onClick={()=>{router.push("/acceso")}} type="button" className="text-white bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
              Inicia sesion
            </button>
            <button onClick={()=>{router.push("/registro")}} type="button" className="text-white bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
              Registrarse
            </button>
          </div>
            ) : (

              <button onClick={()=>{redirectToApp()}} type="button" className="text-white bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
                Ir a la APP
              </button>
            )
          }
          
        </div>
        
      </div>

      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[340px] sm:w-[450px] md:w-[600px]'>
          <h1 className='text-[1.1rem]'> <span className='text-primaryDefault font-extrabold text-[2rem]'> Spotter </span> , un compañero de entrenamiento personalizado. Nuestra app está diseñada para elevar tu rendimiento y maximizar tus resultados. Desde rutinas personalizadas hasta seguimiento de progreso en tiempo real. Mejora cada aspecto de tu entrenamiento. Descubre una nueva forma de alcanzar tus metas fitness.</h1>
        </div>
      </div>
      
      
    </div>
  );
}
