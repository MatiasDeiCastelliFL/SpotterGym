import React, { Suspense } from 'react'
import CardClient from "../../../Components/CardClient";
import Header from '../../../Components/Header';
import SectionButton from '../../../Components/SectionButton';
import Footer from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';
import GlobalContainer from '../../../Components/GlobalContainer';
import CardContainerActivities from '../../../Components/CardContainerActivities';
import fetchingDataGet from '@/app/utils/fetchingDataGet';
import { urlAPi } from '@/app/utils/urlBase';
import CardProfessor from '@/app/Components/CardProfessor';

export default async function  InicioCliente(){
  const urlToFetch = `${urlAPi}/instructors`;
  const data = await fetchingDataGet(urlToFetch);

  return (
    <div>
      <GlobalContainer>
        <Header/>
        <div className="mt-[36px]">
            <h1 className="text-[16px] h-[19px] font-[sans]">Bienvenido a Spotter</h1>
            <p className="text-[9px] mt-[0.2rem]">¡Nuevos desafios te esperan!</p>
        </div>
        <CardClient/>
        <div>
          <SectionButton section={"Profesores"} description={"Accede a los profesores de tu sede"} active/>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="h-52 overflow-hidden overflow-x-auto">
                <div className='flex gap-2 w-[480px] '>
                    {data.data.map((profesor: any, key: React.Key | null | undefined)=>{
                      //console.log(profesor)
                      const {firstName,lastName,  active, rating, image, id} =  profesor;
                      return(
                        <div  key={key} className='flex justify-center items-center mt-[0.8rem]'>
                          <CardProfessor id={id}  rate={rating} image={image} lastName={lastName} firstName={firstName} available={active}/>
                        </div>
                      )
                    })}
                </div>
              </div>
            </Suspense>
        </div>

        <div>
          <SectionButton section={"Actividades"} description={"Distintas actividades y clases que ofrece tu gimnasio"} active />
          <CardContainerActivities/>
        </div>
        <Navbar/>
        
    </GlobalContainer>
    <Footer/>
    </div>
    
  )
}



