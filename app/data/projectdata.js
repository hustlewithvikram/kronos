// app/data/projectData.js

// Deterministic UTC formatter (SSR/CSR safe)
export function formatDateUTC(date) {
    if (!date) return '';
    const dt = new Date(date);
    const y = dt.getUTCFullYear();
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][dt.getUTCMonth()];
    const day = String(dt.getUTCDate()).padStart(2, '0');
    return `${day} ${m} ${y}`;
}

// Central source of truth for list + detail pages
export const projects = [
    {
        slug: 'shopnow',
        name: 'Shopnow',
        summary:
            'A modern e‑commerce demo built with Next.js and TypeScript. Clean architecture, optimized fonts, and Vercel deployment.',
        problem:
            'Demonstrate a fast, scalable storefront foundation with minimal setup and clean separation of concerns.',
        solution:
            'Next.js + TypeScript base with opinionated structure, next/font optimization, and Vercel CI for zero‑config deployments.',
        outcomes: [
            'Fast TTI/LCP on Vercel edge.',
            'Clear component layering (UI/layout/data).',
            'Simple path to add cart, auth, and payments.',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
        languages: [
            { label: 'TypeScript', percent: '90.8%' },
            { label: 'JavaScript', percent: '8.4%' },
            { label: 'CSS', percent: '0.8%' },
        ],
        highlights: [
            'Light/glass UI aesthetic with strong readability.',
            'Hydration-safe rendering and gentle motion.',
            'Clean deployment workflow via Vercel.',
        ],
        stars: 0,
        updated: '2025-08-27',
        repo: 'https://github.com/hustlewithvikram/shopnow',
        live: 'https://shopnow18.vercel.app/',
        role: 'Full-stack',
        timeline: '1–2 weeks (demo)',
    },
    {
        slug: 'advit',
        name: 'Advit',
        summary:
            'A sleek platform for 3D design and digital services built on Next.js App Router with smooth animations.',
        problem:
            'Present creative 3D/Design services with a performant, modern web UX.',
        solution:
            'Modular pages in App Router, Tailwind for styling, Framer Motion for subtle motion, SEO-friendly structure.',
        outcomes: [
            'Clear services presentation and navigation.',
            'Reliable performance and simple content updates.',
            'Straightforward scale-out: more services & galleries.',
        ],
        stack: ['Next.js 14 (App Router)', 'React', 'Tailwind', 'Framer Motion'],
        languages: [
            { label: 'JavaScript', percent: '94.2%' },
            { label: 'CSS', percent: '5.8%' },
        ],
        highlights: [
            'App Router conventions for routing and layouts.',
            'Motion that respects reduced-motion preferences.',
            'SEO-friendly metadata plan.',
        ],
        stars: 0,
        updated: '2025-08-27',
        repo: 'https://github.com/hustlewithvikram/advit',
        live: 'https://advit.vercel.app/',
        role: 'Frontend',
        timeline: '2–3 weeks',
    },
    {
        slug: 'deepnotes-flutter',
        name: 'DeepNotes (Flutter)',
        summary:
            'Cross‑platform concept for Deep Notes—offline note‑taking with clean UI and fast UX.',
        problem:
            'Prototype an offline-first notes experience with modern mobile UI patterns.',
        solution:
            'Flutter + Dart concept with offline storage patterns; plan for search, theming, and sync.',
        outcomes: [
            'Solid foundation for mobile notes.',
            'Composable UI for fast iteration.',
            'Path to add backup/sync later.',
        ],
        stack: ['Flutter', 'Dart'],
        languages: [],
        highlights: [
            'Offline-first approach.',
            'Material design patterns, theming path.',
            'Future: sync, reminders, tasks.',
        ],
        stars: 0,
        updated: '2025-08-27',
        repo: 'https://github.com/hustlewithvikram/deepnotes_flutter',
        live: '',
        role: 'Mobile',
        timeline: '2–4 weeks (MVP)',
    },
    {
        slug: 'untitled',
        name: 'Untitled',
        summary:
            'A minimal, fast site deployed on Vercel—clean layout and modern build tooling.',
        problem:
            'Showcase a simple, performant static site with modern DX.',
        solution:
            'Next.js + Tailwind with Vercel deployment; lightweight pages and readable layout.',
        outcomes: [
            'Quick to iterate and deploy.',
            'Stable, accessible text and layout.',
            'Good baseline scores for SEO/perf.',
        ],
        stack: ['Next.js', 'Tailwind', 'Vercel'],
        languages: [],
        highlights: ['Accessible typography', 'Calm visual design'],
        stars: 0,
        updated: '2025-08-27',
        repo: 'https://github.com/hustlewithvikram/untitled',
        live: 'https://untitled-one-mu.vercel.app/',
        role: 'Frontend',
        timeline: '1 week',
    },
    {
        slug: 'nike',
        name: 'Nike UI',
        summary:
            'A UI exploration inspired by Nike—product presentation and rich visual layout for a store concept.',
        problem:
            'Concept a high-visual landing and product sections with modern motion.',
        solution:
            'React + Tailwind layout with card sections, hero, and product highlights.',
        outcomes: [
            'Reusable product tiles and sections.',
            'Strong visual hierarchy.',
            'Easy to adapt into a full storefront.',
        ],
        stack: ['React', 'Tailwind', 'Vite/Next (concept)'],
        languages: [],
        highlights: ['Visual polish', 'Responsive layout'],
        stars: 0,
        updated: '2025-08-27',
        repo: 'https://github.com/hustlewithvikram/nike',
        live: '',
        role: 'Frontend',
        timeline: '1–2 weeks',
    },
    {
        slug: 'vikram-portfolio',
        name: 'Portfolio (vikram.is-a.dev)',
        summary:
            'Personal portfolio—fast, accessible, and deployed at vikram.is-a.dev.',
        problem:
            'Present services and projects with excellent readability and conversion.',
        solution:
            'Next.js + Tailwind with light/glass aesthetic, strong contrast, and structured sections.',
        outcomes: [
            'Clear navigation and structure.',
            'Soft visuals + accessible text.',
            'Consistent performance on Vercel.',
        ],
        stack: ['Next.js', 'Tailwind', 'Vercel'],
        languages: [],
        highlights: [
            'Consistent design system',
            'Reduced-motion aware animations',
        ],
        stars: 0,
        updated: '2025-08-27',
        repo: 'https://github.com/hustlewithvikram/vikram',
        live: 'https://vikram.is-a.dev',
        role: 'Full-stack',
        timeline: 'Ongoing',
    },
];
