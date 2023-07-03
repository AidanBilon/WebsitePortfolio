import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SkillSection = ({ icon, url, title }) => {
  return (
    <div className='relative flex items-center justify-start h-auto w-full shadow-sm shadow-gray-400 rounded-md p-4'>
      <div className="flex items-center">
        <div className="mr-4">
          <Image src={icon} alt="/" width={40} height={40}/>
        </div>
        <h3 className="text-lg">{title}</h3>
      </div>
      <div className="flex-grow"></div>
      <Link href={url}>
        <div className="text-center py-3 rounded-lg bg-gray-700 text-white font-bold text-lg cursor-pointer scale-75 p-6 hover:scale-90 ease-in duration-300">
          Click
        </div>
      </Link>
    </div>
  )
}

export default SkillSection;
