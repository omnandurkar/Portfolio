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
import one8sport from '/One8sport.png'
import userManagement from '/user-management.png'
import recipe from '/recipe.png'
import macbook from '/macbook.png'
import chartjs from '/chartjs.png'
import roadtocode from '/roadtocode.png'
import framerNotes from '/framerNotes.png'
import authnotes from '/auth-framer-notes.png'
import xora from '/XORA.jpg'
import zentry from '/zentry.png'
import tracer from '/tracer.png'
import spizz from '/spizz.png'
import cyberficaton from '/cyberfication.png'


const projectData = [
    {
        id: 2,
        title: 'Spizz',
        description: 'Spizz is a visually captivating 3D landing page designed to showcase Spizz soda cans in an engaging and interactive way. This project leverages modern web technologies to deliver an immersive user experience.',
        img: spizz,
        link: "https://spizz.vercel.app/",
        type: "personal",
        frontend: true,
        stack: ['NextJs', 'React', 'Three JS', 'React Three Fiber', 'Tailwind CSS', 'GSAP', 'Prismic CMS', 'Figma', 'Vercel']

    },
    {
        id: 3,
        title: 'Cyberfication',
        description: 'Cyberfication is a modern and visually captivating website designed to showcase a fictional cybersecurity company.',
        img: cyberficaton,
        link: "https://cyberfiction-three.vercel.app/",
        type: "personal",
        frontend: true,
        stack: ['Vannila Js', 'HTML', 'CSS', 'Canvas', 'GSAP', 'Figma', 'Vercel']
    },
    {
        id: 4,
        title: 'Tracer',
        description: 'Tracer is a modern, secure, and feature-rich digital journaling application built with cutting-edge technologies. It provides users with a seamless experience to capture thoughts, track moods, and analyze their emotional journey.',
        img: tracer,
        link: "https://tracer-ai.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['Next Js', 'React', 'Tailwind CSS', 'Shadcn UI', 'Zod', 'Clerk', 'Prisma', 'NeonDB', 'Arcjet', 'Server Actions', 'Framer Motion']



    },
    {
        id: 5,
        title: 'Zentry UI',
        description: 'Build a visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling.',
        img: zentry,
        link: "https://zentry-sage.vercel.app/",
        type: "personal",
        frontend: true,
        stack: ['React', 'Tailwind CSS', 'GSAP', 'AOS', 'ScrollTrigger', 'React Router', 'React Icons', 'React Scroll']

    },

    {
        id: 10,
        title: 'AI Interview',
        description: 'A platform for conducting AI-powered mock interviews to help users prepare for job applications.',
        img: img5,
        link: "https://ai-moker.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['Next Js', 'React', 'Node', 'API', 'Magic UI', 'Drizzle ORM', 'Clerk', 'Google Gemini']
    },
    {
        id: 20,
        title: 'Nutribites',
        description: 'A comprehensive online store offering personalized nutrition products tailored to individual needs.',
        img: nutribites,
        link: "https://www.nutribites.store/",
        type: "client",
        frontend: false,
        stack: ['React', 'Node', 'Express', 'MongoDB', 'Firebase', "AOS", 'RazorPay'],
        domain: "www.nutribites.store"

    },
    {
        id: 30,
        title: 'Smart Dustbin',
        description: 'A smart dustbin application designed for efficient waste management and environmental sustainability.',
        img: img6,
        link: "https://dustbin-ruddy.vercel.app/",
        type: "client",
        frontend: false,
        stack: ['React', 'Node', 'Express', 'MongoDB', 'Firebase', 'AOS']
    },
    {
        id: 40,
        title: 'Easy Tickets',
        description: 'A convenient ticket booking system that simplifies event reservations and management.',
        img: img2,
        link: "https://easytickets.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['React', 'Node', 'Express', 'MongoDB', 'Firebase']
    },
    {
        id: 42,
        title: 'XORA - Saas Landing Page',
        description: 'A modern landing page for a SaaS product, showcasing features, pricing, and user testimonials.',
        img: xora,
        link: "https://xora-seven.vercel.app/",
        type: "personal",
        frontend: true,
        stack: ['React', 'Tailwind CSS', 'Framer Motion', 'JSX']

    },
    {
        id: 45,
        title: 'LinkShift Notes',
        description: 'A note-taking application that allows different users to create, edit, and delete notes with ease.',
        img: authnotes,
        link: "https://notes.omnandurkar.me/",
        type: "personal",
        frontend: false,
        stack: ['Next Js', 'React', 'Tailwind CSS', 'MongoDB', 'Server Actions', "Framer Motion"]
    },
    {
        id: 50,
        title: 'One8sports',
        description: 'A dynamic sports academy website that offers training programs and sports merchandise.',
        img: one8sport,
        link: "https://one8sport.in/",
        type: "client",
        frontend: true,
        stack: ['Next Js', 'React', "Acernity UI", 'AOS'],
        domain: "www.one8sports.com"
    },
    {
        id: 60,
        title: 'One8sports (Spare)',
        description: 'An enhanced version of One8sports with improved features and user experience.',
        img: one8sports,
        link: "https://one8sports.vercel.app/",
        type: "client",
        frontend: true,
        stack: ['Next Js', 'React', "Acernity UI", 'AOS']
    },
    {
        id: 70,
        title: 'Clever Books',
        description: 'A personalized book recommendation system that curates reading lists based on user preferences.',
        img: cleverbooks,
        link: "https://clever-books-omega.vercel.app/",
        type: "personal",
        frontend: true,
        stack: ['React', 'Tailwind CSS', 'AOS']
    },
    {
        id: 80,
        title: 'Coffee Shop',
        description: 'An interactive coffee shop website offering a virtual café experience with menu and online ordering.',
        img: img4,
        link: "https://coffee-shop17.vercel.app/",
        type: "personal",
        frontend: true,
        stack: ['UI/UX', 'React', 'Bootstrap', 'KeyFrames']
    },
    {
        id: 90,
        title: 'Doraemon Gadget Store',
        description: 'An e-commerce store inspired by Doraemon, offering futuristic gadgets and accessories.',
        img: doraemon,
        link: "https://doraemon-gadget-store.netlify.app/",
        type: "personal",
        frontend: true,
        stack: ['UI/UX', 'HTML', 'Bootstrap', 'JavaScript', 'KeyFrames']
    },
    {
        id: 100,
        title: 'FoodoBar',
        description: 'A responsive web app providing restaurant-style food ordering with a curated menu.',
        img: img3,
        link: "https://foodobar.netlify.app/",
        type: "personal",
        frontend: true,
        stack: ['UI/UX', 'HTML', 'CSS', 'JavaScript', 'KeyFrames']
    },
    {
        id: 110,
        title: 'Party Planners',
        description: 'A platform to simplify event planning and coordination, offering customizable party packages.',
        img: img1,
        link: "https://party-planners.netlify.app/",
        type: "personal",
        frontend: true,
        stack: ['UI/UX', 'HTML', 'CSS']
    },
    {
        id: 120,
        title: 'User Management CRUD App',
        description: 'A user-friendly application for managing users with Create, Read, Update, and Delete functionalities.',
        img: userManagement,
        link: "https://next-auth-alpha-rose.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['Next Js', 'React', 'Tailwind CSS', 'MongoDB', 'Server Actions', 'Magic UI']
    },
    {
        id: 130,
        title: 'Recipe API App',
        description: 'A recipe app that provides a vast collection of recipes, powered by a robust API for food enthusiasts.',
        img: recipe,
        link: "https://omrecipeapp.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['Next Js', 'React', 'Tailwind CSS', 'API', 'Server Actions']
    },

    {
        id: 140,
        title: 'MacBook Three JS',
        description: 'A 3D model of a MacBook created using React Three Fiber, demonstrating interactive 3D graphics and animation.',
        img: macbook,
        link: "https://mac-three-js.vercel.app/",
        type: "personal",
        frontend: true,
        stack: ['React Three Fiber', 'Three JS', 'React', 'JavaScript', 'Tailwind CSS']

    },

    {
        id: 150,
        title: "Frmer Notes",
        description: "A NextJs based note taking app with Framer Motion ",
        img: framerNotes,
        link: "https://next-framer-notes.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['Next Js', 'React', 'Framer Motion', 'Server Actions', 'MongoDB', 'Tailwind CSS',]

    },


    {
        id: 160,
        title: 'ChartJS Dashboard',
        description: 'A dynamic dashboard with interactive charts and graphs, powered by ChartJS for data visualization.',
        img: chartjs,
        link: "https://dashboard-two-iota-97.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['React', 'ChartJS', 'Tailwind CSS', 'JavaScript']

    },

    {
        id: 170,
        title: 'Road To Code', // website that showcases development cources
        description: 'A platform that offers a variety of coding courses and resources for aspiring developers.',
        img: roadtocode,
        link: "https://road-to-code.vercel.app/",
        type: "personal",
        frontend: false,
        stack: ['React', 'Tailwind CSS', 'JavaScript', 'API', 'MongoDB', 'Node', 'Express', 'GSAP']

    }
]

export default projectData;