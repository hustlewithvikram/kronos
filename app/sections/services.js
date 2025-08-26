'use client';
import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

// MUI icons
import WebIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import { ChevronRight } from '@mui/icons-material';

// URL-safe slugs + small tags for quick context
const services = [
    {
        slug: 'website-development',
        icon: <WebIcon fontSize="inherit" />,
        title: 'Website Development',
        description: 'Modern, accessible, high-performance websites built with contemporary stacks.',
        color: 'from-blue-600 to-cyan-600',
        tags: ['Next.js', 'SEO', 'A11y'],
    },
    {
        slug: 'android-app-development',
        icon: <AndroidIcon fontSize="inherit" />,
        title: 'Android App Development',
        description: 'Robust Android apps engineered to scale with product and user growth.',
        color: 'from-emerald-600 to-teal-600',
        tags: ['Kotlin', 'Compose', 'CI/CD'],
    },
    {
        slug: 'ecommerce-solutions',
        icon: <ShoppingCartIcon fontSize="inherit" />,
        title: 'E‑commerce Solutions',
        description: 'End-to-end stores with secure checkout, analytics, and growth tooling.',
        color: 'from-violet-600 to-fuchsia-600',
        tags: ['Stripe', 'Headless', 'Analytics'],
    },
    {
        slug: 'uiux-design',
        icon: <DesignServicesIcon fontSize="inherit" />,
        title: 'Branding & UI/UX',
        description: 'Intuitive design systems that elevate brand trust and conversion.',
        color: 'from-rose-600 to-pink-600',
        tags: ['Design System', 'Prototyping', 'UX'],
    },
    {
        slug: 'cloud-hosting',
        icon: <CloudIcon fontSize="inherit" />,
        title: 'Cloud & Infra',
        description: 'Scalable, secure deployment pipelines and observability by default.',
        color: 'from-indigo-600 to-blue-600',
        tags: ['Docker', 'Kubernetes', 'Monitoring'],
    },
    {
        slug: 'custom-software',
        icon: <CodeIcon fontSize="inherit" />,
        title: 'Custom Software',
        description: 'Bespoke tools and platforms tailored to unique workflows.',
        color: 'from-amber-600 to-orange-600',
        tags: ['APIs', 'Automation', 'Dashboards'],
    },
];

const ServicesSection = () => {
    const reduceMotion = useReducedMotion();
    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
    });

    return (
        <section
            className="relative w-full overflow-hidden bg-white text-gray-900"
            aria-label="Services"
        >
            {/* Background: faint grid + soft pastel beams for light theme */}
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
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                        Our{' '}
                        <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
                        Comprehensive solutions—from strategy and design to development and cloud ops.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => {
                        const href = `/services/${encodeURIComponent(service.slug)}`;
                        return (
                            <motion.article
                                key={service.slug}
                                variants={fade(0.05 + i * 0.04)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                whileHover={reduceMotion ? {} : { y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-7 focus-within:ring-2 focus-within:ring-gray-300"
                            >
                                {/* Soft accent blob for light background */}
                                <div
                                    aria-hidden
                                    className={`pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
                                />

                                {/* Icon */}
                                <div
                                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${service.color} text-white`}
                                    aria-hidden="true"
                                    style={{ fontSize: 26 }}
                                >
                                    {service.icon}
                                </div>

                                {/* Title (primary link) */}
                                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                                    <Link
                                        href={href}
                                        className="outline-none transition-colors hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-gray-300"
                                        aria-label={`Open ${service.title}`}
                                    >
                                        {service.title}
                                    </Link>
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    {service.description}
                                </p>

                                {/* Tags row */}
                                {service.tags?.length ? (
                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {service.tags.map((t) => (
                                            <li
                                                key={t}
                                                className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 text-xs text-gray-700"
                                            >
                                                {t}
                                            </li>
                    ))}
                                    </ul>
                                ) : null}

                                {/* Secondary link with arrow */}
                                <div className="mt-6 inline-flex items-center text-sm font-medium">
                                    <Link
                                        href={href}
                                        className="text-gray-800 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gray-300"
                                        aria-label={`Learn more about ${service.title}`}
                                    >
                                        Learn more
                                    </Link>
                                    <svg
                                        className="ml-2 h-4 w-4 text-gray-600 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>

                                {/* Whole-card clickable overlay (keeps text selectable) */}
                                <Link
                                    href={href}
                                    aria-label={`${service.title} card link`}
                                    className="absolute inset-0 z-10"
                                    tabIndex={-1}
                                />
                            </motion.article>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    variants={fade(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mt-16 border-t border-gray-200 pt-10 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">Ready to start your project?</h3>
                    <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                        Let’s plan a roadmap and ship something great—on time and on budget.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-medium text-white shadow-sm transition-colors hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                        aria-label="Get started"
                    >
                        <span>Get Started Today</span>
                        <ChevronRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
