import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Pwos from '../public/Assets/pwo.png';
import Wsps from '../public/Assets/WSP_logo.png';
import Rockets from '../public/Assets/rocketry.png';

const Work = () => {
    return (
      <div id='work' className='w-full flex flex-col items-center py-16 px-4 md:px-8 lg:px-16 bg-experience bg-cover bg-center'>
            <Head>
                <title>Aidan Bilon</title>
                <meta name="description" content="Relevant Industry Experience"></meta>
                <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
                <meta name="robots" content="index,follow"/>
            </Head>
            <div className='max-w-[1200px] w-full m-auto'>
                {/* Real-Time Embedded System Lab */}
                <div className='w-full flex flex-col py-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>Real-Time Embedded System Lab</p>
                            <p className='text-md font-bold'>Lead Autonomous Robotics Researcher</p>
                            <p className='py-1 text-sm font-medium'>• Designed and built a fully autonomous, Bluetooth, path-finding, and obstacle avoidance ADAS vehicle 2, controlling
                            location, speed, edge detection, and steering while on a moving track to conduct research on.</p>
                            <p className='py-1 text-sm font-medium'>• Developed vehicle firmware, embedded systems, implemented computer vision, and object detection algorithms, enhancing
path planning and object detection capabilities using ROS2, C/C++, Python, Linux, custom-trained YOLOv10 algorithms
and matrix zone detection methodology.</p>
                            <p className='py-1 text-sm font-medium'>• Founded and directed the project team of 8 researchers, worked on every aspect of vehicle hardware, electrical systems,
                            track detection communication, and training of the object/car detection model.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <video autoPlay loop muted className='w-full h-auto m-auto rounded-md'>
                                <source src="/Assets/20240530_102516.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                {/* PWO Group */}
                <div className='w-full flex flex-col py-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>PWO Group</p>
                            <p className='text-md font-bold'>Machine Learning Quality Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>• Employed reinforcement learning using KNIME data analysis tools to improve part production by extracting machine-fed
                            datasets of welds, eliminating 100% of porosity errors and vastly improving coordinate translations for robotic weld seams.</p>
                            <p className='py-1 text-sm font-medium'>• Streamlined documentation processes and introduced new procedural software that replaced handwritten forms with a digital
                            format, resulting in a 6% reduction in processing time for all company products.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Pwos} 
                                alt='PWO Group' 
                                width={300} 
                                height={300}
                                className='rounded-md'
                            /> 
                        </div>
                    </div>
                </div>

                {/* WSP */}
                <div className='w-full flex flex-col py-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>WSP</p>
                            <p className='text-md font-bold'>Electrical Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>• Designed and analyzed all electrical, control, and security systems for the Volkswagen Cell Gigafactory and 230769.23 square
                            feet of the Sick Kids Hospital by applying circuit analysis and design of power distribution.</p>
                            <p className='py-1 text-sm font-medium'>• Used Bluebeam Revu, AutoCAD, and Autodesk Revit to conduct circuit studies of 16 different medical and education
                            projects, including load studies, fault analysis, and execution of site visits for efficient schematic design.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Wsps} 
                                alt='WSP Logo' 
                                width={300} 
                                height={300}
                                className='rounded-md'
                            /> 
                        </div>
                    </div>
                </div>

                {/* Waterloo Rocketry */}
                <div className='w-full flex flex-col py-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>Waterloo Rocketry</p>
                            <p className='text-md font-bold'>Embedded Firmware & Hardware Developer</p>
                            <p className='py-1 text-sm font-medium'>• Combined the PCB layouts of actuator and propulsion boards using KiCad, increasing efficiency and overall performance by 50%, reducing material cost, and increasing the processing power of the MCU.</p>
                            <p className='py-1 text-sm font-medium'>• Programmed and optimized the PIC18F microcontroller in C to enhance the functionality and performance of rocketry systems on the actuator and propulsion board by writing efficient code.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Rockets} 
                                alt='Waterloo Rocketry' 
                                width={200} 
                                height={200}
                                className='rounded-md'
                            /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-dist'></div>
        </div>
    )
}

export default Work;
