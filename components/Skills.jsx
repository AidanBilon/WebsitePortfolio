import React from 'react';
import Head from 'next/head';
import SkillItem from './SkillItem';
import web from '../public/Assets/mainlogo.png';
import app from '../public/Assets/IconSkill/App.png';
import ai from '../public/Assets/IconSkill/AIML.png';
import lang from '../public/Assets/IconSkill/lang.png';

const Skills = () => {
  return ( 
    <div id='skills' className='w-full'>
      <Head>
        <title>Aidan Bilon</title>
        <meta name="description" content="Skill Section"></meta>
        <meta name="keywords" content="Aidan Bilon, Engineering Resume"></meta>
        <meta name="robots" content="index,follow"/>
      </Head>
        <div className='max-w-[1200px] mx-auto px-2 pt-32'>
            <p className='uppercase text-2xl font-extrabold pb-6'>Skills</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <SkillItem 
                title='Website Development' 
                icon= {web}
                url='/webd' 
                />
                <SkillItem  
                title='IOS/Mobile Development' 
                icon={app} 
                url='/ios' 
                />
                <SkillItem  
                title='Machine Learning and Artificial Intelligence' 
                icon={ai} 
                url='/mlai' 
                />
                <SkillItem  
                title='Languages' 
                icon={lang} 
                url='/lang' 
                />
            </div>
        </div>
    </div>
  )
}

export default Skills;