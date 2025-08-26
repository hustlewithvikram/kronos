'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect for mobile navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-lg md:bg-transparent md:backdrop-blur-none md:shadow-none' : 'bg-white/90 md:bg-transparent'} md:py-4`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                {/* Logo - Black for desktop, white for mobile */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold tracking-tight text-black md:text-black"
                    >
                        Kronos
                    </motion.div>
                    <span className="w-2 h-2 bg-cyan-500 rounded-full group-hover:animate-pulse"></span>
                </Link>

                {/* Desktop Nav - Black Text */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative font-medium transition-all duration-300 px-1 py-2 ${isActive ? 'text-cyan-600 font-semibold' : 'text-gray-800 hover:text-cyan-600'}`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600"
                                        layoutId="navbar-indicator"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle - Black Icon */}
                <div className="md:hidden">
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle menu"
                    >
                        <MenuIcon fontSize="large" />
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu - Medium Dark Background */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Side Panel - Medium Dark Background */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 shadow-2xl flex flex-col px-6 py-8 border-l border-gray-700 md:hidden"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Header with Close Button */}
                            <div className="flex justify-between items-center mb-10">
                                <div className="text-xl font-bold text-white">
                                    Kronos
                                </div>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                                    whileHover={{ rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <CloseIcon fontSize="large" />
                                </motion.button>
                            </div>

                            {/* Navigation Links */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                                    },
                                }}
                                className="flex flex-col space-y-6 flex-1"
                            >
                                {links.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            variants={{
                                                hidden: { opacity: 0, x: 20 },
                                                visible: { opacity: 1, x: 0 },
                                            }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`text-lg font-medium transition-all duration-300 py-3 block px-4 rounded-lg ${isActive ? 'bg-cyan-600/20 text-cyan-400 border-l-4 border-cyan-500' : 'text-gray-200 hover:text-white hover:bg-white/5'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* Contact Info in Mobile Menu */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-8 border-t border-gray-700 mt-8"
                            >
                                <div className="text-gray-400 text-sm mb-4">Get in touch</div>
                                <a href="mailto:contact@kronos.com" className="text-cyan-400 hover:text-cyan-300 transition-colors block mb-2">
                                    contact@kronos.com
                                </a>
                                <a href="tel:+1234567890" className="text-cyan-400 hover:text-cyan-300 transition-colors block">
                                    +1 (234) 567-890
                                </a>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
