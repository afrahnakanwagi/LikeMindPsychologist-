import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

/**
 * BooksAndResources.jsx
 * - Uses Tailwind CSS for styling (assumes tailwind is set up).
 * - Uses Framer Motion for animations.
 * - Keeps the same font-family (Alegreya Sans) and navbar palette (#185a82).
 *
 * Replace placeholder images/links with real data as needed.
 */

const TABS = ["All", "Books", "Podcasts", "Newsletters", "Videos", "Downloads"];

const MOCK_RESOURCES = [
  // Books
  {
    id: "b1",
    type: "Books",
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description:
      "Trauma research and healing approaches that connect body and mind.",
    price: "$18.99",
    cover: null,
    tags: ["Trauma", "Healing"],
  },
  {
    id: "b2",
    type: "Books",
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    description: "A practical guide to wholehearted living and vulnerability.",
    price: "$14.99",
    cover: null,
    tags: ["Self Care"],
  },

  // Podcasts
  {
    id: "p1",
    type: "Podcasts",
    title: "Mindful Clinician",
    author: "Like Mind Podcast",
    description: "Interviews with clinicians on evidence-based practice.",
    duration: "45m",
    cover: null,
    tags: ["Professional"],
  },
  {
    id: "p2",
    type: "Podcasts",
    title: "Trauma & Recovery",
    author: "Dr. S. Mitchell",
    description: "Exploring modern treatments for trauma recovery.",
    duration: "38m",
    cover: null,
    tags: ["Trauma"],
  },

  // Newsletters
  {
    id: "n1",
    type: "Newsletters",
    title: "Clinical Insights Monthly",
    author: "Like Mind Team",
    description: "Evidence summaries, short case reflections, and CE announces.",
    frequency: "Monthly",
    cover: null,
    tags: ["CE", "Research"],
  },

  // Videos
  {
    id: "v1",
    type: "Videos",
    title: "CBT Techniques — Quick Clinic Demos",
    author: "Like Mind Video",
    description: "Short clinical demonstrations of CBT techniques.",
    length: "12m",
    cover: null,
    tags: ["Skills"],
  },

  // Downloads / audio
  {
    id: "d1",
    type: "Downloads",
    title: "Guided Mindfulness Audio (20m)",
    author: "Like Mind Team",
    description: "Downloadable meditation for clients or self-practice.",
    fileSize: "22MB",
    cover: null,
    tags: ["Mindfulness"],
  },
];

