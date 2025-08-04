'use client';

import React from 'react';

const AboutSection = () => {
    return (
        <section className="w-full bg-[#111] text-white py-24 px-6 sm:px-12 lg:px-24 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                    About <span className="text-[#72a1e5]">Kronos</span>
                </h2>

                {/* Divider */}
                <div className="w-20 h-1 bg-[#72a1e5] mb-10 rounded-full" />

                {/* Main Paragraph */}
                <p className="text-lg sm:text-xl text-gray-300 leading-8 font-medium mb-6">
                    Kronos is a tech-forward studio turning ideas into real-world impact. We specialize in blazing-fast
                    websites and powerful Android apps tailored for startups, creators, and scaling businesses.
                </p>

                {/* Supporting Paragraph */}
                <p className="text-base sm:text-lg text-gray-400">
                    Our work blends elegant design, sharp strategy, and cutting-edge tech to build digital experiences that feel
                    modern, intuitive, and built to scale. We focus on clarity, performance, and pushing boundaries — always.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
