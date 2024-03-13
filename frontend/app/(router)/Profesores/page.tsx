"use client"
import React from 'react'
import Header from '../../Components/Header';
import SectionButton from '../../Components/SectionButton';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import GlobalContainer from '../../Components/GlobalContainer';
import CardContainerProfessor from '../../Components/CardContainerProfessor';
import { urlAPi } from '@/app/utils/urlBase';
import fetchingDataGet from '@/app/utils/fetchingDataGet';



export default async function Profesores(){

  const urlToFetch = `${urlAPi}/instructors`;

  const data = await fetchingDataGet(urlToFetch);
  return (
    <div>
      <GlobalContainer>
        <Header/>
        <Navbar/>
        <SectionButton section='Profesores' active={false} description='Conoce a los profesores de tu sede' />
        <CardContainerProfessor data={data}/>
      </GlobalContainer>
      <Footer/>
    </div>
    
  )
}


