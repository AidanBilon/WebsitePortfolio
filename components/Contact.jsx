import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1200px] m-auto px-2 pt-64 w-full'>
        <p className='uppercase text-2xl font-extrabold pb-6'>Contact</p>
        <p className='py-4'>Reach Out and Connect with Me!</p>
        <div className='flex items-center justify-between max-w-[330px] m-auto py-8 scale-125 px-12'>
          <Link href="https://www.linkedin.com/in/bilon/" target="_blank">
          <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full'>
            <FaLinkedin size={15} />
          </div>
          </Link>
          <Link href="mailto:aidanbilon@gmail.com" target="_blank">
          <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full'>
            <AiOutlineMail size={15} />
          </div>
          </Link>
          <Link href="https://github.com/AidanBilon" target="blank">
          <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full'>
            <FaGithub size={15} />
          </div>
          </Link>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='flex justify-center items-center rounded-full shadow-sm shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiChevronDoubleUp size={25} className='text-gray-500'/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact