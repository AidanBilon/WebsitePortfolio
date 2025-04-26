import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Pwos from '../public/Assets/pwo.png';
import Wsps from '../public/Assets/WSP_logo.png';
import Upsides from '../public/Assets/upside.jpeg';

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
                {/* Upside Robotics */}
                <div className='w-full flex flex-col py-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>Upside Robotics</p>
                            <p className='text-md font-bold text-[#c7f344]'>Software Robotics Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>• Developed advanced perception and autonomy systems integrating ROS nodes with DNN-based object detection and real-time
                            3D point-cloud mapping; improved mAP by 10.3%, precision by 3.7%, and recall by 18.5%.</p>
                            <p className='py-1 text-sm font-medium'>• Optimized computer vision and path-planning by deploying camera depth systems, resulting in a 27% reduction in
                            processing load and 21% improvement on sensor accuracy.</p>
                            <p className='py-1 text-sm font-medium'>• Conducted autonomous robotics trials across 21 agricultural sites using Dockerized reinforcement learning, achieving a 76%
                            reduction in fertilizer use and significantly enhancing crop yields.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Upsides} 
                                alt='Upside Robotics' 
                                width={100} 
                                height={100}
                                className='rounded-md'
                            /> 
                        </div>
                    </div>
                </div>
                {/* Real-Time Embedded System Lab */}
                <div className='w-full flex flex-col py-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>Real-Time Embedded System Lab</p>
                            <p className='text-md font-bold text-[#5c3992]'>Autonomous Engineering Researcher</p>
                            <p className='py-1 text-sm font-medium'>• Led the development of a fully autonomous vehicle 2 using Bluetooth, adaptive path-planning, obstacle avoidance, and
                            real-time navigation, advancing novel research in ADAS driving systems.</p>
                            <p className='py-1 text-sm font-medium'>• Successfully applied computer vision models and embedded firmware within a containerized Ubuntu Linux ROS2
                            environment, using C++, enhancing real-time object detection and path planning decision-making accuracy.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <video 
                                autoPlay
                                loop
                                muted
                                className='w-[300px] h-auto m-auto rounded-md pl-6'>
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
                            <p className='text-md font-bold text-[#E68502]'>Machine Learning Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>• Implemented reinforcement learning on robotic welders, achieving a 97.2% reduction in weld and positional defects.</p>
                            <p className='py-1 text-sm font-medium'>• Streamlined documentation by automating and digitizing manual workflows, resulting in a 6.17% reduction in product
                            processing times across all company operations.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Pwos} 
                                alt='PWO Group' 
                                width={200} 
                                height={200}
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
                            <p className='text-md font-bold text-[#EF3327] flex items-center'>Electrical Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>• Designed electrical, control, and security systems for the Volkswagen Cell Gigafactory, Sick Kids Hospital, and 16 additional
                            medical projects using Bluebeam Revu, AutoCAD, and Autodesk Revit.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Wsps} 
                                alt='WSP Logo' 
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
