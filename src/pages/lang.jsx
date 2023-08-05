import React from 'react';
import ProjectItem from '../../components/ProjectItem';
import mlll from '../../public/Assets/Projects/mlll.jpeg';
import SkillSection from '../../components/SkillSection';
import pyy from '../../public/Assets/Projects/Icons/pyth.png';
import cpl from '../../public/Assets/Projects/Icons/cpl.png';
import jav from '../../public/Assets/Projects/Icons/jav.png';
import swift from '../../public/Assets/Projects/Icons/swift.png';
import js from '../../public/Assets/Projects/Icons/js.png';
import htcs from '../../public/Assets/Projects/Icons/htcs.png';
import dart from '../../public/Assets/Projects/Icons/dart.png';
import mat from '../../public/Assets/Projects/Icons/mat.png';
import lat from '../../public/Assets/Projects/Icons/lat.png';
import gitt from '../../public/Assets/Projects/Icons/git.png';

const lang = () => {
  return (
    <div>
      <div className='w-full md:h-screen p-2 flex items-center pt-32 px-16'>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-2 gap-8'>
        <div>
            <p className='uppercase text-2xl font-bold p-2'>Programming Languages</p>
            <div className='text-xs py-4'>
              <p className='p-4'>As an aspiring SWE, I have immersed myself in a plethora of programming languages, allowing me to tackle diverse challenges from a multitude of directions. From the flexibility of Python, the efficiency of C/C++, the reliable scalability of Java, the interactivity of JavaScript, the structure of HTML/CSS, the swift development of Swift ;), the modernity of Dart, the numerical power of MATLAB, and the document formatting of LaTeX—I&apos;ve embraced a comprehensive array of tools to bring innovative ideas to life.</p>
              <p className='uppercase text-xl font-bold p-8 hidden md:flex py-24'>Example Project Overview</p>
              <p className='text-xs pl-8 hidden md:flex '>In collaboration with Toyota Canada, this Python-based classical machine learning solution utilized machine vision for car body frame detection and provided a possible solution to assist TMMC employees on the shop floor. Leveraging ML algorithms, the system identified car body frames, enhancing efficiency and precision in the production process. Additionally, the project incorporated analysis to extract insights about the car&apos;s details, enabling informed decision-making and process optimization.</p>
            </div>
          </div>
          <div className='hidden md:flex'>
            <ProjectItem 
              className='fill'
              title='Toyota Innovation Car Body Analysis' 
              image={mlll} 
              url='/toyotaai' 
              descr='Relevant Project'
            />
          </div>
          <div className='col-span-2 py-16 grid md:grid-cols-2 gap-8'>
            <SkillSection
              title='Python' 
              icon={pyy}
            />
            <SkillSection  
              title='C/C++' 
              icon={cpl} 
            />
            <SkillSection  
              title='Java' 
              icon={jav} 
            />
            <SkillSection  
              title='JavaScript' 
              icon={js}  
            />
            <SkillSection  
              title='HTML/CSS' 
              icon={htcs}  
            />
            <SkillSection  
              title='Swift' 
              icon={swift}  
            />
            <SkillSection  
              title='Dart' 
              icon={dart}  
            />
            <SkillSection  
              title='MATLAB' 
              icon={mat}  
            />
            <SkillSection  
              title='Latex' 
              icon={lat}  
            />
            <SkillSection  
              title='Git' 
              icon={gitt}  
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default lang;