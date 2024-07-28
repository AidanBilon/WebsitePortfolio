import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import profPic from '../public/Assets/profPic.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center p-8 bg-about bg-cover bg-center'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Resume Portfolio"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-2xl font-extrabold py-4'>About Me</p>
          <p className='text-md font-medium'>
            Welcome to my website portfolio! I&apos;m an engineering student at the University of Waterloo, interested in autonomous vehicles and robotics. I have experience in all things autonomous robotics and I&apos;m currently working on software integration and embedded systems in robotic development.
          </p>
          <p className='text-lg font-extrabold pt-4'>Projects</p>
          <p className='py-2 text-md font-medium'>
            The main page project section only highlights new projects that I&apos;ve worked on recently, click on the projects section to look at some other things I&apos;ve been working on.
          </p>
        </div>
        <div className='w-full flex items-center justify-center'>
          <div className='relative w-80 h-80 sm:w-96 sm:h-96 rounded-md border-solid border-4 border-white shadow-xl shadow-gray-900 overflow-hidden'>
            <Image
              src={profPic}
              alt='/'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
