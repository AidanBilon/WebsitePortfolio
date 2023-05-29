import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import React, {useState} from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <div className='mx-5'>
            <Image 
                src="/../public/Assets/mainlogo.png" 
                alt="/" 
                width='50' 
                height='50'
            />
            </div>
            <div className='mx-5'>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden p-3 cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
            <div className='flex w-full items-center justify-between'>
                <Image 
                src='/../public/Assets/mainlogo.png' 
                alt='/' 
                width='50' 
                height='20' 
                />
                <div onClick={handleNav} className='hover:border-b p-3 cursor-pointer'>
                    <AiOutlineClose size={15}/>
                </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p></p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                    <li className='py-4 text-md'>Home</li> 
                    </Link>
                    <Link href='/'>
                    <li className='py-4 text-md'>About</li> 
                    </Link>
                    <Link href='/'>
                    <li className='py-4 text-md'>Projects</li> 
                    </Link>
                    <Link href='/'>
                    <li className='py-4 text-md'>Skills</li> 
                    </Link>
                    <Link href='/'>
                    <li className='py-4 text-md'>Contact</li> 
                    </Link>
                </ul>
                <div className='pt-40'>
                    <p className='text-sm uppercase tracking-widest text-gray-800'>Connect With Me.</p>
                    <div className='flex items-center justify-between my-6 max-w-[330px] sm:w-[80%]'>
                        <div className='p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:border-b'>
                            <FaLinkedinIn />
                        </div>
                        <div className='p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:border-b'>
                            <FaGithub />
                        </div>
                        <div className='p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:border-b'>
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Navbar;