// src/components/SubscriptionPopup.jsx
import React, { useState, useEffect } from "react";
import logo from "../assests/logo.png"; // Fixed: "assets" not "assests"

export default function SubscriptionPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true); // Always show after 1.5s
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
        // No storage → will show again on reload
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
            setShowPopup(false);
            alert("Thank you for subscribing!");
            setEmail("");
            // No storage → will show again on reload
        }
    };

    if (!showPopup) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
        >
            <div
                className="relative bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa] rounded-3xl shadow-2xl max-w-md w-full p-10 animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
                style={{ border: "2px solid #185a82" }}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition"
                    aria-label="Close popup"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Large Logo */}
                <div className="flex justify-center mb-8">
                    <img
                        src={logo}
                        alt="Like Mind Psychologist"
                        className="h-52 w-auto drop-shadow-lg"
                    />
                </div>

                {/* Title */}
                <h3
                    className="text-3xl font-bold text-center mb-4"
                    style={{
                        fontFamily: "'Alegreya Sans SC', sans-serif",
                        color: "#3c3333",
                    }}
                >
                    Stay Connected with Like Mind Psychologist
                </h3>

                {/* Subtitle */}
                <p className="text-center text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
                    Get faith-centered psychology insights, book club updates, and workshop invites delivered to your inbox.
                </p>

                {/* Form */}
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-5 py-3.5 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#185a82] transition text-gray-800 placeholder-gray-500"
                        style={{ borderColor: "#185a82", backgroundColor: "#ffffff", textAlign: "center" }}
                    />
                    <button
                        type="submit"
                        className="px-7 py-3.5 rounded-full font-semibold text-white shadow-lg transition hover:scale-105"
                        style={{
                            backgroundColor: "#185a82",
                            boxShadow: "0 4px 15px rgba(24, 90, 130, 0.4)",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#134a6b")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#185a82")}
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-xs text-center text-gray-600 mt-5">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
}