'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative flex min-h-screen bg-black overflow-hidden">
            <div className="relative z-10 flex w-full h-full">
                {/* Left Image - 40% */}
                <div className="w-2/5 flex items-center justify-center">
                    <Image
                        src="/images/orange.jpg"
                        alt="Orange Juice"
                        className="w-full h-screen object-cover"
                        height={600}
                        width={600}
                    />
                </div>

                {/* Right Content - 60% */}
                <div className="w-3/5 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 gap-6">
                    {/* Company Name */}
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl sm:text-7xl lg:text-8xl font-thin text-white leading-tight font-bitcount uppercase"
                    >
                        Kronos Tech
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl lg:text-4xl text-[#72a1e5] font-medium"
                    >
                        Code. Create. Conquer.
                    </motion.p>

                    {/* Short Value Proposition */}
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-gray-400 max-w-xl text-lg sm:text-xl lg:text-2xl"
                    >
                        Crafting high-performance websites and Android apps with elegant, user-friendly design.
                    </motion.p>

                    {/* CTA Buttons with micro-interactions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="mt-8 flex gap-6 flex-wrap"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#5e91d6' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const el = document.getElementById('contact');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-[#72a1e5] text-black font-semibold rounded-xl shadow-lg transition-all duration-300 text-lg"
                        >
                            Get Started
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(114,161,229,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            href="#services"
                            className="px-8 py-4 border border-[#72a1e5] text-white rounded-xl transition duration-300 text-lg"
                        >
                            Our Services
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
