import Image from "next/image";
import React from "react";
import FooterImage from "../../public/Footer_img.png";


const Footer = () => {
    return (
        <nav className='mb-[4rem] bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-950'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mt-4'>
                <div
                    id='mega-menu-full-image'
                    className='items-center justify-between w-full md:flex md:w-auto md:order-1'
                >
                    <ul className='flex flex-col md:flex-row md:mt-0 w-full'>
                        <li>
                            <button
                                id='mega-menu-full-cta-image-button'
                                data-collapse-toggle='mega-menu-full-image-dropdown'
                                className='flex items-center border-t justify-between w-full py-2 px-3 text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Company{" "}
                                <svg
                                    className='w-2.5 h-2.5 ms-3 -rotate-90 mr-3'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 10 6'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='m1 1 4 4 4-4'
                                    />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Teams
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-gray-900  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Contact
                            <Image src={FooterImage} alt="" width={96} height={96} className="w-96"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Footer;
