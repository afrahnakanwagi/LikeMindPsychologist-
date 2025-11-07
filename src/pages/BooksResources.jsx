import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import book from "../assests/book.png";

/**
 * BooksAndResources.jsx
 * - Uses Tailwind CSS for styling (assumes tailwind is set up).
 * - Uses Framer Motion for animations.
 * - Keeps the same font-family (Alegreya Sans) and navbar palette (#185a82).
 *
 * Replace placeholder images/links with real data as needed.
 */

const TABS = ["All", "Books", "Podcasts", "Newsletters", "Videos", "Downloads"];

const MOCK_RESOURCES = [
    // Books
    {
        id: "b1",
        type: "Books",
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk",
        description:
            "Groundbreaking research that shows how trauma reshapes the body and mind — and offers new paths to recovery.",
        price: "$18.99",
        cover: "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UF894,1000_QL80_.jpg",
        tags: ["Trauma", "Healing"],
    },
    {
        id: "b2",
        type: "Books",
        title: "The Gifts of Imperfection",
        author: "Brené Brown",
        description:
            "A guide to letting go of who we think we should be and embracing who we are.",
        price: "$14.99",
        cover: "https://m.media-amazon.com/images/I/61wz6xvT+4L._AC_UF894,1000_QL80_.jpg",
        tags: ["Self-Care", "Growth"],
    },

    // Podcasts
    {
        id: "p1",
        type: "Podcasts",
        title: "The Mindful Clinician",
        author: "Like Mind Talks",
        description: "Conversations with psychologists on mindfulness and therapy.",
        duration: "45m",
        cover:
            "https://cdn.pixabay.com/photo/2019/09/02/11/07/podcast-4449565_1280.jpg",
        tags: ["Mindfulness", "Professional"],
    },
    {
        id: "p2",
        type: "Podcasts",
        title: "Trauma & Recovery",
        author: "Dr. S. Mitchell",
        description: "Exploring healing and resilience after trauma.",
        duration: "38m",
        cover:
            "https://cdn.pixabay.com/photo/2020/03/30/09/28/headphones-4984678_1280.jpg",
        tags: ["Trauma"],
    },

    // Newsletters
    {
        id: "n1",
        type: "Newsletters",
        title: "Clinical Insights Monthly",
        author: "Like Mind Team",
        description:
            "Stay updated with mental health research, reflections, and tools for everyday practice.",
        frequency: "Monthly",
        cover:
            "https://cdn.pixabay.com/photo/2015/10/31/12/27/coffee-1015938_1280.jpg",
        tags: ["Research", "Reflection"],
    },

    // Videos
    {
        id: "v1",
        type: "Videos",
        title: "CBT Techniques — Quick Clinic Demos",
        author: "Like Mind Video",
        description: "Short clinical demonstrations of CBT techniques.",
        length: "12m",
        cover: null,
        tags: ["Skills"],
    },

    // Downloads / audio
    {
        id: "d1",
        type: "Downloads",
        title: "Guided Mindfulness Audio (20m)",
        author: "Like Mind Team",
        description: "Downloadable meditation for clients or self-practice.",
        fileSize: "22MB",
        cover: null,
        tags: ["Mindfulness"],
    },
];

