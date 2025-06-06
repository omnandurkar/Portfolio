import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import projectData from './projectData';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const AllProjects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projectData.filter((project) => {
        if (filter === 'all') return true;
        if (filter === 'frontend') return project.frontend === true;
        if (filter === 'backend') return project.frontend === false;
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
                    whileTap={{ scale: 0.95 }}
                >
                    All Projects
                </motion.button>
                <motion.button
                    className={`px-4 py-2 mx-2 rounded transition-colors duration-500 ${filter === 'frontend' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('frontend')}
                    whileTap={{ scale: 0.95 }}
                >
                    Frontend
                </motion.button>
                <motion.button
                    className={`px-4 py-2 mx-2 rounded transition-colors duration-500 ${filter === 'backend' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('backend')}
                    whileTap={{ scale: 0.95 }}
                >
                    Full Stack
                </motion.button>
                <motion.button
                    className={`px-4 py-2 mx-2 mb-4 sm:mb-0 rounded transition-colors duration-500 ${filter === 'personal' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('personal')}
                    whileTap={{ scale: 0.95 }}
                >
                    Personal
                </motion.button>
                <motion.button
                    className={`px-4 py-2 mx-2 rounded  transition-colors duration-500 ${filter === 'client' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('client')}
                    whileTap={{ scale: 0.95 }}
                >
                    Client
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
                        whileTap={{ scale: 0.98 }}
                        className='bg-[#333333] relative text-slate-100 shadow-lg hover:shadow-neutral-800 rounded-lg'
                    >
                        <div className='absolute right-2 top-2 z-10'>
                            {
                                project.frontend ? (
                                    <h2 className='text-xs bg-neutral-700 text-white px-2 py-1 rounded-md'>
                                        Frontend
                                    </h2>
                                ) : (
                                    <h2 className='text-xs bg-neutral-700 text-white px-2 py-1 rounded-md'>
                                        Full Stack
                                    </h2>
                                )
                            }
                        </div>

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
                            <div className='flex justify-between'>
                                <h3 className='text-xl font-oswald'>{project.title}</h3>

                                {project.domain && (
                                    <div className='text-xs text-white font-rale py-2 hover:underline underline-offset-2'>
                                        {project.domain}
                                    </div>
                                )}
                            </div>
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

            <div className='w-full flex justify-center mb-40'>
                <div className='p-2 text-slate-100 mt-2 opacity-75 hover:opacity-100 text-xs uppercase font-bold mx-auto font-rale active:scale-90 cursor-pointer rounded-md border'>
                    <Link to='/timeline'>
                        Check Timeline
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AllProjects;
