'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Bring in your existing shared UI
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

import {
    ArrowBack,
    CheckCircle,
    Code,
    DesignServices,
    Smartphone,
    ShoppingCart,
    Cloud,
    Language,
    ChevronLeft,
    ChevronRight,
} from '@mui/icons-material';

// INR pricing – affordable, transparent ranges
// Adjust these ranges as needed per market/offer scope
const servicesData = {
    'website-development': {
        title: 'Website Development',
        description: 'Modern, responsive websites built to impress and perform.',
        longDescription:
            'We create high-performance, responsive websites using modern tech. Sites are optimized for speed, SEO, and UX, ensuring standout online presence.',
        icon: <Language />,
        color: 'blue',
        features: [
            'Responsive Design',
            'SEO Optimization',
            'Fast Loading Times',
            'Modern Frameworks (Next.js, React)',
            'E-commerce Integration',
            'Content Management Systems',
            'Custom Web Applications',
            'Ongoing Maintenance & Support',
        ],
        process: [
            { title: 'Discovery & Planning', description: 'Analyze needs and define a detailed plan.' },
            { title: 'Design & Prototyping', description: 'Mockups and prototypes for rapid alignment.' },
            { title: 'Development', description: 'Clean, maintainable code built to scale.' },
            { title: 'Testing & QA', description: 'Cross-device and cross-browser verification.' },
            { title: 'Deployment & Launch', description: 'Smooth launch with monitoring in place.' },
            { title: 'Maintenance & Support', description: 'Ongoing updates and performance checks.' },
        ],
        pricing: {
            basic: {
                title: 'Basic Website',
                price: '₹15,000 – ₹35,000',
                features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Contact form'],
            },
            professional: {
                title: 'Professional Website',
                price: '₹40,000 – ₹60,000',
                features: ['Up to 12 pages', 'Custom design', 'Advanced SEO', 'CMS', 'Basic E‑commerce'],
            },
            enterprise: {
                title: 'Enterprise Solution',
                price: '₹65,000 - ₹90,000+',
                features: ['Unlimited pages', 'Complex features', 'Custom apps', 'APIs', 'Maintenance'],
            },
        },
    },
    'android-app-development': {
        title: 'Android App Development',
        description: 'High-performance Android apps that scale with your goals.',
        longDescription:
            'We develop native Android apps that deliver seamless experiences and leverage the platform to its fullest.',
        icon: <Smartphone />,
        color: 'green',
        features: [
            'Native Android Development',
            'Material Design Guidelines',
            'API Integration',
            'Push Notifications',
            'Offline Functionality',
            'Play Store Deployment',
            'Performance Optimization',
            'Regular Updates & Maintenance',
        ],
        pricing: {
            starter: {
                title: 'Starter App',
                price: '₹20,000 – ₹40,000',
                features: ['Single core feature', 'Modern UI', 'Basic analytics', 'Store listing'],
            },
            growth: {
                title: 'Growth App',
                price: '₹45,000 – ₹75,000',
                features: ['Multi-feature', 'Auth & API', 'Crash/Analytics', 'Basic CI/CD'],
            },
            scale: {
                title: 'Scale',
                price: '₹80,000 – ₹1,00,000+',
                features: ['Complex flows', 'Offline-first', 'Observability', 'Release pipeline'],
            },
        },
    },
    'ecommerce-solutions': {
        title: 'E‑commerce Solutions',
        description: 'Launch, grow, and scale your online store with ease.',
        longDescription:
            'We build e-commerce platforms that drive sales and deliver standout shopping experiences across devices.',
        icon: <ShoppingCart />,
        color: 'purple',
        features: [
            'Shopping Cart & Checkout',
            'Payment Gateways',
            'Inventory Management',
            'Order Processing',
            'Customer Accounts',
            'Reviews & Ratings',
            'Shipping Integration',
            'Sales Analytics',
        ],
        pricing: {
            launch: {
                title: 'Launch',
                price: '₹50,000 – ₹70,000',
                features: ['Core catalog', 'Checkout', 'Payments', 'Starter analytics'],
            },
            scale: {
                title: 'Scale',
                price: '₹75,000 – ₹90,000',
                features: ['Headless setup', 'Promotions', 'Tax/Shipping', 'Enhanced analytics'],
            },
            enterprise: {
                title: 'Enterprise',
                price: '₹95,000 – ₹1,20,000+',
                features: ['Custom flows', 'Integrations (OMS/ERP)', 'Performance tuning', 'SLA support'],
            },
        },
    },
    'uiux-design': {
        title: 'UI/UX Design',
        description: 'Crafting intuitive designs that elevate your brand.',
        longDescription:
            'User-centered interfaces that are visually compelling, accessible, and conversion-focused.',
        icon: <DesignServices />,
        color: 'pink',
        features: [
            'User Research & Analysis',
            'Wireframing & Prototyping',
            'Visual & Interaction Design',
            'Usability Testing',
            'Design Systems',
            'Brand Consistency',
            'Accessibility Compliance',
        ],
        pricing: {
            audit: {
                title: 'Audit',
                price: '₹25,000 – ₹40,000',
                features: ['Heuristic review', 'Quick wins', 'Prioritized fixes'],
            },
            product: {
                title: 'Product Design',
                price: '₹45,000 – ₹80,000',
                features: ['Flows & wireframes', 'UI kit', 'Clickable prototype'],
            },
            system: {
                title: 'Design System',
                price: '₹85,000+',
                features: ['Tokens', 'Components', 'Docs & handoff'],
            },
        },
    },
    'cloud-hosting': {
        title: 'Cloud Hosting & Infrastructure',
        description: 'Scalable and secure cloud solutions, tailored to your needs.',
        longDescription:
            'Reliable cloud hosting to ensure applications are fast, secure, and always available.',
        icon: <Cloud />,
        color: 'cyan',
        features: [
            'Cloud Server Setup',
            'SSL Certificates',
            'CDN Integration',
            'Automated Backups',
            'Security Monitoring',
            'Performance Optimization',
            'Scalable Infrastructure',
            '24/7 Technical Support',
        ],
        pricing: {
            setup: {
                title: 'Setup',
                price: '₹30,000 – ₹40,000',
                features: ['Infra design', 'Secure setup', 'Monitoring basics'],
            },
            ops: {
                title: 'Ops & Support',
                price: '₹25,000 – ₹75,000 / month',
                features: ['Updates', 'Backups', 'On-call (business hours)'],
            },
            enterprise: {
                title: 'Enterprise SLA',
                price: 'Custom',
                features: ['24/7 on-call', 'SLO/SLA', 'Compliance support'],
            },
        },
    },
    'custom-software': {
        title: 'Custom Software',
        description: 'From tools to platforms, built around your workflow.',
        longDescription:
            'Bespoke software tailored to specific business needs and processes for long-term efficiency.',
        icon: <Code />,
        color: 'orange',
        features: [
            'Custom Application Development',
            'Database Design',
            'API Development',
            '3rd-party Integrations',
            'Desktop & Mobile Apps',
            'Workflow Automation',
            'Reporting & Analytics',
            'Maintenance & Updates',
        ],
        pricing: {
            starter: {
                title: 'Starter',
                price: '₹50,000 – ₹70,000',
                features: ['Single workflow', 'Auth & roles', 'Basic reporting'],
            },
            advanced: {
                title: 'Advanced',
                price: '₹75,00,00 – ₹1,00,000',
                features: ['Multiple modules', 'Integrations', 'Dashboards'],
            },
            enterprise: {
                title: 'Enterprise',
                price: '₹1,30,000+',
                features: ['Complex domains', 'Scalability', 'Support & training'],
            },
        },
    },
};

