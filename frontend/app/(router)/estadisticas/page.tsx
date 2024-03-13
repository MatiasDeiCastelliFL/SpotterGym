"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../../Components/Header';
import arrowRigth from '../../../public/Arrow - Right 2.svg';
import arrowDown from '../../../public/arrow-down.svg';
import arrowDownWhite from '../../../public/arrow-down-white.svg';
import Navbar from '../../Components/Navbar';
import Grafic1 from '../../Components/Grafic1';
import Grafic2 from '../../Components/Grafic2';
import WeightModal from '../../Components/WeightModal';
import SectionButton from '../../Components/SectionButton';
import GlobalContainer from '../../Components/GlobalContainer';


const Estadisticas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weights, setWeight] = useState<any>([]); // Añade esta línea

  useEffect(() => {
    console.log(weights); // Imprime el peso cada vez que cambia
  }, [weights]);

  const handleWeightSubmit = (weight: any) => {
    //setWeight((preWeights) => [
    //  ...preWeights,
    //  { name: `Semana ${preWeights.length + 1}`, Peso: Number(weight) },
    //]);
    //Creo que este codigo es mejor, es cuestión de intentarlo
    setWeight([...weights, {name: `Semana ${weight.length + 1}`, Peso: Number(weight)}])
  };


  return (
    <GlobalContainer>
      <Header />
        <SectionButton active={true} section='Tu rendimiento' description='Basado en los ejercicios completados esta semana'/>
        <div className='flex justify-between mb-10px text-center '>
          <h2
            className='font-medium text-sm text-primaryDefault rounded-custom1 border-1.5 border-solid border-primaryDefault py-2.5 px-5 h-10 flex-grow flex justify-center items-center hover:bg-primaryDefault hover:text-white'
            style={{ flexBasis: '33.33%' }}
          >
            Día
          </h2>
          <h2
            className='font-medium bg-primaryDefault text-sm text-white border-1.5 border-solid border-primaryDefault py-2.5 px-5 h-10 flex-grow flex justify-center items-center hover:bg-primaryDefault hover:text-white'
            style={{ flexBasis: '33.33%' }}
          >
            Semana
          </h2>
          <h2
            className='font-medium text-sm text-primaryDefault rounded-custom2 border-1.5 border-solid border-primaryDefault py-2.5 px-5 h-10 flex-grow flex justify-center items-center hover:bg-primaryDefault hover:text-white'
            style={{ flexBasis: '33.33%' }}
          >
            Mes
          </h2>
        </div>
        <div className='bg-gray1000 shadow-custom rounded-md flex justify-center items-center'>
          <Grafic1 />
        </div>
        <div>
          <div>
            <h2 className='text-base font-medium mt-24px'>Objetivos</h2>
            <p className='text-xs  font-light mb-9px'>Seguí tus avances</p>
          </div>
          <div className='bg-gray1000 mb-24px shadow-custom  p-3 rounded-3xl h-custom backdrop-blur-md '>
            <div className='flex justify-between items-center '>
              <h2 className='text-base font-medium'>Peso</h2>

              <Image
                src={arrowRigth}
                alt='arrow*-rigth'
                width={24}
                height={24}
                onClick={() => setIsModalOpen(true)}
              />

              <WeightModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onWeightSubmit={handleWeightSubmit}
                weights={weights}
              />
            </div>
            <div className='flex justify-between items-center '>
              <h1 className='text-28 font-bold text-primaryDefault'>65.2Kg</h1>
              <p className='text-sm text-primaryLigth font-medium'>
                -1 Kg ult. sem.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center mb-35px'>
          <div>
            <h2 className='font-medium'> Estadisticas de entrenamiento</h2>
            <div className='flex justify-start items-center gap-4'>
              <h2 className='text-primaryDefault font-medium'>
                31 Nov - 31 Dec
              </h2>

              <Image src={arrowDown} alt='arrow-down' />
            </div>
          </div>

          <h2 className='text-center bg-gray900 h-8 w-8 rounded-lg'>...</h2>
        </div>
        <div className='p-4 '>
          <Grafic2 />
        </div>
        <div className=' mb-[5rem] flex justify-between items-center gap-4 border-t border-gray-700 h-41px'>
          <h2 className='font-medium text-sm'>Ultima Semana</h2>
          <Image src={arrowDownWhite} alt='arrow-down' />
        </div>
      <Navbar />
    </GlobalContainer>
  )
}

export default Estadisticas;
