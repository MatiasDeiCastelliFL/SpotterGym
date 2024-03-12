import Image from "next/image";
import EjercicioRemo from "@/public/ejercicioRemo.png";

const CardEjercicio = ({ ejercicio, EjerciciosJSON }: { ejercicio: any, EjerciciosJSON: any }) => {
    return (
        <>
            <div className="mt-6">
                <div>
                    <div className="flex justify-between">
                        <h2>{ejercicio.name}</h2>
                        <p>{ejercicio.step}/{EjerciciosJSON.exercises.length}</p>
                    </div>
                    <p>{ejercicio.subtitle}</p>
                </div>
                <Image src={EjercicioRemo} alt="img ejercicio"/>
                <h2 className='text-lg my-2'>Instructivo</h2>
                <p className='text-sm my-2'>{ejercicio.repetitions}</p>
                <ul className="text-sm list-decimal ml-4 leading-5">
                    {ejercicio.instructions.steps.map((step:any) => (
                        <li key={step}>{step}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CardEjercicio;