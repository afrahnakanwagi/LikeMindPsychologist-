import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Education() {
  return (
    <div className="pt-0 bg-gradient-to-b from-[#e6f4f5] via-white to-[#f7fafb] font-['Alegreya_Sans'] text-gray-800 overflow-hidden">
      <Navbar />

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&w=1600&q=80"
            alt="Calm background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#e6f4f5]/70 to-white"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#185a82] mb-6 leading-tight">
              Cultivating <span className="text-[#1c8ca0]">Peace of Mind</span>
              <br /> through Learning & Connection
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Discover education that nourishes both heart and mind.
              Explore the gentle blend of psychology, mindfulness, and
              spirituality — created for those seeking deeper understanding
              and healing.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#185a82] text-white px-6 py-3 rounded-full text-sm md:text-base shadow-md hover:bg-[#134961] transition"
              >
                Explore Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-[#185a82] text-[#185a82] px-6 py-3 rounded-full text-sm md:text-base hover:bg-[#185a82] hover:text-white transition"
              >
                Join Our Community
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
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
              alt="People meditating and reading"
              className="rounded-3xl shadow-xl border border-white/60 w-full max-w-md md:max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------ PHILOSOPHY INTRO ------------------ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 py-24 text-center leading-relaxed text-gray-700"
      >
        <h2 className="text-3xl font-bold text-[#185a82] mb-6">
          Education Rooted in Compassion & Clarity
        </h2>
        <p className="text-lg mb-4">
          At <span className="font-semibold text-[#1c8ca0]">Like Mind Psychologists</span>,
          we believe that true education nourishes not only the intellect but
          also the spirit. Our programs weave together psychological insight
          and spiritual wisdom, guiding you toward holistic wellness.
        </p>
        <p className="text-lg">
          Whether you're a professional deepening your therapeutic practice or
          an individual seeking renewal, each course invites reflection,
          growth, and gentle transformation.
        </p>
      </motion.section>

      {/* ------------------ PROFESSIONAL COURSES ------------------ */}
      <Section
        title="For Licensed Professionals"
        subtitle="CE-Accredited Courses for Psychologists, Counselors & Therapists"
        cards={[
          {
            title: "Integrating Faith & Psychology",
            desc: "Bridge science and spirituality with ethically sound methods that integrate both worlds in therapy.",
            price: "$299",
          },
          {
            title: "Trauma-Informed Spiritual Care",
            desc: "Understand trauma through a compassionate, faith-sensitive lens that supports true restoration.",
            price: "$199",
          },
          {
            title: "Mindfulness & Prayer in Therapy",
            desc: "Bring presence, reflection, and spiritual connection into your therapeutic approach.",
            price: "$149",
          },
          {
            title: "Cultural Competence in Faith-Based Counseling",
            desc: "Serve clients with diverse traditions and belief systems with respect and deep understanding.",
            price: "$249",
          },
        ]}
      />

      {/* ------------------ COMMUNITY COURSES ------------------ */}
      <Section
        title="For Community Members"
        subtitle="Gentle Growth Courses for Everyday Wellness"
        cards={[
          {
            title: "Understanding Your Mental Health",
            desc: "Gain a clear, kind understanding of your thoughts, emotions, and patterns of healing.",
            price: "$79",
          },
          {
            title: "Building Spiritual Resilience",
            desc: "Strengthen your inner peace and purpose through mindful spiritual reflection.",
            price: "$99",
          },
          {
            title: "Healing from Trauma Through Faith",
            desc: "Discover safe, nurturing tools to process and heal from emotional pain.",
            price: "$129",
          },
          {
            title: "Mindfulness & Meditation Practices",
            desc: "Practice being still and centered through gentle, guided meditations.",
            price: "$69",
          },
        ]}
        bg="from-[#f7fafb] to-white"
      />

      {/* ------------------ ONLINE CLASSES ------------------ */}
      <OnlineClasses />

      {/* ------------------ WORKSHOPS ------------------ */}
      <Workshops />

      {/* ------------------ READING CHALLENGES ------------------ */}
      <ReadingChallenges />

      {/* ------------------ FREE RESOURCES ------------------ */}
      <FreeResources />

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------
Reusable Components Below
------------------------------------------------------------------ */

function Section({ title, subtitle, cards, bg }) {
  return (
    <section
      className={`py-20 bg-gradient-to-b ${bg || "from-white to-[#f7fafb]"}`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#185a82] mb-3">{title}</h2>
        <p className="text-gray-600 mb-10">{subtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-[#185a82] mb-3">
                {c.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{c.desc}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">{c.price}</span>
                <button className="bg-[#185a82] text-white px-4 py-2 rounded-full text-sm hover:bg-[#134961] transition">
                  Enroll
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OnlineClasses() {
  const classes = [
    {
      title: "Emotional Regulation Through Prayer",
      desc: "Learn grounding techniques that combine mindful awareness with spiritual reflection.",
    },
    {
      title: "Faith & Cognitive Behavioral Therapy",
      desc: "Explore the integration of faith and evidence-based cognitive strategies.",
    },
    {
      title: "Overcoming Stress with Spiritual Tools",
      desc: "Find peace and balance using prayer, meditation, and gratitude practices.",
    },
  ];

  return (
    <section className="bg-[#e6f4f5] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#185a82] mb-3">
          Online Classes
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Access our peaceful, on-demand courses — designed for self-paced
          learning, reflection, and restoration of mind and spirit.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-2xl p-8 border hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-[#185a82] mb-2">
                {cls.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{cls.desc}</p>
              <button className="bg-[#185a82] text-white px-4 py-2 rounded-full text-sm hover:bg-[#134961] transition">
                Watch Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workshops() {
  const workshops = [
    "The Psychology of Forgiveness",
    "Grief, Loss & Faith",
    "Anxiety Management Through Spiritual Practice",
    "Building Healthy Boundaries",
    "Self-Compassion & Inner Healing",
    "Purpose, Meaning & Mental Health",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#185a82] mb-6">
          Workshops & Webinars
        </h2>
        <p className="text-gray-600 mb-10">
          Join live guided discussions that blend mental health insights with
          spiritual practice and reflection.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((w, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#f8fbfc] border border-gray-100 rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-[#185a82] mb-3">{w}</h3>
              <p className="text-gray-600 text-sm mb-6">
                Participate in reflective, transformative learning experiences.
              </p>
              <button className="bg-[#185a82] text-white px-4 py-2 rounded-full text-sm hover:bg-[#134961] transition">
                Register
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReadingChallenges() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fafb] to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#185a82] mb-6">
          Reading Challenges
        </h2>
        <p className="text-gray-600 mb-10">
          Structured reflections to cultivate mindfulness, growth, and faith.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "30-Day Mental Wellness Challenge",
              desc: "A month-long guided journey through daily readings, journaling, and reflections.",
              btn: "Start Challenge",
            },
            {
              title: "Faith & Healing Journey - 60-Day Program",
              desc: "Explore the deep connections between emotional healing and spiritual wisdom.",
              btn: "Join Program",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg text-[#185a82] mb-3">
                {c.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{c.desc}</p>
              <button className="bg-[#185a82] text-white px-4 py-2 rounded-full text-sm hover:bg-[#134961] transition">
                {c.btn}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreeResources() {
  return (
    <section className="bg-[#e6f4f5] py-20 text-center">
      <h2 className="text-3xl font-bold text-[#185a82] mb-4">Free Resources</h2>
      <p className="text-gray-600 mb-10">
        Simple, compassionate tools to nurture your mental and spiritual
        wellbeing.
      </p>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="max-w-sm mx-auto bg-white shadow-md border rounded-2xl p-8 hover:shadow-xl transition"
      >
        <h3 className="font-semibold text-lg text-[#185a82] mb-2">
          Mental Wellness Guide
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          A gentle guide to mental health awareness, coping strategies, and
          inner reflection.
        </p>
        <button className="bg-[#185a82] text-white px-4 py-2 rounded-full text-sm hover:bg-[#134961] transition">
          Download Guide
        </button>
      </motion.div>
    </section>
  );
}
