'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import logoPrincipal from "../public/Frame - princial.svg"
import imageBg from "../public/noiseEffect Presentation.png";
import { useGlobalStore } from './store/GlobalStore';
import rolCliente from "../public/rol-cliente.png";
import rolGimnasio from "../public/rol-dueño.png";
import rolInstructor from "../public/rol-profesor.png";
import logoInferior from "../public/logoInferior.png";



export default function Page() {
  const router = useRouter()
  const {rolUser} = useGlobalStore<any>((state)=>state);
  const redirectToApp =()=> {
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
          <Image src={imageBg} alt='fondo' className=' w-full h-full md:w-1/2 lg:w-1/3' layout="fill" objectFit="cover" />
        <div className='px-[16px] pt-[32px] absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
          <div>
            <Image src={logoPrincipal}  alt='logo-principal' className='w-[500px] '/>
          </div>
          <h2 style={{color:`rgb(113 107 107)`}} className='flex flex-col justify-center items-start text-[.9rem] sm:text-[1.6rem]  font-extrabold'> <p className='text-center'> Cada repetición cuenta.</p> <p className='text-center w-full'>Tuya es la meta.</p></h2>
          {
            rolUser === "" ? (
              <div className='mt-[1rem]'>
            <button onClick={()=>{router.push("/acceso")}} type="button" className="text-black  bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-bold rounded-lg text-[1.1rem]  px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
              Inicia sesion
            </button>
            <button onClick={()=>{router.push("/registro")}} type="button" className="text-black bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault font-bold rounded-lg text-[1.1rem] px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
              Registrarse
            </button>
          </div>
            ) : (

            <button onClick={()=>{redirectToApp()}} type="button" className="font-bold text-black bg-primaryDefault hover:bg-primaryDefault focus:ring-4 focus:primaryDefault  rounded-lg text-[1.1rem] px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:primaryDefault">
              Ir a la App
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
      

      <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-[340px] sm:w-[450px] md:w-[600px] mb-[6rem]'>
          <h1 className='text-[1.1rem]'>
            <span className='text-primaryDefault font-extrabold text-[2rem]'> Spotter </span>
              Spotter está orientada a tres tipos de usuarios diferentes. Para cada uno tenemos una solución a sus necesidades.
          </h1>
        </div>

        <div className='min-h-screen px-[16px] py-[32px] grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex justify-center items-center'>
            <Image className='w-[351px] h-[534px]' src={rolCliente} alt='rol-cliente'/>
          </div>
          <h1 className='w-[340px] sm:w-[450px] md:w-[600px] text-[1.1rem] flex items-start justify-center flex-col'> 
          <span className='text-primaryDefault font-extrabold text-[2rem]'> Cliente  </span>
            <hr className="w-full bg-primaryDefault mb-3 h-[3px]"></hr>
             Como cliente podrás acceder a rutinas de entrenamiento personalizadas por profesores y adaptadas a tus objetivos de fitness y nivel de condición física, 
            para maximizar tu progreso y motivación durante tus entrenamientos.
            recibirás  notificaciones y recordatorios para mantenerte en el camino hacia tus metas de fitness, 
            incluyendo alertas sobre próximas clases, 
            cambios en las rutinas y logros alcanzados, asi te mantedrás motivado y comprometido con tu entrenamiento ademas podrás tener un seguimiento detallado de mi progreso, 
            incluyendo el peso levantado, el tiempo dedicado al ejercicio y las calorías quemadas, 
            para evaluar tus avances y ajustar mi entrenamiento según sea necesario.
           </h1>
        </div>

        <div className='min-h-screen px-[16px] py-[32px] grid grid-cols-1 md:grid-cols-2 gap-4'>
           <div className='flex justify-center items-center'>
            <Image className='w-[351px] h-[534px]' src={rolGimnasio} alt='rol-cliente'/>
          </div>
          <h1 className='w-[340px] sm:w-[450px] md:w-[600px] text-[1.1rem] flex items-start justify-center flex-col'> 
          <span className='text-primaryDefault font-extrabold text-[2rem]'> Gimnasio  </span>
            <hr className="w-full bg-primaryDefault mb-3 h-[3px]"></hr>
             Como administrador de un gimnasio en Spotter, 
             puedes acceder a herramientas integrales de gestión de clientes y análisis de datos para optimizar las operaciones diarias del gimnasio, incluyendo el seguimiento de membresías, la programación de clases y la gestión de pagos.
              podrás personalizar la experiencia del usuario dentro de la aplicación, incluyendo la incorporación de la marca del gimnasio y la promoción de eventos y ofertas especiales, para mejorar la fidelidad de los miembros y la participación en el gimnasio.
               tendrás acceso a informes y análisis detallados sobre el rendimiento del gimnasio, incluyendo la retención de miembros, la participación en clases y el progreso de los clientes, para poder tomar decisiones informadas y estratégicas para el crecimiento del negocio.
           </h1>
          
        </div>


        <div className='min-h-screen px-[16px] py-[32px] grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex justify-center items-center'>
            <Image className='w-[351px] h-[534px]' src={rolInstructor} alt='rol-cliente'/>
          </div>
          <h1 className='w-[340px] sm:w-[450px] md:w-[600px] text-[1.1rem] flex items-start justify-center flex-col'> 
          <span className='text-primaryDefault font-extrabold text-[2rem]'> Instructor  </span>
            <hr className="w-full bg-primaryDefault mb-3 h-[3px]"></hr>
            Como profesor en Spotter, tendrás acceso a herramientas avanzadas para crear rutinas de entrenamiento personalizadas para tus clientes, basadas en sus objetivos individuales y necesidades específicas, para ofrecerles un entrenamiento efectivo y personalizado.
            podrás realizar un seguimiento del progreso de tus clientes y recibir notificaciones sobre sus logros y desafíos, para poder brindarles orientación y apoyo adicional cuando sea necesario.
            y ademas tendrás la capacidad de comunicarte de manera efectiva con tus clientes a través de la aplicación, para proporcionarles retroalimentación y motivación adicional durante su viaje de fitness.
           </h1>
        </div>
      </div>


      <div className='w-full min-h-screen flex-col flex justify-center items-center'>
        <div className='w-[340px] sm:w-[450px] md:w-[600px]'>
          <Image src={logoInferior} alt='logo-final' />
        </div>
        <span className='mt-[1rem]'>All right reserved</span>
        </div>
    </div>
  );
}
