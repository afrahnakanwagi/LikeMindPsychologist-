import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Donate() {
  const [showModal, setShowModal] = useState(false);
  const [donationType, setDonationType] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const openModal = (type) => {
    setDonationType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCustomAmount("");
  };

  const handleDonate = () => {
    alert(`Thank you for your ${donationType} donation!`);
    closeModal();
  };

  return (
    <div className="bg-gradient-to-b from-[#e6f4f5] via-white to-[#f8fbfc] text-[#3c3333] font-['Alegreya_Sans']">
      <Navbar />
    <br /><br /><br />
      {/* ========= HERO ========= */}
      <section className="text-center py-28 bg-gradient-to-b from-[#e7f8f9] to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a365d] mb-4">
          Support Mental & Spiritual Wellness
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Your donation makes a meaningful difference in the lives of those seeking
          healing and growth.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => openModal("Monthly")}
            className="bg-[#185a82] text-white px-6 py-3 rounded-full hover:bg-[#134961] transition"
          >
            Donate Now
          </button>
          <a
            href="#mission"
            className="border-2 border-[#185a82] text-[#185a82] px-6 py-3 rounded-full hover:bg-[#185a82] hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* ========= MISSION ========= */}
      <Section id="mission" title="Our Mission">
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Like Mind Psychologists founded this book club with a profound purpose: to
          support individuals struggling with mental and spiritual challenges. We
          believe that access to quality psychological resources and community
          support should never be limited by financial circumstances.
          <br />
          <br />
          Your generous donations directly enable us to provide free books, host
          wellness workshops, fund professional development for psychologists, and
          create safe spaces for healing and growth. Every contribution strengthens
          our ability to transform lives through compassion and knowledge.
        </p>
      </Section>

      {/* ========= WHY SUPPORT ========= */}
      <Section title="Why Your Support Matters">
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {[
            {
              icon: "📚",
              title: "Provide Free Resources",
              text: "Help us offer free books and materials to those who can't afford them.",
            },
            {
              icon: "📍",
              title: "Expand Our Reach",
              text: "Bring mental and spiritual wellness to underserved communities.",
            },
            {
              icon: "🎓",
              title: "Support Professionals",
              text: "Fund scholarships for psychologists' continuing education.",
            },
            {
              icon: "💞",
              title: "Build Community",
              text: "Create safe spaces for connection and mutual healing.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-[#185a82] mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ========= MONTHLY LEVELS ========= */}
      <Section title="Monthly Giving Levels" subtitle="Choose your monthly contribution plan">
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              name: "SUPPORTER",
              amount: "$25",
              details: [
                "Sponsor 1 person’s membership",
                "Recognition on our website",
                "Monthly impact report",
              ],
            },
            {
              name: "ADVOCATE",
              amount: "$100",
              details: [
                "Provide books to 5 families",
                "Quarterly report & VIP event access",
                "Personalized thank-you",
              ],
              popular: true,
            },
            {
              name: "CHAMPION",
              amount: "$250",
              details: [
                "Fund full wellness program for a group",
                "Private briefings",
                "Legacy naming opportunity",
              ],
            },
          ].map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border shadow-md bg-white hover:shadow-xl transition relative ${
                tier.popular ? "ring-2 ring-[#1c8ca0]" : ""
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1c8ca0] text-white text-xs px-3 py-1 rounded-b-md">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-bold text-[#185a82] text-lg mb-1">{tier.name}</h3>
              <p className="text-3xl font-extrabold mb-4">{tier.amount}</p>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                {tier.details.map((d, idx) => (
                  <li key={idx}>✓ {d}</li>
                ))}
              </ul>
              <button
                onClick={() => openModal(tier.name)}
                className="bg-[#185a82] text-white w-full py-2 rounded-full hover:bg-[#134961] transition"
              >
                Start Giving
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ========= ONE-TIME DONATION ========= */}
      <Section title="Make a One-Time Donation" subtitle="Your single gift can have an immediate impact">
        <div className="bg-white border rounded-2xl shadow-md max-w-lg mx-auto p-8 mt-8">
          <div className="grid grid-cols-4 gap-3 mb-4">
            {["50", "100", "250", "500"].map((amt) => (
              <button
                key={amt}
                onClick={() => openModal(`$${amt} One-Time`)}
                className="border border-[#185a82] text-[#185a82] py-2 rounded-full hover:bg-[#185a82] hover:text-white transition"
              >
                ${amt}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Enter Custom Amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#1c8ca0]"
          />
          <button
            onClick={() => openModal(`$${customAmount} Custom Donation`)}
            className="bg-[#185a82] text-white w-full py-3 rounded-full hover:bg-[#134961] transition"
          >
            Donate Now
          </button>
        </div>
      </Section>

      {/* ========= IMPACT STORIES ========= */}
      <Section title="Impact Stories" subtitle="Real stories of transformation made possible by donors like you">
        <div className="grid md:grid-cols-2 gap-8 mt-10 text-left">
          <blockquote className="border-l-4 border-[#1c8ca0] pl-4 italic text-gray-700">
            “This book club saved my life. I was struggling with depression and felt
            completely alone, but finding this community changed everything.”
            <br />
            <span className="not-italic font-semibold text-[#185a82] mt-3 block">
              — Sarah M., Book Club Member
            </span>
          </blockquote>
          <blockquote className="border-l-4 border-[#1c8ca0] pl-4 italic text-gray-700">
            “As a psychologist, I was able to complete trauma certification thanks
            to scholarship funding. I can now serve my clients more effectively.”
            <br />
            <span className="not-italic font-semibold text-[#185a82] mt-3 block">
              — Dr. James T., Psychologist & Trainer
            </span>
          </blockquote>
        </div>
      </Section>

      {/* ========= DONATION MODAL ========= */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <h3 className="text-2xl font-bold text-[#185a82] mb-4">
              Confirm Your Donation
            </h3>
            <p className="text-gray-700 mb-6">
              You are donating: <span className="font-semibold">{donationType}</span>
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDonate}
                className="bg-[#1c8ca0] text-white px-6 py-2 rounded-full hover:bg-[#185a82] transition"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

// -------------------- REUSABLE SECTION --------------------
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 text-center">
      <h2 className="text-3xl font-bold text-[#185a82] mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 mb-10">{subtitle}</p>}
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}
