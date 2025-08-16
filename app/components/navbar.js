'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center bg-transparent">
                <Link href="/" className="text-2xl font-bold tracking-tight text-white">
                    Kronos
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-[#72a1e5] font-medium transition duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-white focus:outline-none focus:ring-2 focus:ring-[#72a1e5] rounded"
                        aria-label="Toggle menu"
                    >
                        <MenuIcon fontSize="large" />
                    </button>
                </div>
            </div>

            {/* Right-side Slide Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Side Panel */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-black/95 z-50 shadow-xl flex flex-col px-6 py-8"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                        >
                            {/* Close Button */}
                            <div className="flex justify-end mb-8">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white focus:outline-none"
                                >
                                    <CloseIcon fontSize="large" />
                                </button>
                            </div>

                            {/* Links */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
                                    },
                                }}
                                className="flex flex-col space-y-6"
                            >
                                {links.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        variants={{
                                            hidden: { opacity: 0, x: 20 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        className="text-white hover:text-[#72a1e5] text-lg font-medium transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
