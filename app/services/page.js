'use client';
import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

// Shell
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

// MUI icons
import {
    Language,
    Android,
    ShoppingCart,
    DesignServices,
    Cloud,
    Code,
    ArrowForward,
    CheckCircle,
} from '@mui/icons-material';

const services = [
    {
        slug: 'website-development',
        icon: <Language />,
        title: 'Website Development',
        description:
            'Modern, responsive websites built to impress and perform with contemporary stacks.',
        features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Modern Frameworks'],
        color: 'from-blue-600 to-cyan-600',
    },
    {
        slug: 'android-app-development',
        icon: <Android />,
        title: 'Android App Development',
        description:
            'High-performance Android apps that scale with product goals and user needs.',
        features: ['Native Development', 'Material Design', 'API Integration', 'Play Store'],
        color: 'from-emerald-600 to-teal-600',
    },
    {
        slug: 'ecommerce-solutions',
        icon: <ShoppingCart />,
        title: 'E‑commerce Solutions',
        description:
            'Complete store setups to launch, grow, and scale with secure payments and analytics.',
        features: ['Shopping Cart', 'Payment Integration', 'Inventory', 'Sales Analytics'],
        color: 'from-violet-600 to-fuchsia-600',
    },
    {
        slug: 'uiux-design',
        icon: <DesignServices />,
        title: 'UI/UX Design',
        description:
            'Intuitive, beautiful interfaces that elevate brand trust and conversions.',
        features: ['User Research', 'Wireframing', 'Visual Design', 'Usability Testing'],
        color: 'from-rose-600 to-pink-600',
    },
    {
        slug: 'cloud-hosting',
        icon: <Cloud />,
        title: 'Cloud Hosting & Infra',
        description:
            'Scalable, secure cloud solutions with observability and best practices.',
        features: ['Cloud Setup', 'SSL', 'CDN Integration', '24/7 Support'],
        color: 'from-indigo-600 to-blue-600',
    },
    {
        slug: 'custom-software',
        icon: <Code />,
        title: 'Custom Software',
        description:
            'Bespoke tools and platforms tailored to unique workflows and processes.',
        features: ['Custom Apps', 'API Development', 'Integrations', 'Automation'],
        color: 'from-amber-600 to-orange-600',
    },
];

const AllServices = () => {
    const reduceMotion = useReducedMotion();

    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
    });

    return (
        <div className="min-h-screen bg-[#f5f7fb] text-gray-900 flex flex-col overflow-x-hidden">
            <Navbar />

            {/* Background accents clipped safely */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-50 blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-200 to-purple-200 opacity-50 blur-[110px]" />
                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            <main className="relative z-10 w-full">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:px-10 lg:px-12">
                    {/* Header (left-aligned) */}
                    <motion.header
                        variants={fade(0)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        className="mb-10"
                    >
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                            Our{' '}
                            <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h1>
                        <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
                            Comprehensive solutions—from strategy and design to development and cloud operations.
                        </p>
                    </motion.header>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((s, i) => (
                            <motion.article
                                key={s.slug}
                                variants={fade(0.05 + i * 0.04)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                whileHover={reduceMotion ? {} : { y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                            >
                                {/* Soft accent blob (contained by overflow-hidden) */}
                                <div
                                    aria-hidden
                                    className={`pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
                                />

                                {/* Icon */}
                                <div
                                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${s.color} text-white`}
                                    aria-hidden="true"
                                    style={{ fontSize: 26 }}
                                >
                                    {s.icon}
                                </div>

                                {/* Title */}
                                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">{s.title}</h2>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.description}</p>

                                {/* Features list */}
                                <ul className="mt-4 space-y-2">
                                    {s.features.map((f) => (
                                        <li key={f} className="flex items-center text-sm text-gray-700">
                                            <CheckCircle className="mr-2 text-emerald-600" fontSize="small" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA row */}
                                <div className="mt-6 inline-flex items-center text-sm font-medium">
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="text-gray-800 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gray-300 outline-none"
                                        aria-label={`Learn more about ${s.title}`}
                                    >
                                        Learn more
                                    </Link>
                                    <ArrowForward className="ml-2 h-4 w-4 text-gray-600 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>

                                {/* Whole card clickable overlay (contained by overflow-hidden) */}
                                <Link
                                    href={`/services/${s.slug}`}
                                    aria-label={`${s.title} card link`}
                                    className="absolute inset-0 z-10"
                                    tabIndex={-1}
                                />
                            </motion.article>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.section
                        variants={fade(0.15)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="mt-16"
                    >
                        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white/60 p-8 text-left backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                            <h3 className="text-2xl font-bold text-gray-900">Can’t find what you’re looking for?</h3>
                            <p className="mt-3 max-w-2xl text-gray-700">
                                We offer tailored solutions for unique needs. Share the goals and get a quick proposal.
                            </p>
                            <div className="mt-8 inline-flex">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-7 py-3.5 text-base font-medium text-white transition-colors hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                                >
                                    Get Custom Quote
                                    <ArrowForward className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AllServices;
