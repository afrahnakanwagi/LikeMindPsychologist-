import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-gradient-to-b from-[#e6f4f5] via-white to-[#f8fbfc] font-['Alegreya_Sans'] text-[#3c3333] overflow-hidden">
      <Navbar />
    <br /><br /><br />
      {/* ========= HERO ========= */}
      <section className="text-center py-28 bg-gradient-to-b from-[#e7f8f9] to-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#1a365d] mb-4"
        >
          Get In Touch With Us
        </motion.h1>
        <p className="text-gray-600">
          We're here to support your mental and spiritual wellness journey
        </p>
      </section>

      {/* ========= CONTACT FORM ========= */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* Left - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-8 border"
        >
          <h2 className="text-2xl font-bold text-[#185a82] mb-6">
            Send Us a Message
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-[#1c8ca0] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-[#1c8ca0] outline-none"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={form.phone}
            onChange={handleChange}
            className="border p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-[#1c8ca0] outline-none"
          />
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="border p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-[#1c8ca0] outline-none"
          >
            <option value="">Select a Subject</option>
            <option>General Inquiry</option>
            <option>Membership Information</option>
            <option>Donation Support</option>
            <option>Professional Resources</option>
          </select>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-[#1c8ca0] outline-none"
          ></textarea>
          <label className="flex items-center text-sm text-gray-600 mb-4">
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
              className="mr-2 accent-[#185a82]"
            />
            I would like to receive newsletters and updates
          </label>
          <button
            type="submit"
            className="bg-[#185a82] text-white w-full py-3 rounded-full hover:bg-[#134961] transition font-semibold"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Your information will never be shared.
          </p>
        </motion.form>

        {/* Right - Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <InfoCard
            title="Contact Details"
            items={[
              { icon: <Mail size={18} />, text: "info@likemindpsychologist.com" },
              { icon: <Phone size={18} />, text: "+1 (555) 123-4567" },
              {
                icon: <Clock size={18} />,
                text: "Mon - Fri: 9:00 AM - 6:00 PM EST",
              },
              {
                icon: <MapPin size={18} />,
                text: "123 Wellness Way, Suite 100, City, State 12345",
              },
            ]}
          />
          <InfoCard
            title="Quick Links"
            links={[
              "Frequently Asked Questions",
              "Membership Information",
              "Book Club Guidelines",
              "Professional Resources",
            ]}
          />
          <InfoCard
            title="Connect With Us"
            socials={[
              { icon: <Facebook size={18} />, link: "#" },
              { icon: <Instagram size={18} />, link: "#" },
              { icon: <Twitter size={18} />, link: "#" },
              { icon: <Linkedin size={18} />, link: "#" },
            ]}
          />
        </motion.div>
      </section>

      {/* ========= FAQ ========= */}
      <FAQSection />

      {/* ========= SUPPORT HOURS ========= */}
      <Section title="Our Support Team Is Here For You">
        <p className="text-gray-600 mb-8">
          Our dedicated team of mental health professionals is available to
          answer your questions and guide you on your wellness journey.
        </p>
        <div className="max-w-3xl mx-auto bg-white border rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Monday - Friday</td>
                <td className="p-4 text-[#185a82]">9:00 AM - 6:00 PM EST</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Saturday</td>
                <td className="p-4 text-[#185a82]">10:00 AM - 2:00 PM EST</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Sunday</td>
                <td className="p-4 text-[#185a82]">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Response time: within 24 hours on business days
        </p>
      </Section>

      {/* ========= NEWSLETTER ========= */}
      <Section title="Stay Connected" subtitle="Subscribe for weekly wellness tips & updates">
        <div className="max-w-md mx-auto flex items-center border rounded-full overflow-hidden shadow-sm">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-3 outline-none"
          />
          <button className="bg-[#185a82] text-white px-6 py-3 font-semibold hover:bg-[#134961] transition">
            Subscribe
          </button>
        </div>
      </Section>

      {/* ========= OFFICE INFO ========= */}
      <Section title="Visit Our Office">
        <div className="bg-gray-100 rounded-2xl shadow-inner h-64 mb-6 flex items-center justify-center text-gray-500">
          Map Location
        </div>
        <div className="bg-white border rounded-2xl shadow-sm p-6 max-w-md mx-auto text-sm text-gray-700">
          <p className="font-semibold text-[#185a82] mb-1">
            Like Mind Psychologist Book Club
          </p>
          <p>123 Wellness Way, Suite 100</p>
          <p>City, State 12345</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Email: info@likemindpsychologist.com</p>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

// -------------------- REUSABLE COMPONENTS --------------------

function InfoCard({ title, items, links, socials }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">
      <h3 className="font-semibold text-[#185a82] mb-4">{title}</h3>
      {items && (
        <ul className="space-y-2 text-sm text-gray-700">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      {links && (
        <ul className="space-y-2 text-sm text-gray-700">
          {links.map((link, i) => (
            <li key={i} className="hover:text-[#1c8ca0] cursor-pointer">
              → {link}
            </li>
          ))}
        </ul>
      )}
      {socials && (
        <div className="flex gap-4 text-[#185a82] mt-2">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              className="p-2 bg-gray-100 rounded-full hover:bg-[#1c8ca0] hover:text-white transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    "How do I become a member?",
    "Are book discussion groups open to everyone?",
    "Do you offer continuing education credits?",
    "Can I suggest a book or resource?",
    "How do I access member-only content?",
    "What is your refund policy?",
  ];

  return (
    <Section title="Frequently Asked Questions">
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-[#185a82]">{faq}</p>
              <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
            </div>
            {openIndex === i && (
              <p className="mt-2 text-sm text-gray-600">
                This is a sample response for “{faq}”. You can replace this text
                with real FAQ answers as needed.
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Section({ title, subtitle, children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section
      ref={ref}
      className="py-20 text-center bg-gradient-to-b from-white to-[#f9fbfc]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-[#185a82] mb-3"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-10"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}
