import React from "react";
import { FaGlobe, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: "#3c3333",
        color: "#d1cfcf",
        fontFamily: "'Alegreya Sans', sans-serif",
        boxShadow: "inset 0 4px 10px rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Newsletter */}
        <div>
          <h3
            className="mb-6 text-xl font-semibold"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Newsletter
          </h3>
          <div className="flex rounded-md overflow-hidden border border-[#9dd5d6]">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 text-gray-900 outline-none"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            />
            <button
              className="px-6 py-3 bg-[#9dd5d6] text-[#3c3333] font-semibold hover:bg-[#185a82] hover:text-white transition"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="mb-6 text-xl font-semibold"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-4" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
            {[
              { text: "Home", href: "#" },
              { text: "Books & Resources", href: "#" },
              { text: "Education", href: "#" },
              { text: "Membership", href: "#" },
              { text: "Shop", href: "#" },
              { text: "Blog", href: "#" },
              { text: "Contact", href: "#" },
              { text: "Donate", href: "#" },
            ].map(({ text, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  className="hover:text-[#185a82] transition text-base font-medium"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3
            className="mb-6 text-xl font-semibold"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Follow Us
          </h3>
          <div className="flex gap-8 text-3xl">
            <a
              href="#"
              aria-label="Website"
              className="hover:text-[#185a82] transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#185a82] transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#185a82] transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <p
        className="text-center text-xs mt-12 border-t pt-6"
        style={{
          borderColor: "rgba(157, 213, 214, 0.3)",
          fontFamily: "'Alegreya Sans', sans-serif",
          color: "#b1afaf",
        }}
      >
        © {new Date().getFullYear()} Like Mind Psychologist. All rights reserved.
      </p>
    </footer>
  );
}