export default function BooksAndResources() {
    const [activeTab, setActiveTab] = useState("All");
    const [query, setQuery] = useState("");
    const [featuredId] = useState("b1"); // choose featured resource (mock)

    // Filtered list based on activeTab + search query
    const filtered = useMemo(() => {
        return MOCK_RESOURCES.filter((r) => {
            const matchesTab = activeTab === "All" ? true : r.type === activeTab;
            const q = query.trim().toLowerCase();
            const matchesQuery =
                !q ||
                r.title.toLowerCase().includes(q) ||
                (r.author && r.author.toLowerCase().includes(q)) ||
                (r.description && r.description.toLowerCase().includes(q)) ||
                (r.tags && r.tags.join(" ").toLowerCase().includes(q));
            return matchesTab && matchesQuery;
        });
    }, [activeTab, query]);

    const featured = MOCK_RESOURCES.find((r) => r.id === featuredId);

    return (
        <div
            className="min-h-screen flex flex-col bg-[#f8fafa] text-[#3c3333]"
            style={{ fontFamily: "'Alegreya Sans', Alegreya Sans" }}
        >
            <Navbar />

            {/* ✅ HERO SECTION */}
            <header className="pt-28 pb-20 text-center bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">

                <div className="relative z-10 pt-40 pb-24 px-6 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl text-[#3c3333] font-semibold mb-4 leading-snug"
                    >
                        Books & Resources for Mindful Growth and Healing
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-lg opacity-95 mb-8 text-[#000000]"
                    >
                        Explore resources curated for psychologists, counselors, and seekers
                        — where compassion meets knowledge.
                    </motion.p>

                    {/* Search */}
                    <div className="flex justify-center">
                        <div className="flex items-center w-full max-w-2xl bg-white rounded-full shadow-lg px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search resources, authors, or topics..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-grow bg-transparent px-3 text-[#185a82] focus:outline-none placeholder:text-[#7da4a9]"
                            />
                            <button className="bg-[#185a82] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#134961] transition">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Featured resource (Book of the Month style) */}
                    {featured && (
                        <section className="mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white border border-[#e6efef] rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6"
                            >
                                <div className="w-full md:w-56 h-72 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={book}
                                        alt={featured.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <span className="inline-block text-xs bg-[#185a82] text-white px-3 py-1 rounded-full mb-3">
                                        Featured Book
                                    </span>

                                    <h2 className="text-2xl font-semibold text-[#185a82] mb-2">
                                        The Gifts of Imperfection
                                    </h2>

                                    <p className="text-sm text-[#3c3333]/80 mb-4">
                                        In this inspiring guide, Brené Brown explores the power of courage,
                                        compassion, and connection—inviting us to embrace our imperfections
                                        and live wholeheartedly. A deeply reflective read that transforms
                                        how we see ourselves and others.
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#3c3333]/70">
                                        <span>by Brené Brown</span>
                                        <span className="text-[#185a82] font-semibold">$14.99</span>
                                    </div>

                                    <div className="mt-5 flex gap-3">
                                        <button className="bg-[#185a82] text-white px-5 py-2 rounded-full text-sm hover:bg-[#134961] transition">
                                            Join Discussion
                                        </button>
                                        <button className="border border-[#185a82] text-[#185a82] px-5 py-2 rounded-full text-sm hover:bg-[#185a82] hover:text-white transition">
                                            Add to Reading List
                                        </button>
                                    </div>

                                    <p className="mt-4 text-xs italic text-[#3c3333]/70">
                                        📚 Each book in our club is read and discussed over a 3-month period
                                        — giving members time to reflect, apply insights, and grow together.
                                    </p>
                                </div>
                            </motion.div>
                        </section>
                    )

                    }

                    {/* Filter Tabs */}
                    <section className="mb-8">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {TABS.map((t) => {
                                const isActive = t === activeTab;
                                return (
                                    <button
                                        key={t}
                                        onClick={() => setActiveTab(t)}
                                        className={`px-4 py-2 rounded-full text-sm transition ${isActive
                                            ? "bg-[#185a82] text-white"
                                            : "bg-white text-[#185a82] border border-[#cfe6e6] hover:bg-[#ebf6f6]"
                                            }`}
                                        aria-pressed={isActive}
                                    >
                                        {t}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Featured Collections */}
                    <section className="mb-10">
                        <h3 className="text-xl font-semibold text-[#185a82] mb-4">
                            Featured Collections
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Trauma & Healing", meta: "15 items", icon: "🛡️" },
                                { title: "Spiritual Growth", meta: "18 items", icon: "🕊️" },
                                { title: "Anxiety Support", meta: "20 items", icon: "💙" },
                                { title: "Mindfulness", meta: "12 items", icon: "🌿" },
                            ].map((c) => (
                                <motion.div
                                    key={c.title}
                                    whileHover={{ y: -6 }}
                                    className="bg-white border border-[#e6efef] rounded-xl p-6 text-center shadow-sm"
                                >
                                    <div className="text-3xl mb-3">{c.icon}</div>
                                    <div className="font-semibold text-[#185a82] mb-1">
                                        {c.title}
                                    </div>
                                    <div className="text-sm text-[#3c3333]/70">{c.meta}</div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Resource Grid */}
                    <section className="mb-16">
                        <h3 className="text-xl font-semibold text-[#185a82] mb-4">
                            {activeTab === "All" ? "All Resources" : activeTab}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <AnimatePresence>
                                {filtered.map((r) => (
                                    <motion.article
                                        layout
                                        key={r.id}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.25 }}
                                        className="bg-white border border-[#e6efef] rounded-2xl overflow-hidden shadow-sm flex flex-col"
                                        role="article"
                                        aria-labelledby={`res-${r.id}-title`}
                                    >
                                        <div className="bg-[#d9e9ea] h-44 w-full flex items-center justify-center text-[#185a82] text-sm">
                                            {/* placeholder image */}
                                            <span>Cover / Thumbnail</span>
                                        </div>

                                        <div className="p-4 flex-1 flex flex-col">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <h4
                                                        id={`res-${r.id}-title`}
                                                        className="text-sm font-semibold text-[#185a82]"
                                                    >
                                                        {r.title}
                                                    </h4>
                                                    <p className="text-xs text-[#3c3333]/70 mt-1">
                                                        {r.author}
                                                    </p>
                                                </div>

                                                <div className="text-xs text-[#3c3333]/60">
                                                    <span className="inline-block bg-[#eef8f8] text-[#185a82] px-2 py-1 rounded-full text-[11px]">
                                                        {r.type}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-[#3c3333]/80 mt-3 flex-1">
                                                {r.description}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between gap-3">
                                                {r.price ? (
                                                    <div className="text-[#185a82] font-semibold">
                                                        {r.price}
                                                    </div>
                                                ) : r.duration ? (
                                                    <div className="text-sm text-[#3c3333]/70">
                                                        {r.duration}
                                                    </div>
                                                ) : r.frequency ? (
                                                    <div className="text-sm text-[#3c3333]/70">
                                                        {r.frequency}
                                                    </div>
                                                ) : (
                                                    <div />
                                                )}

                                                <div className="ml-auto flex gap-2">
                                                    <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                                                        View Details
                                                    </button>
                                                    <button className="text-sm border border-[#e6efef] px-3 py-1.5 rounded-full hover:bg-[#f0fdfd] transition">
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* empty state when no resources */}
                        {filtered.length === 0 && (
                            <div className="mt-8 text-center text-sm text-[#3c3333]/70">
                                No resources match your search & filter. Try another keyword or
                                category.
                            </div>
                        )}
                    </section>

                    {/* Multimedia sections (compact rows for podcasts/videos/downloads/newsletters) */}
                    <section className="mb-16">
                        <h3 className="text-xl font-semibold text-[#185a82] mb-6">
                            Multimedia Highlights
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Podcasts row */}
                            <motion.div className="bg-white border border-[#e6efef] rounded-2xl p-4 shadow-sm">
                                <h4 className="font-semibold text-[#185a82] mb-2">Podcasts</h4>
                                <ul className="space-y-3">
                                    {MOCK_RESOURCES.filter((x) => x.type === "Podcasts").map(
                                        (p) => (
                                            <li key={p.id} className="flex items-start gap-3">
                                                <div className="w-12 h-12 bg-[#d9e9ea] rounded-md flex items-center justify-center text-[#185a82] text-xs">
                                                    🎧
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-semibold">{p.title}</div>
                                                    <div className="text-xs text-[#3c3333]/70">
                                                        {p.author} · {p.duration}
                                                    </div>
                                                </div>
                                                <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                                                    Play
                                                </button>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </motion.div>

                            {/* Videos row */}
                            <motion.div className="bg-white border border-[#e6efef] rounded-2xl p-4 shadow-sm">
                                <h4 className="font-semibold text-[#185a82] mb-2">Videos</h4>
                                <ul className="space-y-3">
                                    {MOCK_RESOURCES.filter((x) => x.type === "Videos").map((v) => (
                                        <li key={v.id} className="flex items-start gap-3">
                                            <div className="w-12 h-12 bg-[#d9e9ea] rounded-md flex items-center justify-center text-[#185a82] text-xs">
                                                ▶
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-semibold">{v.title}</div>
                                                <div className="text-xs text-[#3c3333]/70">
                                                    {v.author} · {v.length}
                                                </div>
                                            </div>
                                            <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                                                Watch
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Downloads / Audio */}
                            <motion.div className="bg-white border border-[#e6efef] rounded-2xl p-4 shadow-sm">
                                <h4 className="font-semibold text-[#185a82] mb-2">Downloads</h4>
                                <ul className="space-y-3">
                                    {MOCK_RESOURCES.filter((x) => x.type === "Downloads").map(
                                        (d) => (
                                            <li key={d.id} className="flex items-start gap-3">
                                                <div className="w-12 h-12 bg-[#d9e9ea] rounded-md flex items-center justify-center text-[#185a82] text-xs">
                                                    ⬇️
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-semibold">{d.title}</div>
                                                    <div className="text-xs text-[#3c3333]/70">
                                                        {d.author} · {d.fileSize}
                                                    </div>
                                                </div>
                                                <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                                                    Download
                                                </button>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </motion.div>
                        </div>
                    </section>

                    {/* Newsletter CTA */}
                    <section className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="rounded-2xl p-8 bg-gradient-to-r from-[#185a82] to-[#0f3f50] text-white"
                        >
                            <div className="max-w-4xl mx-auto text-center">
                                <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
                                <p className="text-sm mb-4 text-white/90">
                                    Subscribe to receive clinical insights, curated resource lists,
                                    and professional development updates delivered to your inbox.
                                </p>

                                <form
                                    className="flex items-center justify-center gap-2 max-w-lg mx-auto"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <input
                                        aria-label="Email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-grow px-4 py-2 rounded-full text-[#0b2d32] focus:outline-none"
                                    />
                                    <button className="bg-white text-[#185a82] px-5 py-2 rounded-full font-semibold hover:opacity-95 transition">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
