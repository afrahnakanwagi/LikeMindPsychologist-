import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="font-sans text-[#3c3333]" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
      <Navbar />
      <br /><br /><br />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#d8f1f3] via-white to-[#f7fafb]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80"
            alt="Peaceful reading background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#e6f4f5]/70 to-white"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#185a82] mb-6 leading-tight">
              Empowering <span className="text-[#1c8ca0]">Minds & Spirits</span>  
              Through Faith-Based Learning
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Join a compassionate community of psychologists exploring wellness, spirituality, and growth through shared reading and discussion.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-[#185a82] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#134961] transition">
                Join the Book Club
              </button>
              <button className="border-2 border-[#185a82] text-[#185a82] px-6 py-3 rounded-full hover:bg-[#185a82] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&w=900&q=80"
              alt="People reading together"
              className="rounded-3xl shadow-xl border border-white/60 w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=700&q=80"
            alt="Featured Book"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-[#185a82] mb-4">
              The Intersection of Faith and Psychology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-base">
              Discover the harmony between spiritual wellness and psychological insight. This month’s featured book explores how faith can enrich therapy, healing, and personal transformation.
            </p>
            <button className="bg-[#185a82] text-white px-6 py-3 rounded-full hover:bg-[#134961] transition font-semibold">
              Explore This Month's Pick
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24 text-center px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-16 text-[#185a82]" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            {
              step: "Step 1",
              title: "READ",
              text: "Explore thoughtfully chosen books that merge faith and psychology for both professional and personal growth.",
            },
            {
              step: "Step 2",
              title: "REFLECT",
              text: "Use reflection prompts and guided discussions to deepen understanding and connect faith with practice.",
            },
            {
              step: "Step 3",
              title: "CONNECT",
              text: "Join live conversations with other psychologists who value both evidence and empathy.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#eaf6f7] p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-[#185a82] font-bold mb-3 text-xl">{item.step}</h3>
              <h4 className="font-semibold mb-4 text-lg">{item.title}</h4>
              <p className="text-gray-700 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="relative overflow-hidden py-24 text-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Community"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#185a82]/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Become Part of a Growing Community</h2>
          <p className="max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
            Join hundreds of psychologists uniting professional growth with spiritual depth.  
            Share insights, support one another, and grow together.
          </p>
          <button className="bg-white text-[#185a82] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-lg transition">
            Become a Member
          </button>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-[#f9fafb] py-24 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-14 text-[#185a82]" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>
          Upcoming Workshops & Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {[
            {
              title: "Integrating Spirituality in Clinical Practice",
              date: "March 15–17, 2025",
              text: "A 3-day intensive exploring how to respectfully integrate clients’ faith into therapy sessions.",
            },
            {
              title: "Faith, Resilience & Mental Health",
              date: "April 5–6, 2025",
              text: "Learn how faith-based coping mechanisms can strengthen resilience in diverse therapeutic settings.",
            },
            {
              title: "Mindfulness, Meditation & Psychology",
              date: "April 19–21, 2025",
              text: "Explore how mindfulness rooted in faith traditions reduces stress and nurtures inner calm.",
            },
          ].map((course, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <p className="text-sm text-[#185a82] mb-2">{course.date}</p>
              <h4 className="font-semibold mb-4 text-xl text-[#134961]">{course.title}</h4>
              <p className="text-gray-700 mb-6 text-base">{course.text}</p>
              <a href="/services" className="text-[#185a82] font-semibold text-base hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-[#185a82]" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>
          What Our Members Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {[
            {
              name: "Dr. Sarah Mitchell",
              location: "Clinical Psychologist, New York",
              text: "This community has transformed how I approach therapy. It reminds me that healing involves both science and spirit.",
            },
            {
              name: "Dr. James Rodriguez",
              location: "Counseling Psychologist, Texas",
              text: "A rare space where psychologists share both professional and spiritual journeys in a supportive environment.",
            },
            {
              name: "Dr. Emily Chen",
              location: "Health Psychologist, California",
              text: "Each discussion enriches my perspective and connects me with others who value holistic care.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-[#f7fafb] p-8 rounded-xl shadow-md border border-gray-200">
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
