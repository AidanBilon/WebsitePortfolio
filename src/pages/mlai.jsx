import Image from 'next/image'
import React from 'react'
import ProjectItem from '/components/ProjectItem'
import toyota2Img from '../../public/Assets/projects/mlaa.png'
import SkillSection from '../../components/SkillSection'
import yolo from '../../public/Assets/projects/Icons/yolo.png'
import robof from '../../public/Assets/projects/Icons/robo.png'
import numpyy from '../../public/Assets/projects/Icons/numpy.png'
import openccv from '../../public/Assets/projects/Icons/openc.png'
import pyy from '../../public/Assets/projects/Icons/pyth.png'
import pych from '../../public/Assets/projects/Icons/pych.png'

const mlai = () => {
  return (
    <div>
      <div className='w-full md:h-screen p-2 flex items-center py-16 px-16'>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-2 gap-8'>
        <div>
            <p className='uppercase text-2xl font-bold p-2'>Machine Learning and Artificial Intelligence</p>
            <div className='text-xs py-4'>
              <p className='p-4'>Being interested in the exciting realm of Machine Learning and Artificial Intelligence and as an engineering student passionate about cutting-edge technologies, I have delved into the captivating world of Machine Learning, Deep Learning, and Artificial intelligence. Utilizing Python, along with a set of libraries, APIs, and frameworks such as OpenCV, NumPy, YOLOv8, Roboflow, and PyCharm, I have honed my skills to develop innovative solutions. Notably, I have successfully completed two projects in collaboration with Toyota Canada.</p>
              <p className='uppercase text-xl font-bold p-8 hidden md:flex py-24'>Example Project Overview</p>
              <p className='text-xs pl-8 hidden md:flex '>A trained deep learning AI model developed in Python, utilizing OpenCV, NumPy, Matplotlib, and the Roboflow API. This solution to a previous problem that occurred on the shop floor at Toyota inspects sticker application on car body holes with remarkable accuracy. Training the model on diverse test images, it ensures its effectiveness in identifying open, closed, and partially closed cases, regardless of colour, lighting, or angular position. The innovative approach replaces manual inspection methods, providing a reliable and automated solution. Recognized as the most successful engineering product at Toyota, this project has garnered accolades from TMMC employees.</p>
            </div>
          </div>
          <div className='hidden md:flex'>
            <ProjectItem 
              className='fill'
              title='Toyota Innovation Automatic Plug Plate Detection' 
              image={toyota2Img} 
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
              title='OpenCV' 
              icon={openccv}
            />
            <SkillSection  
              title='NumPy' 
              icon={numpyy} 
            />
            <SkillSection  
              title='YOLOv8 PyTorch TXT' 
              icon={yolo} 
            />
            <SkillSection  
              title='Roboflow Training API' 
              icon={robof}  
            />
            <SkillSection  
              title='PyCharm IDE' 
              icon={pych}  
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default mlai