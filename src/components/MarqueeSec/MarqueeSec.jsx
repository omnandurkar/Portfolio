import React, { useEffect } from 'react';
import gsap from 'gsap';

const MarqueeSec = () => {
    useEffect(() => {
        const marquee = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        marquee.to(".marqueeItem", {
            xPercent: -700,
            duration: 60,
            //   stagger: 0,
            yoyo: true,
        });
    }, []);

    const tags = [
        "MERN STACK DEVELOPER - ",
    ];

    // Duplicate tags multiple times to ensure continuous scrolling
    const marqueeTags = Array(10).fill(tags).flat();

    return (
        <div className="marquee overflow-hidden -mt-8 -p whitespace-nowrap flex items-center  ">
            <div className=" flex">
                {marqueeTags.map((tag, index) => (
                    <div
                        className="marqueeItem font-oswald inline-block px-8 text-[150px] md:text-[330px] tracking-[-0.05em]  text-white"
                        key={index}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeSec;
