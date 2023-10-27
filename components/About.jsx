import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import profPic from '../public/Assets/profPic.jpg';
import nextj from '../public/Assets/Projects/Icons/nextjs.png';
import twc from '../public/Assets/Projects/Icons/twc.png';
import react from '../public/Assets/Projects/Icons/react.png';
import js from '../public/Assets/Projects/Icons/js.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 px-16'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Resume Portfolio"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold py-4'>About Me</p>
                <p className='text-sm font-medium'>Welcome to my website portfolio! I&apos;m an engineering student at the University of Waterloo, interested in software development. I have experience and interest in ML/AI, and full-stack development. Additionally, I&apos;m looking into learning software integration in robotic development.</p>
                <p className='text-lg font-extrabold pt-4'>Website Tech Stack</p>
                <div className='flex space-x-4'>
                  <Image
                  src={react}
                  alt='/'
                  width={30}
                  height={30}
                  />
                  <Image
                  src={nextj}
                  alt='/'
                  width={30}
                  height={30}
                  />
                  <Image
                  src={js}
                  alt='/'
                  width={30}
                  height={30}
                  />
                  <Image
                  src={twc}
                  alt='/'
                  width={30}
                  height={30}
                  />
                </div>
                <p className='text-lg font-extrabold pt-4'>Skills</p>
                <p className='py-2 text-sm font-medium'>To find associated skills in programming, web dev, and AI, scroll down (or click) and select the each skill.</p>
                <p className='text-lg font-extrabold pt-4'>Projects</p>
                <p className='py-2 text-sm font-medium'>The main page project section only highlights new projects that I&apos;ve worked on recently, click in the projects ssection to look at some other things I&apos;ve been working on.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                <Image 
                src={profPic} 
                alt='/' 
                width={400} 
                height={400}
                /> 
            </div>
        </div>
    </div>
  )
}

export default About;
