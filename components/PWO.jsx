import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Pwos from '../public/Assets/pwo.png';

const PWO = () => {
    return (
      <div id='pwo' className='w-full min-h-screen flex items-center -mt-180x'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Relevant Industry Experience"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-extrabold'>PWO Group</p>
                <p className='text-md font-bold'>Machine Learning Quality Engineering Intern</p>
                <p className='py-2 text-sm font-medium'>• Employed reinforcement learning using KNIME to optimize and enhance part production by extracting machine-fed datasets
of welds, eliminating error and improving robotic weld seam quality.</p>
                <p className='py-2 text-sm font-medium'>• Streamlined documentation processes and introduced new procedural software that replaced handwritten forms with scanning
of products, resulting in a significant reduction of processing time and a 6% increase in productivity.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-md items-center justify-center fill'>
                <Image 
                src={Pwos} 
                alt='/' 
                width={300} 
                height={300}
                /> 
            </div>
        </div>
    </div>
  )
}

export default PWO;