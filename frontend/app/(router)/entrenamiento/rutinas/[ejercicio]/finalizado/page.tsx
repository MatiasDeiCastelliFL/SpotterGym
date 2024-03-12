import Image from "next/image";
import screenFin from "@/public/screenFin.png";

const EjercicioFinalizado = () => {
   return (
    <div className='relative'>
            <div className=''>
                <Image
                    src={screenFin}
                    alt='finalizado'
                    className='h-screen'
                />
            </div>
            <div className='absolute bottom-0 left-0 z-20 ml-4 mb-4 w-full'>
                <h2 className='text-2xl'>¡Felicitaciones!</h2>
                <p className='text-sm'>
                    Completaste tu entrenamiento con exito
                </p>
                <div className="flex flex-col justify-between h-52">
                    <div className='mt-16'>
                        <h3 className='text-sm font-bold'>
                            Ejercicios completados:
                        </h3>
                        <ul className='list-disc list-inside ml-2'>
                            <li className='text-sm'>Remo con mancuernas</li>
                            <li className='text-sm'>
                                Remo doble con mancuernas
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-sm font-bold'>Siguiente rutina:</h3>
                        <ul className='list-disc list-inside ml-2'>
                            <li className='text-sm'>Runnig 4km</li>
                            <li className='text-sm'>Bicicleta</li>
                        </ul>
                    </div>
                </div>
                <button className='w-11/12 mt-5 bg-primaryDefault text-white py-2 px-4 rounded-xl shadow-lg'>
                    Continuar
                </button>
            </div>
        </div>
  )
};

export default EjercicioFinalizado;