const colorVariants = {
    blue: 'bg-blue-600 text-blue-700',
    green: 'bg-green-600 text-green-700',
    purple: 'bg-purple-600 text-purple-700',
    pink: 'bg-pink-600 text-pink-700',
    cyan: 'bg-cyan-600 text-cyan-700',
    orange: 'bg-orange-600 text-orange-700',
};

const panelBorder = 'border-gray-200';

const fade = (delay = 0) => ({
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
});

const ServicePage = () => {
    const params = useParams();
    const serviceType = params.service;
    const service = servicesData[serviceType];

    if (!service) {
        return (
            <div className="min-h-screen bg-[#f5f7fb] text-gray-900 flex flex-col">
                <Navbar />
                <div className="flex flex-1 items-center justify-center px-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                        <p className="text-gray-600 mb-8">The requested service doesn’t exist.</p>
                        <Link
                            href="/services"
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f7fb] text-gray-900 flex flex-col">
            <Navbar />

            {/* Header with soft beams + faint grid */}
            <div className="relative overflow-hidden pt-12">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-50 blur-[100px]" />
                    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-200 to-purple-200 opacity-50 blur-[110px]" />
                    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>

                {/* Wider container on large screens, but with sane padding for readability */}
                <div className="relative mx-auto max-w-8xl px-6 pt-14 pb-10 sm:px-8 md:px-32">
                    <motion.div
                        variants={fade(0)}
                        initial="hidden"
                        animate="show"
                        className="mb-4 flex items-center"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center rounded-md pb-4 text-gray-600 hover:text-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                        >
                            <ChevronLeft />
                            <span>All Services</span>
                        </Link>
                    </motion.div>

                    <motion.div variants={fade(0.03)} initial="hidden" animate="show" className="mb-4">
                        <div
                            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 backdrop-blur-xl border ${panelBorder} shadow-[0_1px_0_rgba(0,0,0,0.06)]`}
                        >
                            {React.cloneElement(service.icon, {
                                style: { fontSize: 24, color: 'currentColor' },
                                className: `${colorVariants[service.color]?.split(' ')[0].replace('bg-', 'text-') ||
                                    'text-gray-700'
                                    }`,
                            })}
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={fade(0.06)}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    >
                        {service.title}
                    </motion.h1>

                    <motion.p
                        variants={fade(0.09)}
                        initial="hidden"
                        animate="show"
                        className="mt-4 max-w-3xl text-lg text-gray-700"
                    >
                        {service.longDescription}
                    </motion.p>
                </div>
            </div>

            {/* Features */}
            <div className="px-6 py-16 sm:px-8 md:px-10 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                variants={fade(0.05 + index * 0.04)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                className={`rounded-2xl border ${panelBorder} bg-white/60 p-6 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]`}
                            >
                                <div className="flex items-center mb-3">
                                    <CheckCircle
                                        className={`${colorVariants[service.color]?.split(' ')[0].replace('bg-', 'text-') ||
                                            'text-gray-700'
                                            } mr-3`}
                                        fontSize="small"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                                </div>
                                <p className="text-gray-700">
                                    We implement best practices to ensure {feature.toLowerCase()} meets the highest standards.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process (optional) */}
            {service.process && (
                <div className="px-6 py-16 sm:px-8 md:px-10 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Process</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {service.process.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    variants={fade(0.05 + index * 0.04)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, margin: '-80px' }}
                                    className={`rounded-2xl border ${panelBorder} bg-white/60 p-6 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]`}
                                >
                                    <div
                                        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-white ${colorVariants[service.color]?.split(' ')[0] || 'bg-gray-700'
                                            }`}
                                    >
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-gray-700">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Pricing (optional) */}
            {service.pricing && (
                <div className="px-6 py-16 sm:px-8 md:px-10 lg:px-12">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Pricing Options</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {Object.entries(service.pricing).map(([key, plan], index) => (
                                <motion.div
                                    key={key}
                                    variants={fade(0.05 + index * 0.04)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, margin: '-80px' }}
                                    className={`rounded-2xl border ${panelBorder} flex flex-col justify-between bg-white/60 p-8 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]`}
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{plan.title}</h3>
                                        <div className="text-3xl font-bold text-gray-900 mb-6">{plan.price}</div>
                                        <ul className="mb-8 space-y-2">
                                            {plan.features.map((f) => (
                                                <li key={f} className="flex items-center text-gray-700">
                                                    <CheckCircle className="text-emerald-600 mr-2" fontSize="small" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-semibold text-white transition-colors ${colorVariants[service.color]?.split(' ')[0] || 'bg-gray-700'
                                            } hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300`}
                                        aria-label={`Get started with ${plan.title}`}
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            {/* CTA */}
            <div className="px-6 py-16 sm:px-8 md:px-30 lg:px-30">
                <div
                    className={`relative mx-auto rounded-2xl border ${panelBorder} bg-white/60 p-10 text-center backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] overflow-hidden`}
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>

                    {/* Animated emoji/icon */}
                    <div className="flex justify-center mb-6">
                        <motion.div
                            initial={{ scale: 0.8, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 10,
                                delay: 0.2
                            }}
                            className="text-5xl"
                        >
                            👋
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.8, rotate: 10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 10,
                                delay: 0.4
                            }}
                            className="text-5xl ml-2"
                        >
                            🚀
                        </motion.div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-700 mb-8 max-w-md mx-auto">
                        Lets discuss how we can help achieve your goals with {service.title}.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-lg font-normal transition-all hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-gray-300 border-2 border-gray-300"
                        >
                            <span>Reach Out</span>
                            <ChevronRight />
                        </Link>
                    </motion.div>

                    {/* Additional decorative elements */}
                    <div className="absolute top-4 right-4 opacity-20">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServicePage;
