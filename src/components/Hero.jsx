import React from 'react'
import profilePicture from "../assets/PIC.png" 
import { HERO_CONTENT} from "../constants" 
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5}}
}


const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'> 
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'> 
                <div className='flex justify-center lg:p-8'> 
                    <motion.img
                        src={profilePicture} alt="Profile Pic" className='border-none rounded-3xl'
                        width={650}
                        height={650}
                        initial= {{ x : 100, opacity: 0}}
                        animate= {{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1.5}}
                     />
                </div>
            </div>

            <div className='w-full lg:w-1/2'>                
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants} className='flex flex-col items-center lg:items-start mt-10'>
                    <motion.h2
                        variants={childVariants}
                        
                     className='pb-2 text-4xl tracking-tighter lg:text-8xl text-stone-900'>Shaikh Asif Hossain</motion.h2>  
                    <br></br>
                    <motion.span
                        variants={childVariants}
                     className='bg-gradient-to-r from-stone-600 to-stone-900 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Machine Learning | Deep Learning | Computer Vision 
                    </motion.span>

                    <motion.p
                        variants={childVariants}
                     className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-stone-600'>
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a
                    variants={childVariants}
                     href='https://drive.google.com/file/d/1BHkJLzEvlUm4VIUwI8IbD9g9NZDcIMrp/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                        
                        className='bg-black rounded-full p-3 text-sm text-stone-200 mb-8'>
                        Download Resume
                    </motion.a>
                </motion.div>              

            </div>

        </div>
      
    </div>
  )
}

export default Hero
