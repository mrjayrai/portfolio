import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textgeneff'
import MagicButton from './ui/MagicButton'
import {  FaRocket } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 relative'>
      {/* Spotlight Component */}
      <div>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-20 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        <Spotlight className='top-30 right-80 h-[80vh] w-[50vw]' fill='#CA2C92'/>
      </div>

      {/* Grid Component */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 z-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* new */}
      <div className='flex justify-center my-20 z-10 relative'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-3xl font-medium text-center text-blue-100 max-w-80'>
            Hello!
          </h1>

          <TextGenerateEffect 
          className='text-center text-[10px] md:text-5xl lg:text-6xl'
          words='I&apos;m Pritesh Rai, a Full Stack Developer'/>

          <a href='#about' className='mt-4'>
            <MagicButton 
            title='Let&apos;s Dive in !!'
            icon={<FaRocket color='#A020F0'/>}
            position='right'
            otherclasses='font-bold'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
