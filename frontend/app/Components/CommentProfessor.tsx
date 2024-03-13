import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const CommentProfessor = ({closeModal, comment}:{closeModal:()=>void, comment:(value:string)=>void}) => {

    const validationSchema = Yup.object({
    comment: Yup.string()
        .required('Este campo es requerido'),
    });

    
    const formik = useFormik({
        initialValues: {
            comment: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
            // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
            comment(values.comment)
            resetForm()
            closeModal()
        },
    });

    return (
        <div id="default-modal"  tabIndex={-1} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto bg-black">
                <div className="relative  rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold  dark:text-white">
                            Añadir comentario
                        </h3>
                        <button onClick={closeModal}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className='text-black h-[50vh]'>
                        <form onSubmit={formik.handleSubmit} className='mt-[3rem]'>
                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea
                                        id="comment" 
                                        rows={4} 
                                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                                        placeholder="Escribe un comentario..." 
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.comment}
                                        />
                                </div>
                                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                    <button type="submit" className=" rounded-lg inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primaryDefault">
                                        Añadir comentario
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                            
                            {/*<div  className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="default-modal" type="button" className="text-white bg-primaryDefault  focus:ring-4 focus:outline-none focus:outline-primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 text-center ">I accept</button>
                            </div>*/}
                        </div>
                    </div>
                </div>
        )
}

export default CommentProfessor