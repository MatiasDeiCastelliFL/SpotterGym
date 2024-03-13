'use client';
import { useRouter } from 'next/navigation';
import React from 'react';


export default function Page() {
  const router = useRouter()

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <button onClick={()=>{router.push("/acceso")}} type="button" className="text-white bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
        Inicia sesion
      </button>

      <button onClick={()=>{router.push("/registro")}} type="button" className="text-white bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
        Registrarse
      </button>
    </div>
  );
}
