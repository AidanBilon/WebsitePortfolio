import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Pwo from '../public/Assets/pwo.png';
import Wsp from '../public/Assets/WSP_logo.png';
import Rocket from '../public/Assets/rocketry.png';

const Work = () => {
    return (
      <div id='work' className='w-full min-h-screen flex items-center p-16'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Relevant Industry Experience"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>Real-Time Embedded System Lab</p>
                <p className='text-md font-bold'>Autonomous Robotics & Embedded Systems Lead Researcher/Developer</p>
                <p className='py-2 text-sm font-medium'>• Created a fully autonomous, Bluetooth, path-finding, and obstacle avoidance ADAS vehicle, controlling location, speed,
edge detection, and steering while maintaining no safe state on a moving track to conduct research on.</p>
                <p className='py-2 text-sm font-medium'>• Developed and implemented vehicle firmware, embedded systems, computer vision & object detection algorithms, sensors,
electrical systems & circuits, and control systems for path planning & object detection using ROS2, C/C++, Python, Linux,
HC-05, custom trained algorithms, and zone detection among other technologies.</p>
                <p className='py-2 text-sm font-medium'>• Founded and directed the entire project team, working on each aspect of the system and engineered the vehicle hardware,
electrical systems, track detection communication, and training of the object/car detection model.</p>
            </div>
            <div>
                <video autoPlay loop muted className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                    <source src="/Assets/20240530_102516.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>WSP</p>
                <p className='text-md font-bold'>Electrical Engineer</p>
                <p className='py-2 text-sm font-medium'>• Designed and analyzed electrical systems for the Volkswagen Cell Gigafactory and 90% of the Sick Kids Hospital phases
during my term by applying circuit analysis, design of power distribution, control, and security systems.</p>
                <p className='py-2 text-sm font-medium'>• Used Bluebeam Revu, AutoCAD, and Autodesk Revit for in-depth circuit studies of fault analysis, load studies,
coordination conduction, and site visits to collect data that offered insights for efficient schematic design.</p>
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
                <p className='py-2 text-sm font-medium'>• Led and directed machine learning initiatives, employing reinforcement learning to optimize and enhance part production
by eliminating error through frequency domain augmentation.</p>
                <p className='py-2 text-sm font-medium'>• Effectively employed KNIME software, extracting and leveraging machine-fed datasets of welds to manipulate position
and rotational parameters, optimizing machine learning implementations for quality improvement of the robotic welders.</p>
                <p className='py-2 text-sm font-medium'>• Streamlined documentation processes and introduced new procedural software that replaced handwritten forms with
scanning of products, resulting in a significant reduction of processing time and a 6% increase in productivity.</p>
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
                <p className='py-2 text-sm font-medium'>• Combined the PCB layouts of actuator and propulsion boards using KiCad, increasing efficiency and overall performance
by 50%, reducing material cost, and increasing the processing power of the MCU.</p>
                <p className='py-2 text-sm font-medium'>• Programmed and optimized the PIC18F microcontroller in C to enhance the functionality and performance of rocketry
systems on the actuator and propulsion board by writing efficient code.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                <Image 
                src={Rocket} 
                alt='/' 
                width={200} 
                height={200}
                /> 
            </div>
        </div>
    </div>
  )
}

export default Work;