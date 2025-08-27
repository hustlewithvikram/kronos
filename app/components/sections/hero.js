'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Rocket, TrendingUp, Code, DesignServices, Terminal } from '@mui/icons-material';

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const reduceMotion = useReducedMotion();

    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95]);
    const fadeUp = {
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const scrollToContactForm = () => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={ref}
            aria-label="Hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 py-16 md:py-24"
        >
            {/* Enhanced background effects */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-200 to-blue-300 opacity-50 blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-200 to-purple-300 opacity-50 blur-[110px] animate-pulse-slow delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-40 blur-[90px] animate-pulse-slow delay-500" />
                <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,.1)_1px,transparent_0)] [background-size:40px_40px]" />
            </div>

            <div className="absolute bottom-20 right-10 md:right-20 opacity-70">
                <motion.div
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="text-purple-400/40"
                >
                    <Rocket sx={{ fontSize: 60 }} />
                </motion.div>
            </div>

            {/* Content container */}
            <motion.div
                style={{ opacity: heroOpacity }}
                className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-16"
            >
                {/* Left: Text */}
                <div className="order-2 md:order-1">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="inline-flex items-center gap-1 rounded-full border border-cyan-300/40 bg-cyan-50/80 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm backdrop-blur-sm"
                    >
                        <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                        Now accepting new projects
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.05 }}
                        className="mt-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl lg:leading-[1.15]"
                    >
                        Engineering
                        <span className="block mt-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                            Digital Excellence
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.1 }}
                        className="mt-8 max-w-xl text-lg text-gray-600 lg:text-xl leading-relaxed"
                    >
                        Full‑stack applications with elegant UX, robust APIs, and AI‑enhanced workflows—crafted to scale, deploy rapidly, and deliver measurable impact.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.15 }}
                        className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                        <motion.button
                            onClick={scrollToContactForm}
                            whileHover={{ scale: reduceMotion ? 1 : 1.04 }}
                            whileTap={{ scale: reduceMotion ? 1 : 0.97 }}
                            className="group inline-flex items-center justify-center gap-x-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition-all duration-300"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.a
                            href="/projects"
                            whileHover={{ scale: reduceMotion ? 1 : 1.04 }}
                            whileTap={{ scale: reduceMotion ? 1 : 0.97 }}
                            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-8 py-4 text-base font-semibold text-gray-800 backdrop-blur-sm hover:bg-gray-50 hover:shadow focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
                        >
                            View Portfolio
                        </motion.a>
                    </motion.div>

                    {/* Stats card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="mt-14 max-w-md rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur-lg shadow-sm grid grid-cols-3 divide-x divide-gray-200/60 overflow-hidden"
                    >
                        <div className="px-4 py-5 text-center">
                            <div className="text-2xl font-bold text-gray-900 sm:text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">5+</div>
                            <div className="mt-1 text-sm text-gray-600">Projects</div>
                        </div>
                        <div className="px-4 py-5 text-center">
                            <div className="text-2xl font-bold text-gray-900 sm:text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">90%</div>
                            <div className="mt-1 text-sm text-gray-600">Satisfaction</div>
                        </div>
                        <div className="px-4 py-5 text-center">
                            <div className="text-2xl font-bold text-gray-900 sm:text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">2025</div>
                            <div className="mt-1 text-sm text-gray-600">Founded</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Enhanced Floating Glass Card */}
                <div className="order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="
              relative rounded-2xl overflow-hidden shadow-2xl
              p-6 sm:p-7 md:p-8
              bg-gradient-to-br from-blue-600 to-cyan-600 text-white
              max-w-[560px] mx-auto
            "
                    >
                        <div className="absolute -top-16 -right-16 h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-white/10" />
                        <div className="absolute -bottom-16 -left-16 h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-white/10" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center">
                                    <Code sx={{ color: 'white', fontSize: 26 }} />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold">Full-Stack Development</h3>
                                    <p className="text-blue-100 text-sm">Modern & Scalable Solutions</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                                <div className="bg-white/10 rounded-lg p-3.5 sm:p-4 backdrop-blur-sm">
                                    <DesignServices sx={{ fontSize: 28, marginBottom: 4 }} />
                                    <h4 className="font-semibold text-sm sm:text-base">UI/UX Design</h4>
                                    <p className="text-xs sm:text-sm text-blue-100 mt-1">Intuitive interfaces</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3.5 sm:p-4 backdrop-blur-sm">
                                    <Terminal sx={{ fontSize: 28, marginBottom: 4 }} />
                                    <h4 className="font-semibold text-sm sm:text-base">Development</h4>
                                    <p className="text-xs sm:text-sm text-blue-100 mt-1">Clean code</p>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-lg p-3.5 sm:p-4 backdrop-blur-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-sm sm:text-base">Project Completion</span>
                                    <span className="text-blue-100 text-sm">90%</span>
                                </div>
                                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '90%' }}
                                        transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
                                        className="h-full bg-white rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
