import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Pwo from '../public/Assets/pwo.png';
import Wsp from '../public/Assets/WSP_logo.png';
import Rocket from '../public/Assets/rocketry.png';

const Work = () => {
    return (
      <div id='work' className='w-full min-h-screen p-2 flex items-center py-16 px-16'>
      <Head>
        <title>Work Experience</title>
        <meta name="description" content="Relevant Industry Experience"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>Real-Time Embedded Software Group</p>
                <p className='text-md font-bold'>Lead Autonomous Robotics Research Assistant</p>
                <p className='py-2 text-sm font-medium'>• Creation of a fully autonomous path-finding and obstacle avoidance robot using ROS2, measured by the navigation through road detection, merging lanes obstructed by obstacles, avoiding moving balls on a track, and managing multiple cars simultaneously.</p>
                <p className='py-2 text-sm font-medium'>• The founding member of the Autonomous Robotics Research team, pioneering the technological development under the guidance of Dr. Sebastian Fischmeister, NSERC/Magna Industrial Research Chair in Automotive Software, with the Faculty of Electrical & Computer Engineering and Cheriton School of Computer Science at the University of Waterloo.</p>
                <p className='py-2 text-sm font-medium'>• Contributed to collaborative problem-solving within the electrical discipline and actively engaged in team projects, providing circuit-based solutions and leveraging strong interpersonal skills for effective communication within the electrical engineering team.</p>
            </div>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>WSP</p>
                <p className='text-md font-bold'>Electrical Engineer</p>
                <p className='py-2 text-sm font-medium'>• Designed and analyzed electrical systems for WSP&apos;s largest healthcare projects by applying circuit analysis and design of power distribution, control, and security systems, ensuring compliance with IEEE standards and the Ontario Building Code.</p>
                <p className='py-2 text-sm font-medium'>• Used specialized software as well as AutoCAD and Autodesk Revit for in-depth circuit studies of fault analysis and load studies. Conducted coordination studies, offering valuable insights for efficient circuit design and compliance.</p>
                <p className='py-2 text-sm font-medium'>• Achieved breakthroughs and conducted research papers in the field of connected and automated vehicles by directing the conception and execution of a highly sophisticated autonomous system. This involved finding solutions for complex challenges in robotics, including real-time decision-making and trajectory planning.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                <Image 
                src={Wsp} 
                alt='/' 
                width={300} 
                height={300}
                /> 
            </div>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>PWO Group</p>
                <p className='text-md font-bold'>Machine Learning and Quality Engineer</p>
                <p className='py-2 text-sm font-medium'>• Led and directed machine learning initiatives, employing ML techniques to optimize and enhance part production/weld seam quality by eliminating human error through frequency domain augmentation.</p>
                <p className='py-2 text-sm font-medium'>• Effectively employed KNIME to extract and leverage machine-fed data, manipulating parameters to optimize machine learning implementations for precise quality improvement.</p>
                <p className='py-2 text-sm font-medium'>• Streamlined documentation processes and introduced new procedural software, resulting in a significant reduction of processing time and a remarkable 6% increase in productivity across all products.</p>
                <p className='py-2 text-sm font-medium'>• Spearheaded the development and revision of critical quality documentation, playing a pivotal role in the successful release and production planning of Ford product lines as a tier-1 supplier.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                <Image 
                src={Pwo} 
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
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill pb-96'>
                <Image 
                src={Rocket} 
                alt='/' 
                width={200} 
                height={200}
                /> 
            </div>
            <div className='pb-96'></div>
        </div>
    </div>
  )
}

export default Work;