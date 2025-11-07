import React from 'react';
import { PUBLICATIONS } from '../constants';
import { motion } from 'framer-motion';

const Publications = () => {
  return (
    <div className="pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-[48px] font-semibold text-stone-800"
      >
        Publications
      </motion.h2>

      <div className="flex flex-col items-center">
        {PUBLICATIONS.map((pub, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="mb-10 w-full max-w-4xl rounded-lg bg-stone-50 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="mb-2 text-2xl font-semibold text-stone-800">
              {pub.title}
            </h3>

            <p className="mb-1 text-sm text-stone-600 italic">
              {pub.authors}
            </p>

            <p className="mb-4 text-sm text-stone-500">
              <strong>Conference:</strong> {pub.conference}
            </p>

            <p className="text-stone-700 leading-relaxed">{pub.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
