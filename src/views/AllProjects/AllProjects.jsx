import React, { useState } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import projectData from './projectData'



const AllProjects = () => {
    const [filter, setFilter] = useState('all');


    const filteredProjects = projectData.filter((project) => {
        if (filter === 'all') return true;
        return project.type === filter;
    });


    return (
        <div className='pb-20'>

            <Navbar />

            <h2 className='text-center font-oswald text-5xl p-10'>Projects</h2>

            {/* Filter Buttons */}
            <div className='text-center mb-10'>
                <button
                    className={`px-4 py-2 mx-2 mb-4 sm:mb-0 rounded transition-colors duration-500 ${filter === 'all' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('all')}
                >
                    All Projects
                </button>
                <button
                    className={`px-4 py-2 mx-2 mb-4 sm:mb-0 rounded transition-colors duration-500 ${filter === 'personal' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('personal')}
                >
                    Personal Projects
                </button>
                <button
                    className={`px-4 py-2 mx-2 rounded transition-colors duration-500 ${filter === 'client' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('client')}
                >
                    Client Projects
                </button>
            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 md:px-40'>
                {filteredProjects.map((project) => (
                    <a href={project.link} target="_blank" key={project.id} title={project.link}>
                        <div className='bg-[#333333] text-slate-100 shadow-lg hover:shadow-neutral-800 rounded-lg'>
                            <div className='w-full h-52 overflow-hidden rounded-t-md'>
                                <img className='rounded-md w-full hover:scale-105 transition-all' src={project.img} alt={project.title} />
                            </div>
                            <div className='flex flex-col p-4 space-y-1'>
                                <h3 className='text-xl font-oswald'>{project.title}</h3>
                                <p className='text-xs font-rale'>{project.description}</p>
                                {project.stack && (
                                    <div className='flex flex-wrap gap-2 pt-2'>
                                        {project.stack.map((tech) => (
                                            <span key={tech} className='text-xs bg-neutral-700 text-neutral-300 px-2 py-1 rounded-md'>{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}



export default AllProjects