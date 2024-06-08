import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import projectData from './projectData'; const Work = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const initAnimations = () => {
            gsap.fromTo('#project1', {
                x: -800,
            }, {
                x: 800,
                duration: 1,
                scrollTrigger: {
                    trigger: "#project1",
                    start: "top top",
                    pin: true,
                    end: "+=267%",
                    scrub: true
                },
            });

            gsap.fromTo('#project2', {
                x: 800,
            }, {
                x: -800,
                duration: 1,
                scrollTrigger: {
                    trigger: "#project2",
                    start: "top top",
                    pin: true,
                    end: "+=267%",
                    scrub: true
                },
            });

            gsap.fromTo('#project3', {
                x: -800,
            }, {
                x: 1350,
                duration: 1,
                scrollTrigger: {
                    trigger: "#project3",
                    start: "top top",
                    pin: true,
                    end: "+=267%",
                    scrub: true
                },
            });
        };

        // const mediaQuery = window.matchMedia('(min-width: 768px)');

        // if (mediaQuery.matches) {
        //     initAnimations();
        // }

        // mediaQuery.addListener((e) => {
        //     if (e.matches) {
        //         initAnimations();
        //     } else {
        //         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        //     }
        // });

        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            initAnimations();
        }
    });




    const ProjectCard = ({ id, imgSrc, title, title0, description }) => {
        return (
            <div id={id} className='h-screen p-4 md:p-9 space-y-12'>
                <div className='grid grid-cols-6 h-full md:max-w-[1120px] bg-white rounded-2xl overflow-hidden mx-auto'>
                    <div className='flex flex-col justify-between md:col-span-3 h-full p-10 text-black col-span-6'>
                        <div className='flex flex-col space-y-5'>
                            <h1 className='md:text-5xl text-4xl -tracking-wider leading-tight font-oswald'>
                                {title} <br /> {title0}
                            </h1>
                            <div className='flex space-x-3'>
                                <h3 className='border text-xs rounded-full border-black px-2 md:px-4 py-[2px]'>
                                    Product Design
                                </h3>
                                <h3 className='border text-xs rounded-full border-black px-2 md:px-4 py-[2px]'>
                                    Development
                                </h3>
                                <h3 className='border text-xs rounded-full border-black px-2 md:px-4 py-[2px]'>
                                    WordPress
                                </h3>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <p className='font-rale text-sm max-w-md'>{description}</p>
                            <button className='border p-2 rounded-full w-fit px-4 hover:underline hover:underline-offset-2 hover:animate-wiggle animate-infinite hover:bg-black hover:text-white  border-black'>
                                See Live Website -
                            </button>
                        </div>
                    </div>
                    <div className='flex md:col-span-3 col-span-6 bg-[#1d1d1f] overflow-hidden  duration-300'>
                        <img
                            decoding='async'
                            width='2464'
                            height='2560'
                            src={imgSrc}
                            className='w-full object-cover h-auto   hover:scale-110 duration-500 ease-in-out'
                            alt=''
                            sizes='(max-width: 2464px) 100vw, 2464px'
                        ></img>
                    </div>
                </div>
            </div>
        );
    };



    return (
        <div className='h-full'>
            <h1 className='text-6xl md:text-5xl tracking-tighter text-center my-5  font-oswald'>
                PROJECTS
            </h1>
            <div>
                {/* Map over projectData to render each project card */}
                {projectData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Work;
