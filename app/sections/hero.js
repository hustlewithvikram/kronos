'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDownward, ArrowRight } from '@mui/icons-material';

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const reduceMotion = useReducedMotion();

    // Slight depth fade on scroll (kept gentle for light theme)
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.96]);
    const indicatorY = reduceMotion ? 0 : [0, 8, 0];

    // Entrance
    const fadeUp = {
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    };

    const scrollToContactForm = () => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={ref}
            aria-label="Hero"
            className="relative min-h-[600px] overflow-hidden bg-white text-gray-900 py-20 md:py-8"
        >
            {/* Background: soft color glows + faint grid tuned for light bg */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                {/* tone down the blobs to avoid eye strain on white */}
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-50 blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-fuchsia-200 to-purple-200 opacity-50 blur-[120px]" />
                {/* light grid at very low opacity */}
                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:32px_32px] [background-position:center]" />
            </div>

            {/* Content container */}
            <motion.div
                style={{ opacity: heroOpacity }}
                className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-16"
            >
                {/* Left: Text */}
                <div className="order-2 md:order-1">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-100/60 px-3 py-1.5 text-sm text-cyan-700"
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
                        Now booking Q4 projects
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.05 }}
                        className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                    >
                        Engineering
                        <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                            Exceptional Digital Products
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.1 }}
                        className="mt-6 max-w-xl text-base text-gray-600 sm:text-lg"
                    >
                        Full‑stack apps with clean UX, robust APIs, and AI‑powered workflows—designed to scale and ship fast.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.15 }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <motion.button
                            onClick={scrollToContactForm}
                            whileHover={{ scale: reduceMotion ? 1 : 1.02 }}
                            whileTap={{ scale: reduceMotion ? 1 : 0.98 }}
                            className="group inline-flex items-center justify-center cursor-pointer gap-x-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                            aria-label="Start a project"
                        >
                            <span>Start a Project</span>
                            <ArrowRight />
                        </motion.button>

                        <motion.a
                            href="/projects"
                            whileHover={{ scale: reduceMotion ? 1 : 1.02 }}
                            whileTap={{ scale: reduceMotion ? 1 : 0.98 }}
                            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white/70 px-7 py-3.5 text-base font-semibold text-gray-800 backdrop-blur-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            aria-label="View portfolio"
                        >
                            View Portfolio
                        </motion.a>
                    </motion.div>

                    {/* Trust stats (kept concise) */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="mt-10 grid grid-cols-3 gap-6 text-center md:max-w-md md:text-left"
                    >
                        <div>
                            <div className="text-2xl font-bold text-gray-900 sm:text-3xl">5+</div>
                            <div className="mt-1 text-xs text-gray-500">Projects</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900 sm:text-3xl">90%</div>
                            <div className="mt-1 text-xs text-gray-500">Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900 sm:text-3xl">2025</div>
                            <div className="mt-1 text-xs text-gray-500">Founded</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Minimal glass card (adapted for light theme) */}
                <div className="order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                        className="relative mx-auto w-full max-w-xl"
                    >
                        {/* very soft glow */}
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/15 via-blue-400/15 to-fuchsia-400/15 blur-2xl" aria-hidden />
                        {/* glass card tuned for light bg */}
                        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/60 p-6 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                            <div className="aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                                <div className="flex h-full items-center justify-center p-6">
                                    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-4 text-center text-white shadow">
                                        <div className="text-base font-semibold sm:text-lg">AI · Web · Design</div>
                                        <div className="mt-1 text-xs text-white/85">Next.js · Django · Framer</div>
                                    </div>
                                </div>
                            </div>
                            {/* two concise chips */}
                            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                                <div className="rounded-lg border border-gray-200 bg-white/60 px-3 py-2 backdrop-blur-md text-gray-700">⚡ Performance-first</div>
                                <div className="rounded-lg border border-gray-200 bg-white/60 px-3 py-2 backdrop-blur-md text-gray-700">🧠 AI workflows</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
