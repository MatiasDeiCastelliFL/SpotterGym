"use client";
import React, { useEffect, useState } from "react";
import HorariosRutina from "./HorariosRutina";

interface DiaDelMes {
    numero: number;
    diaSemana: number;
}

const Calendario = () => {
    const [dias, setDias] = useState<DiaDelMes[]>([]);
    const [fechaActual] = useState<Date>(new Date());
    const [mesActual, setMesActual] = useState<number>(new Date().getMonth());
    const [avanzarMes, setAvanzarMes] = useState(0);

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const diasSemana = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];

    function obtenerDiasMes(mes: number, año: number): DiaDelMes[] {
        const primerDiaDelMes = new Date(año, mes, 1);
        const ultimoDiaDelMes = new Date(año, mes + 1, 0);
        const diasDelMes: DiaDelMes[] = [];

        for (let dia = 1; dia <= ultimoDiaDelMes.getDate(); dia++) {
            const fecha = new Date(año, mes, dia);
            diasDelMes.push({
                numero: dia,
                diaSemana: fecha.getDay(),
            });
        }

        return diasDelMes;
    }

    useEffect(() => {
        //console.log(mesActual);
        setDias(obtenerDiasMes(mesActual, fechaActual.getFullYear()));
    }, [fechaActual, mesActual]);

    const cambiarMes = (direccion: "atras" | "adelante") => {
        let nuevoMes = mesActual;
        if (direccion === "atras") {
            nuevoMes = nuevoMes === 0 ? 11 : nuevoMes - 1;
        } else {
            nuevoMes = nuevoMes === 11 ? 0 : nuevoMes + 1;
        }
        setMesActual(nuevoMes);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!scrolled) {
            const elemento = document.getElementById(`num${fechaActual.getDate()}`);
            if (elemento) {
                setTimeout(() => {
                    elemento.scrollIntoView({ behavior: "smooth" });
                    setScrolled(true);
                }, 1);
            }
        }
    }, [scrolled, fechaActual]);

    return (
        <div>
            <div className='w-full flex justify-center py-2 items-center'>
                <button
                    className='text-2xl'
                    onClick={() => cambiarMes("atras")}
                >
                    &lt;
                </button>
                <h2 className='text-[12px] mx-12 uppercase'>
                    {meses[mesActual]}
                </h2>
                <button
                    className='text-2xl'
                    onClick={() => cambiarMes("adelante")}
                >
                    &gt;
                </button>
            </div>
            <div className='w-full flex gap-3 overflow-hidden overflow-x-auto'>
                {dias.map((dia, index) => (
                    <div
                        key={index}
                        className={`num${index} flex flex-col text-center rounded-xl px-4 py-5  ${
                            dia.numero === fechaActual.getDate()
                                ? "bg-primaryDefault"
                                : ""
                        }`}
                    >
                        <p className='text-[12px]'>
                            {diasSemana[dia.diaSemana]}
                        </p>
                        <p className='text-sm'>{dia.numero}</p>
                    </div>
                ))}
            </div>
            <HorariosRutina />
        </div>
    );
};

export default Calendario;
