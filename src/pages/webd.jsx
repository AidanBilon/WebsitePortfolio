import Image from 'next/image'
import React from 'react'
import ProjectItem from '/components/ProjectItem'
import SkillSection from '../../components/SkillSection'
import react from '../../public/Assets/projects/Icons/react.png'
import js from '../../public/Assets/projects/Icons/js.png'
import htcs from '../../public/Assets/projects/Icons/htcs.png'
import firebase from '../../public/Assets/projects/Icons/fireb.png'
import webfront from '../../public/Assets/projects/webfront.png'
import nextj from '../../public/Assets/projects/Icons/nextjs.png'
import nodej from '../../public/Assets/projects/Icons/nodej.png'
import twc from '../../public/Assets/projects/Icons/twc.png'


const webd = () => {
  return (
    <div>
      <div className='w-full md:h-screen p-2 flex items-center py-16 px-16'>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-2 gap-8'>
          <div>
            <p className='uppercase text-2xl font-bold p-2'>Website Development</p>
            <div className='text-xs py-4'>
              <p className='p-4'>Immersing myself in the programmable art of crafting dynamic and engaging web experiences, I have armed myself with a diverse skill set proficiently working with a range of languages, libraries, APIs, and frameworks to bring websites to life. With expertise in JavaScript, HTML, CSS, React, Node.js, Next.js, and Firebase, I possess the necessary tools to build seamless and interactive web applications. In fact, this very website utilizes these components, along with the sleek design provided by Tailwind CSS.</p>
              <p className='uppercase text-xl font-bold p-8 hidden md:flex py-24'>Example Project Overview</p>
              <p className='text-xs pl-8 hidden md:flex '>A showcase of my skills and accomplishments in the world of software engineering. Built using the Next.js framework and the powerful Tailwind CSS, this website boasts a sleek and modern design. Leveraging the interactivity of JavaScript, along with the efficiency of React and Next.js, the website provides a seamless user experience with lazy-loaded images and smooth routing. Explore my portfolio, look into my resume, and enjoy the experience of this current page.</p>
            </div>
          </div>
          <div className='hidden md:flex'>
            <ProjectItem 
              className='fill'
              title='Website Portfolio' 
              image={webfront} 
              url='/#home' 
              descr='Next.js Tailwind CSS'
            />
          </div>
          <div className='col-span-2 py-16 grid md:grid-cols-2 gap-8'>
            <SkillSection  
              title='JavaScript' 
              icon={js} 
            />
            <SkillSection  
              title='HTML/CSS' 
              icon={htcs}  
            />
            <SkillSection  
              title='React' 
              icon={react} 
            />
            <SkillSection  
              title='Node.js' 
              icon={nodej}  
            />
            <SkillSection  
              title='Next.js' 
              icon={nextj}  
            />
            <SkillSection  
              title='Firebase' 
              icon={firebase} 
            />
            <SkillSection  
              title='Tailwind CSS' 
              icon={twc} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default webd