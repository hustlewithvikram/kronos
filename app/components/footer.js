'use client';

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                {/* Left: Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold tracking-wide text-[#72a1e5]">KRONOS</h2>
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
                        We craft high-performance web & mobile experiences built for growth. Scalable, secure, stunning.
                    </p>
                </div>

                {/* Center: Navigation Links */}
                <div className="flex flex-col gap-2 text-sm">
                    <h3 className="font-semibold text-white mb-2">Quick Links</h3>
                    <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
                    <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
                    <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
                </div>

                {/* Right: Social Icons */}
                <div className="flex flex-col gap-4 items-start md:items-end">
                    <h3 className="font-semibold text-white">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="text-gray-400 hover:text-white transition" fontSize="medium" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="text-gray-400 hover:text-white transition" fontSize="medium" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className="text-gray-400 hover:text-white transition" fontSize="medium" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Kronos. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
