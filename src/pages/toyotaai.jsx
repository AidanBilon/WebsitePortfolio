import React from 'react'
import expre from 'public/Assets/projects/expp.jpg'
import ProjectMain from '../../components/ProjectMain'

const ToyotaAI = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto py-12 relative'>
          <ProjectMain
          title='Toyota Innovation Automatic Plug Plate Detection' 
          image={expre}  
          descr='Deep Learning Artificial Intelligence (Python)'/>
      </div>
      <div className='w-full p-2 flex items-center px-16'>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <div className='text-sm py-4'>
                <p>An ambitious work-in-progress project is a new social media app designed to run seamlessly on both iOS and Android platforms. This cutting-edge app harnesses the power of technologies such as Flutter and Dart to deliver a unified user experience across devices. By incorporating location-based services and authentication API for secure access, this app aims to redefine the way we connect and interact with others.</p>
                <p className='py-2 font-semibold'>More information and added content will be added to this page as the application reaches further development.</p>
                <p className='py-2'>Third Line</p>
                <p>End</p>
                </div>
            </div>
            <div className='rounded-xl h-auto w-full m-auto border-b shadow-xl shadow-gray-500 items-center justify-center fill p-3 text-gray-600'>
                <p className='text-xl font-bold text-black'>Skills Used</p>
                <div className='px-2'>
                <p>• Test</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ToyotaAI