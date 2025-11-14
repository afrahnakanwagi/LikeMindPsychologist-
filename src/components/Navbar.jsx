import React, { useState } from "react";
import logo from "../assests/logo.png";
// #EFDECD

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        // Glassy cyan (80% opacity + blur)
        backgroundColor: "#ffff",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO – BIGGER, WITH WHITE BACKGROUND AND ROUND BORDER */}
        <div className="flex items-center">
          <div
            className="flex items-center justify-center w-32 h-32 md:w-30 md:h-30 rounded-full bg-[#9dd5d6]"
            style={{
              // width: "130px",
              // height: "130px",
              border: "3px solid #9dd5d6",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={logo}
              alt="Like Mind Psychologist Logo"
              className="w-60 h-60 object-contain rounded-full"
              style={{
                filter: "drop-shadow(0 0 4px rgba(0,0,0,0.1))",
              }}
            />
          </div>
        </div>

        {/* Desktop Links */}
        <ul
          className="hidden md:flex items-center space-x-8 text-xl font-medium"
          style={{ fontFamily: "'Alegreya Sans', sans-serif", color: "#3c3333",}}
        >
          <li><a href="/" className="hover:text-[#185a82] transition">Home</a></li>
          <li><a href="/about" className="hover:text-[#185a82] transition">About Us</a></li>
          <li><a href="/services" className="hover:text-[#185a82] transition">Services</a></li>
          <li><a href="/books-resources" className="hover:text-[#185a82] transition">Resources</a></li>
          {/* <li><a href="/education" className="hover:text-[#185a82] transition">Education</a></li> */}
          <li><a href="/membership" className="hover:text-[#185a82] transition">Book Club</a></li>
          <li><a href="/shop" className="hover:text-[#185a82] transition">Ecommerce</a></li>
          <li><a href="/blog" className="hover:text-[#185a82] transition">Blog</a></li>
          <li><a href="/contact" className="hover:text-[#185a82] transition">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <button
          className="hidden md:block ml-4 px-5 py-2 rounded-full text-white text-sm font-medium transition"
          style={{
            backgroundColor: "#185a82",
            fontFamily: "'Alegreya Sans', sans-serif",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#134961"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#185a82"}
          onClick={() => window.location.href = "/membership"}
        >
          Join Now
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#185a82]"
          style={{ backgroundColor: "#185a82" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              // “X” icon
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              // Hamburger icon
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu – Glassy too */}
      {menuOpen && (
        <ul
          className="md:hidden px-6 py-4 space-y-3 text-sm font-medium"
          style={{
            backgroundColor: "rgba(157, 213, 214, 0.80)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            fontFamily: "'Alegreya Sans', sans-serif",
            color: "#3c3333",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <li><a href="/" className="block hover:text-[#185a82]">Home</a></li>
          <li><a href="/about" className="block hover:text-[#185a82]">About Us</a></li>
          <li><a href="/services" className="block hover:text-[#185a82]">Services</a></li>
          <li><a href="/books-resources" className="block hover:text-[#185a82]">Books & Resources</a></li>
          {/* <li><a href="/education" className="block hover:text-[#185a82]">Education</a></li> */}
          <li><a href="/membership" className="block hover:text-[#185a82]">Book Club</a></li>
          <li><a href="/shop" className="block hover:text-[#185a82]">Ecommerce</a></li>
          <li><a href="/blog" className="block hover:text-[#185a82]">Blog</a></li>
          <li><a href="/contact" className="block hover:text-[#185a82]">Contact</a></li>
          <li>
            <button
              className="w-full mt-3 px-5 py-2 bg-[#185a82] text-white rounded-full text-sm font-medium"
              style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#134961"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#185a82"}
            >
              Join Now
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}