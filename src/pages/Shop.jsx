// src/pages/ShopPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShopPage() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setTheme(saved);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light");
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    // Brand Colors - MATCHING NAVBAR & HOMEPAGE
    const colors = {
        dark: {
            bg: "#0f172a",
            navbar: "#5DA8A3",
            hero: "#A8DADC",
            section: "#1A3A5A",
            card: "#1A3A5Aee",
            text: "#ffffff",
            muted: "#d1d5db",
            accent: "#5DA8A3",
            lightAccent: "#A8DADC",
            hover: "#4a8a8a",
        },
        light: {
            bg: "#f8fafa",
            navbar: "#A8DADC",
            hero: "#5DA8A3",
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

    // Sample Products
    const products = [
        {
            id: 1,
            title: "Faith & Resilience Workbook",
            price: 24.99,
            category: "Workbooks",
            format: "Print + PDF",
            image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 2,
            title: "Biblical Mindfulness Journal",
            price: 18.99,
            category: "Journals",
            format: "PDF",
            image: "https://images.unsplash.com/photo-1497633763998-0966c12b2d84?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 3,
            title: "Christ-Centered Therapy Toolkit",
            price: 49.99,
            category: "Courses",
            format: "Online Course",
            image: "https://images.unsplash.com/photo-1581093458791-9d6f7a5f8b6b?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 4,
            title: "Healing Through Scripture Cards",
            price: 14.99,
            category: "Cards",
            format: "Physical",
            image: "https://images.unsplash.com/photo-1586953208448-0b3c4e87b5b2?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 5,
            title: "LMP Annual Membership",
            price: 99.00,
            category: "Membership",
            format: "Digital",
            image: "https://images.unsplash.com/photo-1516321310766-93d96d8f0e9e?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 6,
            title: "Group Therapy Guidebook",
            price: 34.99,
            category: "Workbooks",
            format: "Print",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        },
    ];

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 100]);

    useEffect(() => {
        let filtered = products;
        if (selectedCategory !== "All") {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }
        filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
        setFilteredProducts(filtered);
    }, [selectedCategory, priceRange]);

    return (
        <div
            className="font-sans min-h-screen transition-all duration-500"
            style={{
                fontFamily: "'Alegreya Sans', sans-serif",
                backgroundColor: c.bg,
                color: c.text,
            }}
        >
            <Navbar theme={theme} toggleTheme={toggleTheme} colors={c} />
            <br /><br /><br /><br /><br /><br />
            {/* HERO - SMOOTH & ELEGANT */}
            <section
                className="relative py-24 text-center overflow-hidden"
                style={{
                    background: `
      radial-gradient(ellipse at top, ${c.navbar}dd 0%, transparent 50%),
      linear-gradient(to bottom, ${c.navbar} 0%, ${c.hero} 70%, ${c.bg} 100%)
    `,
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h1
                        className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
                        style={{
                            fontFamily: "'Alegreya Sans SC', sans-serif",
                            color: theme === "dark" ? "#181616ff" : "#1A3A5A",
                            textShadow: `0 2px 10px ${c.navbar}40`,
                        }}
                    >
                        SHOP RESOURCES
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: c.muted }}>
                        Equip your practice with Christ-centered tools, workbooks, and courses.
                    </p>
                </div>
            </section>
            {/* FILTERS + PRODUCTS */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* SIDEBAR FILTERS */}
                    <aside className="lg:w-1/4">
                        <div
                            className="p-6 rounded-xl shadow-lg border"
                            style={{
                                backgroundColor: c.card,
                                borderColor: c.accent,
                                borderWidth: "1px",
                            }}
                        >
                            <h3 className="font-bold text-xl mb-6" style={{ color: c.accent }}>
                                Filters
                            </h3>

                            {/* Category */}
                            <div className="mb-8">
                                <h4 className="font-semibold mb-3" style={{ color: c.text }}>Category</h4>
                                {["All", "Workbooks", "Journals", "Courses", "Cards", "Membership"].map(cat => (
                                    <label
                                        key={cat}
                                        className="flex items-center mb-2 cursor-pointer"
                                        style={{ color: c.muted }}
                                    >
                                        <input
                                            type="radio"
                                            name="category"
                                            value={cat}
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
                                            className="mr-2 accent-current"
                                            style={{ accentColor: c.accent }}
                                        />
                                        {cat}
                                    </label>
                                ))}
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="font-semibold mb-3" style={{ color: c.text }}>Price Range</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={priceRange[1]}
                                    onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                    className="w-full"
                                    style={{ accentColor: c.accent }}
                                />
                                <div className="flex justify-between text-sm mt-2" style={{ color: c.muted }}>
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* PRODUCT GRID */}
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border"
                                    style={{
                                        backgroundColor: c.card,
                                        borderColor: `${c.accent}33`,
                                        borderWidth: "1px",
                                    }}
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3
                                            className="font-semibold text-lg mb-1"
                                            style={{ color: c.text }}
                                        >
                                            {product.title}
                                        </h3>
                                        <p className="text-sm mb-3" style={{ color: c.muted }}>
                                            {product.format} • {product.category}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span
                                                className="text-2xl font-bold"
                                                style={{ color: c.accent }}
                                            >
                                                ${product.price.toFixed(2)}
                                            </span>
                                            <div className="flex gap-2">
                                                <button
                                                    className="px-4 py-2 rounded-full text-sm font-semibold transition"
                                                    style={{
                                                        backgroundColor: c.accent,
                                                        color: "#fff",
                                                        boxShadow: `0 3px 10px ${c.accent}40`,
                                                    }}
                                                    onMouseEnter={e => e.target.style.backgroundColor = c.hover}
                                                    onMouseLeave={e => e.target.style.backgroundColor = c.accent}
                                                >
                                                    Add to Cart
                                                </button>
                                                <button
                                                    className="px-4 py-2 rounded-full text-sm font-semibold border transition"
                                                    style={{
                                                        borderColor: c.accent,
                                                        color: c.accent,
                                                    }}
                                                    onMouseEnter={e => {
                                                        e.target.style.backgroundColor = c.accent;
                                                        e.target.style.color = "#fff";
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.target.style.backgroundColor = "transparent";
                                                        e.target.style.color = c.accent;
                                                    }}
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <p className="text-center py-12" style={{ color: c.muted }}>
                                No products found in this category.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section
                className="py-16 text-center"
                style={{ backgroundColor: `${c.hero}1a` }}
            >
                <div className="max-w-4xl mx-auto px-6">
                    <h2
                        className="text-3xl font-bold mb-4"
                        style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: c.accent }}
                    >
                        Become a Member & Save 20%
                    </h2>
                    <p className="mb-6" style={{ color: c.muted }}>
                        Unlock exclusive resources, courses, and community access.
                    </p>
                    <button
                        className="px-8 py-3 rounded-full font-semibold shadow-lg transition"
                        style={{
                            backgroundColor: c.accent,
                            color: "#fff",
                            boxShadow: `0 6px 20px ${c.accent}66`,
                        }}
                        onMouseEnter={e => e.target.style.backgroundColor = c.hover}
                        onMouseLeave={e => e.target.style.backgroundColor = c.accent}
                    >
                        Join LMP Membership
                    </button>
                </div>
            </section>

            <Footer colors={c} />
        </div>
    );
}