'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GetStartedButton from '../components/getstartedbutton';

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="relative flex flex-col md:flex-row min-h-screen bg-black overflow-hidden">
            {/* Left Image */}
            <div className="w-full md:w-2/5 flex items-center justify-center relative">
                <Image
                    src="/images/orange.jpg"
                    alt="Orange Juice"
                    className="w-full h-80 sm:h-96 md:h-screen object-cover"
                    height={800}
                    width={800}
                    priority
                />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-3/5 relative flex flex-col justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
                    style={{ filter: 'brightness(0.15)' }} // dims the image
                />

                {/* Content */}
                <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-12 flex flex-col gap-6">
                    <motion.div
                        initial="hidden"
                        animate={isClient ? 'visible' : 'hidden'}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                        className="flex flex-col gap-4"
                    >
                        <motion.h1
                            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white leading-tight font-bitcount uppercase"
                        >
                            Kronos Tech
                        </motion.h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                            transition={{ duration: 0.8 }}
                            className="text-xl sm:text-2xl lg:text-3xl text-[#72a1e5] font-medium"
                        >
                            Code. Create. Conquer.
                        </motion.p>

                        <motion.p
                            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                            transition={{ duration: 1 }}
                            className="text-gray-200 max-w-xl text-base sm:text-lg lg:text-xl"
                        >
                            Crafting high-performance websites and Android apps with elegant, user-friendly design.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 1.2 }}
                            className="mt-8 flex flex-wrap gap-4 sm:gap-6"
                        >
                            <GetStartedButton />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
