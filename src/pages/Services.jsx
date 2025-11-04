import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// === Animated Impact Section ===
function ImpactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { stat: 85, suffix: "%", desc: "Report improved overall wellness" },
    { stat: 90, suffix: "%", desc: "Feel more spiritually connected" },
    { stat: 3500, suffix: "+", desc: "Active community members" },
    { stat: 200, suffix: "+", desc: "Books shared monthly" },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-[#185a82] to-[#2a7fa6] text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-8">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-3xl font-bold mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.stat}
                    duration={2}
                    suffix={item.suffix}
                    separator=","
                  />
                )}
              </p>
              <p className="text-sm opacity-90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === Scroll Fade-in Animation Wrapper ===
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// === MAIN PAGE COMPONENT ===
export default function Services() {
  return (
    <div className="bg-gray-50 text-[#3c3333] font-['Alegreya_Sans']">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#e4f5f6] to-white text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Comprehensive Wellness Services
        </h1>
        <p className="text-[#185a82] mb-2">
          Holistic mental and spiritual care designed to support your complete
          wellness journey
        </p>
        <p className="max-w-3xl mx-auto text-sm md:text-base">
          through evidence-based practices and compassionate guidance
        </p>
      </section>

      {/* Core Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Book Club Membership",
              desc: "Monthly curated books for mental and spiritual growth, led by licensed psychologists.",
            },
            {
              title: "Wellness Consultations",
              desc: "One-on-one sessions with licensed psychologists for personalized guidance.",
            },
            {
              title: "Group Therapy Circles",
              desc: "Facilitated group discussions to enhance collective healing and insight.",
            },
            {
              title: "Online Courses & Workshops",
              desc: "Engage in accredited courses on mental health, spirituality, and wellness.",
            },
            {
              title: "Resource Library",
              desc: "Access e-books, meditations, and educational materials to support your growth.",
            },
            {
              title: "Community Events",
              desc: "Join monthly wellness activities and retreats to connect and grow together.",
            },
          ].map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2 text-[#185a82]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Services for Individuals */}
      <section className="bg-[#f5fbfb] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Services for Individuals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Reading Plans Tailored to Your Needs",
                desc: "Custom reading plans to match your personal growth journey.",
              },
              {
                title: "Reflection Journals and Guided Exercises",
                desc: "Prompts and activities to deepen self-awareness and spiritual insight.",
              },
              {
                title: "Access to Supportive Community Forums",
                desc: "Engage with peers and share your journey in moderated forums.",
              },
              {
                title: "Monthly Wellness Check-ins",
                desc: "Track progress and refine your goals with psychologist check-ins.",
              },
            ].map((item, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-2 text-[#185a82]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Professionals */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Services for Professionals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CE Credit Courses",
                desc: "Accredited courses on mental health, spirituality, and integration practices.",
              },
              {
                title: "Professional Development Resources",
                desc: "Access leading-edge research and best practices for clinical growth.",
              },
              {
                title: "Peer Consultation Groups",
                desc: "Regular groups with psychologists for supervision and peer support.",
              },
              {
                title: "Faith Integration Training",
                desc: "Specialized training on ethically integrating spirituality into practice.",
              },
            ].map((item, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-2 text-[#185a82]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Impact Section */}
      <ImpactSection />

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "The book club membership has been transformative for me. The guided discussions led by licensed psychologists have deepened my understanding of mental health.",
              author: "Sarah Mitchell, Member",
            },
            {
              quote:
                "The CE-accredited courses and peer consultations have significantly enhanced my clinical skills. The faith integration training has been particularly valuable.",
              author: "Dr. James Chen, Psychologist",
            },
            {
              quote:
                "The wellness consultations and community circles have created a safe space for my mental and spiritual health. I feel more balanced and fulfilled.",
              author: "Maria Rodriguez, Wellness Seeker",
            },
          ].map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic">
                “{item.quote}”
                <p className="mt-4 font-semibold text-[#185a82] not-italic">
                  — {item.author}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-[#f5fbfb] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-10">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Wellness",
                price: "$49/month",
                features: [
                  "Monthly book club membership",
                  "Access to resource library",
                  "Community forum access",
                  "Monthly wellness check-ins",
                ],
              },
              {
                title: "Professional Development",
                price: "$149/month",
                features: [
                  "CE-accredited courses",
                  "Peer consultation groups",
                  "Faith integration training",
                  "Professional resource library",
                ],
              },
              {
                title: "Community Group",
                price: "$299/month",
                features: [
                  "Unlimited group therapy circles",
                  "Monthly community retreats",
                  "Dedicated coordinator support",
                ],
              },
            ].map((item, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <h3 className="font-semibold text-lg mb-2 text-[#185a82]">
                    {item.title}
                  </h3>
                  <p className="text-xl font-bold mb-4">{item.price}</p>
                  <ul className="text-sm mb-6 space-y-2">
                    {item.features.map((f, idx) => (
                      <li key={idx}>✓ {f}</li>
                    ))}
                  </ul>
                  <button className="bg-[#185a82] text-white px-5 py-2 rounded-full hover:bg-[#134961] transition">
                    Get Started
                  </button>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Start Your Wellness Journey Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Take the first step toward comprehensive mental and spiritual wellness.
          Our licensed psychologists are here to guide you with compassion and
          evidence-based care.
        </p>
        <button className="bg-[#185a82] text-white px-6 py-3 rounded-full hover:bg-[#134961] transition">
          Explore Services
        </button>
      </section>

      <Footer />
    </div>
  );
}
