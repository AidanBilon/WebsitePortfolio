import React from 'react';
import SkillItem from './SkillItem';
import web from '../public/Assets/IconSkill/Web.png';
import app from '../public/Assets/IconSkill/App.png';
import ai from '../public/Assets/Skills/AIML.png';
import lang from '../public/Assets/IconSkill/lang.png';

const Skills = () => {
  return ( 
    <div id='skills' className='w-full'>
        <div className='max-w-[1200px] mx-auto px-2 py-16'>
            <p className='uppercase text-2xl font-bold p-6'>Skills</p>
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