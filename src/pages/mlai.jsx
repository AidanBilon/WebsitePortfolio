import React from 'react'
import ProjectItem from '../../components/ProjectItem'
import toyota2Img from '../../public/Assets/Projects/mlaa.png'
import SkillSection from '../../components/SkillSection'
import yolo from '../../public/Assets/Projects/Icons/yolo.png'
import pandas from '../../public/Assets/Skills/pandas.webp'
import numpyy from '../../public/Assets/Projects/Icons/numpy.png'
import openccv from '../../public/Assets/Projects/Icons/openc.png'
import pyy from '../../public/Assets/Projects/Icons/pyth.png'
import mat from '../../public/Assets/Skills/mat.png'
import tensf from '../../public/Assets/Skills/tensf.png'
import pytorch from '../../public/Assets/Skills/pytorch.webp'

const mlai = () => {
  return (
    <div>
      <div className='w-full md:h-screen p-2 flex items-center pt-32 px-16'>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-2 gap-8'>
        <div>
            <p className='uppercase text-2xl font-bold p-2'>Machine Learning and Artificial Intelligence</p>
            <div className='text-xs py-4'>
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
              title='YOLO' 
              icon={yolo} 
            />
            <SkillSection  
              title='Pandas' 
              icon={pandas}  
            />
            <SkillSection  
              title='MatPlotLib' 
              icon={mat}  
            />
            <SkillSection  
              title='TensorFlow' 
              icon={tensf}  
            />
            <SkillSection  
              title='PyTorch' 
              icon={pytorch}  
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default mlai