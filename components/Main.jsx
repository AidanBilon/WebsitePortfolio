import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import mPage from '../public/Assets/fronttit.png';
import mPageMobile from '../public/Assets/fronttit-mobile.png';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center flex flex-col items-center justify-center relative p-16'>
        <div className='hidden lg:block absolute top-0 left-0 w-full h-full z-0'>
            <video autoPlay loop muted className='w-full h-full object-cover'>
                <source src="/Assets/backG.mp4" type="video/mp4" />
            </video>
        </div>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 z-10 relative flex flex-col items-center justify-center'>
            <div className='lg:hidden w-full flex flex-col items-center justify-center text-4xl'>
                <p className='pt-12 p-6'>Hi, I'm <span className='text-light-blue-400 font-extrabold'>Aidan Bilon</span></p>
                <p className='p-6'>An Engineering Student at the University of Waterloo</p>
                <p className='p-6'>Welcome to my portfolio</p>
            </div>
            <div className='hidden lg:flex justify-center w-full pt-12'>
                <Image
                src={mPage}
                alt='/'
                height={1000}
                width={800}
                />
            </div>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-8 scale-125 px-12'>
                <Link href="https://www.linkedin.com/in/bilon/" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full bg-transparent xl:bg-[#1f2937] mx-4'>
                        <FaLinkedin />
                    </div>
                    </Link>
                    <Link href="https://github.com/AidanBilon" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full bg-transparent xl:bg-[#1f2937] mx-4'>
                        <FaGithub />
                    </div>
                    </Link>
                    <Link href="mailto:aidanbilon@gmail.com" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full bg-transparent xl:bg-[#1f2937] mx-4'>
                        <AiOutlineMail />
                    </div>
                </Link>
            </div>
            <Link href='/#about'>
                <div className='text-gray-100 xl:text-white w-auto text-sm flex flex-col items-center font-extrabold'>
                    <p>Scroll Down</p>
                    <IoIosArrowDown className='text-gray-100 xl:text-white animate-bounce'/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Main;