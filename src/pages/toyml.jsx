import React from 'react'
import mlll from '../../public/Assets/Projects/mlll.jpeg'
import ProjectMain from '../../components/ProjectMain'

const toyml = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto py-12 relative'>
          <ProjectMain
          title='Toyota Innovation Car Body Analysis' 
          image={mlll}  
          descr='Classical Machine Learning (Python)'/>
      </div>
      <div className='w-full p-2 flex items-center px-16'>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <div className='text-lg py-4'>
                <p>In collaboration with Toyota Canada, this Python-based classical machine learning solution utilized machine vision for car body frame detection and provided a possible solution to assist TMMC employees on the shop floor. Leveraging ML algorithms, the system identified car body frames, enhancing efficiency and precision in the production process. Additionally, the project incorporated analysis to extract insights about the car&apos;s details, enabling informed decision-making and process optimization.</p>
                </div>
            </div>
            <div className='rounded-xl h-auto w-full m-auto border-b shadow-xl shadow-gray-500 items-center justify-center fill p-3 text-gray-600'>
                <p className='text-xl font-bold text-black'>Skills Used</p>
                <div className='px-2'>
                <p>• Python</p>
                <p>• Machine Vision</p>
                <p>• Classical Machine Learning</p>
                <p>• PyCharm</p>
                <p>• Webcam Integration</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default toyml