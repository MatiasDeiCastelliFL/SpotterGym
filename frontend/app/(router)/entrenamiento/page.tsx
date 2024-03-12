"use client"
import React from "react";
import Header from "@/app/Components/Header";
import SectionButton from "@/app/Components/SectionButton";
import CardChartUser from "@/app/Components/CardChartUser";
import CardRutinas from "@/app/Components/CardRutinas";
import Navbar from "@/app/Components/Navbar";
import ImagenRutinaSentadilla from "@/public/ImagenRutina1.png";
import ImagenRutinaEspalda from "@/public/ImagenRutina2.png";
import ImagenRutinaCuerdas from "@/public/ImagenRutina3.png";
import Calendario from "@/app/Components/Calendario";
import Spotify from "@/app/Components/Spotify";
import GlobalContainer from "@/app/Components/GlobalContainer";
import ContainerRoutines from "@/app/Components/Routines/ContainerRoutines";

const Entrenamiento = () => {
    return (
        <GlobalContainer>
            <Header />
            <Navbar />
            <div className='mt-9'>
                <SectionButton
                    section='Mi entranamiento'
                    description='Sigue tu entrenamiento'
                    active
                />
            </div>
            <CardChartUser />
            <div className=''>
                <SectionButton
                    section='Tus rutinas para hoy'
                    description='Sigue tu lista de ejercicios personalizada'
                    active
                />
            </div>
            <div className="h-52 overflow-hidden overflow-x-auto">
                <div className='flex gap-2 w-[480px] '>
                    <CardRutinas
                        imagen={ImagenRutinaSentadilla}
                        tiempo={30}
                        active
                        ejercicio="Sentadillas"
                        idRoutine="asd"
                    />
                    <CardRutinas
                        imagen={ImagenRutinaEspalda}
                        tiempo={30}
                        active
                        ejercicio="Espalda"
                        idRoutine="asd"
                    />
                    <CardRutinas
                        imagen={ImagenRutinaCuerdas}
                        tiempo={20}
                        active
                        ejercicio="Cuerda"
                        idRoutine="asd"
                    />
                </div>
            </div>
            <div className='mt-9'>
                <SectionButton
                    section='Rutinas sugeridas para hoy'
                    description='Profesores disponibles en este momento'
                    active={false}
                />
            </div>

            <ContainerRoutines/>
            
            <div className='mt-9'>
                <SectionButton
                    section='Horarios de la sede'
                    description='Ve los días y horarios de tu gimnasio'
                    active={false}
                />
            </div>
            <Calendario />
            <Spotify />
        </GlobalContainer>
    );
};

export default Entrenamiento;

