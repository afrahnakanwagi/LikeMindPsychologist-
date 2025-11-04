import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="font-sans text-[#3c3333]" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
      <Navbar />
<br /><br /><br />
      {/* Hero Section */}
      <section
        className="text-white text-center py-24 px-4"
        style={{
          background: "linear-gradient(135deg, #185a82 0%, #9dd5d6 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.3)",
          fontFamily: "'Alegreya Sans SC', sans-serif",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Empowering Minds & Spirits Through Faith-Based Reading
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 tracking-wide">
          Join a community of like-minded psychologists exploring faith, wellness,
          and professional growth through curated reading.
        </p>
        <button
          className="bg-white text-[#185a82] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
          style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
        >
          Join the Book Club
        </button>
      </section>

      {/* Book Feature */}
      <section
        className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto"
        style={{
          background: "rgba(157, 213, 214, 0.3)", // pastel cyan translucent
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(24, 90, 130, 0.15)",
        }}
      >
        <div
          className="w-56 h-72 bg-[#185a82] rounded-lg flex items-center justify-center shadow-lg text-white text-6xl"
          style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
        >
          📘
        </div>
        <div className="max-w-lg text-[#3c3333]" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
          <h2 className="text-3xl font-semibold mb-4">The Intersection of Faith and Psychology</h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Explore the profound connections between spiritual wellness and psychological well-being. This month’s featured
            selection brings together research, personal narratives, and insights from leading psychologists who integrate
            faith-based principles in their practice.
          </p>
          <button className="bg-[#185a82] text-white px-6 py-3 rounded-full hover:bg-[#134961] transition font-semibold">
            Explore This Month's Pick
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 text-center px-6 max-w-7xl mx-auto rounded-xl shadow-lg">
        <h2
          className="text-3xl font-semibold mb-14"
          style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#185a82" }}
        >
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            {
              step: "Step 1",
              title: "READ",
              text: "Discover curated books on faith and psychology reviewed by our expert panel for professional relevance and personal growth.",
            },
            {
              step: "Step 2",
              title: "REFLECT",
              text: "Engage with guided discussion questions and reflection prompts designed to deepen your understanding and application.",
            },
            {
              step: "Step 3",
              title: "CONNECT",
              text: "Join live discussions with fellow psychologists, share insights, and build rewarding professional relationships.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#9dd5d6]/50 p-8 rounded-xl shadow-md hover:shadow-lg transition"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            >
              <h3 className="text-[#185a82] font-bold mb-3 text-xl">{item.step}</h3>
              <h4 className="font-semibold mb-4 text-lg">{item.title}</h4>
              <p className="text-gray-700 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section
        className="text-white py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #185a82 0%, #9dd5d6 100%)",
          fontFamily: "'Alegreya Sans SC', sans-serif",
          boxShadow: "inset 0 0 50px rgba(0,0,0,0.25)",
        }}
      >
        <h2 className="text-3xl font-semibold mb-8">Become Part of a Growing Community</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-12 text-lg font-medium tracking-wide">
          <span>📚 Exclusive Book Selections</span>
          <span>💬 Live Monthly Discussions</span>
          <span>🎓 CE Credits Available</span>
          <span>🤝 Professional Network</span>
        </div>
        <button className="bg-white text-[#185a82] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-lg transition">
          Become a Member
        </button>
      </section>

      {/* Workshops */}
      <section className="bg-white py-20 px-6 text-center max-w-7xl mx-auto rounded-xl shadow-lg">
        <h2
          className="text-3xl font-semibold mb-14"
          style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#185a82" }}
        >
          Upcoming Workshops & Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Integrating Spirituality in Clinical Practice",
              date: "March 15–17, 2024",
              text: "A comprehensive 3-day workshop exploring evidence-based approaches to incorporating spiritual discussions in sessions.",
            },
            {
              title: "Faith, Resilience & Mental Health",
              date: "April 5–6, 2024",
              text: "Discover how faith-based coping mechanisms enhance resilience among clients facing stress, grief, and trauma.",
            },
            {
              title: "Mindfulness, Meditation & Psychology",
              date: "April 19–21, 2024",
              text: "Explore how mindfulness-based techniques grounded in faith traditions can help reduce stress and improve focus.",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-[#9dd5d6]/50 p-8 rounded-xl shadow-md hover:shadow-lg transition text-left"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            >
              <p className="text-sm text-[#185a82] mb-2">{course.date}</p>
              <h4 className="font-semibold mb-4 text-xl">{course.title}</h4>
              <p className="text-gray-700 mb-6 text-base">{course.text}</p>
              <a href="#" className="text-[#185a82] font-semibold text-base hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f9fafb] py-20 px-6 text-center max-w-7xl mx-auto rounded-xl shadow-lg">
        <h2
          className="text-3xl font-semibold mb-12"
          style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#185a82" }}
        >
          Member Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {[
            {
              name: "Dr. Sarah Mitchell",
              location: "Clinical Psychologist, New York",
              text: "This book club has transformed how I approach therapy. The faith-based perspective combined with rigorous psychology has given me new tools to support my clients’ holistic wellness.",
            },
            {
              name: "Dr. James Rodriguez",
              location: "Counseling Psychologist, Texas",
              text: "The discussions here are exceptional. Meeting other professionals who value both science and spiritual growth has been professionally enriching.",
            },
            {
              name: "Dr. Emily Chen",
              location: "Health Psychologist, California",
              text: "The curated book selections and guided discussions have deepened my understanding of the role faith can play in therapy.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
            >
              <p className="text-gray-700 mb-6 text-lg italic">“{t.text}”</p>
              <p className="font-semibold text-[#185a82] text-xl">{t.name}</p>
              <p className="text-sm text-gray-500">{t.location}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
