'use client';
import Image from 'next/image';
import arrowLeft from '@/public/Arrow-Left.svg';
import imageSingMore from '@/public/+.svg';
import Header from '@/app/Components/Header';
import Navbar from '@/app/Components/Navbar';
import GlobalContainer from '@/app/Components/GlobalContainer';

export default function Notas() {
  return (
    <GlobalContainer>
      <div className='flex justify-center aling-center flex-col'>
      <Header />
      <div className='flex items-center mt-7'>
        <Image width={24.6} height={24} src={arrowLeft} alt='arrow-left' />
        <div className=' flex flex-col justify-center ml-4'>
          <h2 className='font-semibold text-lg'>Notas</h2>
          <p className='font-light text-xs'>Para organizar todas tus ideas</p>
        </div>
      </div>
      <div
        style={{
          marginLeft: '2rem',
        }}
        className='flex aling-center justify-center m'
      >
        <ul className=' flex flex-wrap justify-between'>
          <li className='bg-gray700 w-[152px] h-[208px] rounded-[20px] mt-[24px]  '></li>

          <li className='bg-gray700 w-[152px] h-[208px] rounded-[20px] mt-[24px]'></li>
        </ul>
        <ul className='flex flex-wrap justify-between'>
          <li className='bg-gray700 w-[152px] h-[208px] rounded-[20px] mt-[24px]  '></li>

          <li className='bg-gray700 w-[152px] h-[208px] rounded-[20px] mt-[24px]'></li>
        </ul>
        <div
          style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            marginTop: '32rem',
            marginLeft: '14rem',
          }}
          className='flex rounded-full w-15 h-15 bg-primaryDef  overflow-hidden'
        >
          <Image width={23} height={23} src={imageSingMore} alt='+' />
        </div>
      </div>
      <Navbar />
    </div>
    </GlobalContainer>
    
  );
}
