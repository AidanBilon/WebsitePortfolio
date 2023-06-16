import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1200px] m-auto px-2 py-16 w-full'>
        <p className='uppercase text-2xl font-bold p-6'>Contact</p>
        <p className='p-4 shadow-md shadow-gray-200'>Reach Out and Connect with Me!</p>
        <div className='flex items-center justify-between max-w-[330px] m-auto py-8 scale-125 px-12'>
          <Link href="https://www.linkedin.com/in/bilon/" target="_blank">
          <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full shadow-xl shadow-gray-400'>
            <FaLinkedin size={15} />
          </div>
          </Link>
          <Link href="https://github.com/AidanBilon" target="_blank">
          <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full shadow-xl shadow-gray-400'>
            <AiOutlineMail size={15} />
          </div>
          </Link>
          <Link href="mailto:aidanbilon@gmail.com" target="blank">
          <div className='p-2 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b rounded-full shadow-xl shadow-gray-400'>
            <FaGithub size={15} />
          </div>
          </Link>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='flex justify-center items-center rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiChevronDoubleUp size={25} className='text-gray-500'/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact