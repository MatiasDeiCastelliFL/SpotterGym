"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useGlobalStore } from '../store/GlobalStore';
import Swal from 'sweetalert2';
import { urlAPi } from '../utils/urlBase';
import Loader from './Loader';
import { useFetchDataPost } from '../utils/useFetchDataPost';


const SendDataProfessor = ({ params, dataProfessor, ratingProfessor, comment }: { params: {profesor: string;}, dataProfessor:any, ratingProfessor:number, comment:string}) => {
    const {user} = useGlobalStore<any>((state)=>state)
    const nameReviewer = {reviewer:`${user.firstName} ${user.lastName}`, rating:ratingProfessor.toString(), comment:comment, client:`${user._id}`};
    const urlToFetch = `${urlAPi}/instructors/${params.profesor}/reviews`;
    console.log(urlToFetch)
    const router = useRouter()


    const {data, isLoading, error} = useFetchDataPost(urlToFetch, nameReviewer);
    if (isLoading) return <div className='flex items-center justify-center h-screen'><Loader/></div> ;
    if (error) return <div className='flex items-center justify-center h-screen'>Error: {error}</div>;
    if (!data) return <div className='flex items-center justify-center h-screen'>No profile data</div>;
    
        if(data){
            Swal.fire({
            icon: "success",
            title: `Calificación Enviada`,
            showConfirmButton: false,
            timer: 1500
        });
    }
    

    return (
        <div className="w-full p-[20px] h-full bg-black">
            <div>
                    <p className="mt-[30px] mb-[44px] text-center font-semibold">
                    Gracias por calificar a {dataProfessor.data.firstName} {dataProfessor.data.lastName}
                    </p>
                    <button onClick={() => {  router.push('/Profesores')   } } type="button" className="mt-[12px] text-white w-full focus:outline-none  bg-primaryDefault hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                        Continuar
                    </button>
            </div>
        </div>
    )
}

export default SendDataProfessor