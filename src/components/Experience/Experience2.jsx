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
        <div className="grid grid-cols-1 mt-2  md:grid-cols-6 border-t-2 w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto text-white ">
            <div className='col-span-1 md:col-span-3 flex justify-center md:justify-start'>
                <h1 className='text-4xl md:text-5xl tracking-tighter font-oswald '>EXPERIENCE</h1>
            </div>
            <div className="col-span-1 md:col-span-3 relative">
                {/* Timeline Line */}
                <div className="absolute left-4 h-full border-l-2 border-gray-400"></div>
                {/* Sparkling Line Animation */}
                <motion.div
                    className="absolute left-3 top-0 w-1 bg-gradient-to-b from-white to-transparent h-full"
                    initial={{ height: 0 }}
                    animate={controls}
                    variants={{ visible: { height: '100%' } }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Timeline items */}
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="mb-10 flex items-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        {/* Dot on Timeline */}
                        <div className="w-8 h-8 bg-neutral-400 rounded-full flex justify-center items-center relative z-10">
                            <div className="w-3 h-3 bg-neutral-800 rounded-full"></div>
                        </div>
                        {/* Content */}
                        <div className="ml-8">
                            <h2 className="text-2xl font-semibold">{exp.role}</h2>
                            <h3 className="text-lg font-light text-gray-300">{exp.company}</h3>
                            <p className="text-sm text-gray-400">{exp.date}</p>
                            <p className="text-sm mt-2">{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
