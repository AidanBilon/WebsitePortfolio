import React from 'react';
import expressImg from '../public/Assets/Projects/express.jpg';
import toyota1Img from '../public/Assets/Projects/toyota1.jpg';
import toyota2Img from '../public/Assets/Projects/Toyota2.jpg';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import flut from '../public/Assets/Projects/blur.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1200px] mx-auto px-2 py-16'>
            <p className='uppercase text-2xl font-bold p-6'>Projects</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                title='Toyota Innovation Automatic Plug Plate Detection' 
                image={toyota2Img} 
                url='/toyotaai' 
                descr='Deep Learning Artificial Intelligence (Python)'
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
                <ProjectItem 
                title='Blur' 
                image={flut} 
                url='/blur' 
                descr='WIP IOS/Android Application (Flutter & Firebase)'
                />
            </div>
            <Link href='/mainprojects'>
            <div className='items-center shadow-xl shadow-gray-400 rounded-xl p-8'>
              <p className='text-slate-600 font-bold uppercase cursor-pointer justify-center flex'>View More Projects</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Projects;