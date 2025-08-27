'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/companydata';

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

    // Handle scroll effect for background (changes only for desktop view)
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close sidebar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 md:py-4`}
        >
            <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 h-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold tracking-tight text-black"
                    >
                        {companyInfo.name}
                    </motion.div>
                    <span className="w-2 h-2 bg-cyan-500 rounded-full group-hover:animate-pulse"></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative font-medium transition-all duration-300 px-1 py-2
                  ${isActive ? 'text-cyan-600 font-semibold' : 'text-gray-800 hover:text-cyan-600'}`}
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

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-200 transition-colors"
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle menu"
                    >
                        <MenuIcon fontSize="large" />
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md z-50 shadow-2xl flex flex-col px-6 py-8 border-l border-gray-200 md:hidden"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-10">
                                <div className="text-xl font-bold text-gray-900">
                                    {companyInfo.name}
                                </div>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                }}
                                className="flex flex-col space-y-4 flex-1"
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
                                                className={`text-lg font-medium transition-all duration-300 py-3 block px-4 rounded-lg
                          ${isActive
                                                        ? 'bg-cyan-100 text-cyan-700 border-l-4 border-cyan-500'
                                                        : 'text-gray-800 hover:text-black hover:bg-gray-100'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-8 border-t border-gray-200 mt-8"
                            >
                                <div className="text-gray-600 text-sm mb-2">Get in touch</div>
                                <a
                                    href="mailto:contact@kronos.com"
                                    className="text-cyan-600 hover:text-cyan-500 transition-colors block mb-1"
                                >
                                    {companyInfo.email}
                                </a>
                                <a
                                    href="tel:+1234567890"
                                    className="text-cyan-600 hover:text-cyan-500 transition-colors block"
                                >
                                    {companyInfo.phoneNumber}
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
