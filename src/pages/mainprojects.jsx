import React from 'react';
import expressImg from '../../public/Assets/Projects/express.jpg';
import toyota1Img from '../../public/Assets/Projects/toyota1.jpg';
import toyota2Img from '../../public/Assets/Projects/Toyota2.jpg';
import ProjectItem from '../../components/ProjectItem';
import flut from '../../public/Assets/Projects/flut.jpeg';

const mainprojects = () => {
  return (
    <div className='w-full'>
    <div className='max-w-[1200px] mx-auto px-2 py-16'>
        <p className='uppercase text-2xl font-bold p-6'>Project Overview</p>
        <div className='text-gray-400 px-2'>
        <p>Here are the highlights of some projects that I&apos;ve finished or am currently working on.</p>
        <p>Each project has its own routed page on this website with a further description and some important</p>
        <p>features that were utilized to make these all a success in their specific branch of software development.</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 py-16'>
            <ProjectItem 
            title='Toyota Plug Plate Detection' 
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
    </div>
    </div>
  )
}

export default mainprojects;