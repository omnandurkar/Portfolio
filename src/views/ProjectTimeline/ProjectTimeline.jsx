import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Octomber2024, September2024, August2024, June2024, May2024, April2024, March2024, February2024, January2024, Y2023 } from './Timeline';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


const ProjectTimeline = () => {
    const controls = useAnimation();


    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300) {
            controls.start("visible");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderTimeline = (projects) => {
        return projects.map((exp, index) => (
            <div className="relative" key={index}>
                <div className="dot"></div>
                <a href={exp.link} target='_black'>
                    <div className="pl-10 md:w-11/12">
                        <span className='timeline-date'>{exp.date}</span>
                        <h3 className='timeline-title'>{exp.project}</h3>
                        <p className='text-gray-400 font-rale'>{exp.description}</p>
                        {exp.Original && (
                            <div className='flex space-x-5'>
                                <a href={exp.Clone} target='_blank' rel="noreferrer" className='flex items-center hover:underline underline-offset-2 text-gray-400 hover:text-gray-50 '>
                                    <p className=''>View Clone</p>
                                    <ExternalLink className='h-3.5 mt-1' />
                                </a>
                                <a href={exp.Original} target='_blank' rel="noreferrer" className='flex items-center hover:underline underline-offset-2 text-gray-400 hover:text-gray-50 '>
                                    <p className=''>View Original</p>
                                    <ExternalLink className='h-3.5 mt-1' />
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

            <div className="grid grid-cols-1 mt-2 min-h-screen md:grid-cols-6  w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto mb-36">
                <div className='col-span-1 md:col-span-6 flex justify-center mt-5 mb-10'>
                    <h1 className='text-5xl md:text-5xl tracking-tighter font-oswald'>Projects Timeline</h1>
                </div>
                <div className='col-span-4 ps-16 font-oswald max-lg:w-11/12 max-lg:px-5'>
                    <div className='flex flex-col items-center justify-center mb-20 space-y-6 md:space-y-0'>

                        <section className="w-full md:w-[800px]">
                            <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                                <div className='flex items-center py-3 md:-translate-x-4'>
                                    <h2 className='group-date uppercase'>Octomber 2024</h2>
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

            <Footer />

        </>
    );
};

export default ProjectTimeline;
