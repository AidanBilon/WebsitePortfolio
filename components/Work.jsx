import React from 'react';
import Head from 'next/head';

const Work = () => {
    return (
      <div id='work' className='w-full min-h-screen flex items-center -mt-60'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Relevant Industry Experience"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>Real-Time Embedded System Lab</p>
                <p className='text-md font-bold'>Lead Autonomous Robotics Researcher</p>
                <p className='py-2 text-sm font-medium'>• Created a fully autonomous, Bluetooth, path-finding, and obstacle avoidance ADAS vehicle, controlling location, speed, edge
detection, and steering while on a moving track to conduct research on.</p>
                <p className='py-2 text-sm font-medium'>• Developed vehicle firmware and embedded systems, and implemented computer vision and object detection algorithms,
enhancing path planning and object detection capabilities using ROS2, C/C++, Python, Linux, along with custom-trained
algorithms and zone detection technologies.</p>
                <p className='py-2 text-sm font-medium'>•Founded and directed the project team, worked on every aspect of vehicle hardware, electrical systems, track detection
communication, and training of the object/car detection model.</p>
            </div>
            <div>
                <video autoPlay loop muted className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                    <source src="/Assets/20240530_102516.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
  )
}

export default Work;