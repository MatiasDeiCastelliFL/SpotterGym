"use client"
import React, { useState } from 'react';
import Header from "@/app/Components/Header";
import CardEjercicio from '@/app/Components/CardEjercicios';
import EjerciciosJSON from "@/mock/ejercicios.json";
import Link from 'next/link';
import GlobalContainer from '@/app/Components/GlobalContainer';

const Ejercicios = ({params} : {params: any}) => {
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0); 
    const totalExercises = EjerciciosJSON.exercises.length;

    const handleNextExercise = () => {
        if (currentExerciseIndex < totalExercises - 1) {
            setCurrentExerciseIndex(prevIndex => prevIndex + 1); 
        }
    };

    const isLastExercise = currentExerciseIndex === totalExercises - 1;

    const ejercicio = EjerciciosJSON.exercises[currentExerciseIndex];
    console.log(params)

    return (
        <GlobalContainer>
            <Header />
            <CardEjercicio ejercicio={ejercicio} EjerciciosJSON={EjerciciosJSON } />
            <div className='my-4 w-full flex justify-evenly'>
                {isLastExercise ? (
                    <Link href={`${params.ejercicio}/finalizado`}>
                        <button className='w-full px-8 py-2 text-center bg-primaryDefault rounded-lg' >
                        Finalizar
                    </button>
                    </Link>
                ) : (
                    <>
                        <button className='w-[160px] px-8 py-2 text-center border border-primaryDefault rounded-lg text-primaryDefault' onClick={handleNextExercise}>
                            Omitir
                        </button>
                        <button className='w-[160px] px-8 py-2 text-center bg-primaryDefault rounded-lg' onClick={handleNextExercise}>
                            Siguiente
                        </button>
                    </>
                )}
            </div>
        </GlobalContainer>
    );
}

export default Ejercicios