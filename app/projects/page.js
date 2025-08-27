'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { projects, formatDateUTC } from '@/app/data/projectdata';

const Projects = () => {
    const reduceMotion = useReducedMotion();
    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
    });

    return (
        <div className="min-h-screen bg-[#f5f7fb] text-gray-900 flex flex-col overflow-x-hidden">
            <Navbar />

            <section id="projects" aria-label="Projects" className="relative w-full overflow-hidden">
                {/* Background accents */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-50 blur-[100px]" />
                    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-200 to-purple-200 opacity-50 blur-[110px]" />
                    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 md:px-10 lg:px-12 lg:py-24">
                    <motion.header
                        variants={fade(0)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        className="mb-10 text-left"
                    >
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                            Featured{' '}
                            <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                            A handpicked set of live and source projects spanning product UIs,
                            platforms, and portfolios.
                        </p>
                    </motion.header>

                    {/* Project cards */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p, i) => (
                            <motion.article
                                key={i}
                                variants={fade(0.05 + i * 0.03)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                whileHover={reduceMotion ? {} : { y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="group relative overflow-hidden flex flex-col justify-between rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow"
                            >
                                {/* Background accent */}
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
                                />

                                {/* Main clickable content */}
                                <Link
                                    href={`/projects/${p.route}`}
                                    className="flex-1 flex flex-col p-6 cursor-pointer"
                                    aria-label={`${p.name} details`}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 sm:text-xl break-words">
                                        {p.name}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-4">
                                        {p.summary}
                                    </p>

                                    {p.stack?.length ? (
                                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
                                            {p.stack.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    {p.languages?.length ? (
                                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                                            {p.languages.map((lang) => (
                                                <span
                                                    key={lang.label}
                                                    className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm"
                                                >
                                                    {lang.label} {lang.percent}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-700">
                                        {typeof p.stars === 'number' ? (
                                            <span className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">
                                                ★ {p.stars}
                                            </span>
                                        ) : null}
                                        {p.updated ? (
                                            <span className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">
                                                Updated {formatDateUTC(p.updated)}
                                            </span>
                                        ) : null}
                                    </div>
                                </Link>

                                {/* Footer links (NOT part of the card link) */}
                                <div className="px-6 pb-6 mt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
                                    {p.repo ? (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gray-300 outline-none"
                                            aria-label={`Open GitHub repo ${p.name}`}
                                        >
                                            GitHub Repo
                                        </a>
                                    ) : null}
                                    {p.live ? (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gray-300 outline-none"
                                            aria-label={`Open live site for ${p.name}`}
                                        >
                                            Live Site
                                        </a>
                                    ) : null}
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* View all repos link */}
                    <motion.div
                        variants={fade(0.15)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-12 text-left"
                    >
                        <Link
                            href="https://github.com/hustlewithvikram?tab=repositories"
                            target="_blank"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-7 py-3.5 text-base font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                        >
                            View all repositories
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Projects;
