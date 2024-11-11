"use client"

import Image from "next/image"
import Logo from "../../../public/assets/Logo.jpg"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Handle scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <div className="bg-white shadow-md relative z-50">
            {/* Top Announcement Bar */}
            <div className="bg-orange-600 text-center py-2 text-sm text-white">
                Sign up and get 20% off your first order.{' '}
                <a href="#" className="font-semibold underline ml-2 hover:text-orange-200">Sign Up Now</a>
            </div>

            <header className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                        <Image
                            src={Logo}
                            alt="TastyBites Logo"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <h1 className="text-2xl font-extrabold ml-3 text-orange-600">TastyBites</h1>
                    </Link>

                    {/* Hamburger button */}
                    <button
                        className="lg:hidden z-50 p-2 text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    {/* Navigation menu */}
                    <div 
                        className={`
                            fixed inset-0 bg-gray-900/95 lg:bg-transparent
                            lg:static lg:block
                            transition-opacity duration-300
                            ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'}
                        `}
                    >
                        <nav className={`
                            flex flex-col lg:flex-row
                            items-center justify-center
                            h-full lg:h-auto
                            space-y-8 lg:space-y-0 lg:space-x-8
                        `}>
                            <Link 
                                href="/"
                                className={`text-2xl lg:text-base font-semibold
                                    ${pathname === '/' 
                                        ? 'text-orange-500 lg:text-orange-600' 
                                        : 'text-white lg:text-gray-700 hover:text-orange-400 lg:hover:text-orange-600'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/menu"
                                className={`text-2xl lg:text-base font-semibold
                                    ${pathname === '/menu' 
                                        ? 'text-orange-500 lg:text-orange-600' 
                                        : 'text-white lg:text-gray-700 hover:text-orange-400 lg:hover:text-orange-600'
                                    }`}
                            >
                                Menu
                            </Link>
                            <Link 
                                href="/about"
                                className={`text-2xl lg:text-base font-semibold
                                    ${pathname === '/about' 
                                        ? 'text-orange-500 lg:text-orange-600' 
                                        : 'text-white lg:text-gray-700 hover:text-orange-400 lg:hover:text-orange-600'
                                    }`}
                            >
                                About
                            </Link>
                            <Link 
                                href="/contact"
                                className={`text-2xl lg:text-base font-semibold
                                    ${pathname === '/contact' 
                                        ? 'text-orange-500 lg:text-orange-600' 
                                        : 'text-white lg:text-gray-700 hover:text-orange-400 lg:hover:text-orange-600'
                                    }`}
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}