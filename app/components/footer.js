'use client';

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer className="bg-[#111] text-white py-12 px-5 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                {/* Left: Brand Info */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-purple-500">KRONOS</h2>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
                        We craft high-performance web & mobile experiences built for growth. Scalable, secure, stunning.
                    </p>
                </div>

                {/* Center: Navigation Links */}
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <h3 className="font-semibold text-white mb-2">Quick Links</h3>
                    {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Right: Social Icons */}
                <div className="flex flex-col gap-4 items-start md:items-end">
                    <h3 className="font-semibold text-white">Follow Us</h3>
                    <div className="flex gap-4">
                        {[
                            { icon: <GitHubIcon />, link: 'https://github.com' },
                            { icon: <LinkedInIcon />, link: 'https://linkedin.com' },
                            { icon: <TwitterIcon />, link: 'https://twitter.com' },
                        ].map(({ icon, link }, idx) => (
                            <a
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-purple-500 transition-colors duration-300 text-gray-400 hover:text-white"
                            >
                                {icon}
                            </a>
                        ))}
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
