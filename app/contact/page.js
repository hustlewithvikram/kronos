'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

// Adjust imports as needed for your project structure
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { companyInfo } from '../data/companydata';

const MAX_MESSAGE_LEN = 2000;
const CONTACT_EMAIL = companyInfo.email;

const initial = {
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
    company: '',
    hp_field: '', // honeypot field (should stay empty)
};

export default function ContactPage() {
    const [values, setValues] = useState(initial);
    const [status, setStatus] = useState({ type: 'idle', message: '' }); // idle | sending | success | error
    const [errors, setErrors] = useState({});
    const reduceMotion = useReducedMotion();

    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, delay } },
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
        if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
    };

    const emailValid = useMemo(
        () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email),
        [values.email]
    );

    const validate = () => {
        const er = {};
        if (!values.name.trim()) er.name = 'Please enter a name.';
        if (!values.email.trim()) er.email = 'Please enter an email.';
        if (values.email && !emailValid) er.email = 'Please enter a valid email address.';
        if (!values.subject.trim()) er.subject = 'Please select a subject.';
        if (!values.message.trim()) er.message = 'Please enter a message.';
        if (values.message.length > MAX_MESSAGE_LEN) {
            er.message = `Message too long (max ${MAX_MESSAGE_LEN} chars).`;
        }
        if (values.hp_field) er.hp_field = 'Spam detected.';
        setErrors(er);
        return Object.keys(er).length === 0 ? '' : 'Please fix the highlighted fields.';
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'idle', message: '' });
        const err = validate();
        if (err) {
            setStatus({ type: 'error', message: err });
            return;
        }

        try {
            setStatus({ type: 'sending', message: 'Sending your message...' });

            // First try the API route
            const res = await fetch('/api/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    subject: values.subject,
                    message: values.message,
                    company: values.company,
                    budget: values.budget
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                // If API fails, try the mailto fallback
                console.warn('API route failed, falling back to mailto');
                window.location.href = mailtoHref;
                setStatus({
                    type: 'success',
                    message: 'Redirecting to your email client. Please send the pre-filled message.'
                });

                // Reset form after a delay
                setTimeout(() => {
                    setValues(initial);
                    setErrors({});
                }, 3000);

                return;
            }

            // If API succeeds
            setStatus({ type: 'success', message: 'Thanks! Message sent successfully.' });
            setValues(initial);
            setErrors({});
        } catch (error) {
            console.error('Error sending message:', error);

            // Fallback to mailto if fetch fails completely
            setStatus({
                type: 'info',
                message: 'Opening your email client. Please send the pre-filled message.'
            });

            setTimeout(() => {
                window.location.href = mailtoHref;
            }, 1000);
        }
    };

    // Mailto fallback
    const mailtoHref = useMemo(() => {
        const subject = encodeURIComponent(values.subject || 'Project inquiry');
        const body = encodeURIComponent(
            `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\nBudget: ${values.budget}\n\nMessage:\n${values.message}`
        );
        return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }, [values]);

    const subjectOptions = [
        { value: '', label: 'Select a subject' },
        { value: 'website', label: 'Website / Web App' },
        { value: 'android', label: 'Android App' },
        { value: 'design', label: 'UI/UX / Branding' },
        { value: 'cloud', label: 'Cloud / DevOps' },
        { value: 'consult', label: 'Consultation' },
        { value: 'other', label: 'Other' },
    ];

    const budgetOptions = [
        { value: '', label: 'Budget (optional)' },
        { value: 'under-50k', label: 'Under ₹50k' },
        { value: '50-100k', label: '₹50k – ₹1L' },
        { value: '100-250k', label: '₹1L – ₹2.5L' },
        { value: '250k-plus', label: '₹2.5L+' },
    ];

    return (
        <div className="min-h-screen bg-[#f5f7fb] text-gray-900 flex flex-col overflow-x-hidden">
            <Navbar />
            <section id="contact" aria-label="Contact" className="relative w-full overflow-hidden">
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
                        className="mb-8 text-left"
                    >
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                            Get in{' '}
                            <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-fuchsia-700 bg-clip-text text-transparent">
                                touch
                            </span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                            Share a few details about the project. Expect a reply within 24 hours.
                        </p>
                    </motion.div>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.75fr]">
                        {/* Form panel */}
                        <motion.form
                            onSubmit={onSubmit}
                            variants={fade(0.05)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="mx-auto w-full rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur-xl sm:p-8 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                            noValidate
                        >
                            {/* Honeypot (hidden) */}
                            <input
                                type="text"
                                name="hp_field"
                                value={values.hp_field}
                                onChange={onChange}
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            {/* Name + Email */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm text-gray-800">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        value={values.name}
                                        onChange={onChange}
                                        className={`w-full rounded-lg border ${errors.name ? 'border-rose-400' : 'border-gray-200'
                                            } bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300`}
                                        placeholder="Jane Doe"
                                        aria-invalid={errors.name ? 'true' : 'false'}
                                    />
                                    {errors.name ? (
                                        <span className="text-xs text-rose-600">{errors.name}</span>
                                    ) : null}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm text-gray-800">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        inputMode="email"
                                        autoComplete="email"
                                        value={values.email}
                                        onChange={onChange}
                                        className={`w-full rounded-lg border ${errors.email ? 'border-rose-400' : 'border-gray-200'
                                            } bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300`}
                                        placeholder="name@example.com"
                                        aria-invalid={errors.email ? 'true' : 'false'}
                                    />
                                    {errors.email ? (
                                        <span className="text-xs text-rose-600">{errors.email}</span>
                                    ) : null}
                                </div>
                            </div>

                            {/* Company + Budget */}
                            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="company" className="text-sm text-gray-800">
                                        Company (optional)
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        autoComplete="organization"
                                        value={values.company}
                                        onChange={onChange}
                                        className="w-full rounded-lg border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                        placeholder="Acme Inc."
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="budget" className="text-sm text-gray-800">
                                        Budget (optional)
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={values.budget}
                                        onChange={onChange}
                                        className="w-full rounded-lg border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                    >
                                        {budgetOptions.map((o) => (
                                            <option key={o.value} value={o.value}>
                                                {o.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="mt-6 flex flex-col gap-2">
                                <label htmlFor="subject" className="text-sm text-gray-800">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={values.subject}
                                    onChange={onChange}
                                    className={`w-full rounded-lg border ${errors.subject ? 'border-rose-400' : 'border-gray-200'
                                        } bg-white/70 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300`}
                                    aria-invalid={errors.subject ? 'true' : 'false'}
                                >
                                    {subjectOptions.map((o) => (
                                        <option key={o.value} value={o.value}>
                                            {o.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.subject ? (
                                    <span className="text-xs text-rose-600">{errors.subject}</span>
                                ) : null}
                            </div>

                            {/* Message + counter */}
                            <div className="mt-6 flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="message" className="text-sm text-gray-800">
                                        Message
                                    </label>
                                    <span
                                        className={`text-xs ${values.message.length > MAX_MESSAGE_LEN
                                            ? 'text-rose-600'
                                            : 'text-gray-500'
                                            }`}
                                    >
                                        {values.message.length}/{MAX_MESSAGE_LEN}
                                    </span>
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={values.message}
                                    onChange={onChange}
                                    className={`w-full resize-y rounded-lg border ${errors.message ? 'border-rose-400' : 'border-gray-200'
                                        } bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300`}
                                    placeholder="Briefly describe goals, scope, and timeline…"
                                    aria-invalid={errors.message ? 'true' : 'false'}
                                />
                                {errors.message ? (
                                    <span className="text-xs text-rose-600">{errors.message}</span>
                                ) : null}
                            </div>

                            {/* Global status */}
                            {status.type !== 'idle' && status.message ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 p-3 rounded-lg ${status.type === 'error'
                                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                        : status.type === 'success'
                                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                            : status.type === 'info'
                                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                : 'bg-gray-50 text-gray-700 border border-gray-200'
                                        }`}
                                    role={status.type === 'error' ? 'alert' : undefined}
                                >
                                    {status.message}
                                </motion.div>
                            ) : null}

                            {/* Actions */}
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-gray-500">
                                    Messages are sent securely. No spam, ever.
                                </p>
                                <div className="flex flex-col-reverse gap-3 sm:flex-row">
                                    <button
                                        type="submit"
                                        disabled={status.type === 'sending'}
                                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:opacity-60"
                                        aria-busy={status.type === 'sending' ? 'true' : 'false'}
                                    >
                                        {status.type === 'sending' ? 'Sending…' : 'Send Message'}
                                        <span className="ml-1.5">→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.form>

                        {/* Info panel */}
                        <motion.aside
                            variants={fade(0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            className="h-max rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur-xl sm:p-8 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                        >
                            <h2 className="text-xl font-semibold text-gray-900">Contact info</h2>
                            <ul className="mt-4 space-y-3 text-sm text-gray-700">
                                <li>
                                    Email:{' '}
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="text-blue-700 underline-offset-4 hover:underline"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </li>
                                <li>Office hours: Mon–Fri, 10:00–6:00</li>
                                <li>Response: within 24 hours</li>
                                <div>
                                    <b>Address:<br /></b>
                                    {Object.entries(companyInfo.address)
                                        .map(([key, value]) => `${value}`)
                                        .join(", ")}

                                </div>
                            </ul>

                            <div className="mt-6 h-px w-full bg-gray-200" />

                            <h3 className="mt-6 text-sm font-semibold text-gray-900">Links</h3>
                            <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                <li>
                                    <Link href="/services" className="text-blue-700 underline-offset-4 hover:underline">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-blue-700 underline-offset-4 hover:underline">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-blue-700 underline-offset-4 hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-6 h-px w-full bg-gray-200" />

                            <h3 className="mt-6 text-sm font-semibold text-gray-900">Social</h3>
                            <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                <li>
                                    <a href="https://github.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline-offset-4 hover:underline">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline-offset-4 hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline-offset-4 hover:underline">
                                        X/Twitter
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-6 h-px w-full bg-gray-200" />

                            <p className="mt-6 text-xs text-gray-600">
                                Prefer to email directly? Use the contact form or send to our email address above.
                            </p>
                        </motion.aside>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
