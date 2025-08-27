'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { companyInfo } from '../../data/companydata';

const AboutSection = () => {
    const reduceMotion = useReducedMotion();

    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
    });

    return (
        <section
            id="about"
            className="relative w-full overflow-hidden bg-white text-gray-900"
            aria-label="About"
        >
            {/* Background: very subtle grid + soft glows for light theme */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-50 blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-200 to-purple-200 opacity-50 blur-[110px]" />
            </div>

            {/* Container */}
            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-24">
                {/* Header */}
                <motion.div
                    variants={fade(0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                        About{' '}
                        <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
                            {companyInfo.name} Studio
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
                        A studio focused on shipping delightful, performant products—combining elegant design,
                        robust engineering, and AI‑assisted workflows.
                    </p>
                </motion.div>

                {/* Main card: glass on light background, no counters */}
                <motion.div
                    variants={fade(0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    className="rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8"
                >
                    <h3 className="text-2xl font-bold sm:text-3xl">Crafting Digital Excellence</h3>

                    <div className="mt-5 space-y-4 text-gray-700">
                        <p>
                            Kronos is a tech‑forward studio delivering{' '}
                            <span className="text-gray-900 font-medium">blazing‑fast websites</span> and{' '}
                            <span className="text-gray-900 font-medium">powerful mobile apps</span> for startups and
                            growing brands.
                        </p>
                        <p>
                            Engagement is driven by a blend of{' '}
                            <span className="text-gray-900 font-medium">elegant design</span>,{' '}
                            <span className="text-gray-900 font-medium">strategy</span>, and a{' '}
                            <span className="text-gray-900 font-medium">scalable codebase</span>—with performance and
                            accessibility built‑in.
                        </p>
                    </div>

                    {/* Credibility bullets (concise, readable on light bg) */}
                    <ul className="mt-6 space-y-3 text-sm text-gray-700 sm:text-base">
                        <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600" />
                            End‑to‑end delivery from discovery to launch and iteration
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                            A11y checks, performance budgets, and CI/CD as standard
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-600" />
                            Transparent collaboration with modular roadmaps
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
