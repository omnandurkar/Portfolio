import React from 'react';
import { Svg1 } from './Svgs';
import { Svg2 } from './Svgs';
import { Svg3 } from './Svgs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    useGSAP(() => {
        gsap.fromTo(
            '#card1',
            {
                opacity: 0,
                y: 100,
                duration:1
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '#card1',
                    start: 'top 40%',
                    scrub: true,
                    pin : true,
                    markers: true
                },
            }   
        );

        gsap.fromTo(
            '#card2',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '#card2',
                    start: 'top 20%',
                    scrub: true,
                    pin : true,
                    markers: true
                },
            }   
        );

        gsap.fromTo(   
            '#card3',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: '#card3',
                    start: 'top 20%',
                    scrub: true,
                    pin : true ,
                    markers: true
                },
            }
        );
    });

    
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-6 border-t-2 w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto text-white">
                <div className='col-span-1 md:col-span-3 flex justify-center md:justify-start'>
                    <h1 className='text-4xl md:text-5xl tracking-tighter font-oswald '>HOW CAN I HELP</h1>
                </div>
                <div className='col-span-1 md:col-span-3 px-6 space-y-10'>

                    <div id='card1' className="flex flex-col justify-between bg-[#343434] rounded-xl space-y-10  w-full md:p-8 p-5 ">
                        <div className="flex flex-col md:flex-row md:space-x-3 space-x-0 space-y-5 md:space-y-0 ">
                            <div className="flex bg-white rounded-xl h-[70px] w-[70px] justify-center items-center">
                                <Svg1 />
                            </div>
                            <div className="flex flex-col justify-between p-1 space-y-5 md:space-y-0">

                                <div className="flex">
                                    <h2 className=' font-rale font-semibold text-xl '>WEB DESIGN</h2>
                                </div>
                                <div className="flex flex-row space-x-4 items-center">
                                    <h3 className=' bg-[#1d1d1f] text-white px-5 py-[2px] text-xs rounded-full hover:rotate-12 duration-300 ease-in-out '>Item1</h3>
                                    <h3 className=' bg-[#4c4c4c] text-white px-5 py-[2px] text-xs rounded-full hover:-rotate-12 duration-300 ease-in-out '>Item1</h3>
                                    <h3 className=' bg-transparent border text-white px-5 py-[2px] text-xs rounded-full hover:rotate-12 duration-300 ease-in-out '>Item1</h3>

                                </div>

                            </div>
                        </div>
                        <div className="flex">
                            <p>Web design goes beyond static visuals. It's about interactions, animations, usability, consistency and so much more. I create user-focused designs for your website, ensuring a captivating online journey for your audience.</p>
                        </div>
                    </div>

                    <div id='card2' className="flex flex-col justify-between bg-[#343434] rounded-xl space-y-10  w-full md:p-8 p-5 ">
                        <div className="flex flex-col md:flex-row md:space-x-3 space-x-0 space-y-5 md:space-y-0 ">
                            <div className="flex bg-white rounded-xl h-[70px] w-[70px] justify-center items-center">
                                <Svg2 />
                            </div>
                            <div className="flex flex-col justify-between p-1 space-y-5 md:space-y-0">
                                <div className="flex">
                                    <h2 className=' font-rale font-semibold text-xl '>WORDPRESS DEVELOPMENT</h2>
                                </div>
                                <div className="flex flex-row space-x-4 items-center">
                                    <h3 className=' bg-[#1d1d1f] text-white px-5 py-[2px] text-xs rounded-full hover:rotate-12 duration-300 ease-in-out '>Item1</h3>
                                    <h3 className=' bg-[#4c4c4c] text-white px-5 py-[2px] text-xs rounded-full hover:-rotate-12 duration-300 ease-in-out '>Item1</h3>
                                    <h3 className=' bg-transparent border text-white px-5 py-[2px] text-xs rounded-full hover:rotate-12 duration-300 ease-in-out '>Item1</h3>

                                </div>

                            </div>
                        </div>
                        <div className="flex">
                            <p>Web design goes beyond static visuals. It's about interactions, animations, usability, consistency and so much more. I create user-focused designs for your website, ensuring a captivating online journey for your audience.</p>
                        </div>
                    </div>

                    <div id='card3' className="flex flex-col justify-between bg-[#343434] rounded-xl space-y-10  w-full md:p-8 p-5 ">
                        <div className="flex flex-col md:flex-row md:space-x-3 space-x-0 space-y-5 md:space-y-0 ">
                            <div className="flex bg-white rounded-xl h-[70px] w-[70px] justify-center items-center">
                                <Svg3 />
                            </div>
                            <div className="flex flex-col justify-between p-1 space-y-5 md:space-y-0">

                                <div className="flex">
                                    <h2 className=' font-rale font-semibold text-xl '>HELPING STARTUPS & BUSINESSES</h2>
                                </div>
                                <div className="flex flex-row space-x-4 items-center">
                                    <h3 className=' bg-[#1d1d1f] text-white px-5 py-[2px] text-xs rounded-full hover:rotate-12 duration-300 ease-in-out '>Item1</h3>
                                    <h3 className=' bg-[#4c4c4c] text-white px-5 py-[2px] text-xs rounded-full hover:-rotate-12 duration-300 ease-in-out '>Item1</h3>
                                    <h3 className=' bg-transparent border text-white px-5 py-[2px] text-xs rounded-full hover:rotate-12 duration-300 ease-in-out '>Item1</h3>

                                </div>

                            </div>
                        </div>
                        <div className="flex">
                            <p>Web design goes beyond static visuals. It's about interactions, animations, usability, consistency and so much more. I create user-focused designs for your website, ensuring a captivating online journey for your audience.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Skills