export default function BooksAndResources() {
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState("");
  const [featuredId] = useState("b1"); // choose featured resource (mock)

  // Filtered list based on activeTab + search query
  const filtered = useMemo(() => {
    return MOCK_RESOURCES.filter((r) => {
      const matchesTab = activeTab === "All" ? true : r.type === activeTab;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        (r.author && r.author.toLowerCase().includes(q)) ||
        (r.description && r.description.toLowerCase().includes(q)) ||
        (r.tags && r.tags.join(" ").toLowerCase().includes(q));
      return matchesTab && matchesQuery;
    });
  }, [activeTab, query]);

  const featured = MOCK_RESOURCES.find((r) => r.id === featuredId);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#f8fafa] text-[#3c3333]"
      style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
    >
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#185a82] mb-2">
          Books & Resources for Mental & Spiritual Wellness
        </h1>
        <p className="text-lg text-[#3c3333]/80 mb-6">
          Curated by licensed psychologists — books, podcasts, newsletters,
          videos, and downloadable resources.
        </p>

        {/* Search */}
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-2xl border border-[#dbecee] rounded-full bg-white px-3 py-2 shadow-sm">
            <input
              aria-label="Search resources"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search books, podcasts, newsletters, videos..."
              className="flex-grow px-4 py-2 text-sm bg-transparent focus:outline-none"
            />
            <button
              onClick={() => {}}
              className="ml-2 bg-[#185a82] hover:bg-[#134961] transition text-white text-sm px-4 py-2 rounded-full"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6">

          {/* Featured resource (Book of the Month style) */}
          {featured && (
            <section className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#e6efef] rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6"
              >
                <div className="flex-shrink-0 w-full md:w-44 h-60 bg-[#d9e9ea] rounded-lg flex items-center justify-center text-[#185a82]">
                  {/* placeholder cover */}
                  <span className="text-sm font-medium">Book Cover</span>
                </div>

                <div className="flex-1">
                  <span className="inline-block text-xs bg-[#185a82] text-white px-3 py-1 rounded-full mb-3">
                    Book of the Month
                  </span>

                  <h2 className="text-2xl font-semibold text-[#185a82]">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-[#3c3333]/80 my-3">
                    {featured.description}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-sm text-[#3c3333]/70">
                      by <strong>{featured.author}</strong>
                    </div>

                    {featured.price && (
                      <div className="text-[#185a82] font-semibold">
                        {featured.price}
                      </div>
                    )}

                    <div className="flex gap-2 ml-auto md:ml-0">
                      <button className="bg-[#185a82] text-white text-sm px-4 py-2 rounded-full hover:bg-[#134961] transition">
                        Join Discussion
                      </button>
                      <button className="border border-[#185a82] text-[#185a82] text-sm px-4 py-2 rounded-full hover:bg-[#185a82] hover:text-white transition">
                        Add to Reading List
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
          )

          }

          {/* Filter Tabs */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {TABS.map((t) => {
                const isActive = t === activeTab;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      isActive
                        ? "bg-[#185a82] text-white"
                        : "bg-white text-[#185a82] border border-[#cfe6e6] hover:bg-[#ebf6f6]"
                    }`}
                    aria-pressed={isActive}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Featured Collections */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-[#185a82] mb-4">
              Featured Collections
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Trauma & Healing", meta: "15 items", icon: "🛡️" },
                { title: "Spiritual Growth", meta: "18 items", icon: "🕊️" },
                { title: "Anxiety Support", meta: "20 items", icon: "💙" },
                { title: "Mindfulness", meta: "12 items", icon: "🌿" },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-[#e6efef] rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <div className="font-semibold text-[#185a82] mb-1">
                    {c.title}
                  </div>
                  <div className="text-sm text-[#3c3333]/70">{c.meta}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Resource Grid */}
          <section className="mb-16">
            <h3 className="text-xl font-semibold text-[#185a82] mb-4">
              {activeTab === "All" ? "All Resources" : activeTab}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filtered.map((r) => (
                  <motion.article
                    layout
                    key={r.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white border border-[#e6efef] rounded-2xl overflow-hidden shadow-sm flex flex-col"
                    role="article"
                    aria-labelledby={`res-${r.id}-title`}
                  >
                    <div className="bg-[#d9e9ea] h-44 w-full flex items-center justify-center text-[#185a82] text-sm">
                      {/* placeholder image */}
                      <span>Cover / Thumbnail</span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4
                            id={`res-${r.id}-title`}
                            className="text-sm font-semibold text-[#185a82]"
                          >
                            {r.title}
                          </h4>
                          <p className="text-xs text-[#3c3333]/70 mt-1">
                            {r.author}
                          </p>
                        </div>

                        <div className="text-xs text-[#3c3333]/60">
                          <span className="inline-block bg-[#eef8f8] text-[#185a82] px-2 py-1 rounded-full text-[11px]">
                            {r.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-[#3c3333]/80 mt-3 flex-1">
                        {r.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        {r.price ? (
                          <div className="text-[#185a82] font-semibold">
                            {r.price}
                          </div>
                        ) : r.duration ? (
                          <div className="text-sm text-[#3c3333]/70">
                            {r.duration}
                          </div>
                        ) : r.frequency ? (
                          <div className="text-sm text-[#3c3333]/70">
                            {r.frequency}
                          </div>
                        ) : (
                          <div />
                        )}

                        <div className="ml-auto flex gap-2">
                          <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                            View Details
                          </button>
                          <button className="text-sm border border-[#e6efef] px-3 py-1.5 rounded-full hover:bg-[#f0fdfd] transition">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* empty state when no resources */}
            {filtered.length === 0 && (
              <div className="mt-8 text-center text-sm text-[#3c3333]/70">
                No resources match your search & filter. Try another keyword or
                category.
              </div>
            )}
          </section>

          {/* Multimedia sections (compact rows for podcasts/videos/downloads/newsletters) */}
          <section className="mb-16">
            <h3 className="text-xl font-semibold text-[#185a82] mb-6">
              Multimedia Highlights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Podcasts row */}
              <motion.div className="bg-white border border-[#e6efef] rounded-2xl p-4 shadow-sm">
                <h4 className="font-semibold text-[#185a82] mb-2">Podcasts</h4>
                <ul className="space-y-3">
                  {MOCK_RESOURCES.filter((x) => x.type === "Podcasts").map(
                    (p) => (
                      <li key={p.id} className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-[#d9e9ea] rounded-md flex items-center justify-center text-[#185a82] text-xs">
                          🎧
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">{p.title}</div>
                          <div className="text-xs text-[#3c3333]/70">
                            {p.author} · {p.duration}
                          </div>
                        </div>
                        <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                          Play
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>

              {/* Videos row */}
              <motion.div className="bg-white border border-[#e6efef] rounded-2xl p-4 shadow-sm">
                <h4 className="font-semibold text-[#185a82] mb-2">Videos</h4>
                <ul className="space-y-3">
                  {MOCK_RESOURCES.filter((x) => x.type === "Videos").map((v) => (
                    <li key={v.id} className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-[#d9e9ea] rounded-md flex items-center justify-center text-[#185a82] text-xs">
                        ▶
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{v.title}</div>
                        <div className="text-xs text-[#3c3333]/70">
                          {v.author} · {v.length}
                        </div>
                      </div>
                      <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                        Watch
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Downloads / Audio */}
              <motion.div className="bg-white border border-[#e6efef] rounded-2xl p-4 shadow-sm">
                <h4 className="font-semibold text-[#185a82] mb-2">Downloads</h4>
                <ul className="space-y-3">
                  {MOCK_RESOURCES.filter((x) => x.type === "Downloads").map(
                    (d) => (
                      <li key={d.id} className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-[#d9e9ea] rounded-md flex items-center justify-center text-[#185a82] text-xs">
                          ⬇️
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">{d.title}</div>
                          <div className="text-xs text-[#3c3333]/70">
                            {d.author} · {d.fileSize}
                          </div>
                        </div>
                        <button className="text-sm bg-[#185a82] text-white px-3 py-1.5 rounded-full hover:bg-[#134961] transition">
                          Download
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl p-8 bg-gradient-to-r from-[#185a82] to-[#0f3f50] text-white"
            >
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm mb-4 text-white/90">
                  Subscribe to receive clinical insights, curated resource lists,
                  and professional development updates delivered to your inbox.
                </p>

                <form
                  className="flex items-center justify-center gap-2 max-w-lg mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    aria-label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow px-4 py-2 rounded-full text-[#0b2d32] focus:outline-none"
                  />
                  <button className="bg-white text-[#185a82] px-5 py-2 rounded-full font-semibold hover:opacity-95 transition">
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
