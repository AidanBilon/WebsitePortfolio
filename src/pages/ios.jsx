import React from 'react'
import flut from '../../public/Assets/Projects/flut.jpeg'
import swift from '../../public/Assets/Projects/Icons/swift.png'
import react from '../../public/Assets/Projects/Icons/react.png'
import js from '../../public/Assets/Projects/Icons/js.png'
import htcs from '../../public/Assets/Projects/Icons/htcs.png'
import flutters from '../../public/Assets/Projects/Icons/flutters.png'
import dart from '../../public/Assets/Projects/Icons/dart.png'
import xcode from '../../public/Assets/Projects/Icons/xcode.png'
import firebase from '../../public/Assets/Projects/Icons/fireb.png'
import SkillSection from '../../components/SkillItem'
import ProjectItem from '../../components/ProjectItem'


const ios = () => {
  return (
    <div>
      <div className='w-full md:h-screen p-2 flex items-center py-16 px-16'>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-2 gap-8'>
          <div>
            <p className='uppercase text-2xl font-bold p-2'>IOS/Andriod Application Development</p>
            <div className='text-xs py-4'>
              <p className='p-4'>Fusing innovation and functionality I have found myself to be quite interested in full-stack mobile app development. With a diverse skill set, I proficiently work with an array of languages, libraries, APIs, and frameworks to bring extraordinary app experiences to life. From JavaScript, and HTML/CSS to React Native, Swift, Flutter, Dart, and Firebase, I possess the tools to craft versatile and dynamic mobile applications. Leveraging the power of Xcode Simulator and Android Studio, I ensure seamless testing and optimization for iOS and Android apps.</p>
              <p className='uppercase text-xl font-bold p-8 hidden md:flex py-24'>Example Project Overview</p>
              <p className='text-xs pl-8 hidden md:flex '>An ambitious work-in-progress project is a new social media app designed to run seamlessly on both iOS and Android platforms. This cutting-edge app harnesses the power of technologies such as Flutter, and Dart to deliver a unified user experience across devices. By incorporating location-based services and authentication API for secure access, this app aims to redefine the way we connect and interact with others. </p>
            </div>
          </div>
          <div className='hidden md:flex'>
            <ProjectItem 
              className='fill'
              title='Blur' 
              image={flut} 
              url='/blur' 
              descr='Relevant Project'
            />
          </div>
          <div className='col-span-2 py-16 grid md:grid-cols-2 gap-8'>
            <SkillSection
              title='Swift/SwiftUI' 
              icon={swift}
            />
            <SkillSection  
              title='React Native' 
              icon={react} 
            />
            <SkillSection  
              title='JavaScript' 
              icon={js} 
            />
            <SkillSection  
              title='HTML/CSS' 
              icon={htcs}  
            />
            <SkillSection  
              title='Dart' 
              icon={dart}  
            />
            <SkillSection  
              title='Flutter' 
              icon={flutters}  
            />
            <SkillSection  
              title='Xcode/Simulator' 
              icon={xcode}  
            />
            <SkillSection  
              title='Firebase' 
              icon={firebase} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ios