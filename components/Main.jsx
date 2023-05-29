import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 py-4'>Welcome to my Portfolio.</p>
                <h1 className='py-1'> Hello, I'm <span className='font-bold text-blue-600'> Aidan Bilon </span></h1>
                <h1 className='py-1'> An Engineering Student</h1>
                <h1 className='py-1'> At The <span className='font-bold text-blue-600'>University of Waterloo</span></h1>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-8 scale-125'>
                    <div className='p-6 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b '>
                        <FaLinkedin />
                    </div>
                    <div className='p-6 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b'>
                        <FaGithub />
                    </div>
                    <div className='p-6 cursor-pointer hover:scale-150 ease-in duration-300 hover:border-b'>
                        <AiOutlineMail />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main