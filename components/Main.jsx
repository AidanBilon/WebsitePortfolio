import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import mPage from '../public/Assets/fronttit.png';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='pt-32'>
                <Image
                src={mPage}
                alt='/'
                height={800}
                width={800}
                />
                <div className='flex items-center justify-between max-w-[330px] m-auto py-8 scale-125 px-12'>
                    <Link href="https://www.linkedin.com/in/bilon/" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b '>
                        <FaLinkedin />
                    </div>
                    </Link>
                    <Link href="https://github.com/AidanBilon" target="_blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b'>
                        <FaGithub />
                    </div>
                    </Link>
                    <Link href="mailto:aidanbilon@gmail.com" target="blank">
                    <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b'>
                        <AiOutlineMail />
                    </div>
                    </Link>
                </div>
                <h1 className='py-4'></h1>
                <Link href='/#about'>
                <div className='text-gray-700 w-auto text-sm flex flex-col items-center'>
                    <p>Scroll Down</p>
                    <div className='p-4 flex justify-center'>
                        <IoIosArrowDown />
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Main;