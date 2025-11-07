import React from "react";
import { FaGlobe, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about-us" },
    { text: "Our Services", href: "/services" },
    { text: "Books & Resources", href: "/books-resources" },
    { text: "Book Club", href: "/book-club" },
    { text: "Shop", href: "/shop" },
    { text: "Blog", href: "/blog" },
    { text: "Therapists Directory", href: "/therapists-directory" },
    { text: "Wellness Programs", href: "/wellness-programs" },
    { text: "Membership", href: "/membership" },
    { text: "Donate", href: "/donate" },
    { text: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer
      className="relative py-16 px-6 mt-20"
      style={{
        background: "linear-gradient(180deg, #3c3333 0%, #2b2424 100%)",
        color: "#e5e3e3",
        fontFamily: "'Alegreya Sans', sans-serif",
        borderTop: "3px solid #9dd5d6",
        boxShadow: "0 -4px 20px rgba(157, 213, 214, 0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Newsletter */}
        <div>
          <h3
            className="mb-5 text-xl font-bold tracking-wider"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Stay Connected
          </h3>
          <p className="text-sm mb-4 text-gray-300 leading-relaxed">
            Subscribe for faith-centered mental health insights, book discussions, and community events.
          </p>
          <form className="flex rounded-full overflow-hidden border border-[#9dd5d6] shadow-lg">
            <input
              type="email"
              placeholder="Your email..."
              className="flex-grow px-4 py-3 text-gray-900 outline-none text-sm"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#9dd5d6] text-[#2b2424] font-bold hover:bg-[#185a82] hover:text-white transition-all"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="mb-5 text-xl font-bold tracking-wider"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Explore
          </h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {quickLinks.map(({ text, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-[#9dd5d6] transition-all duration-300 inline-block hover:translate-x-1"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials & About */}
        <div>
          <h3
            className="mb-5 text-xl font-bold tracking-wider"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Like Mind Psychologists
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            A Christ-centered community blending faith and psychology to foster healing, growth, and connection.
          </p>
          <div className="flex gap-5 text-2xl">
            <a href="#" aria-label="Website" className="hover:text-[#9dd5d6] transition-transform hover:scale-110"><FaGlobe /></a>
            <a href="https://x.com/LMPsychologist?t=lSDFD1n6YOO8ws3kbIOb_w&s=08 " aria-label="Twitter" className="hover:text-[#9dd5d6] transition-transform hover:scale-110"><FaTwitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#9dd5d6] transition-transform hover:scale-110"><FaFacebookF /></a>
            <a href="https://www.instagram.com/likemindpsych?igsh=M2prZGVlZ2hqMmc4" aria-label="Instagram" className="hover:text-[#9dd5d6] transition-transform hover:scale-110"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#9dd5d6] transition-transform hover:scale-110"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/lmpsychologist/" aria-label="LinkedIn" className="hover:text-[#9dd5d6] transition-transform hover:scale-110"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <p className="text-xs text-gray-400" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
          © {new Date().getFullYear()} Like Mind Psychologists —{" "}
          <span className="text-[#9dd5d6]">Faith Meets Mental Health</span>
        </p>
      </div>
    </footer>
  );
}