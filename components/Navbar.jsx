import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import logoIcon from '../public/Assets/mainlogo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [linksVisible, setLinksVisible] = useState(false); // State to control the visibility of the links

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = 80;
            const show = window.scrollY > (window.innerHeight - navbarHeight);
            setShadow(show);
            setNavbarVisible(show);
            setLinksVisible(show);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        };

    <li onClick={() => scrollToSection('work')} className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Work</li>

    return (
        <div className={`fixed w-full h-20 z-[100] transition-all duration-300 ${navbarVisible ? 'bg-[#222222] shadow-xl' : 'bg-transparent'}`}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/' passHref>
                    <div className='flex items-center cursor-pointer'>
                        <Image 
                            src={logoIcon}
                            alt="/" 
                            width='50' 
                            height='50'
                        />
                    </div>
                </Link>
                <div>
                    {linksVisible && (
                        <ul className='hidden md:flex'>
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                                <Link href='/#about'>About</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                                <Link href='/#work'>Work</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                                <Link href='/#projects'>Projects</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                                <Link href='/#skills'>Skills</Link>
                            </li>
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>
                                <Link href='/#contact'>Contact</Link>
                            </li>
                        </ul>
                    )}
                    <div onClick={handleNav} className='md:hidden p-3 cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-grey/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#222222] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
            <div className='flex w-full items-center justify-between'>
                <Link href='/'>
                    <Image 
                    src={logoIcon}
                    alt='/' 
                    width='50' 
                    height='20' 
                    />
                </Link>
                <div onClick={handleNav} className='hover:border-b p-3 cursor-pointer'>
                    <AiOutlineClose size={15}/>
                </div>
                </div>
                <div className='border-b border-[#1f2937] my-4'>
                    <p></p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                    <li className='py-4 text-md'>Home</li> 
                    </Link>
                    <Link href='/#about'>
                    <li className='py-4 text-md'>About</li> 
                    </Link>
                    <Link href='/#projects'>
                    <li className='py-4 text-md'>Projects</li> 
                    </Link>
                    <Link href='/#skills'>
                    <li className='py-4 text-md'>Skills</li> 
                    </Link>
                    <Link href='/#contact'>
                    <li className='py-4 text-md'>Contact</li> 
                    </Link>
                </ul>
                <div className='pt-40'>
                    <p className='text-sm uppercase tracking-widest text-gray-100'>Connect With Me.</p>
                    <div className='flex items-center justify-between my-6 max-w-[330px] sm:w-[80%]'>
                        <Link href="https://www.linkedin.com/in/bilon/" target="_blank">
                        <div className='p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:border-b'>
                            <FaLinkedinIn />
                        </div>
                        </Link>
                        <Link href="https://github.com/AidanBilon" target="_blank">
                        <div className='p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:border-b'>
                            <FaGithub />
                        </div>
                        </Link>
                        <Link href="mailto:aidanbilon@gmail.com" target="blank">
                        <div className='p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:border-b'>
                            <AiOutlineMail />
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Navbar;