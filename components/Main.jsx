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
    <div id='home' className='w-full h-screen text-center relative flex flex-col items-center justify-center'>
        <div className='hidden lg:block absolute top-0 left-0 min-w-full min-h-full z-0'>
            <video autoPlay loop muted className='min-w-full min-h-full'>
                <source src="/Assets/backG.mp4" type="video/mp4" />
            </video>
        </div>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 z-10 relative flex flex-col items-center justify-center pt-32'>
            <div className='lg:hidden w-full flex justify-center'>
                <Image
                src={mPageMobile}
                alt='/'
                height={800}
                width={800}
                />
            </div>
            <div className='hidden lg:flex justify-center w-full'>
                <Image
                src={mPage}
                alt='/'
                height={800}
                width={800}
                />
            </div>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-8 scale-125 px-12'>
                <Link href="https://www.linkedin.com/in/bilon/" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full bg-transparent xl:bg-white mx-4'>
                        <FaLinkedin />
                    </div>
                </Link>
                <Link href="https://github.com/AidanBilon" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full bg-transparent xl:bg-white mx-4'>
                        <FaGithub />
                    </div>
                </Link>
                <Link href="mailto:aidanbilon@gmail.com" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full bg-transparent xl:bg-white mx-4'>
                        <AiOutlineMail />
                    </div>
                </Link>
            </div>
            <h1 className='py-4'></h1>
            <Link href='/#about'>
                <div className='text-black xl:text-white w-auto text-sm flex flex-col items-center font-extrabold'>
                    <p>Scroll Down</p>
                    <div className='p-4 flex justify-center'>
                        <IoIosArrowDown className='text-black xl:text-white'/>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Main;