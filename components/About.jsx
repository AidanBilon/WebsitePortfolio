import React from 'react';
import Image from 'next/image';
import profPic from '../public/Assets/profPic.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 px-16'>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-bold p-4'>About Me</p>
                <div className='text-xs py-4'>
                <p>Welcome to my website portfolio! I&apos;m an engineering student at the University of Waterloo, interested in software development. I have experience and interest in machine learning, artificial intelligence, and full-stack development as I find the field fascinating with lots of room for expansion. Additionally, I have a passion to learn software integration in mechanical processes and hope to work on projects pertaining to this field in the future.</p>
                <p className='py-2 font-semibold'>This website utilized the react-based framework Next.js to optimize lazy-loading images and routing in combination with Tailwind CSS, making the components establish a polished finish.</p>
                <p>To find the languages, frameworks, and associated skills in programming, web development, app development, and AI please click (or scroll) down to my skills section and select the highlighted sections.</p>
                <p className='py-2'>My project section on this main page only highlights two interesting projects that I&apos;ve worked on previously so also make sure to click the button at the top of the page or the more projects button to look at some other things I&apos;ve been working on.</p>
                <p>I am constantly seeking new challenges and opportunities to enhance my skills and contribute to innovative projects. Feel free to explore my portfolio website and get in touch with me for collaborations or any inquiries. Thank you for visiting!</p>
                </div>
            </div>
            <div className='w-full h-auto m-auto border-b shadow-xl shadow-gray-500 items-center justify-center hover:scale-105 duration-300 fill'>
                <Image 
                src={profPic} 
                alt='/' 
                width={450} 
                height={450}
                /> 
            </div>
        </div>
    </div>
  )
}

export default About;