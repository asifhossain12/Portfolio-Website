import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiPandas } from "react-icons/si";
import { SiOpencv, SiPostgresql } from "react-icons/si";

import { animate, motion } from 'framer-motion';


const iconVariants = (duration) => ({
    intitial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-22'>
        <motion.h2
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}

            className='my-20 text-center text-[48px] text-stone-800'>Technologies             
        </motion.h2>

        <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}

            className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className='p-4'>
                <FaPython className='text-7xl text-sky-700'/>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)} className='p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-500'/>
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(5)} className='p-4'>
                <SiDjango className='text-7xl text-green-800'/>
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(2.5)} className='p-4'>
                <SiScikitlearn className='text-7xl text-blue-500'/>
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                 className='p-4'>
                <SiTensorflow className='text-7xl text-orange-400'/>
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                 className='p-4'>
                <FaAws className='text-7xl text-black'/>
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                 className='p-4'>
                <SiNumpy className='text-7xl text-black'/>
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                 className='p-4'>
                <SiPandas className='text-7xl text-blue-400'/>
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                 className='p-4'>
                <SiOpencv className='text-7xl text-red-500' />
            </motion.div>

            <motion.div
            initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                 className='p-4'>
                <SiPostgresql className='text-7xl text-sky-500' />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies
