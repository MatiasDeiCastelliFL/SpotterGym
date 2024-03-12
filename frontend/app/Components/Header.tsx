/* eslint-disable @next/next/no-img-element */
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../public/Frame 145 1.svg";
import campana from "../../public/bell-outline.svg"
import avatar from "../../public/Roberta Casas.png";
import PushNotification from './PushNotification';
import { useGlobalStore } from '../store/GlobalStore';

const Header = () => {
  
  const [show, setShow] = useState(false)
  const {user} = useGlobalStore<any>((state)=>state);
  return (
    <div id='logo' className='flex justify-between items-center relative'>
        
        {show && <PushNotification removePush={()=>{setShow(!show)}} />}
        <div>
            <Image className="w-[124px]" src={logo} alt={"logo"} />
        </div>
        <div className='flex items-center justify-between'>
            
            <img className='w-[24px] h-[24px] rounded-full mr-3' src={user.image} alt='avatar'/>
            <Image className="w-[24px]" src={campana} alt={"campana"} onClick={()=> setShow(!show)} />
        </div>
    </div>
  )
}

export default Header