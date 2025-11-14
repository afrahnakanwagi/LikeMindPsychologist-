// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubscriptionPopup from "../components/SubscriptionPopup";
import logo from "../assests/logo.png";
import book from "../assests/book.png";
import image from "../assests/image.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaEnvelope, FaPhone,
} from "react-icons/fa";


export default function HomePage() {
    const [theme, setTheme] = useState("dark");
    const FadeInWhenVisible = ({ children, delay = 0 }) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        );
    };


    const navigate = useNavigate();
    const handleCardClick = (title) => {
        const lowerTitle = title.toLowerCase();
        if (
            lowerTitle.includes("group therapy") ||
            lowerTitle.includes("online resources")
        ) {
            navigate("/education");
        }
    };


    // Load saved theme or detect system preference
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setTheme(saved);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
        }
    }, []);

    // Apply theme to <html>
    useEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light");
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    // Brand Colors
    const colors = {
        dark: {
            bg: "#0f172a",
            section: "#1A3A5A",
            card: "#ffffff",
            text: "#ffffff",
            muted: "#d1d5db",
            accent: "#040808ff",
            lightAccent: "#A8DADC",
            hover: "#4a8a8a",
        },
        light: {
            bg: "#f8fafa",
            section: "#A8DADC",
            card: "#ffffff",
            text: "#1A3A5A",
            muted: "#4b5563",
            accent: "#5DA8A3",
            lightAccent: "#1A3A5A",
            hover: "#4a8a8a",
        },
    };

    const c = colors[theme];

    return (
        <div
            className={`font-sans min-h-screen transition-all duration-500`}
            style={{
                fontFamily: "'Alegreya Sans', sans-serif",
                backgroundColor: c.bg,
                color: c.text,
            }}
        >
            <Navbar theme={theme} toggleTheme={toggleTheme} colors={c} />

            <br /><br /><br />

            {/* Hero Section */}
            <section
                className="relative overflow-hidden"
                style={{
                    backgroundColor: "#9dd5d6", // Solid gray-cyan
                }}
            >
                {/* Optional subtle background image with reduced opacity */}
                <div className="absolute inset-0 opacity-10">
                    <img
                        src={logo}
                        alt="Peaceful reading"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1
                            className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
                            style={{
                                fontFamily: "'Alegreya Sans SC', sans-serif",
                                color: "#3c3333", // Black
                            }}
                        >
                            LIKE MIND <span style={{ color: "#3c3333" }}>
                                <br /><span>PSYCHOLOGIST</span>
                            </span>
                            <br />
                            <span style={{ fontSize: "0.25em", color: "#000000" }}>
                                Where Faith Meets Mental Health
                            </span>
                        </h1>
                        <p
                            className="text-lg mb-8 leading-relaxed"
                            style={{ color: "#1A3A5A" }} // Darker muted for contrast
                        >
                            A Christ-centered community for psychologists integrating biblical wisdom with evidence-based practice for holistic healing and growth.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <button
                                className="px-6 py-3 rounded-full shadow-lg font-semibold transition"
                                style={{
                                    backgroundColor: "#185a82",
                                    color: "#ffff",
                                    boxShadow: "0 4px 15px rgba(93, 168, 163, 0.4)",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#185a82")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
                            >
                                Join the Book Club
                            </button>
                            <button
                                className="border-2 px-6 py-3 rounded-full font-semibold transition"
                                style={{
                                    borderColor: "#185a82",
                                    backgroundColor: "#ffffff",
                                    color: "#185a82",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#185a82";
                                    e.target.style.color = "#ffff";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#5DA8A3";
                                }}
                                onClick={() => window.location.href = "/services"}
                            >
                                Explore Our Services
                            </button>
                        </div>
                    </div>
                    <div
                        className="relative w-240 h-80 md:w-116 md:h-96 rounded-full overflow-hidden shadow-2xl border-2"
                        style={{
                            borderColor: "rgba(255,255,255,0.3)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        }}
                    >
                        <img
                            src={image}
                            alt="The Gifts of Imperfection  Current Book Club"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Book – Smaller & Responsive */}
            <section className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Image – Reduced Size */}
                    <div className="w-full md:w-5/12 lg:w-4/12">
                        <img
                            src={book}
                            alt="The Gifts of Imperfection by Brené Brown"
                            className="w-full h-auto max-w-xs md:max-w-none rounded-2xl shadow-xl border-2 mx-auto md:mx-0"
                            style={{
                                borderColor: `${c.accent}4d`,
                                maxHeight: '380px', // Limits height on large screens
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-7/12 lg:w-8/12 text-center md:text-left">
                        <h2
                            className="text-2xl md:text-3xl font-semibold mb-3"
                            style={{
                                fontFamily: "'Alegreya Sans SC', Alegreya Sans",
                                color: "#3c3333",
                            }}
                        >
                            Featured Book: <em>The Gifts of Imperfection</em>
                        </h2>
                        <h3
                            className="text-lg font-medium mb-3"
                            style={{
                                fontFamily: "'Alegreya Sans', sans-serif",
                                color: "#3c3333",
                            }}
                        >
                            by Brené Brown
                        </h3>
                        <p
                            className="mb-5 leading-relaxed text-base"
                            style={{ color: c.accent }}
                        >
                            In this powerful guide to wholehearted living, Brené Brown explores
                            courage, compassion, and connection—showing us how embracing our
                            imperfections can lead to a more authentic, resilient, and fulfilling
                            life.
                        </p>

                        <p
                            className="italic mb-6 text-sm max-w-xl mx-auto md:mx-0"
                            style={{ color: "#555" }}
                        >
                            In our Book Club, each book is read and discussed for a period of 3 months — allowing time for reflection, application, and meaningful conversations.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button
                                className="px-6 py-3 rounded-full font-semibold shadow-md transition transform hover:scale-105"
                                style={{
                                    backgroundColor: "#185a82",
                                    color: "#ffffff",
                                    boxShadow: `0 4px 12px ${c.accent}3d`,
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#185a82";
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#185a82";
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                View This Quarter's Book
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CORE SERVICES ================= */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Title */}
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{
                            fontFamily: "'Alegreya Sans SC', sans-serif",
                            color: "#3c3333",
                        }}
                    >
                        Our Core Services
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg mb-12 max-w-3xl mx-auto" style={{ color: "#000000" }}>
                        Comprehensive care designed to restore balance, faith, and emotional well-being.
                    </p>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Overview of Psychotherapy Services",
                                desc: "Individual, couples, and family therapy sessions tailored to your unique emotional and relational needs.",
                            },
                            {
                                title: "Group Therapy / Peer-to-Peer & Workshops",
                                desc: "Interactive group sessions and workshops for shared healing, growth, and skill-building.",
                            },
                            {
                                title: "Mentorship and Coaching",
                                desc: "Personal and professional mentorship programs that integrate psychology, leadership, and spirituality.",
                            },
                            {
                                title: "Curriculum Development on Mental Health and Faith",
                                desc: "Custom-designed educational content and frameworks merging faith-based values with mental wellness principles.",
                            },
                            {
                                title: "Online Resources (Articles, Podcasts, Videos)",
                                desc: "Access digital tools for ongoing self-improvement — curated resources for learning and reflection.",
                            },
                            {
                                title: "Community Events",
                                desc: "Join our mental health programs, conferences, and retreats that inspire deeper connection and healing.",
                            },
                            {
                                title: "Pricing and Packages",
                                desc: "Explore flexible options designed to fit your personal or organizational wellness goals.",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                onClick={() => handleCardClick(card.title)}
                                className="group cursor-pointer bg-white rounded-xl shadow-md p-6 border border-[#9dd5d6]/30 hover:shadow-xl transition-all duration-300"
                            >
                                <h3
                                    className="font-semibold text-xl mb-3"
                                    style={{ color: "#185a82" }}
                                >
                                    {card.title}
                                </h3>
                                <p className="text-base leading-relaxed" style={{ color: c.accent }}>
                                    {card.desc}
                                </p>

                                {/* Arrow on hover */}
                                <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        style={{ color: c.hover }}
                                    >
                                        <path d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM - Modern Card Design */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#185a82] font-semibold text-3xl font-bold mb-4 tracking-wider uppercase">Our Team</span>
                        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                            United by faith, driven by excellence, committed to transforming lives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Dr. Esther Mbabazi',
                                role: 'Clinical Psychologist',
                                specialty: 'CBT Specialist',
                                email: 'esther@likemind.com',
                                phone: '+256 700 123 456',
                                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
                            },
                            {
                                name: 'Pastor James Okello',
                                role: 'Chaplain & Counselor',
                                specialty: 'Faith Integration',
                                email: 'james@likemind.com',
                                phone: '+256 700 789 012',
                                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
                            },
                            {
                                name: 'Sarah Nansubuga',
                                role: 'Trauma Therapist',
                                specialty: 'EMDR Certified',
                                email: 'sarah@likemind.com',
                                phone: '+256 700 345 678',
                                img: 'https://images.unsplash.com/photo-1580489940927-265c7f03a8e4?auto=format&fit=crop&w=800&q=80'
                            }
                        ].map((person, i) => (
                            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={person.img}
                                        alt={person.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-4 py-2 bg-[#185a82] text-[#ffffff] rounded-full text-sm font-bold">
                                            {person.specialty}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                                        <p className="text-sm opacity-90">{person.role}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-3 mb-6">
                                        <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-gray-600 hover:text-[#185a82] transition group/link">
                                            <FaEnvelope className="text-[#185a82]" />
                                            <span className="text-sm group-hover/link:underline">{person.email}</span>
                                        </a>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <FaPhone className="text-[#185a82]" />
                                            <span className="text-sm">{person.phone}</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#185a82] text-white py-3 rounded-xl font-semibold hover:bg-[#185a82] hover:text-[#ffffff] transition-all flex items-center justify-center gap-2 group/btn">
                                        Connect
                                        {/* <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" /> */}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* How It Works */}
            <section className="py-24 text-center px-6 max-w-7xl mx-auto" style={{ backgroundColor: "#185a82" }}>
                <h2
                    className="text-3xl font-semibold mb-16"
                    style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#ffff" }}
                >
                    How Our Community Works
                </h2>
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {[
                        { step: "Step 1", title: "READ", text: "Engage with curated books blending Christian faith and clinical psychology." },
                        { step: "Step 2", title: "REFLECT", text: "Journal and discuss using Christ-centered prompts to deepen insight." },
                        { step: "Step 3", title: "CONNECT", text: "Join live sessions with like-minded psychologists in a supportive, faith-filled space." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-xl shadow-lg hover:shadow-xl transition border"
                            style={{
                                backgroundColor: c.card,
                                borderColor: c.accent,
                                borderWidth: "1px",
                            }}
                        >
                            <h3 className="font-bold mb-3 text-xl" style={{ color: "#185a82" }}>{item.step}</h3>
                            <h4 className="font-semibold mb-4 text-lg" style={{ color: "#185a82" }}>{item.title}</h4>
                            <p className="text-base" style={{ color: c.accent }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming Workshops */}
            <section className="py-24 px-6 text-center max-w-7xl mx-auto" style={{ backgroundColor: "#ffff" }}>
                <h2
                    className="text-3xl font-semibold mb-14"
                    style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#185a82" }}
                >
                    Upcoming Faith & Psychology Workshops
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
                    {[
                        { title: "Integrating Christ in Therapy", date: "March 15–17, 2025", text: "Learn ethical, evidence-based ways to honor clients’ faith in clinical practice." },
                        { title: "Biblical Resilience Training", date: "April 5–6, 2025", text: "Equip clients with scriptural tools to build lasting mental strength." },
                        { title: "Mindfulness Through Scripture", date: "April 19–21, 2025", text: "Explore meditative practices rooted in biblical peace and presence." },
                    ].map((course, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-xl shadow-md hover:shadow-lg transition border"
                            style={{
                                backgroundColor: "#ffffff",
                                borderColor: c.accent,
                                borderWidth: "1px",
                            }}
                        >
                            <p className="text-sm mb-2" style={{ color: "#185a82" }}>{course.date}</p>
                            <h4 className="font-semibold mb-4 text-xl" style={{ color: "#185a82" }}>{course.title}</h4>
                            <p className="mb-6 text-base" style={{ color: c.accent }}>{course.text}</p>
                            <a href="/services" className="font-semibold text-base hover:underline" style={{ color: "#185a82" }}>
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials
            <section className="py-24 px-6 text-center max-w-7xl mx-auto" style={{ backgroundColor: "#ffffff" }}>
                <h2
                    className="text-3xl font-semibold mb-12"
                    style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#3c3333" }}
                >
                    Voices from Our Community
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
                    {[
                        { name: "Dr. Sarah Mitchell", location: "Nairobi", text: "This space has renewed my calling. I now integrate Christ’s love into every session with confidence." },
                        { name: "Dr. James Rodriguez", location: "Uganda", text: "Finally, a community that honors both science and scripture without compromise." },
                        { name: "Dr. Emily Chen", location: "Nairobi", text: "The discussions here have deepened my faith and sharpened my clinical skills." },
                    ].map((t, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-xl shadow-md border"
                            style={{
                                backgroundColor: "#ffffff",
                                borderColor: "#185a82",
                                borderWidth: "2px",
                            }}
                        >
                            <p className="mb-6 text-lg italic" style={{ color: "#6b7280" }}>“{t.text}”</p>
                            <p className="font-semibold text-xl" style={{ color: "#185a82" }}>{t.name}</p>
                            <p className="text-sm" style={{ color: "#6b7280" }}>{t.location}</p>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Community CTA */}
            <section className="py-24 text-center bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
                <div className="max-w-5xl mx-auto px-6">
                    <h2
                        className="text-3xl font-semibold mb-8"
                        style={{
                            fontFamily: "'Alegreya Sans SC', sans-serif",
                            color: "#3c3333",
                        }}
                    >
                        Join a Christ-Centered Community
                    </h2>
                    <p
                        className="max-w-3xl mx-auto text-lg mb-10 leading-relaxed"
                        style={{ color: c.accent }}
                    >
                        Connect with born-again psychologists integrating faith and science. Grow together in wisdom, empathy, and purpose.
                    </p>
                    <button
                        className="px-8 py-3 rounded-full font-semibold shadow-xl transition"
                        style={{
                            backgroundColor: "#185a82",
                            color: "#ffffff",
                            boxShadow: `0 6px 20px ${c.accent}66`,
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#185a82")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
                        onClick={() => window.location.href = "/membership"}
                    >
                        Become a Member
                    </button>
                </div>
            </section>


            <Footer colors={c} />

            <SubscriptionPopup />

            {/* Floating Donate Button */}
            <button
                onClick={() => window.location.href = "/donate"}
                className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                    backgroundColor: "#185a82",
                    color: "#ffffff",
                    boxShadow: `0 8px 25px #185a8288`,
                }}
                aria-label="Donate"
            >
                Donate
            </button>
        </div>
    );
}