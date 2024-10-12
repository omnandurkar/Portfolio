import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 text-white">
            <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
            <p className="text-2xl mb-8 animate-pulse">Oops! Page not found.</p>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-white opacity-75 rounded-lg blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse"></div>
                <Link
                    to="/"
                    className="relative px-6 py-3 bg-neutral-800 rounded-lg leading-none flex items-center"
                >
                    <span className="text-white   transition duration-200">
                        Return to Portfolio
                    </span>
                </Link>
            </div>
        </div>
    )
}