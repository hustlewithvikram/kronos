'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section
            className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-20 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-illustration.jpg')" }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-[#0f172a]/80 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-24">
                {/* Left Text Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                        Build Brilliance with <span className="text-[#72a1e5]">Kronos</span>
                    </h1>
                    <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
                        We craft high-performance websites and Android apps tailored to your brand’s success.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <button
                            onClick={() => {
                                const el = document.getElementById('contact');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3 bg-[#72a1e5] hover:bg-[#5e91d6] text-[#0f172a] font-semibold rounded-xl shadow-lg transition-all duration-500 transform md:hover:rounded-[100] cursor-pointer"
                        >
                            Get Started
                        </button>
                        <a
                            href="#services"
                            className="px-8 py-3 border border-[#72a1e5] text-white rounded-sm hover:bg-[#72a1e5]/10 transition duration-300 text-center"
                        >
                            Learn More
                        </a>
                    </div>
                </motion.div>

                {/* Right Empty Spacer or Image Placeholder (optional) */}
                <div className="flex-1 hidden md:block" />
            </div>
        </section>
    );
};

export default HeroSection;
