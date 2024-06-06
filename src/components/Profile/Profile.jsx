import React from 'react';
import om from './Om_Full.jpg';

const Profile = () => {
    return (
        <div className='space-y-10 p-4 md:p-10'>

            <div className='flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0'>
                <div className='bg-white text-black p-8 md:p-10 w-full md:w-[550px] rounded-2xl'>
                    <h1 className='font-rale text-xl md:text-3xl tracking-wider'>
                        Hey! I'm Om Nandurkar, a dedicated and independent web designer and WordPress developer based in Pune, Maharashtra.
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
                        As a creative developer, I focus on both design and development — I work closely with my clients to ensure that every project meets their unique needs and exceeds their expectations. <br/><br/> My goal is to create outstanding digital experiences, improve every day, and have fun!
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Profile;
