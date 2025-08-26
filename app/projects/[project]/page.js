'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { projects, formatDateUTC } from '@/app/data/projectdata';
import { ChevronLeft } from '@mui/icons-material';

export default function ProjectDetailPage({ params }) {
    const { projectType } = params || {};
    const project = projects.find((p) => p.project === projectType);

    if (!project) {
        notFound();
    }

    const reduceMotion = useReducedMotion();
    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, delay } },
    });

    return (
        <div className="min-h-screen bg-[#f5f7fb] text-gray-900 flex flex-col overflow-x-hidden">
            <Navbar />

            <section className="relative w-full overflow-hidden">
                {/* Background accents */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-50 blur-[100px]" />
                    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-200 to-purple-200 opacity-50 blur-[110px]" />
                    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 md:px-10 lg:px-12 lg:py-24">
                    {/* Header */}
                    <motion.div
                        variants={fade(0)}
                        initial="hidden"
                        animate="show"
                        className="mb-6"
                    >
                        <Link href="/projects" className="text-gray-600 flex items-center mb-4 hover:text-gray-900 underline-offset-4 hover:underline">
                            <ChevronLeft /> <span>Back to Projects</span>
                        </Link>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                            {project.name}
                        </h1>
                        <p className="mt-3 max-w-3xl text-lg text-gray-700">{project.summary}</p>

                        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-700">
                            {typeof project.stars === 'number' ? (
                                <span className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">★ {project.stars}</span>
                            ) : null}
                            {project.updated ? (
                                <span className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">
                                    Updated {formatDateUTC(project.updated)}
                                </span>
                            ) : null}
                            {project.role ? (
                                <span className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">
                                    Role: {project.role}
                                </span>
                            ) : null}
                            {project.timeline ? (
                                <span className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">
                                    Timeline: {project.timeline}
                                </span>
                            ) : null}
                        </div>
                    </motion.div>

                    {/* Content grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr]">
                        {/* Left: narrative */}
                        <motion.div
                            variants={fade(0.05)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                        >
                            <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
                            <p className="mt-3 text-gray-700">{project.summary}</p>

                            {project.problem ? (
                                <>
                                    <h3 className="mt-6 text-sm font-semibold text-gray-900">Problem / Goal</h3>
                                    <p className="mt-1 text-gray-700">{project.problem}</p>
                                </>
                            ) : null}

                            {project.solution ? (
                                <>
                                    <h3 className="mt-6 text-sm font-semibold text-gray-900">Solution</h3>
                                    <p className="mt-1 text-gray-700">{project.solution}</p>
                                </>
                            ) : null}

                            {project.outcomes?.length ? (
                                <>
                                    <h3 className="mt-6 text-sm font-semibold text-gray-900">Outcomes</h3>
                                    <ul className="mt-2 list-disc pl-5 text-gray-700">
                                        {project.outcomes.map((o) => (
                                            <li key={o}>{o}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : null}

                            {project.highlights?.length ? (
                                <>
                                    <h3 className="mt-6 text-sm font-semibold text-gray-900">Highlights</h3>
                                    <ul className="mt-2 list-disc pl-5 text-gray-700">
                                        {project.highlights.map((h) => (
                                            <li key={h}>{h}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : null}
                        </motion.div>

                        {/* Right: meta and links */}
                        <motion.aside
                            variants={fade(0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="h-max rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                        >
                            <h3 className="text-sm font-semibold text-gray-900">Tech stack</h3>
                            {project.stack?.length ? (
                                <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                                    {project.stack.map((t) => (
                                        <span key={t} className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            ) : null}

                            {project.languages?.length ? (
                                <>
                                    <h3 className="mt-6 text-sm font-semibold text-gray-900">Languages</h3>
                                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                                        {project.languages.map((lang) => (
                                            <span key={lang.label} className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm">
                                                {lang.label} {lang.percent}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            ) : null}

                            <div className="mt-6 h-px w-full bg-gray-200" />

                            <h3 className="mt-6 text-sm font-semibold text-gray-900">Links</h3>
                            <ul className="mt-3 space-y-2 text-sm text-blue-700">
                                {project.live ? (
                                    <li>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                                            Live site
                                        </a>
                                    </li>
                                ) : null}
                                {project.repo ? (
                                    <li>
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                                            GitHub repository
                                        </a>
                                    </li>
                                ) : null}
                                <li>
                                    <Link href="/contact" className="underline-offset-4 hover:underline">
                                        Start a similar project →
                                    </Link>
                                </li>
                            </ul>

                            {project.timeline || project.role ? (
                                <>
                                    <div className="mt-6 h-px w-full bg-gray-200" />
                                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                                        {project.role ? (
                                            <div>
                                                <div className="font-semibold text-gray-900">Role</div>
                                                <div>{project.role}</div>
                                            </div>
                                        ) : null}
                                        {project.timeline ? (
                                            <div>
                                                <div className="font-semibold text-gray-900">Timeline</div>
                                                <div>{project.timeline}</div>
                                            </div>
                                        ) : null}
                                    </div>
                                </>
                            ) : null}
                        </motion.aside>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
