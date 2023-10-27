import React from 'react';
import Image from 'next/image';
import PWO from '../public/Assets/PWO_web.png';
import Rocket from '../public/Assets/UWrock.png';

const Work = () => {
  return (
    <div id='work' className='w-full md:h-screen p-2 flex items-center py-16 px-16'>
      <Head>
        <title>Work Experience</title>
        <meta name="description" content="Relevant Industry Experience"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>PWO Group</p>
                <p className='text-md font-bold'>Machine Learning and QA Engineer</p>
                <p className='py-2 text-sm font-medium'>• Led and directed machine learning initiatives, employing ML techniques to optimize and enhance part production/weld seam quality by eliminating human error through frequency domain augmentation.</p>
                <p className='py-2 text-sm font-medium'>• Effectively employed KNIME to extract and leverage machine-fed data, manipulating parameters to optimize machine learning implementations for precise quality improvement.</p>
                <p className='py-2 text-sm font-medium'>• Streamlined documentation processes and introduced new procedural software, resulting in a significant reduction of processing time and a remarkable 6% increase in productivity across all products.</p>
                <p className='py-2 text-sm font-medium'>• Spearheaded the development and revision of critical quality documentation, playing a pivotal role in the successful release and production planning of Ford product lines as a tier-1 supplier.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                <Image 
                src={PWO} 
                alt='/' 
                width={300} 
                height={300}
                /> 
            </div>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>Waterloo Rocketry</p>
                <p className='text-md font-bold'>Embedded Firmware & Software Developer</p>
                <p className='py-2 text-sm font-medium'>• Actively involved in embedded firmware and software development, contributing to the programming and optimization of the PIC18F microcontroller to enhance the functionality and performance of rocketry systems.</p>
                <p className='py-2 text-sm font-medium'>• Played a key role in PCB design and fabrication, demonstrating proficiency in schematic design, component selection, and soldering techniques to ensure the reliability of electronic systems crucial to rocketry projects.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                <Image 
                src={Rocket} 
                alt='/' 
                width={300} 
                height={300}
                /> 
            </div>
        </div>
    </div>
  )
}

export default Work;