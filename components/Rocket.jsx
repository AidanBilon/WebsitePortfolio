import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Rockets from '../public/Assets/rocketry.png';

const Rocket = () => {
    return (
      <div id='rocket' className='w-full min-h-screen flex items-center -mt-180x p-16'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Relevant Industry Experience"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>Waterloo Rocketry</p>
                <p className='text-md font-bold'>Embedded Firmware & Hardware Developer</p>
                <p className='py-2 text-sm font-medium'>• Combined the PCB layouts of actuator and propulsion boards using KiCad, increasing efficiency and overall performance by
50%, reducing material cost, and increasing the processing power of the MCU.</p>
                <p className='py-2 text-sm font-medium'>• Programmed and optimized the PIC18F microcontroller in C to enhance the functionality and performance of rocketry systems
on the actuator and propulsion board by writing efficient code.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill hidden sm:hidden md:block lg:block'>
                <Image 
                src={Rockets} 
                alt='/' 
                width={200} 
                height={200}
                /> 
            </div>
        </div>
    </div>
  )
}

export default Rocket;