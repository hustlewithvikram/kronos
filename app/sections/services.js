'use client';

import React from 'react';
import { motion } from 'framer-motion';

import WebIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';

const services = [
    { icon: <WebIcon />, title: 'Website Development', description: 'Modern, responsive websites built to impress and perform.' },
    { icon: <AndroidIcon />, title: 'Android App Development', description: 'High-performance Android apps that scale with your goals.' },
    { icon: <ShoppingCartIcon />, title: 'E-commerce Solutions', description: 'Launch, grow, and scale your online store with ease.' },
    { icon: <DesignServicesIcon />, title: 'Branding & UI/UX Design', description: 'Crafting intuitive designs that elevate your brand.' },
    { icon: <CloudIcon />, title: 'Cloud Hosting & Infra', description: 'Scalable and secure cloud solutions, tailored to your needs.' },
    { icon: <CodeIcon />, title: 'Custom Software', description: 'From tools to platforms, we build it for your workflow.' },
];

const ServicesSection = () => {
    return (
        <section className="bg-[#111] text-white py-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto w-full">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-white tracking-tight">
                    Our <span className="text-purple-500">Services</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-colors duration-300 cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="mb-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-500 text-xl sm:text-2xl">
                                {React.cloneElement(service.icon, { fontSize: 'inherit' })}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-purple-500 transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
