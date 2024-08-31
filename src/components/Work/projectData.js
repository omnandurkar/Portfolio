import img0 from "./Nutribites-mockup.png";
import img2 from "./dustbin.png";
import img1 from "./booking.png";
import img3 from "./cleverbooks.png";


const projectData = [

    {
        id: 'project0',
        imgSrc: img0,
        title: 'NUTRIBITES',
        title0: 'Online Health Food Store',
        description:
            'Developed a modern online health food store using the MERN stack. The site includes a user-friendly design with animations created using AOS and Tailwind CSS. It features allowing user to Google Sign-in, Explore different products, Add to favourites, Add to cart, Apply Coupen, Place order, Track Order, Cancle Order, a contact page, review system, and admin panel for adding, editing, deleting products, coupen codes, Tracking order details, user logins, Contact Requests and many more',
        live: 'https://nutribites.store/',

    },


    {
        id: 'project1',
        imgSrc: img1,
        title: 'EASY TICKETS -',
        title0: 'BOOK TRAIN TICKETS',
        description:
            'Created an online train ticket booking site using the MERN stack. The platform is mobile and desktop-friendly, featuring a modern UI with Tailwind CSS. It includes async functions, props, components, and REST APIs, with Google Sign-in via Firebase Auth. Admin functionalities allow monitoring user statuses, managing bookings, and handling contact requests and reviews.',
        live: 'https://easytickets.vercel.app/',
    },
    {
        id: 'project2',
        imgSrc: img2,
        title: 'SMART DUSTBIN -',
        title0: 'PROJECT',
        description:
            'Developed a Smart Dustbin website using the MERN stack. The site features a modern, responsive design with animations created using AOS and Tailwind CSS. It includes Google Sign-in, a contact page, review system, and an admin panel for managing requests and reviews.',
        live: 'https://dustbin-ruddy.vercel.app/',
    },
    // {
    //     id: 'project3',
    //     imgSrc: img3,
    //     title: 'CLEVER BOOKS ‒',
    //     title0: ' MODERN UI',
    //     description:
    //         'A Modern UI/UX website made with ReactJs and Tailwind CSS.',
    //     live: 'https://clever-books-omega.vercel.app/',
    // },
];

export default projectData;
