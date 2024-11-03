import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; 

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-[48px] text-stone-800'>
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'>
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'>
              <h3 className='mb-2 flex items-center font-semibold text-[24px] text-stone-800'>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='flex items-center'>

                  {project.title}
                   <FaGithub className='ml-6 text-stone-600 size-[18px]' /> 
                </a>
              </h3>
              <p className='mb-4 text-stone-500'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span className='mr-2 rounded bg-stone-950 p-2 text-sm font-medium text-stone-300' key={index}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
