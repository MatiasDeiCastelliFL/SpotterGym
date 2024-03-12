import React from "react";

const HorariosRutina = () => {
    const horarios = [
        { hora: 6, ejercicio: ["Abdominales"] },
        { hora: 7, ejercicio: [""] },
        { hora: 8, ejercicio: [""] },
        { hora: 9, ejercicio: ["Cardio"] },
        { hora: 10, ejercicio: [""] },
        { hora: 11, ejercicio: [""] },
        { hora: 12, ejercicio: ["Abdominales"] },
        { hora: 13, ejercicio: [""] },
        { hora: 14, ejercicio: [""] },
        { hora: 15, ejercicio: [""] },
        { hora: 16, ejercicio: [""] },
        { hora: 17, ejercicio: [""] },
    ];
    return (
        <div className='w-full h-60 my-4 overflow-hidden overflow-y-auto'>
            {horarios.map((horario, index) => (
                <div
                    key={index}
                    className='flex items-center justify-center h-10 w-full'
                >
                    <p className='text-[12px] font-semibold w-1/3 text-center'>{horario.hora}:00 {horario.hora <= 12 ? 'AM' : 'PM'}</p>
                    {horario.ejercicio.map((ejercicio, index) => (
                        <p key={index} className={`text-[12px] font-semibold m-auto rounded-full ${ejercicio ? "py-2 px-5" : null} bg-gray-100 text-slate-950`}>
                        {ejercicio}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default HorariosRutina;
