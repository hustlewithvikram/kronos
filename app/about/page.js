'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

// Bring in your existing shared UI
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

const AboutSection = () => {
    const reduceMotion = useReducedMotion();

    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
    });

    // Core content (kept concise and relevant for a new solo-founder startup)
    const values = [
        { title: 'Clarity', desc: 'Communicate simply, decide quickly, ship confidently.' },
        { title: 'Performance', desc: 'Budgets, metrics, and profiling from day one.' },
        { title: 'Accessibility', desc: 'Inclusive by default; no trade-offs on basics.' },
        { title: 'Reliability', desc: 'CI/CD, observability, and guardrails built-in.' },
    ];

    const capabilities = [
        { title: 'Web', points: ['Next.js apps', 'SEO & SSR', 'Animations'] },
        { title: 'Android', points: ['Native Kotlin', 'Compose', 'Play console'] },
        { title: 'Design', points: ['Design Systems', 'Prototypes', 'Usability'] },
        { title: 'Cloud', points: ['Infra-as-code', 'Monitoring', 'SLA support'] },
    ];

    const stack = [
        'Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion',
        'Node.js', 'Express', 'Postgres', 'Redis',
        'Kotlin', 'Jetpack Compose',
        'AWS', 'GCP', 'Docker', 'Kubernetes',
    ];

    const testimonials = [
        {
            quote: 'Kronos delivered ahead of schedule with outstanding quality. The app feels fast and polished.',
            author: 'Amit V, Product Lead',
        },
        {
            quote: 'Clear communication, strong architecture, and zero surprises during launch.',
            author: 'Neha S, CTO',
        },
    ];

    // Updated timeline — founded 2025 (removed older, irrelevant years)
    const timeline = [
        { year: '2025', text: 'Founded and shipped initial client work across web and Android.' },
    ];

    // Lean metrics for a new company
    const metrics = [
        { label: 'Projects', value: '5+' },
        { label: 'Satisfaction', value: '90%' },
        { label: 'Founded', value: '2025' },
    ];

    const faqs = [
        {
            q: 'How do projects typically start?',
            a: 'Start with short discovery to align goals, scope, and constraints. Then a roadmap with clear milestones and deliverables.',
        },
        {
            q: 'Do you handle deployment and maintenance?',
            a: 'Yes. CI/CD, monitoring, backups, and optional maintenance/SLAs are available.',
        },
        {
            q: 'What about timelines and pricing?',
            a: 'Timelines depend on scope; typical 2–6 weeks for web builds. Pricing is transparent via phases or retainers.',
        },
    ];

    // Founder (solo)
    const founder = {
        name: 'Vikram',
        role: 'Founder & Full Stack Developer',
        bio: 'Full‑stack developer focused on performance, design & clean systems.',
        links: [
            { label: 'Portfolio', href: 'https://vikram.is-a.dev' },
            { label: 'GitHub', href: 'https://github.com/vikramisdev' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hustlewithvikram' },
        ],
        // Ensure the image exists or set src to '' to show the gradient placeholder
        avatar: { src: '/images/vikram.jpg', alt: 'Vikram Vishwakarma' },
    };

    const workingWithMe = [
        { title: 'Discovery', desc: 'Goals, scope, constraints → clear roadmap & estimates.' },
        { title: 'Build', desc: 'Weekly milestones, async updates, demos at each step.' },
        { title: 'Ship', desc: 'CI/CD, monitoring, backup strategy, post-launch tuning.' },
        { title: 'Iterate', desc: 'Data-informed improvements and optional retainers.' },
    ];

    const [openFAQ, setOpenFAQ] = useState(0);

    return (
        <div className="min-h-screen bg-[#f5f7fb] text-gray-900 flex flex-col overflow-x-hidden">
            <Navbar />

            <section id="about" className="relative w-full overflow-hidden" aria-label="About">
                {/* Background accents clipped safely */}
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
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        className="mb-10 text-left"
                    >
                        <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                            About{' '}
                            <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
                                Kronos Tech
                            </span>
                        </h2>
                        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                            Solo‑founded in 2025. Building fast, accessible products with clean engineering and a calm, conversion‑focused UI.
                        </p>
                    </motion.div>

                    {/* Metrics row */}
                    <motion.div
                        variants={fade(0.05)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mb-10 grid grid-cols-3 gap-4 max-w-md"
                    >
                        {metrics.map((m) => (
                            <div key={m.label} className="rounded-xl border border-gray-200 bg-white/60 p-4 text-left backdrop-blur-xl">
                                <div className="text-2xl font-bold">{m.value}</div>
                                <div className="text-xs text-gray-600">{m.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Intro panel */}
                    <motion.div
                        variants={fade(0.08)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8 text-left"
                    >
                        <h3 className="text-2xl font-bold sm:text-3xl">Crafting Digital Excellence</h3>
                        <div className="mt-5 space-y-4 text-gray-700">
                            <p>
                                Kronos is a tech‑forward studio delivering{' '}
                                <span className="text-gray-900 font-medium">blazing‑fast websites</span> and{' '}
                                <span className="text-gray-900 font-medium">powerful mobile apps</span> for startups and growing brands.
                            </p>
                            <p>
                                Engagement is driven by <span className="text-gray-900 font-medium">elegant design</span>,{' '}
                                <span className="text-gray-900 font-medium">strategy</span>, and a{' '}
                                <span className="text-gray-900 font-medium">scalable codebase</span>—with performance and accessibility built‑in.
                            </p>
                        </div>

                        <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2">
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
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                Observability, backups, and security hardening
                            </li>
                        </ul>
                    </motion.div>

                    {/* Values */}
                    <motion.section
                        variants={fade(0.11)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">Values</h3>
                        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                            {values.map((v) => (
                                <div key={v.title} className="rounded-xl border border-gray-200 bg-white/60 p-5 backdrop-blur-xl">
                                    <div className="text-base font-semibold text-gray-900">{v.title}</div>
                                    <p className="mt-1 text-sm text-gray-700">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Capabilities */}
                    <motion.section
                        variants={fade(0.14)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">What I do</h3>
                        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {capabilities.map((c) => (
                                <div key={c.title} className="rounded-xl border border-gray-200 bg-white/60 p-5 backdrop-blur-xl">
                                    <div className="text-base font-semibold text-gray-900">{c.title}</div>
                                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                                        {c.points.map((p) => (
                                            <li key={p}>• {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Tech stack badges */}
                    <motion.section
                        variants={fade(0.17)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">Preferred stack</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {stack.map((t) => (
                                <span key={t} className="rounded-md border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.section>

                    {/* Founder (solo) */}
                    <motion.section
                        variants={fade(0.18)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">Founder</h3>
                        <div className="mt-5 rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur-xl sm:p-8 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                {founder.avatar.src ? (
                                    <img
                                        src={founder.avatar.src}
                                        alt={founder.avatar.alt}
                                        className="h-20 w-20 rounded-full object-cover ring-2 ring-gray-200"
                                    />
                                ) : (
                                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-300 to-blue-300 ring-2 ring-gray-200" aria-hidden />
                                )}
                                <div>
                                    <div className="text-lg font-semibold text-gray-900">{founder.name}</div>
                                    <div className="text-sm text-gray-600">{founder.role}</div>
                                    <p className="mt-2 text-sm text-gray-700">{founder.bio}</p>
                                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                                        {founder.links.map((l) => (
                                            <a
                                                key={l.label}
                                                href={l.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-700 underline-offset-4 hover:underline"
                                            >
                                                {l.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Working with me */}
                    <motion.section
                        variants={fade(0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">Working with me</h3>
                        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {workingWithMe.map((w) => (
                                <div key={w.title} className="rounded-xl border border-gray-200 bg-white/60 p-5 backdrop-blur-xl">
                                    <div className="text-base font-semibold text-gray-900">{w.title}</div>
                                    <p className="mt-1 text-sm text-gray-700">{w.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Testimonials */}
                    <motion.section
                        variants={fade(0.22)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">People say</h3>
                        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                            {testimonials.map((t, i) => (
                                <blockquote key={i} className="rounded-xl border border-gray-200 bg-white/60 p-5 text-gray-700 backdrop-blur-xl">
                                    “{t.quote}”
                                    <footer className="mt-3 text-sm text-gray-600">— {t.author}</footer>
                                </blockquote>
                            ))}
                        </div>
                    </motion.section>

                    {/* Timeline (founded 2025) */}
                    <motion.section
                        variants={fade(0.24)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">Timeline</h3>
                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {timeline.map((item) => (
                                <div key={item.year} className="rounded-xl border border-gray-200 bg-white/60 p-5 backdrop-blur-xl">
                                    <div className="text-sm font-semibold text-gray-900">{item.year}</div>
                                    <p className="text-sm text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* FAQ Accordion */}
                    <motion.section
                        variants={fade(0.26)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-14 text-left"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">FAQs</h3>
                        <div className="mt-4 space-y-3">
                            {faqs.map((f, idx) => (
                                <details
                                    key={f.q}
                                    open={openFAQ === idx}
                                    onToggle={(e) => {
                                        // If this details was opened, select it; if it was closed, clear selection.
                                        const isOpen = e.currentTarget.open;
                                        setOpenFAQ(isOpen ? idx : -1);
                                    }}
                                    className="rounded-xl border border-gray-200 bg-white/60 p-4 backdrop-blur-xl"
                                >
                                    <summary
                                        className="cursor-pointer list-none select-none text-sm font-medium text-gray-900 focus:outline-none"
                                        aria-expanded={openFAQ === idx ? 'true' : 'false'}
                                    >
                                        {f.q}
                                    </summary>
                                    <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </motion.section>

                    {/* CTA */}
                    <motion.div
                        variants={fade(0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-16 text-left"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-gray-400 px-7 py-3.5 text-base font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                        >
                            Start a project
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutSection;
