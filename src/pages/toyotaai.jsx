import React from 'react'
import frontAI from '../../public/Assets/Projects/frontAI.png'
import ProjectMain from '../../components/ProjectMain'

const ToyotaAI = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto py-12 relative'>
          <ProjectMain
          title='Toyota Innovation Automatic Plug Plate Detection' 
          image={frontAI}  
          descr='Deep Learning Artificial Intelligence (Python)'/>
      </div>
      <div className='w-full p-2 flex items-center px-16'>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <div className='text-lg py-4'>
                <p>A trained deep learning AI model developed in Python, utilizing OpenCV, NumPy, Matplotlib, and the Roboflow API. This solution to a previous problem that occurred on the shop floor at Toyota inspects sticker application on car body holes with remarkable accuracy. Training the model on diverse test images, it ensures its effectiveness in identifying open, closed, and partially closed cases, regardless of colour, lighting, or angular position. The innovative approach replaces manual inspection methods, providing a reliable and automated solution.</p>
                <p className='py-2 font-semibold'>Recognized as the most successful engineering product at Toyota, this project has garnered accolades from TMMC employees.</p>
                </div>
            </div>
            <div className='rounded-xl h-auto w-full m-auto border-b shadow-xl shadow-gray-800 items-center justify-center fill p-3 text-gray-200'>
                <p className='text-xl font-bold text-white'>Skills Used</p>
                <div className='px-2'>
                <p>• Python</p>
                <p>• OpenCV</p>
                <p>• YOLOv8 PyTorch TXT</p>
                <p>• Roboflow Training API</p>
                <p>• NumPy</p>
                <p>• Artificial Intelligence</p>
                <p>• Deep Learning</p>
                <p>• Machine Vision</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ToyotaAI