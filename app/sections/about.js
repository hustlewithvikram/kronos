'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="w-full bg-[#111] text-white py-10 sm:py-20 px-5 sm:px-10 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24 w-full max-w-7xl mx-auto">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col gap-6 text-center lg:text-left"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        About <span className="text-purple-500">Kronos</span>
                    </h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 w-16 sm:w-20 bg-purple-500 rounded-full origin-left mx-auto lg:mx-0"
                    />

                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed sm:leading-7 font-medium">
                        Kronos is a <span className="text-purple-500 font-semibold">tech-forward studio</span> turning ideas into real-world impact.
                        We specialize in <span className="text-purple-500 font-semibold">blazing-fast websites</span> and <span className="text-purple-500 font-semibold">powerful Android apps</span>
                        tailored for startups, creators, and scaling businesses.
                    </p>

                    <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed sm:leading-6">
                        Our work blends <span className="text-purple-500 font-medium">elegant design</span>, <span className="text-purple-500 font-medium">sharp strategy</span>, and cutting-edge tech to build digital experiences that feel modern, intuitive, and scalable.
                        We focus on <span className="text-purple-500 font-medium">clarity, performance</span>, and pushing boundaries — always.
                    </p>
                </motion.div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 100, rotate: 0 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 45 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex-1 flex justify-center items-center"
                >
                    <div className="relative w-36 h-56 sm:w-64 sm:h-64 md:w-72 md:h-96 lg:w-80 lg:h-96 overflow-hidden rounded-full bg-purple-500/20">
                        <Image
                            src="/images/about-image.jpg"
                            alt="about"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;
