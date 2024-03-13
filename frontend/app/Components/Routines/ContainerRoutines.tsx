import React from 'react'
import CardRutinas from '../CardRutinas'
import ImagenRutinaBiceps from "@/public/ImagenRutinaBiceps.png";
import ImagenRutinaEspalda from "@/public/ImagenRutina2.png";
import ImagenRutinaCuerdas from "@/public/ImagenRutina3.png";
import { urlAPi } from '@/app/utils/urlBase';
import { useFetchDataGet } from '@/app/utils/useFetchDataGet';
import Loader from '../Loader';

interface ObjetoAPI {
    _id: String;
    name: String;
    // Otros campos si los tienes
}

const ContainerRoutines = () => {

    const urlToFetch = `${urlAPi}/routine/all`;
    const {data, isLoading, error} = useFetchDataGet(urlToFetch);

    if (isLoading) return <div className='flex items-center justify-center h-screen'><Loader/></div> ;
    if (error) return <div className='flex items-center justify-center h-screen'>Error: {error}</div>;
    if (!data) return <div className='flex items-center justify-center h-screen'>No profile data</div>;

    console.log(data)

  return (
    <div className="h-52 overflow-hidden overflow-x-auto">
                <div className='flex gap-2 w-[480px]'>
                    {data.map((item: any)=>{

                        console.log(item)
                        return (
                            <div key={item._id}>
                                <CardRutinas
                                    imagen={ImagenRutinaEspalda}
                                    tiempo={30}
                                    active={false}
                                    ejercicio={item.name}
                                    idRoutine={item._id}
                                    
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}

export default ContainerRoutines