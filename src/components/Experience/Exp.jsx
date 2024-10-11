import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Timeline data
const experiences = [
    {
        role: "Software Engineer",
        company: "Tech Company A",
        date: "Jan 2020 - Present",
        description: "Worked on various projects related to cloud and web development."
    },
    {
        role: "Frontend Developer",
        company: "Design Studio B",
        date: "Jun 2018 - Dec 2019",
        description: "Developed interactive UI/UX solutions for web applications."
    },
    {
        role: "Intern",
        company: "Startup C",
        date: "Jan 2017 - May 2018",
        description: "Assisted in mobile app development and testing."
    },
    {
        role: "Intern",
        company: "Startup C",
        date: "Jan 2017 - May 2018",
        description: "Assisted in mobile app development and testing."
    }
];

const Experience = () => {
    const controls = useAnimation();

    // Trigger animation on scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300) { // Adjust value based on section position
            controls.start("visible");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="grid grid-cols-1 mt-2 min-h-screen   md:grid-cols-6 border-t-2 w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto  ">
            <div className='col-span-1 md:col-span-3 flex justify-center md:justify-start'>
                <h1 className='text-4xl md:text-5xl tracking-tighter font-oswald '>EXPERIENCE</h1>
            </div>
            <div className='col-span-3 font-oswald '>
                <div className='flex flex-col items-center justify-center  mb-20'>

                    <section className="w-[800px]">
                        <div className='sticky top-0  py-3 z-10 shadow-xl bg-[#1d1d1f] shadow-[#1d1d1f]'>
                            <h2 className='group-date ' >NOVEMBER 2021</h2>
                        </div>

                        <div className="timeline">

                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className='timeline-date'>13 NOVEMBER 2021</span>
                                    <h3 className='timeline-title' >Event 1</h3>
                                    <p className='text-gray-500 font-rale  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur magnam, porro aspernatur dignissimos illo, fugiat perferendis quaerat commodi id voluptas facere culpa nam, eveniet laboriosam. Harum accusantium hic cupiditate.</p>
                                </div>
                            </div>


                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className='timeline-date'>11 NOVEMBER 2021</span>
                                    <h3 className='timeline-title' >Event 2</h3>
                                    <p className='text-gray-500 font-rale '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur magnam, porro aspernatur dignissimos illo, fugiat perferendis quaerat commodi id voluptas facere culpa nam, eveniet laboriosam. Harum accusantium hic cupiditate.</p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className='timeline-date'>19 NOVEMBER 2021</span>
                                    <h3 className='timeline-title' >Event 3</h3>
                                    <p className='text-gray-500 font-rale '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur magnam, porro aspernatur dignissimos illo, fugiat perferendis quaerat commodi id voluptas facere culpa nam, eveniet laboriosam. Harum accusantium hic cupiditate.</p>
                                </div>
                            </div>


                        </div>

                    </section>

                    <section className="w-[800px]">
                        <div className='sticky top-0  py-3 z-10 shadow-xl bg-[#1d1d1f] shadow-[#1d1d1f]'>
                            <h2 className='group-date' >DECEMBER 2021</h2>
                        </div>

                        <div className="timeline">

                            <div className="relative">
                                <div className="dot" title='current event' >
                                    <div className="dot absolute -top-1 -left-1 animate-ping "></div>
                                </div>
                                <div className="pl-10">
                                    <span className='timeline-date'>13 DECEMBER 2021</span>
                                    <h3 className='timeline-title' >Event 1</h3>
                                    <p className='text-gray-500 font-rale '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur magnam, porro aspernatur dignissimos illo, fugiat perferendis quaerat commodi id voluptas facere culpa nam, eveniet laboriosam. Harum accusantium hic cupiditate.</p>
                                </div>
                            </div>


                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className='timeline-date'>11 DECEMBER 2021</span>
                                    <h3 className='timeline-title' >Event 2</h3>
                                    <p className='text-gray-500 font-rale '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur magnam, porro aspernatur dignissimos illo, fugiat perferendis quaerat commodi id voluptas facere culpa nam, eveniet laboriosam. Harum accusantium hic cupiditate.</p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="dot"></div>
                                <div className="pl-10">
                                    <span className='timeline-date'>19 DECEMBER 2021</span>
                                    <h3 className='timeline-title' >Event 3</h3>
                                    <p className='text-gray-500 font-rale '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur magnam, porro aspernatur dignissimos illo, fugiat perferendis quaerat commodi id voluptas facere culpa nam, eveniet laboriosam. Harum accusantium hic cupiditate.</p>
                                </div>
                            </div>


                        </div>

                    </section>

                </div>

            </div>

        </div>
    );
};

export default Experience;
