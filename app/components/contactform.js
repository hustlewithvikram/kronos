'use client';

import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const initial = { name: '', email: '', subject: '', message: '' };

const ContactForm = () => {
    const [values, setValues] = useState(initial);
    const [status, setStatus] = useState({ type: 'idle', message: '' }); // idle | sending | success | error
    const reduceMotion = useReducedMotion();

    const fade = (delay = 0) => ({
        hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, delay } },
    });

    const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

    const emailValid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email), [values.email]);

    const validate = () => {
        if (!values.name.trim()) return 'Please enter a name.';
        if (!values.email.trim()) return 'Please enter an email.';
        if (!emailValid) return 'Please enter a valid email address.';
        if (!values.message.trim()) return 'Please enter a message.';
        return '';
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
            setStatus({ type: 'sending', message: '' });

            // TODO: Wire up your API route here (e.g., /api/contact) and remove the simulation below.
            // const res = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(values),
            // });
            // if (!res.ok) throw new Error('Network error');

            await new Promise((res) => setTimeout(res, 800)); // simulate

            setStatus({ type: 'success', message: 'Thanks! Message sent successfully.' });
            setValues(initial);
        } catch (e2) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        }
    };

    // Mailto fallback (opens email client prefilled)
    const mailtoHref = useMemo(() => {
        const to = 'contact@kronos.com';
        const subject = encodeURIComponent(values.subject || 'Project inquiry');
        const body = encodeURIComponent(
            `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
        );
        return `mailto:${to}?subject=${subject}&body=${body}`;
    }, [values]);

    return (
        <section
            id="contact-form"
            aria-label="Contact"
            className="relative w-full bg-[#f5f7fb] text-gray-900"
        >
            {/* Subtle light grid */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-24">
                {/* Header */}
                <motion.div
                    variants={fade(0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
                >
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Mail Us</h2>
                    <p className="mx-auto mt-3 max-w-xl text-[0.95rem] leading-relaxed text-gray-600">
                        Have a project in mind? Send a note and get a response within 24 hours.
                    </p>
                </motion.div>

                {/* Glass panel form (light) */}
                <motion.form
                    onSubmit={onSubmit}
                    variants={fade(0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="mx-auto grid w-full gap-6 rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8"
                    noValidate
                >
                    {/* name + email */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm text-gray-800">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={values.name}
                                onChange={onChange}
                                className="w-full rounded-lg border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm text-gray-800">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={onChange}
                                className="w-full rounded-lg border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                placeholder="name@example.com"
                                aria-invalid={
                                    status.type === 'error' &&
                                        status.message.toLowerCase().includes('email')
                                        ? 'true'
                                        : 'false'
                                }
                            />
                        </div>
                    </div>

                    {/* subject */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-sm text-gray-800">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={values.subject}
                            onChange={onChange}
                            className="w-full rounded-lg border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                            placeholder="Project inquiry"
                        />
                    </div>

                    {/* message */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm text-gray-800">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={values.message}
                            onChange={onChange}
                            className="w-full resize-y rounded-lg border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                            placeholder="Briefly describe the goals, scope, and timeline…"
                        />
                    </div>

                    {/* inline status */}
                    {status.type !== 'idle' && status.message ? (
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-sm ${status.type === 'error'
                                ? 'text-rose-600'
                                : status.type === 'success'
                                    ? 'text-emerald-600'
                                    : 'text-gray-600'
                                }`}
                            role={status.type === 'error' ? 'alert' : undefined}
                        >
                            {status.message}
                        </motion.div>
                    ) : null}

                    {/* actions: API submit + mailto fallback */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-gray-500">
                            This form uses secure transport. No spam, ever.
                        </p>
                        <div className="flex flex-col-reverse gap-3 sm:flex-row">
                            <a
                                href={mailtoHref}
                                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white/70 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                                aria-label="Open email client with pre-filled message"
                            >
                                Use Email App
                            </a>
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
            </div>
        </section>
    );
};

export default ContactForm;
