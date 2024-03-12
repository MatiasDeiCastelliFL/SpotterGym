import ImagenRutinaSentadilla from "@/public/ImagenRutina1.png";
import ImagenRutinaEspalda from "@/public/ImagenRutina2.png";
import ImagenRutinaCuerdas from "@/public/ImagenRutina3.png";
import ImagenRutinaBiceps from "@/public/ImagenRutinaBiceps.png";
import CardRutinas from "./CardRutinas";
import Navbar from "./Navbar";

const EjerciciosSemana = () => {
    return (
        <div className="">
            <Navbar />
            <div className='mt-4'>
                <div className='h-60 overflow-hidden overflow-x-auto'>
                    <p>Lunes</p>
                    <div className='flex w-[480px]'>
                        <CardRutinas
                            imagen={ImagenRutinaSentadilla}
                            tiempo={30}
                            calorias={200}
                            active
                            ejercicio='Hoy - Sentadillas'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaEspalda}
                            tiempo={30}
                            calorias={300}
                            active
                            ejercicio='Hoy - Espalda'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaCuerdas}
                            tiempo={20}
                            calorias={100}
                            active
                            ejercicio='Hoy - Cuerda'
                        />
                    </div>
                </div>
                <div className='h-60 overflow-hidden overflow-x-auto'>
                    <p>Martes</p>
                    <div className='flex w-[480px]'>
                        <CardRutinas
                            imagen={ImagenRutinaSentadilla}
                            tiempo={30}
                            calorias={200}
                            active
                            ejercicio='Hoy - Sentadillas'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaEspalda}
                            tiempo={30}
                            calorias={300}
                            active
                            ejercicio='Hoy - Espalda'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaCuerdas}
                            tiempo={20}
                            calorias={100}
                            active
                            ejercicio='Hoy - Cuerda'
                        />
                    </div>
                </div>
                <div className='h-60 overflow-hidden overflow-x-auto'>
                    <p>Miercoles</p>
                    <div className='flex w-[480px]'>
                        <CardRutinas
                            imagen={ImagenRutinaSentadilla}
                            tiempo={30}
                            calorias={200}
                            active
                            ejercicio='Hoy - Sentadillas'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaEspalda}
                            tiempo={30}
                            calorias={300}
                            active
                            ejercicio='Hoy - Espalda'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaCuerdas}
                            tiempo={20}
                            calorias={100}
                            active
                            ejercicio='Hoy - Cuerda'
                        />
                    </div>
                </div>
                <div className='h-60 overflow-hidden overflow-x-auto'>
                    <p>Jueves</p>
                    <div className='flex w-[480px]'>
                        <CardRutinas
                            imagen={ImagenRutinaSentadilla}
                            tiempo={30}
                            calorias={200}
                            active
                            ejercicio='Hoy - Sentadillas'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaEspalda}
                            tiempo={30}
                            calorias={300}
                            active
                            ejercicio='Hoy - Espalda'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaCuerdas}
                            tiempo={20}
                            calorias={100}
                            active
                            ejercicio='Hoy - Cuerda'
                        />
                    </div>
                </div>
                <div className='h-60 overflow-hidden overflow-x-auto'>
                    <p>Viernes</p>
                    <div className='flex w-[480px]'>
                        <CardRutinas
                            imagen={ImagenRutinaSentadilla}
                            tiempo={30}
                            calorias={200}
                            active
                            ejercicio='Hoy - Sentadillas'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaEspalda}
                            tiempo={30}
                            calorias={300}
                            active
                            ejercicio='Hoy - Espalda'
                        />
                        <CardRutinas
                            imagen={ImagenRutinaCuerdas}
                            tiempo={20}
                            calorias={100}
                            active
                            ejercicio='Hoy - Cuerda'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EjerciciosSemana;
