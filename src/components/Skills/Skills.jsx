import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Svg1 } from './Svgs';


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    useGSAP(() => {
        const animateCards = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#card-boxx",
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 0.5
                }
            });
            tl.from('.card-container', { x: 1000, duration: 1, opacity: 0, stagger: 0.5 });
        };

        animateCards();
    });


    const Card = ({ title, iconUrl, iconComponent, description, features }) => {
        return (
            <div className="card-container">
                <div className="flex flex-col justify-between bg-[#343434] rounded-xl space-y-10 w-full md:p-8 p-5 hover:drop-shadow-2xl">
                    <div className="flex flex-col md:flex-row md:space-x-3 space-x-0 space-y-5 md:space-y-0">
                        <div className="flex bg-white rounded-xl h-[70px] w-[70px] p-3 justify-center items-center">
                            {iconComponent ? iconComponent : <img src={iconUrl} alt="svg" />}
                        </div>
                        <div className="flex flex-col justify-between p-1 space-y-5 md:space-y-0">
                            <div className="flex">
                                <h2 className="font-rale font-semibold text-xl">{title}</h2>
                            </div>
                            <div className="flex flex-row space-x-4 items-center">
                                {features.map((feature, index) => (
                                    <h3 key={index} className="bg-[#1d1d1f] text-white px-5 py-[2px] text-xs rounded-full hover:rotate-12 duration-300 ease-in-out">{feature}</h3>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-6 border-t-2 w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto text-white">
            <div className='col-span-1 md:col-span-3 flex justify-center md:justify-start'>
                <h1 className='text-4xl md:text-5xl tracking-tighter font-oswald '>HOW CAN I HELP</h1>
            </div>
            <div id='card-boxx' className='col-span-1 md:col-span-3 px-6 space-y-10 relative'>
                <Card
                    title="WEB DEVLOPMENT"
                    iconUrl="https://cdn-icons-png.flaticon.com/128/10285/10285722.png"
                    description="Web development encompasses more than just creating static visuals. It involves building dynamic and interactive websites and web applications that are functional, efficient, and user-friendly."
                    features={["Fast", "Interactive", "Mobile Friendly"]}
                />
                <Card
                    title="WEB DESIGN"
                    iconComponent={<Svg1 />}
                    description="Web design goes beyond static visuals. It's about interactions, animations, usability, consistency and so much more. I create user-focused designs for your website, ensuring a captivating online journey for your audience."
                    features={["Modern", "Attractive", "Responsive"]}
                />
                <Card
                    title="Backend Solutions"
                    iconUrl="https://cdn-icons-png.flaticon.com/128/2010/2010990.png"
                    description="Backend solutions encompass more than just server-side development. They involve creating robust, scalable, and efficient systems to power the functionality of websites and web applications."
                    features={["API", "Database", "Authentication"]}
                />
            </div>
        </div>
    )
}

export default Skills;
