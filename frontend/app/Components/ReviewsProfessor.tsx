import React from 'react'
import { urlAPi } from '../utils/urlBase';
import { useFetchDataGet } from '../utils/useFetchDataGet';
import Loader from './Loader';

const ReviewsProfessor = ({closeModal, params}:{closeModal:()=>void, params: {profesor: string;}}) => {

    const urlToFetch = `${urlAPi}/instructors/${params.profesor}/reviews`;
    const {data, isLoading, error} = useFetchDataGet(urlToFetch);
    if (isLoading) return <div className='flex items-center justify-center h-screen'><Loader/></div> ;
    if (error) return <div className='flex items-center justify-center h-screen'>Error: {error}</div>;
    if (!data) return <div className='flex items-center justify-center h-screen'>No profile data</div>;
    //console.log(data)

    return (
        <div id="default-modal"  tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto bg-black">
                    <div className="relative  rounded-lg shadow">
                        
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold  dark:text-white">
                                Reseñas
                                
                            </h3>
                            <button onClick={closeModal}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        <div className='text-black h-[50vh]' style={{ background: 'white', padding: '16px' }}>
                            
                        </div>
                        
                        {/*<div  className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="default-modal" type="button" className="text-white bg-primaryDefault  focus:ring-4 focus:outline-none focus:outline-primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 text-center ">I accept</button>
                        </div>*/}
                    </div>
                </div>
            </div>
    )
}

export default ReviewsProfessor;