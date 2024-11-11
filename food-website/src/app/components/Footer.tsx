import React from "react"
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-orange-600 text-white py-8">
            <div className="container mx-auto px-4">
                <h3 className="font-bold text-xl mb-4 text-center">Connect With Us</h3>
                <div className="flex justify-center space-x-6 mb-6 text-3xl">
                    <Link href="https://www.facebook.com" className="hover:text-orange-200 transition-colors"><FaFacebookSquare /></Link>
                    <Link href="https://www.linkedin.com" className="hover:text-orange-200 transition-colors"><FaLinkedin /></Link>
                    <Link href="mailto:contact@tastybites.com" className="hover:text-orange-200 transition-colors"><MdEmail /></Link>
                    <Link href="https://www.youtube.com" className="hover:text-orange-200 transition-colors"><FaYoutube /></Link>
                </div>
                <p className="text-center text-sm">&copy; 2024 TastyBites. All Rights Reserved.</p>
            </div>
        </footer>
    )
}