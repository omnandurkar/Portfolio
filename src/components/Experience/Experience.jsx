import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Timeline data
const experiences1 = [
    {
        role: "Software Developer Apprentice",
        company: "Road To Code",
        date: "July 2024 - Nov 2024",
        description: "Spearheaded the development of internal applications like Stoic Notes, Stoic Expense, Invoice, and Payslip, streamlining operations for better efficiency and record management.",
        description2: "Worked on frontend projects, ensuring seamless and responsive user interfaces that enhance the user experience.",
        description3: "Actively involved in mentoring new hires and junior software developers, conducting knowledge transfer sessions, and helping them onboard efficiently.",
    },
    {
        role: "Continuous learning",
        description: "Gained hands-on experience through ongoing training programs, staying updated with the latest industry practices and technologies.",
        currentrole: true
    },

];
const experiences2 = [
    {
        role: "Tech Assistance Intern",
        company: "Tech Company A",
        date: "Dec 2023 - Feb 2024",
        description: "Transformative experience that has equipped me with valuable skills and insights in web development.",
        link: "https://interview-wizard.roadtocode.org/",
        linkTitle: "Interview Wizard"
    },
    {
        role: "Teaching Assistance",
        description: "Taught computer science students the basics of web development.",
    },
    {
        role: "Open-Source Contributor",
        description: `Actively contributed to the open-source Spaceship project by providing valuable insights,
        documentation enhancements, and code contributions, enriching the learning experience for computer
        science students.`,
        link: "https://spaceship.roadtocode.org",
        linkTitle: "Spaceship"
    }
];

const Experience = () => {
    const controls = useAnimation();

    // Trigger animation on scroll
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

    return (
        <div id='Experience' className="grid grid-cols-1 mt-2 min-h-screen md:grid-cols-6 border-t-2 w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto">
            <div className='col-span-1 md:col-span-4  flex justify-center md:justify-start'>
                <h1 className='text-3xl md:text-5xl tracking-tighter font-oswald'>EXPERIENCE</h1>
            </div>
            <div className='col-span-2 ps-16  font-oswald max-lg:w-11/12 max-lg:px-5'>
                <div className='flex flex-col items-center justify-center mb-20 space-y-6 md:space-y-0'>

                    <section className="w-full md:w-[800px] ">
                        <div className='sticky top-0 pb-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                            <div className='flex items-center py-3 md:-translate-x-4'>
                                <img src='https://lh3.googleusercontent.com/p/AF1QipOhQ9UlVMaznORos28Gn5prYVrsnbcYdxYu5ldw=s1360-w1360-h1020' alt='' className='w-14 h-14 border-4 border-black rounded-full bg-black' />
                                <a href='https://stoicsalamander.com/' className='cursor-pointer' >
                                    <h2 className='group-date'>Stoic & Salamander Global Corporation</h2>
                                </a>
                            </div>
                        </div>
                        <div className="timeline">
                            {experiences1.map((exp, index) => (
                                <div className="relative" key={index}>
                                    {
                                        exp.currentrole ? (

                                            <div className="dot ">
                                                <div className="dot absolute -top-1 -left-1 animate-ping "></div>
                                            </div>
                                        ) : (

                                            <div className="dot"></div>
                                        )
                                    }
                                    <div className="pl-10 md:w-11/12">
                                        <span className='timeline-date'>{exp.date}</span>
                                        <h3 className='timeline-title'>{exp.role}</h3>
                                        {
                                            exp.description2 ?
                                                (
                                                    <ul className=' text-gray-400 max-lg:text-justify space-y-5 font-rale '>
                                                        <li  >{exp.description}</li>
                                                        <li>{exp.description2}</li>
                                                        <li>{exp.description3}</li>
                                                    </ul>
                                                ) : (
                                                    <p className='text-gray-400 font-rale max-lg:text-justify'>{exp.description}</p>
                                                )
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="w-full md:w-[800px]">
                        <div className='sticky top-0 py-3 z-10 -translate-y-1 shadow-xl shadow-[#1d1d1f] bg-[#1d1d1f]'>
                            <div className='flex items-center py-3 md:-translate-x-4'>
                                <img src='https://www.roadtocode.org/_next/static/media/logo.c23aa56e.png' alt='' className='w-14 h-14  rounded-full bg-transparent' />
                                <a href='https://www.roadtocode.org/' className='cursor-pointer' >
                                    <h2 className='group-date'>Road To Code</h2>
                                </a>
                            </div>
                        </div>
                        <div className="timeline">
                            {experiences2.map((exp, index) => (
                                <div className="relative" key={index}>
                                    <div className="dot"></div>
                                    <div className="pl-10 md:w-11/12">
                                        <span className='timeline-date'>{exp.date}</span>
                                        <h3 className='timeline-title'>{exp.role} </h3>
                                        <p className='text-gray-400 font-rale max-lg:text-justify'>{exp.description}</p>
                                        {
                                            exp.link &&
                                            <a href={exp.link} target='_blank' className='flex items-center hover:underline underline-offset-2  text-gray-400 hover:text-gray-50 '>
                                                <p className='' >{exp.linkTitle}</p>  <ExternalLink className='h-3.5 mt-1' />
                                            </a>
                                        }
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>
                </div>
            </div >

            {/* <div className='col-span-6 flex justify-center items-center mb-10'>
                <div className='p-2 text-slate-100 max-lg:my-4   opacity-75 hover:opacity-100 text-xs uppercase font-bold  font-rale active:scale-90 cursor-pointer  rounded-md border'>
                    <Link to='/timeline'>
                        Explore Complete Timeline
                    </Link>
                </div>
            </div> */}

        </div >
    );
};

export default Experience;
