import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import projectData from './projectData';

const AllProjects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projectData.filter((project) => {
        if (filter === 'all') return true;
        return project.type === filter;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='pb-20'>
            <Navbar />

            <h2 className='text-center font-oswald text-5xl p-10'>
                Projects
            </h2>

            {/* Filter Buttons */}
            <div className='text-center mb-10'>
                <motion.button
                    className={`px-4 py-2 mx-2 mb-4 sm:mb-0 rounded transition-colors duration-500 ${filter === 'all' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('all')}
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    All Projects
                </motion.button>
                <motion.button
                    className={`px-4 py-2 mx-2 mb-4 sm:mb-0 rounded transition-colors duration-500 ${filter === 'personal' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('personal')}
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Personal Projects
                </motion.button>
                <motion.button
                    className={`px-4 py-2 mx-2 rounded transition-colors duration-500 ${filter === 'client' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('client')}
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Client Projects
                </motion.button>
            </div>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 md:px-40'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {filteredProjects.map((project) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        key={project.id}
                        title={project.link}
                        // whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='bg-[#333333] text-slate-100 shadow-lg hover:shadow-neutral-800 rounded-lg'
                    >
                        <div className='w-full h-52 overflow-hidden rounded-t-md'>
                            <motion.img
                                className='rounded-md w-full hover:scale-105 transition-all'
                                src={project.img}
                                alt={project.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                        <div className='flex flex-col p-4 space-y-1'>
                            <h3 className='text-xl font-oswald'>{project.title}</h3>
                            <p className='text-xs font-rale'>{project.description}</p>
                            {project.stack && (
                                <div className='flex flex-wrap gap-2 pt-2'>
                                    {project.stack.map((tech) => (
                                        <span key={tech} className='text-xs bg-neutral-700 text-neutral-300 px-2 py-1 rounded-md'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default AllProjects;
