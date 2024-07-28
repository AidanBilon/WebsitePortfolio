import React from 'react';
import ProjectItem from '../../components/ProjectItem';
import SkillSection from '../../components/SkillSection';
import car from '../../public/Assets/camera.png';
import ubuntu from '../../public/Assets/Skills/UbuntuCoF.svg.png';
import ros from '../../public/Assets/Skills/ros.png';
import cuda from '../../public/Assets/Skills/nvidia.png';
import git from '../../public/Assets/Projects/Icons/git.png';
import i2c from '../../public/Assets/Skills/I2c.png';
import rtos from '../../public/Assets/Skills/freertos.png';

const robot = () => {
  return (
    <div>
      <div className='w-full md:h-screen p-2 flex items-center pt-32 px-16'>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-2 gap-8'>
        <div>
            <p className='uppercase text-2xl font-bold p-2'>Robotics/Software System Development</p>
            <div className='text-xs py-4'>
              <p className='uppercase text-xl font-bold p-8 hidden md:flex py-24'>Example Project Overview</p>
              <p className='text-xs pl-8 hidden md:flex '>The autonomous robotics research involved designing and developing a fully autonomous Advanced Driver Assistance System (ADAS) vehicle with Bluetooth path-finding, obstacle avoidance, edge detection, and speed control capabilities on a dynamic track. The project included creating custom firmware to integrate the Arduino's HC-05 Bluetooth module with the operating system for remote control and employing ROS2 for orchestrating communication between the vehicle’s systems, camera, and sensors. Algorithms were implemented in C/C++ and Python, and a custom object detection model using YOLOv10 was trained for enhanced path planning and obstacle detection. Leading a team of eight researchers, the project successfully demonstrated effective autonomous navigation and obstacle avoidance, significantly enhancing the ADAS's safety and reliability, and set a benchmark for future autonomous vehicle projects within the lab.</p>
            </div>
          </div>
          <div className='hidden md:flex'>
            <ProjectItem 
              className='fill'
              title='Autonomous Research Vehicle' 
              image={car} 
              url='../#work' 
              descr='Relevant Project'
            />
          </div>
          <div className='col-span-2 py-16 grid md:grid-cols-2 gap-8'>
            <SkillSection
              title='Ubuntu Linux' 
              icon={ubuntu}
            />
            <SkillSection  
              title='ROS/ROS2' 
              icon={ros} 
            />
            <SkillSection  
              title='CUDA' 
              icon={cuda}  
            />
            <SkillSection  
              title='Git' 
              icon={git}  
            />
            <SkillSection  
              title='I2C' 
              icon={i2c}  
            />
            <SkillSection  
              title='RTOS' 
              icon={rtos}  
            /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default robot;