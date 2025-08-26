'use client';

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X'; // optional: if not available, keep TwitterIcon
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    // Hydration-safe: computed once at render with a deterministic number
    const year = new Date().getUTCFullYear();

    // Set these to the actual profiles (kept explicit for clarity)
    const CONTACT_EMAIL = 'vs423502@gmail.com'; // replace when a custom domain address is ready
    const SOCIALS = [
        { label: 'GitHub', href: 'https://github.com/hustlewithvikram', icon: <GitHubIcon fontSize="small" /> },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hustlewithvikram', icon: <LinkedInIcon fontSize="small" /> },
        { label: 'X', href: 'https://twitter.com/hustlewithvikram', icon: <TwitterIcon fontSize="small" /> },
    ];

    const SERVICES = [
        { label: 'Web Development', href: '/services/website-development' },
        { label: 'Mobile Apps', href: '/services/android-app-development' },
        { label: 'UI/UX Design', href: '/services/uiux-design' },
        { label: 'E‑commerce', href: '/services/ecommerce-solutions' },
        { label: 'Cloud Solutions', href: '/services/cloud-hosting' },
    ];

    const COMPANY = [
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' },
    ];

    const POLICIES = [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
    ];

    return (
        <footer className="relative w-full bg-[#0b0c10] text-white" aria-label="Footer">
            {/* Subtle background grid */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            {/* Container */}
            <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 sm:px-8 md:px-12 lg:px-16">
                {/* Top grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* Brand + contact */}
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
                            <span className="text-white">KRONOS</span>
                        </h2>
                        <p className="max-w-xs text-gray-300">
                            High‑performance web and mobile experiences—scalable, secure, and designed for growth.
                        </p>

                        <address className="not-italic mt-2 flex flex-col gap-3 text-gray-300">
                            <div className="flex items-center gap-3">
                                <EmailIcon fontSize="small" className="text-gray-400" />
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="text-sm text-gray-300 hover:text-white transition-colors"
                                    aria-label={`Email ${CONTACT_EMAIL}`}
                                >
                                    {CONTACT_EMAIL}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <LocationOnIcon fontSize="small" className="text-gray-400" />
                                <span className="text-sm text-gray-300">Nashik, Maharashtra, India</span>
                            </div>
                        </address>
                    </div>

                    {/* Services */}
                    <nav className="flex flex-col gap-3" aria-labelledby="footer-services">
                        <h3 id="footer-services" className="mb-1 text-base font-semibold text-white">
                            Services
                        </h3>
                        {SERVICES.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-sm text-gray-400 transition-colors hover:text-gray-200"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Company */}
                    <nav className="flex flex-col gap-3" aria-labelledby="footer-company">
                        <h3 id="footer-company" className="mb-1 text-base font-semibold text-white">
                            Company
                        </h3>
                        {COMPANY.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-sm text-gray-400 transition-colors hover:text-gray-200"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Social */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-white">Follow</h3>
                        <div className="flex gap-3">
                            {SOCIALS.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${label}`}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-gray-300 transition-colors hover:text-white hover:bg-white/[0.12] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-white/10 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="text-sm text-gray-400">
                            © {year} Kronos Studio. All rights reserved.
                        </div>
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                            {POLICIES.map(({ label, href }) => (
                                <a key={label} href={href} className="text-gray-400 transition-colors hover:text-gray-200">
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
