import React from 'react'
import expre from 'public/Assets/Projects/express.jpg'
import ProjectMain from '../../components/ProjectMain'

const express = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto py-12 relative'>
          <ProjectMain
          title='Express-O' 
          image={expre}  
          descr='Full Stack Mechanical/Software Integration (C)'/>
      </div>
      <div className='w-full p-2 flex items-center px-16'>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <div className='text-lg py-4'>
                <p>A drink mixing machine utilizing mechanical software integration designed to revolutionize the art of drink pouring. Using peristaltic pumps and the C programming language accompanied by mechanical libraries, I created a fully automated system that ensures precise pouring to the exact amount, allowing you to customize the percentage of each drink with accuracy and a beautiful front-end user interface. Incorporating calculations and visual sensors to detect the volume of each cup, guaranteeing a perfect pour and an intelligent emergency stop feature has been that instantly stops the pouring process if there is a risk of overflow.</p>
                </div>
            </div>
            <div className='rounded-xl h-auto w-full m-auto border-b shadow-xl shadow-gray-800 items-center justify-center fill p-3 text-gray-200'>
                <p className='text-xl font-bold text-white'>Skills Used</p>
                <div className='px-2'>
                <p>• Mechanical Integration</p>
                <p>• Sensor Utilization</p>
                <p>• Motor Calculations</p>
                <p>• Hardware Design</p>
                <p>• End-User Friendly UI</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default express