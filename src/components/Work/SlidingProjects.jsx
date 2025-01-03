import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectData from '../../views/AllProjects/projectData';

const SlidingProjects = () => {
    const [isHovered, setIsHovered] = useState(false);


    const extendedProjectData = [...projectData, ...projectData];

    return (
        <div className="py-10 px-10 overflow-hidden">
            <motion.div
                className="flex gap-10"
                initial={{ x: "1%" }}
                animate={isHovered ? {} : { x: "-94%" }}
                transition={{
                    repeat: Infinity,
                    duration: 200,
                    ease: "linear",

                }}
                style={{ display: "inline-flex" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {extendedProjectData.map((project, index) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        // key={project.id}
                        key={`${project.id}-${index}`}
                        title={project.link}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#333333] min-w-[300px] relative text-slate-100 shadow-lg hover:shadow-neutral-800 rounded-lg"
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#f1f5f9",
                            color: "#333333",
                        }}

                    >
                        <div className="absolute right-2 top-2 z-10">
                            {project.frontend ? (
                                <h2 className="text-xs bg-neutral-700 text-white px-2 py-1 rounded-md">
                                    Frontend
                                </h2>
                            ) : (
                                <h2 className="text-xs bg-neutral-700 text-white px-2 py-1 rounded-md">
                                    Full Stack
                                </h2>
                            )}
                        </div>

                        <div className="w-full h-36 overflow-hidden rounded-t-md">
                            <motion.img
                                className="rounded-md w-full hover:scale-105 transition-all"
                                src={project.img}
                                alt={project.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                        <div className="flex flex-col p-4 space-y-1">
                            <div className="flex justify-center">
                                <h3 className="text-xl font-oswald">{project.title}</h3>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </div >
    );
};

export default SlidingProjects;
