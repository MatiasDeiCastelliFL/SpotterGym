'use client';
import Image from 'next/image';
import arrowLeft from '../../../../public/Arrow-Left.svg';
import arrowUp from '../../../../public/Arrow-up.svg';
import running from '../../../../public/Running.svg';
import cicle from '../../../../public/cicle.svg';
import Header from '@/app/Components/Header';
import Grafic3 from '@/app/Components/Grafic3';
import Navbar from '@/app/Components/Navbar';
import arrowDown from '../../../../public/arrow-down-white.svg';
import GlobalContainer from '@/app/Components/GlobalContainer';

export default function Activity() {
  return (
    <GlobalContainer>
      <Header />
      <div className='flex items-center mt-7'>
        <Image width={24.6} height={24} src={arrowLeft} alt='arrow-left' />
        <div className=' flex flex-col justify-center ml-4'>
          <h2 className='font-semibold text-lg'>Cardio</h2>
          <p className='font-light text-xs'>Segui tus avances</p>
        </div>
      </div>
      <div className='flex justify-center aling-center '>
        <div className='mt-4'>
          <h2 className='mt-3 mb-3 font-semibold text-lg '>Running</h2>
          <ul className='ml-3 mr-3 flex justify-between text-center space-x-5'>
            <li className='flex flex-col mr-3 mt-3 text-center font-semibold text-base'>
              Pasos <span className='mt-4'>8.342</span>
            </li>
            <li className='flex flex-col mr-3 mt-3 font-semibold text-base'>
              Tiempo <span className='mt-4'>00:30:46</span>
            </li>
            <li className='flex flex-col mr-3 mt-3 font-semibold text-base'>
              KCal <span className='mt-4'>245</span>
            </li>
            <li className='flex flex-col mr-3 mt-3  font-semibold text-base'>
              Distancia <span className='mt-4'>5.42 km</span>
            </li>
          </ul>
          <div className='border-t border-gray600 mt-7'>
            <p className='flex justify-between mt-3 mb-3'>
              Vs. semana anterior{' '}
              <span className='font-medium text-xs text-center text-primaryDef w-16 h-6 rounded-md bg-primaryDark p-0.5px p-3px flex items-center justify-center'>
                <Image
                  width={8.17}
                  height={10.5}
                  src={arrowUp}
                  alt='arrow-up'
                  className='mr-1'
                />
                78%
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex aling-center justify-center'>
        <div
          style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            marginTop: '7rem',
          }}
          className='flex rounded-full w-15 h-15 bg-primaryDef  overflow-hidden'
        >
          <Image width={23} height={23} src={running} alt='running' />
        </div>
        <div className='absolute mt-44 font-semibold text-lg'>
          <h2 className='text-primaryDefault'>4 Km</h2>
          <h2 className='text-primaryLigth'>5.42 Km</h2>
        </div>
        <div className='mt-6 flex justify-center aling-center'>
          <Grafic3 />
        </div>
        <div className='w-custom absolute flex mt-96  border-t border-gray600'>
          <h2 className='mt-[20px]'>Hoy</h2>
          <Image src={arrowDown} alt='arrow-down' className='ml-2 mt-6' />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='flex justify-center aling-center '>
        <div className='mt-4'>
          <h2 className='mt-3 mb-3 font-semibold text-lg '>Bicicleta</h2>
          <ul className='ml-3 mr-3 flex justify-between text-center space-x-5'>
            <li className='flex flex-col mr-3 mt-3 text-center font-semibold text-base'>
              Pasos <span className='mt-4'>8.342</span>
            </li>
            <li className='flex flex-col mr-3 mt-3 font-semibold text-base'>
              Tiempo <span className='mt-4'>00:30:46</span>
            </li>
            <li className='flex flex-col mr-3 mt-3 font-semibold text-base'>
              KCal <span className='mt-4'>245</span>
            </li>
            <li className='flex flex-col mr-3 mt-3  font-semibold text-base'>
              Distancia <span className='mt-4'>5.42 km</span>
            </li>
          </ul>
          <div className='border-t border-gray600 mt-7'>
            <p className='flex justify-between mt-3 mb-3'>
              Vs. semana anterior{' '}
              <span className='font-medium text-xs text-center text-primaryDef w-16 h-6 rounded-md bg-primaryDark p-0.5px p-3px flex items-center justify-center'>
                <Image
                  width={8.17}
                  height={10.5}
                  src={arrowUp}
                  alt='arrow-up'
                  className='mr-1'
                />
                78%
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex aling-center justify-center'>
        <div
          style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            marginTop: '7rem',
          }}
          className='flex rounded-full w-15 h-15 bg-primaryDef  overflow-hidden'
        >
          <Image width={23} height={23} src={cicle} alt='cicle' />
        </div>
        <div className='absolute mt-44 font-semibold text-lg'>
          <h2 className='text-primaryDefault'>4 Km</h2>
          <h2 className='text-primaryLigth'>5.42 Km</h2>
        </div>
        <div className='mt-6 flex justify-center aling-center'>
          <Grafic3 />
        </div>
        <div className='w-custom absolute flex mt-96  border-t border-gray600'>
          <h2 className='mt-[20px]'>Hoy</h2>
          <Image src={arrowDown} alt='arrow-down' className='ml-2 mt-6' />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='ml-[25px] flex flex-col aling-center justify-center w-customGraphic'>
        <h2 className='font-medium text-base'>Un dato</h2>
        <p className='font-normal text-sm mt-[8px]'>
          ¡El cardio es clave para una vida saludable y en forma! Te ayuda a
          aumentar la energía, reducir el estrés, perder peso, mejorar el sueño
          y fortalecer el sistema inmunológico. Cada sesión de cardio te acerca
          más a tus metas de bienestar. ¡Vamos juntos por un camino más
          saludable!
        </p>
      </div>
      <Navbar />
    </GlobalContainer>
  );
}
