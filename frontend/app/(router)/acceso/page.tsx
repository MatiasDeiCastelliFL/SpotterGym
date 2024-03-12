'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import spotterLogo from '../../../public/spooter-logo.svg';
import mailIcon from "../../../public/mail-icon-input.svg";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'
import { login } from '@/app/utils/inicioSesion';
import Loader from '@/app/Components/Loader';
import { useGlobalStore } from '@/app/store/GlobalStore';
import Link from 'next/link';



export default function LoginForm() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()
  const {setUser, setRolUser, rolUser, isAuthClient, setIsAuthClient} = useGlobalStore((state) => state)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);



  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ingrese un email válido')
      .required('El email es requerido'),
    pass: Yup.string()
      .min(8, 'La contraseña debe tener al menos  8 caracteres')
      .max(12,"la contraseña debe ser igual o menor a 12 caracteres")
      .required('La contraseña es requerida'),
  });

  let storedEmail:any;
  let storedpass:any;
  if (typeof window !== 'undefined') {
      storedEmail = JSON.parse(localStorage.getItem('user-spotter-email') || "{}")
      storedpass = JSON.parse(localStorage.getItem('user-spotter-pass') || "{}")
  }


  const formik = useFormik({
    initialValues:{ 
      email: typeof storedEmail === "object" ? "" : storedEmail,
      pass: typeof storedpass === "object" ? "" : storedpass,
    },
    validationSchema,
    onSubmit: async  (values, {resetForm}) => {
      
        if (rememberMe) {
          // Almacena la contraseña en una cookie o localStorage
            if (typeof window !== 'undefined') {
              localStorage.setItem('user-spotter-email', JSON.stringify(values.email))
              localStorage.setItem('user-spotter-pass', JSON.stringify(values.pass))
            }
        }
      
     
      setLoading(true)
      const response = await login(values);
      if(response.status === 200){
        Swal.fire({
            icon: "success",
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 1500
        });
        setLoading(false)
        resetForm();
        setUser(response.user);
        console.log(response.user.role_id.name)
        const dashRedirect = response.user.role_id.name;
        setRolUser(dashRedirect)
        setIsAuthClient(true)
        //Aqui va una  validacion de acuerdo al rol del usuario en base a ello redirige a dashboards distintos
        if(dashRedirect === "cliente"){
          //setIsAuthClient(true)
          router.push("/inicio/cliente");
        }
        
        if(dashRedirect === "dueño"){
          router.push("/inicio/duennio");
        }

        if(dashRedirect === "profesor/a"){
          router.push("/inicio/profesor")
        }

        if(dashRedirect === "secretario/a"){
          router.push("/inicio/secretario")
        }
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
              <div className='flex justify-center mb-40'>
                <Image src={spotterLogo} alt='logo' />
              </div>
              <h2 className='mb-6'>Inicia Sesión</h2>
              <label htmlFor='email' className='mb-2'>
                Correo Electrónico
              </label>
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  placeholder='Correo electronico'
                  className='text-primaryDefault bg-gray-800 mb-4 p-2 border-none rounded-lg w-full pl-10 border border-gray-300'
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

              <label htmlFor='pass' className='mb-2 '>
                Contraseña
              </label>
              <input
                type='pass'
                id='pass'
                className='mb-4 p-2 border-none rounded-lg w-full text-primaryDefault bg-gray-800'
                onChange={formik.handleChange}
                value={formik.values.pass}
                placeholder={'**********'}
              />
              {formik.touched.pass && formik.errors.pass ? (
                <div className='my-1 text-primaryDefault'>{String(formik.errors.pass)}</div>
              ) : null}
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center mb-4'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='form-checkbox mr-2 text-gray700'
                    onChange={()=>{setRememberMe(!rememberMe)}}
                    checked={rememberMe}
                  />
                  <label htmlFor='remember'>Recordarme</label>
                </div>

                <p className='mb-4 no-underline text-primaryLigth'>
                  Recuperar contraseña
                </p>
              </div>
              <button
                type='submit'
                className='p-2 bg-primaryDefault text-white rounded-md w-full '
              >
                Confirmar
              </button>
              <h2 className='text-gray-500 mt-4'>
                No estas registrado? 
                <Link href={"/registro"} > <span className='text-primaryLigth '> Crear Cuenta</span></Link>
              </h2>
            </>
          )}
        </form>
      )}
    </div>
  );
}