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
    { icon: <WebIcon fontSize="large" />, title: 'Website Development', description: 'Modern, responsive websites built to impress and perform.' },
    { icon: <AndroidIcon fontSize="large" />, title: 'Android App Development', description: 'High-performance Android apps that scale with your goals.' },
    { icon: <ShoppingCartIcon fontSize="large" />, title: 'E-commerce Solutions', description: 'Launch, grow, and scale your online store with ease.' },
    { icon: <DesignServicesIcon fontSize="large" />, title: 'Branding & UI/UX Design', description: 'Crafting intuitive designs that elevate your brand.' },
    { icon: <CloudIcon fontSize="large" />, title: 'Cloud Hosting & Infra', description: 'Scalable and secure cloud solutions, tailored to your needs.' },
    { icon: <CodeIcon fontSize="large" />, title: 'Custom Software', description: 'From tools to platforms, we build it for your workflow.' },
];

const ServicesSection = () => {
    return (
        <section className="bg-[#111] text-white min-h-screen py-24 px-6 sm:px-12 lg:px-24 flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-white tracking-tight">
                    Our <span className="text-[#72a1e5]">Services</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl hover:shadow-[#72a1e560] hover:shadow-2xl border border-transparent hover:border-[#72a1e5] transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="mb-5 text-[#72a1e5]">
                                {React.cloneElement(service.icon, { fontSize: 'large' })}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#72a1e5] transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
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
