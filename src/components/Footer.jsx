import React from "react";
import { FaGlobe, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6 mt-20"
      style={{
        background: "linear-gradient(180deg, #3c3333 0%, #2b2424 100%)",
        color: "#e5e3e3",
        fontFamily: "'Alegreya Sans', sans-serif",
        borderTop: "3px solid #9dd5d6",
        boxShadow: "0 -2px 20px rgba(157, 213, 214, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Newsletter */}
        <div>
          <h3
            className="mb-6 text-2xl font-semibold tracking-wide"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Stay Connected
          </h3>
          <p className="text-sm mb-4 text-gray-300 leading-relaxed">
            Subscribe to our newsletter to receive inspiring articles, book releases,
            and wellness resources from Like Mind Psychologists.
          </p>
          <div className="flex rounded-full overflow-hidden border border-[#9dd5d6] shadow-md">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-grow px-4 py-3 text-gray-900 outline-none text-sm"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            />
            <button
              className="px-6 py-3 bg-[#9dd5d6] text-[#2b2424] font-semibold hover:bg-[#185a82] hover:text-white transition-all"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="mb-6 text-2xl font-semibold tracking-wide"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { text: "Home", href: "/" },
              { text: "About Us", href: "/about-us" },
              { text: "Our Services", href: "/services" },
              { text: "Books & Resources", href: "/books-resources" },
              { text: "Wellness Programs", href: "/wellness-programs" },
              { text: "Membership", href: "/membership" },
              { text: "Community Blog", href: "/community-blog" },
              { text: "Therapists Directory", href: "/therapists-directory" },
              { text: "Donate", href: "/donate" },
              { text: "Contact Us", href: "/contact-us" },
            ].map(({ text, href }, i) => (
              <li key={i}>
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
            className="mb-6 text-2xl font-semibold tracking-wide"
            style={{ color: "#9dd5d6", fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            About Us
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Like Mind Psychologists is a collective of mental health professionals
            fostering awareness, healing, and learning through shared experiences,
            resources, and books.
          </p>

          <div className="flex gap-6 text-2xl">
            <a
              href="#"
              aria-label="Website"
              className="hover:text-[#9dd5d6] transition-transform hover:scale-110"
            >
              <FaGlobe />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#9dd5d6] transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#9dd5d6] transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#9dd5d6] transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="mt-12 mb-4 border-t"
        style={{ borderColor: "rgba(157, 213, 214, 0.2)" }}
      ></div>

      {/* Footer Bottom */}
      <p
        className="text-center text-xs tracking-wide"
        style={{
          color: "#b1afaf",
          fontFamily: "'Alegreya Sans', sans-serif",
        }}
      >
        © {new Date().getFullYear()} Like Mind Psychologists — Cultivating calm minds and connected hearts.
      </p>
    </footer>
  );
}
