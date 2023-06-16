import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, image, url, descr}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gray-200'>
    <Image 
    className='rounded-xl group-hover:opacity-10 ease-in duration-300 h-full w-full'
    src={image} alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl text-gray-600 tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-gray-600 text-center'>{descr}</p>
            <Link href={url}>
                <p className='text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer scale-75'>More Information</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem