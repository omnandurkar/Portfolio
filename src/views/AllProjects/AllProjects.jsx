import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import img1 from '/img1.jpg'
import img2 from '/2.jpg'
import img3 from '/3.jpg'
import img4 from '/4.jpg'
import img5 from '/5.jpg'
import img6 from '/6.jpg'
import doraemon from '/doraemon.png'
import cleverbooks from '/cleverbooks.png'
import nutribites from '/Nutribites-mockup.png'
import one8sports from './image.png'
import userManagement from '/user-management.png'
import recipe from '/recipe.png'
import Navbar from '../../components/Navbar/Navbar'

const projectData = [
    {
        id: 1,
        title: 'AI Interview',
        description: 'A platform for conducting AI-powered mock interviews to help users prepare for job applications.',
        img: img5,
        link: "https://ai-moker.vercel.app/",
        type: "personal"
    },
    {
        id: 2,
        title: 'Nutribites',
        description: 'A comprehensive online store offering personalized nutrition products tailored to individual needs.',
        img: nutribites,
        link: "https://www.nutribites.store/",
        type: "client"
    },
    {
        id: 3,
        title: 'Smart Dustbin',
        description: 'A smart dustbin application designed for efficient waste management and environmental sustainability.',
        img: img6,
        link: "https://clever-books-omega.vercel.app/",
        type: "client"
    },
    {
        id: 4,
        title: 'Easy Tickets',
        description: 'A convenient ticket booking system that simplifies event reservations and management.',
        img: img2,
        link: "https://easytickets.vercel.app/",
        type: "personal"
    },
    {
        id: 5,
        title: 'One8sports',
        description: 'A dynamic sports academy website that offers training programs and sports merchandise.',
        img: one8sports,
        link: "https://one8sports2.vercel.app/",
        type: "client"
    },
    {
        id: 6,
        title: 'One8sports2.0',
        description: 'An enhanced version of One8sports with improved features and user experience.',
        img: one8sports,
        link: "https://one8sports.vercel.app/",
        type: "client"
    },
    {
        id: 7,
        title: 'Clever Books',
        description: 'A personalized book recommendation system that curates reading lists based on user preferences.',
        img: cleverbooks,
        link: "https://clever-books-omega.vercel.app/",
        type: "personal",
    },
    {
        id: 8,
        title: 'Coffee Shop',
        description: 'An interactive coffee shop website offering a virtual café experience with menu and online ordering.',
        img: img4,
        link: "https://coffee-shop17.vercel.app/",
        type: "personal",
    },
    {
        id: 9,
        title: 'Doraemon Gadget Store',
        description: 'An e-commerce store inspired by Doraemon, offering futuristic gadgets and accessories.',
        img: doraemon,
        link: "https://doraemon-gadget-store.netlify.app/",
        type: "personal"
    },
    {
        id: 10,
        title: 'FoodoBar',
        description: 'A responsive web app providing restaurant-style food ordering with a curated menu.',
        img: img3,
        link: "https://foodobar.netlify.app/",
        type: "personal",
    },
    {
        id: 11,
        title: 'Party Planners',
        description: 'A platform to simplify event planning and coordination, offering customizable party packages.',
        img: img1,
        link: "https://party-planners.netlify.app/",
        type: "personal",
    },
    {
        id: 12,
        title: 'User Management CRUD App',
        description: 'A user-friendly application for managing users with Create, Read, Update, and Delete functionalities.',
        img: userManagement,
        link: "https://next-auth-alpha-rose.vercel.app/",
        type: "personal",
    },
    {
        id: 13,
        title: 'Recipe API App',
        description: 'A recipe app that provides a vast collection of recipes, powered by a robust API for food enthusiasts.',
        img: recipe,
        link: "https://omrecipeapp.vercel.app/",
        type: "personal"
    }
]




const AllProjects = () => {
    const [filter, setFilter] = useState('all');


    const filteredProjects = projectData.filter((project) => {
        if (filter === 'all') return true;
        return project.type === filter;
    });


    return (
        <div className='pb-20'>

            <Navbar />

            <h2 className='text-center font-oswald text-5xl p-10'>Projects</h2>

            {/* Filter Buttons */}
            <div className='text-center mb-10'>
                <button
                    className={`px-4 py-2 mx-2 mb-4 sm:mb-0 rounded transition-colors duration-500 ${filter === 'all' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('all')}
                >
                    All Projects
                </button>
                <button
                    className={`px-4 py-2 mx-2 mb-4 sm:mb-0 rounded transition-colors duration-500 ${filter === 'personal' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('personal')}
                >
                    Personal Projects
                </button>
                <button
                    className={`px-4 py-2 mx-2 rounded transition-colors duration-500 ${filter === 'client' ? 'bg-neutral-300 text-black' : 'bg-neutral-700 text-white'}`}
                    onClick={() => setFilter('client')}
                >
                    Client Projects
                </button>
            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 md:px-40'>
                {filteredProjects.map((project) => (
                    <a href={project.link} target="_blank" key={project.id} title={project.link}>
                        <div className='bg-[#333333] text-slate-100 shadow-lg hover:shadow-neutral-800 rounded-lg'>
                            <div className='w-full h-52 overflow-hidden rounded-t-md'>
                                <img className='rounded-md w-full hover:scale-105 transition-all' src={project.img} alt={project.title} />
                            </div>
                            <div className='flex flex-col p-4 space-y-1'>
                                <h3 className='text-xl font-oswald'>{project.title}</h3>
                                <p className='text-xs font-rale'>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}



export default AllProjects