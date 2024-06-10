import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Wsps from '../public/Assets/WSP_logo.png';

const WSP = () => {
    return (
      <div id='wsp' className='w-full min-h-screen flex items-center -mt-180x p-16'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Relevant Industry Experience"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>WSP</p>
                <p className='text-md font-bold'>Electrical Engineering Intern</p>
                <p className='py-2 text-sm font-medium'>• Designed and analyzed electrical systems for the Volkswagen Cell Gigafactory and 90% of the Sick Kids Hospital phases by
applying circuit analysis, design of power distribution, control, and security systems.</p>
                <p className='py-2 text-sm font-medium'>• Used Bluebeam Revu, AutoCAD, and Autodesk Revit for conducting in-depth circuit studies, including fault analysis and load
studies, coordinating site visits to collect data that provided insights into efficient schematic design.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill hidden sm:hidden md:block lg:block'>
                <Image 
                src={Wsps} 
                alt='/' 
                width={300} 
                height={300}
                /> 
            </div>
        </div>
    </div>
  )
}

export default WSP;