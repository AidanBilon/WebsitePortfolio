import React from 'react'
import expre from '../../public/Assets/Projects/express.jpg'
import ProjectItem from '../../components/ProjectItem'
import SkillSection from '../../components/SkillSection'
import nvidia from '../../public/Assets/Skills/nvidia.png'
import ard from '../../public/Assets/Skills/arduino.webp'
import raspi from '../../public/Assets/Skills/raspi.svg'
import pcb from '../../public/Assets/Skills/pcb.png'
import kicad from '../../public/Assets/Skills/kicad.png'
import autodesk from '../../public/Assets/Skills/autod.png'
import solidworks from '../../public/Assets/Skills/solidworks.webp'


const hard = () => {
  return (
    <div>
      <div className='w-full md:h-screen p-2 flex items-center pt-32 px-16'>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-2 gap-8'>
          <div>
            <p className='uppercase text-2xl font-bold p-2'>Hardware and Electrical</p>
            <div className='text-xs py-4'>
              <p className='uppercase text-xl font-bold p-8 hidden md:flex py-24'>Example Project Overview</p>
              <p className='text-xs pl-8 hidden md:flex '> drink mixing machine utilizing mechanical software integration designed to revolutionize the art of drink pouring. Using peristaltic pumps and the C programming language accompanied by mechanical libraries, I created a fully automated system that ensures precise pouring to the exact amount, allowing you to customize the percentage of each drink with accuracy and a beautiful front-end user interface. Incorporating calculations and visual sensors to detect the volume of each cup, guaranteeing a perfect pour and an intelligent emergency stop feature has been that instantly stops the pouring process if there is a risk of overflow.</p>
            </div>
          </div>
          <div className='hidden md:flex'>
          <ProjectItem 
              className='fill'
              title='Express-O' 
              image={expre} 
              url='/express' 
              descr='Relevant Project'
            />
          </div>
          <div className='col-span-2 py-16 grid md:grid-cols-2 gap-8'>
            <SkillSection  
              title='NVIDIA Jetson' 
              icon={nvidia} 
            />
            <SkillSection  
              title='Arduino Uno and Nano' 
              icon={ard}  
            />
            <SkillSection  
              title='Raspberry Pi 4 and Pico' 
              icon={raspi} 
            />
            <SkillSection  
              title='PCB Design' 
              icon={pcb}  
            />
            <SkillSection  
              title='KiCad' 
              icon={kicad}  
            />
            <SkillSection  
              title='Revit and AutoCAD' 
              icon={autodesk} 
            />
            <SkillSection  
              title='SolidWorks' 
              icon={solidworks} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default hard