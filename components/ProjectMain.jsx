import React from 'react'
import Image from 'next/image'

const ProjectMain = ({title, image, descr}) => {
  return (
    <div className='relative flex items-center justify-center w-full bg-gray-800 h-60'>
    <Image 
    className='group opacity-40 h-full w-full object-cover'
    src={image} alt='/' />
        <div className='group block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-3xl text-white tracking-wider text-center relative font-bold'>{title}</h3>
            <h3 className='text-sm p-4 text-white text-center'>{descr}</h3>
        </div>
    </div>
  )
}

export default ProjectMain