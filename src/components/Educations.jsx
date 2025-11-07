import React from 'react'
import { Education } from '../constants'
import { motion } from 'framer-motion'

const Educations = () => {
  return (
    <div className='pb-4'>
        <motion.h2
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className='my-20 text-center text-[48px] text-stone-800'> Education             
        </motion.h2> 

        <div>
          {Education.map((education, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div
              whileInView={{opacity: 1, x:0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
               className='w-full lg:w-1/4'>

                <p className='mb-2 text-xl text-stone-600'>
                  {education.year}
                </p>
              </motion.div>
              <motion.div
              whileInView={{opacity: 1, x:0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
               className='w-full max-w-xl lg:w-3/4'>
                <h3 className='mb-2 font-semibold text-xl text-stone-800'>
                  {education.institution} <br></br>
                  <span className='text-[16px] text-stone-500'>
                    {education.degree}
                  </span>
                  <br></br>
                  <span className='text-[16px] text-stone-500'>
                    {education.department}
                  </span>
                </h3>
                <p className='mb-4 text-stone-400'> {education.relevant_courses}</p>
              </motion.div>
            </div> 
          ))}          
        </div>   
    </div>
  )
}

export default Educations

