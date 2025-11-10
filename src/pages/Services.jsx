import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";


// === Impact Section ===
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
      className="bg-gradient-to-r from-[#185a82] to-[#1c8ca0] text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-md"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <p className="text-4xl font-bold mb-2">
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

// === Fade-in Wrapper ===
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

// === MAIN COMPONENT ===
export default function Services() {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    const lowerTitle = title.toLowerCase();
    if (
      lowerTitle.includes("group therapy") ||
      lowerTitle.includes("online resources")
    ) {
      navigate("/education");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#e6f4f5] via-white to-[#f8fbfc] text-[#3c3333] font-['Alegreya_Sans'] overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt="Therapist session background"
            className="w-full h-full object-cover opacity-40"
          />

          {/* Gradient overlay ON TOP */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa] opacity-90"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-40 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#185a82] mb-6 leading-tight">
              Compassionate Care for <br />
              <span className="text-[#1c8ca0]">Mind, Body & Spirit</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Experience holistic wellness services designed to nurture your
              emotional, mental, and spiritual health — guided by licensed
              professionals and compassionate mentors.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#185a82] text-white px-6 py-3 rounded-full text-sm md:text-base shadow-md hover:bg-[#134961] transition"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-[#185a82] text-[#185a82] px-6 py-3 rounded-full text-sm md:text-base hover:bg-[#185a82] hover:text-white transition"
              >
                Get Consultation
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
              alt="Wellness and healing"
              className="rounded-3xl shadow-xl border border-white/60 w-full max-w-md md:max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <Section
        title="Our Core Services"
        subtitle="Comprehensive care designed to restore balance, faith, and emotional well-being."
        onCardClick={handleCardClick}
        cards={[
          {
            title: "Overview of Psychotherapy Services",
            desc: "Individual, couples, and family therapy sessions tailored to your unique emotional and relational needs.",
          },
          {
            title: "Group Therapy / Peer-to-Peer & Workshops",
            desc: "Interactive group sessions and workshops for shared healing, growth, and skill-building.",
          },
          {
            title: "Mentorship and Coaching",
            desc: "Personal and professional mentorship programs that integrate psychology, leadership, and spirituality.",
          },
          {
            title: "Curriculum Development on Mental Health and Faith",
            desc: "Custom-designed educational content and frameworks merging faith-based values with mental wellness principles.",
          },
          {
            title: "Online Resources (Articles, Podcasts, Videos)",
            desc: "Access digital tools for ongoing self-improvement — curated resources for learning and reflection.",
          },
          {
            title: "Community Events",
            desc: "Join our mental health programs, conferences, and retreats that inspire deeper connection and healing.",
          },
          {
            title: "Pricing and Packages",
            desc: "Explore flexible options designed to fit your personal or organizational wellness goals.",
          },
        ]}
      />

      <ImpactSection />

      <Testimonials />
      <ServicePackages />
      <CallToAction />
      <Footer />
    </div>
  );
}

// --------------------------- Reusable Components ---------------------------

// --------------------------- Reusable Components ---------------------------

function Section({ title, subtitle, cards, bg, onCardClick }) {
  return (
    <section
      className={`py-20 bg-gradient-to-b ${bg || "from-white to-[#f7fafb]"}`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#185a82] mb-3">{title}</h2>
        <p className="text-gray-600 mb-10">{subtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => onCardClick && onCardClick(c.title)}
                className="bg-white cursor-pointer rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-[#185a82] mb-3">
                  {c.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const data = [
    {
      quote:
        "The book club has changed how I view healing — it’s more than reading; it’s connection and transformation.",
      author: "Sarah Mitchell, Member",
    },
    {
      quote:
        "The CE-accredited programs and peer groups have deepened my professional empathy and clinical insight.",
      author: "Dr. James Chen, Psychologist",
    },
    {
      quote:
        "I feel seen, heard, and renewed after every consultation. It’s holistic healing at its finest.",
      author: "Maria Rodriguez, Wellness Seeker",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-[#185a82] mb-10">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <FadeInWhenVisible key={i} delay={i * 0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-md border italic hover:shadow-xl transition">
              “{item.quote}”
              <p className="mt-4 font-semibold text-[#185a82] not-italic">
                — {item.author}
              </p>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}

function ServicePackages() {
  const packages = [
    {
      title: "Individual Wellness",
      price: "$49/month",
      features: [
        "Monthly book club membership",
        "Access to resource library",
        "Community forum access",
        "Monthly check-ins",
      ],
    },
    {
      title: "Professional Development",
      price: "$149/month",
      features: [
        "CE-accredited courses",
        "Peer consultation groups",
        "Faith integration training",
        "Resource library access",
      ],
    },
    {
      title: "Community Group",
      price: "$299/month",
      features: [
        "Unlimited therapy circles",
        "Monthly retreats",
        "Dedicated coordinator",
      ],
    },
  ];

  return (
    <section className="bg-[#f5fbfb] py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#185a82] mb-10">
          Service Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-[#185a82] mb-2">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold mb-4">{item.price}</p>
                <ul className="text-sm mb-6 space-y-2 text-gray-700">
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
  );
}

function CallToAction() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
      <h2 className="text-3xl font-bold text-[#185a82] mb-4">
        Start Your Wellness Journey Today
      </h2>
      <p className="max-w-2xl mx-auto mb-6 text-gray-700">
        Take the first step toward comprehensive mental and spiritual wellness.
        Our psychologists and wellness coaches are here to walk with you.
      </p>
      <button className="bg-[#185a82] text-white px-8 py-3 rounded-full hover:bg-[#134961] transition">
        Get Started
      </button>
    </section>
  );
}
