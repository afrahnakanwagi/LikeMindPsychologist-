import React, { useState } from "react";
import logo from "../assests/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(157, 213, 214, 0.6)", // #9dd5d6 pastel cyan with transparency
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo only */}
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Like Mind Psychologist Logo"
            className="w-20 h-20 rounded-full object-cover"
            style={{ display: "block" }}
          />
        </div>

        {/* Desktop Links */}
        <ul
          className="hidden md:flex items-center space-x-6 text-sm"
          style={{ fontFamily: "'Alegreya Sans', sans-serif", color: "#3c3333" }}
        >
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#185a82] transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Books & Resources
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Membership
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#185a82] transition">
              Donate
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          className="hidden md:inline-block ml-4 text-sm px-4 py-2 rounded-full transition"
          style={{
            backgroundColor: "#185a82",
            color: "#fff",
            fontFamily: "'Alegreya Sans', sans-serif",
          }}
          onClick={() => alert("Join Now clicked!")}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#134961")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#185a82")}
        >
          Join Now
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-[#3c3333] border-[#3c3333]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 010 1.42L13.42 12l4.88 4.88a1 1 0 11-1.42 1.42L12 13.42l-4.88 4.88a1 1 0 01-1.42-1.42L10.58 12 5.7 7.12a1 1 0 011.42-1.42L12 10.58l4.88-4.88a1 1 0 011.42 0z"
              />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className="md:hidden bg-white bg-opacity-90 backdrop-blur-sm border-t border-gray-200 px-6 py-4 space-y-4"
          style={{ fontFamily: "'Alegreya Sans', sans-serif", color: "#3c3333" }}
        >
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Books & Resources
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Membership
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#185a82] transition">
              Donate
            </a>
          </li>
          <li>
            <button
              className="w-full bg-[#185a82] text-white text-sm px-4 py-2 rounded-full mt-2"
              onClick={() => alert("Join Now clicked!")}
            >
              Join Now
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
