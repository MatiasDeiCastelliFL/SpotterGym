'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import spotterLogo from '../../../public/spooter-logo.svg';
import mailIcon from "../../../public/mail-icon-input.svg";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'
import Loader from '@/app/Components/Loader';
import { useGlobalStore } from '@/app/store/GlobalStore';
import Link from 'next/link';
import { filtrarRol } from '@/app/utils/filtrarRol';
import { registro } from '@/app/utils/registro';



export default function RegisterForm() {
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const {rolUser} = useGlobalStore((state) => state);
    const [roleArray, setRolArray] = useState<any>([]);
  
    useEffect(() => {
        const timer = setTimeout(() => {
        setShowForm(true);
        }, 1000);
        const traerRol = async ()=>{
          let response = await filtrarRol();
          setRolArray([...response.rol]);
        }
        traerRol()
        return () => clearTimeout(timer);
    }, []);



    const validationSchema = Yup.object({
        firstName: Yup.string().required("El nombre es requerido"),
        lastName: Yup.string().required("El apellido  es requerido"),
        phone: Yup.string().required("El telefono es requerido"),
        email: Yup.string()
        .email('Ingrese un email válido')
        .required('El email es requerido'),
        pass: Yup.string()
        .min(8, 'La contraseña debe tener al menos  8 caracteres')
        .max(12,"la contraseña debe ser igual o menor a 12 caracteres")
        .required('La contraseña es requerida')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo"),
        role_id: Yup.string(),
        description: Yup.string().required(),
    });

    


  const formik = useFormik({
    initialValues:{
      email: "",
      pass: "",
      firstName:"",
      lastName:"",
      phone:"",
      role_id:"",
      description:"",
    },
    validationSchema,
    onSubmit: async  (values, {resetForm}) => {
      
      setLoading(true)
      const response = await registro(values);
      console.log(response);
      if(response.status === 201){
        Swal.fire({
            icon: "success",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500
        });
        setLoading(false)
        resetForm();
        router.push("/acceso")
        
        return;
      }

      if(response.status === 404){
        Swal.fire({
            icon: "error",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500
        });
        setLoading(false)
        resetForm();
        return;
      }
    },
  });


  //esta validación permite determinar sino se ha iniciado sesión antes.
  if(rolUser !== ""){

    if(rolUser === "cliente"){
      router.push("/inicio/cliente");
    }
        
    if(rolUser === "dueño"){
      router.push("/inicio/duennio");
    }

    if(rolUser === "profesor/a"){
      router.push("/inicio/profesor")
    }

    if(rolUser === "secretario/a"){
      router.push("/inicio/secretario")
    }
    
    return;
  }



  return (
    <div className='flex items-center justify-center h-screen'>
      {!showForm && (
        <div className='bg-#1E1E1E'>
          <Image
            className='w-[124px] text-white'
            src={spotterLogo}
            alt={'logo'}
          />
        </div>
      )}
      {showForm && (
        <form
          onSubmit={formik.handleSubmit}
          className='bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10'
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className='flex justify-center mb-5'>
                <Image src={spotterLogo} alt='logo' />
              </div>

              <h2 className='mb-6'>Registrar Usuario</h2>
                
                    <div className='flex items-center relative mt-2'>
                        <input
                            type='text'
                            id='firstName'
                            placeholder='Nombre'
                            className='text-primaryDefault bg-gray-800 mb-2 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.firstName)}</div>
                        ) : null}

                        <div className=' absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primaryDefault">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>

                    </div>

                    <div className='relative mt-2'>
                        <input
                            type='text'
                            id='lastName'
                            placeholder='Apellido'
                            className='text-primaryDefault bg-gray-800 mb-2 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.lastName)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primaryDefault">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='relative mt-2'>
                        <input
                            type='text'
                            id='phone'
                            placeholder='Telefono'
                            className='text-primaryDefault bg-gray-800 mb-2 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.lastName)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primaryDefault">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                    </div>

                    <div className='relative mt-2'>
                        <input
                            type='text'
                            id='description'
                            placeholder='Breve descripción de ti'
                            className='text-primaryDefault bg-gray-800 mb-2 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                        {formik.touched.description && formik.errors.description ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.description)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primaryDefault">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                        </div>
                    </div>
                
                    <div className='relative mt-2'>
                        <input
                            type='email'
                            id='email'
                            placeholder='Correo electronico'
                            className='text-primaryDefault bg-gray-800 mb-2 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.email)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <Image src={mailIcon} alt='Imagen' width={20} height={20} />
                        </div>
                    </div>

                    <div className='relative mt-2'>
                        <input
                            type='password'
                            id='pass'
                            placeholder='Contraseña'
                            className='text-primaryDefault bg-gray-800 mb-2 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
                            onChange={formik.handleChange}
                            value={formik.values.pass}
                        />
                        {formik.touched.pass && formik.errors.pass ? (
                        <div className='my-1 text-primaryDefault'>{String(formik.errors.pass)}</div>
                        ) : null}
                        <div className='absolute left-2 top-1/3 transform -translate-y-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primaryDefault">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                    </div>
                    
                    {
                      roleArray.length > 0 && (
                      <div className='my-4' >
                        <label htmlFor="role_id" className=" flex items-center  mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primaryDefault">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                          </svg>
                          <span className='ml-3'>Tipo de usuario</span>
                        </label>
                        <select value={formik.values.role_id} onChange={formik.handleChange} name='role_id' id="role_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {
                            roleArray.map((role: any, key:any) =>{
                              if(role.name === "secretario/a"){
                                return 
                              }
                              return (
                                <option key={key} value={role._id}>{role.name}</option>
                              )
                            })
                          }
                        </select>
                    </div>

                      )
                    }
                    
                    

                    


              <button
                type='submit'
                className='p-2 bg-primaryDefault text-white rounded-md w-full '
              >
                Confirmar
              </button>
              <h2 className='text-gray-500 mt-4'>
                Ya tienes cuenta?
                <Link href={"/acceso"}><span className='text-primaryLigth '> Inicia Sesión</span></Link>
              </h2>
            </>
          )}
        </form>
      )}
    </div>
  );
}