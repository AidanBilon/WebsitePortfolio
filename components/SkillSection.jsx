import React from 'react'
import Image from 'next/image'

const SkillItem = ({ icon, title}) => {
  return (
    <div className='relative flex items-center justify-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
      <div className="flex items-center">
        <div className="mr-4 h-90">
          <Image src={icon} alt="/" width={40} height={40}/>
        </div>
        <h3 className="text-lg">{title}</h3>
      </div>
    </div>
  )
}

export default SkillItem