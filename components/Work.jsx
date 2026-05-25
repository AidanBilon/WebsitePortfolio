import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Pwos from '../public/Assets/workplaces/pwo.png';
import Wsps from '../public/Assets/workplaces/WSP_logo.png';
import Upsides from '../public/Assets/workplaces/upside.jpeg';
import Dayluns from '../public/Assets/workplaces/daylun.webp';
import Tesla from '../public/Assets/workplaces/tesla.png';
import NVIDIA from '../public/Assets/workplaces/nvidia.png';

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
                {/* NVIDIA */}
                <div className='w-full flex flex-col py-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>NVIDIA</p>
                            <p className='text-md font-bold text-[#74b71a]'>Software Integration Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>Incoming Fall 2026.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={NVIDIA} 
                                alt='NVIDIA' 
                                width={100} 
                                height={100}
                                className='rounded-md'
                            /> 
                        </div>
                    </div>
                </div>
                {/* Tesla */}
                <div className='w-full flex flex-col py-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>Tesla</p>
                            <p className='text-md font-bold text-[#e82126]'>Software Test Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>• Engineered 5 end-to-end product reliability testers, accommodating multiple hardware revisions by architecting highly abstracted, reusable frameworks and developing custom hardware drivers in Go.</p>
                            <p className='py-1 text-sm font-medium'>• Decreased codebase complexity and standardized release workflows, establishing centralized version control, by building automated CI/CD system actions that enabled direct repository pulling.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Tesla} 
                                alt='Tesla' 
                                width={100} 
                                height={100}
                                className='rounded-md'
                            /> 
                        </div>
                    </div>
                </div>
                {/* Daylun */}
                <div className='w-full flex flex-col py-4'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2'>
                            <p className='uppercase text-2xl font-extrabold'>Daylun</p>
                            <p className='text-md font-bold text-[#1C74BC]'>Robotics Systems Engineering Intern</p>
                            <p className='py-1 text-sm font-medium'>• Built and deployed an autonomous factory digital twin with Isaac Sim, ROS2, Docker, OpenUSD, enabling simulation of AMRs, robotic arms, and CNC machinery; reduced prototyping costs and accelerated test cycles.</p>
                            <p className='py-1 text-sm font-medium'>• Developed end-to-end Software-in-the-Loop (SIL) simulation integrating LiDAR and RGB sensors with real-time visualization in RViz; enabled rapid perception validation, remote teleoperation, and efficient modular panel routing coordination without physical downtime.</p>
                            <p className='py-1 text-sm font-medium'>• Engineered scalable synthetic data pipelines with Isaac Lab, Python scripting, and simulated sensors; utilized reinforcement learning models for manufacturing efficiency.</p>
                        </div>
                        <div className='hidden md:flex items-center justify-center'>
                            <Image 
                                src={Dayluns} 
                                alt='Daylun' 
                                width={150} 
                                height={150}
                                className='rounded-md'
                            /> 
                        </div>
                    </div>
                </div>
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
                            <p className='text-md font-bold text-[#5c3992]'>Robotics Software Engineering Researcher</p>
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
                                width={150} 
                                height={150}
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
                                width={150} 
                                height={150}
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
