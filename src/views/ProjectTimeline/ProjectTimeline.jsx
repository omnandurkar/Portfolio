import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { November2024, Octomber2024, September2024, August2024, June2024, May2024, April2024, March2024, February2024, January2024, Y2023, December2024 } from './Timeline';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ProjectTimeline = () => {
    const controls = useAnimation();
    const [hoveredProject, setHoveredProject] = useState(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300) {
            controls.start('visible');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        const image = document.querySelector('.floating-image');
        if (hoveredProject !== null && image) {

            gsap.from(image, {
                opacity: 0,
                scale: 0.8,
                // x: -350,
                y: 650,
                duration: 0.7,
                ease: 'power3.in',
            })

            gsap.to(image, {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                duration: 0.7,
                ease: 'elastic.out(0.4, 0.4)',
            });
        } else if (image) {
            gsap.to(image, {
                opacity: 0,
                scale: 0.8,
                x: -50,
                y: -50,
                duration: 0.5,
                ease: 'power3.in',
            });
        }
    }, [hoveredProject]);

    const renderTimeline = (projects) => {
        return projects.map((exp, index) => (
            <div className="relative group" key={index}>
                <div className="dot"></div>
                <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setHoveredProject(exp)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    <div className="pl-10 md:w-11/12">
                        <span className="timeline-date">{exp.date}</span>
                        <h3 className="timeline-title" title={exp.project}>
                            {exp.project}
                        </h3>
                        <p className="text-gray-400 font-rale">{exp.description}</p>
                        {exp.techStack && (
                            <div className="flex flex-wrap">
                                {exp.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-black px-2 mr-2 my-2 py-1 text-sm rounded-lg hover:bg-gray-100 font-semibold bg-gray-400 font-rale"
                                        title={tech}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        {exp.Original && (
                            <div className="flex space-x-5">
                                <a
                                    href={exp.Clone}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:underline underline-offset-2 text-gray-400 hover:text-gray-50"
                                >
                                    <p>View Clone</p>
                                </a>
                                <a
                                    href={exp.Original}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:underline underline-offset-2 text-gray-400 hover:text-gray-50"
                                >
                                    <p>View Original</p>
                                </a>
                            </div>
                        )}
                    </div>
                </a>
            </div>
        ));
    };

    return (
        <>
            <Navbar />

            <div className="relative">
                <div className="grid grid-cols-1 mt-2 min-h-screen md:grid-cols-6 w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto mb-36">
                    <div className="col-span-1 md:col-span-6 flex justify-center mt-5 mb-10">
                        <h1 className="text-5xl md:text-5xl tracking-tighter font-oswald">
                            Projects Timeline
                        </h1>
                    </div>
                    <div className="col-span-4 ps-16 font-oswald max-lg:w-11/12 max-lg:px-5">
                        <div className='flex flex-col items-center justify-center mb-20 space-y-6 md:space-y-0'>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>December 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(December2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>November 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(November2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>October 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(Octomber2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>September 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(September2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>August 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(August2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>June 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(June2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>May 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(May2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>April 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(April2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>March 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(March2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>February 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(February2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>January 2024</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(January2024)}
                                </div>
                            </section>

                            <section className="w-full md:w-[800px]">
                                <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                    <div className='flex items-center py-3 md:-translate-x-4'>
                                        <h2 className='group-date uppercase'>2023</h2>
                                    </div>
                                </div>
                                <div className="timeline">
                                    {renderTimeline(Y2023)}
                                </div>
                            </section>



                        </div>
                    </div>
                </div>

                {/* Floating Image */}
                {hoveredProject && hoveredProject.img && (
                    <div className="floating-image max-lg:hidden  fixed top-36 right-20 z-50 w-96  opacity-0 scale-0 pointer-events-none">
                        <img
                            src={hoveredProject.img}
                            alt={hoveredProject.project}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <h2 className="text-white text-center mt-5 font-rale font-bold bg-opacity-90 p-2 rounded-b-lg">
                            {hoveredProject.project}
                        </h2>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default ProjectTimeline;
