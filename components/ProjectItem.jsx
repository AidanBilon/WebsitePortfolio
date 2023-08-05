import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, image, url, descr}) => {
  return (
    <div className='relative flex items-center justify-center h-[390px] w-full shadow-md shadow-gray-400 rounded-sm p-1 group hover:bg-gray-200 overflow-hidden'>
    <Image 
    className='rounded-sm group-hover:opacity-10 ease-in duration-300 w-full h-full object-cover responsive'
    src={image} alt='/'/>
        <div className='hidden group-hover:flex flex-col justify-center items-center absolute inset-0 bg-gray-200 bg-opacity-60'>
            <h3 className='text-xl text-gray-600 tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-gray-600 text-center'>{descr}</p>
            <Link href={url}>
                <p className='text-center py-3 px-4 rounded-lg bg-white text-black font-bold text-lg cursor-pointer scale-75'>More Information</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem