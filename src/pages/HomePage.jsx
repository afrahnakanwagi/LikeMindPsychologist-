// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubscriptionPopup from "../components/SubscriptionPopup";
import logo from "../assests/logo.png";
import book from "../assests/book.png";


export default function HomePage() {
    const [theme, setTheme] = useState("dark");

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
                                    backgroundColor: "#5DA8A3",
                                    color: "#000000",
                                    boxShadow: "0 4px 15px rgba(93, 168, 163, 0.4)",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#4a8a8a")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#5DA8A3")}
                            >
                                Join the Book Club
                            </button>
                            <button
                                className="border-2 px-6 py-3 rounded-full font-semibold transition"
                                style={{
                                    borderColor: "#5DA8A3",
                                    color: "#5DA8A3",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#5DA8A3";
                                    e.target.style.color = "#000000";
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
                    <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
                        <img
                            src={logo}
                            alt="Community"
                            className="rounded-3xl shadow-2xl border-4 w-full max-w-md md:max-w-lg"
                            style={{ borderColor: "#5DA8A366" }}
                        />
                    </div>
                </div>
            </section>
            {/* Featured Book */}
            <section className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                    <img
                        src={book}
                        alt="The Gifts of Imperfection by Brené Brown"
                        className="w-full md:w-1/2 rounded-2xl shadow-xl border-2"
                        style={{ borderColor: `${c.accent}4d` }}
                    />
                    <div className="md:w-1/2 text-left">
                        <h2
                            className="text-3xl font-semibold mb-4"
                            style={{
                                fontFamily: "'Alegreya Sans SC', Alegreya Sans",
                                color: "#185a82",
                            }}
                        >
                            Featured Book: *The Gifts of Imperfection*
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
                            className="mb-6 leading-relaxed text-base"
                            style={{ color: c.accent }}
                        >
                            In this powerful guide to wholehearted living, Brené Brown explores
                            courage, compassion, and connection—showing us how embracing our
                            imperfections can lead to a more authentic, resilient, and fulfilling
                            life.
                        </p>

                        <p
                            className="italic mb-6 text-sm"
                            style={{ color: "#555" }}
                        >
                            📚 In our Book Club, each book is read and discussed for a period of 3 months — allowing time for reflection, application, and meaningful conversations.
                        </p>

                        <button
                            className="px-6 py-3 rounded-full font-semibold shadow-md transition"
                            style={{
                                backgroundColor: "#185a82",
                                color: "#ffffff",
                                boxShadow: `0 4px 12px ${c.accent}3d`,
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = c.hover)}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = c.accent)}
                        >
                            View This Quarter’s Book
                        </button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 text-center px-6 max-w-7xl mx-auto" style={{ backgroundColor: c.section }}>
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

            {/* Community CTA */}
            <section className="py-24 text-center" style={{ backgroundColor: "#ffffff" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <h2
                        className="text-3xl font-semibold mb-8"
                        style={{
                            fontFamily: "'Alegreya Sans SC', sans-serif",
                            color: "#185a82",
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

            {/* Upcoming Workshops */}
            <section className="py-24 px-6 text-center max-w-7xl mx-auto" style={{ backgroundColor: "#185a82" }}>
                <h2
                    className="text-3xl font-semibold mb-14"
                    style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#ffff" }}
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

            {/* Testimonials */}
            <section className="py-24 px-6 text-center max-w-7xl mx-auto" style={{ backgroundColor: "#ffffff" }}>
                <h2
                    className="text-3xl font-semibold mb-12"
                    style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#185a82" }}
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