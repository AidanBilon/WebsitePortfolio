import React from 'react';
import Head from 'next/head';
import expressImg from '../public/Assets/Projects/express.jpg';
import toyota1Img from '../public/Assets/Projects/toyota1.jpg';
import toyota2Img from '../public/Assets/Projects/Toyota2.jpg';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import car from '../public/Assets/camera.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full p-16 -mt-60'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Personal Projects"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] mx-auto px-2'>
        <p className='uppercase text-2xl font-extrabold pb-8'>Projects</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                title='Toyota Innovation Automatic Plug Plate Detection' 
                image={toyota2Img} 
                url='/toyotaai' 
                descr='Deep Learning Artificial Intelligence (Python)'
                />
                <ProjectItem 
                title='Autonomous Vehicle Research Real-time Embedded Software Group (ESG)' 
                image={car} 
                url='#work' 
                descr='Research Project with Dr. Sebastian Fischmeister and ESG'
                />
                <ProjectItem 
                title='Express-O' 
                image={expressImg} 
                url='/express' 
                descr='Full Stack Mechanical/Software Integration (C)'
                />
                <ProjectItem 
                title='Toyota Innovation Car Body Analysis' 
                image={toyota1Img} 
                url='/toyml' 
                descr='Classical Machine Learning (Python)'
                />
            </div>
            </div>
            <div className='p-4'></div>
            <Link href='/mainprojects'>
            <div className='shadow-lg shadow-gray-700 rounded-sm p-4 max-w-[300px] mx-auto'>
              <p className='text-slate-100 font-bold uppercase cursor-pointer justify-center flex'>View More Projects</p>
            </div>
            </Link>
        </div>
  )
}

export default Projects;