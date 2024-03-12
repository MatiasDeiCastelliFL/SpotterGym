/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import backgroundImage from "../../public/Rectangle 2.png";
import Image from 'next/image';
import megatlon from "../../public/image 1.png";
import { useGlobalStore } from '../store/GlobalStore';
import codigoQR from "../../public/QR Code.png"
import ModalQR from './ModalQR';


const CardClient = () => {
    const {user} = useGlobalStore<any>((state)=>state);
    //console.log(user.image, rolUser)
    const [showModal, setShowModal] = useState(false);
    return (
    <div className='w-[328px] h-[146px] mt-[24px] relative'>
        <Image src={backgroundImage} alt='background-image' />
        <div className='absolute top-0 left-0 right-0 bottom-0'>
            <div className='w-full h-full grid grid-cols-12'>
                    <div className="col-span-4 flex justify-center items-center">
                    <img className='w-[74px] rounded-full' src={user.image} alt={"avatar"} />
                </div>
                <div className="col-span-4  flex flex-col justify-center">
                    <div className='my-[0.2rem]'>
                        <h2 className='font-bold text-[12px]'>Nombre</h2>
                        <p className='text-[10px]'>{user.firstName} {user.lastName} </p>
                    </div>
                    <div className='my-[0.2rem]'>
                        <h2 className='font-bold text-[12px]'>Vencimiento</h2>
                        <p className='text-[10px]'>12/2024</p>
                    </div>
                    <div className='my-[0.2rem]'>
                        <h2 className='font-bold text-[12px]'>Codigo Cliente</h2>
                        <p className='text-[10px]'>123456</p>
                    </div>
                    
                </div>
                <div className="col-span-4 flex flex-col justify-between items-end px-[13px] py-[14px]">
                    <Image className='w-[56px]' src={megatlon} alt='megatlon' />
                    <button onClick={()=>{setShowModal(!showModal)}}>
                        <Image className='w-[113px]' src={codigoQR} alt='megatlon' />
                    </button>
                    {showModal && (<ModalQR onShow={()=>{setShowModal(!showModal)}} email={user.email} firstName={user.firstName} />)}
                </div>
            </div>
        </div>
    </div>
  )
}
export default CardClient;