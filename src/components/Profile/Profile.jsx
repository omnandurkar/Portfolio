import React from 'react';
import om from './Om_Full.jpg';

const Profile = () => {
    return (
        <div id='about' className='space-y-10 p-4 md:p-10'>

            <div className='flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0'>
                <div className='bg-white text-black p-8 md:p-10 w-full md:w-[550px] rounded-2xl'>
                    <h1 className='font-rale text-xl md:text-3xl tracking-wider'>
                        As a passionate and dedicated MERN Stack Developer, I specialize in crafting responsive, user-friendly web applications using cutting-edge technologies. <br /> <br /> Dive into my portfolio to see how I can transform your ideas into reality.
                    </h1>
                </div>
                <div className='flex justify-center md:justify-start'>
                    <img src={om} className='w-full h-auto md:h-screen rounded-2xl' alt="Om Nandurkar" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 border-t-2 w-full py-5 md:max-w-[1120px] space-y-6 md:space-y-0 mx-auto text-white">
                <div className='col-span-1 md:col-span-3 flex justify-center md:justify-start'>
                    <h1 className='text-4xl md:text-5xl tracking-tighter font-oswald  '>ABOUT ME</h1>
                </div>
                <div className='col-span-1 md:col-span-3 ps-2 md:ps-6'>
                    <h2 className=' text-xl md:text-2xl font-rale'>
                        I have hands-on experience in building websites from scratch, collaborating with UI/UX designers, and optimizing web applications for performance and accessibility. <br /> <br />  Always eager to learn and improve, I stay at the forefront of web development.
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Profile;
