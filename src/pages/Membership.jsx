import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Membership() {
  return (
    <div className="bg-[#f9fafa]" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
        <Navbar />
      {/* Hero Section */}
      <section className="pt-28 text-center bg-gradient-to-b from-[#cbe9ec] to-[#f9fafa] pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#3c3333] mb-4">
          Join Our Community
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Support your mental and spiritual wellness through faith-based reading and meaningful connections
          with like-minded individuals on their wellness journey.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3c3333] mb-6">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Like Mind Psychologists created this book club to provide a nurturing space where people can explore
          their mental and spiritual wellness through carefully curated, faith-based literature. We believe that
          reading, reflection, and community support are powerful tools for healing, growth, and transformation.
          Our licensed psychologists guide each selection to ensure evidence-based approaches combined with
          spiritual wisdom.
        </p>
      </section>

      {/* Membership Tiers */}
      <section className="bg-[#ffffff] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3c3333] mb-12">Membership Tiers</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Free Member */}
          <div className="bg-[#f8fafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-8">
            <h3 className="text-2xl font-semibold text-[#3c3333] mb-3">Free Member</h3>
            <p className="text-4xl font-bold text-[#185a82] mb-6">$0<span className="text-base text-gray-600">/month</span></p>
            <ul className="text-left text-gray-700 space-y-3 mb-6">
              <li>✓ Access to monthly book selections</li>
              <li>✓ Community forum access</li>
              <li>✓ Monthly newsletter</li>
              <li>✓ Basic resource library</li>
            </ul>
            <button className="w-full py-3 bg-[#185a82] text-white rounded-full font-semibold hover:bg-[#134961] transition">
              Get Started
            </button>
          </div>

          {/* Premium Member */}
          <div className="bg-white border-2 border-[#185a82] rounded-2xl shadow-lg p-8 transform scale-105">
            <h3 className="text-2xl font-semibold text-[#3c3333] mb-3">Premium Member</h3>
            <p className="text-4xl font-bold text-[#185a82] mb-6">$29<span className="text-base text-gray-600">/month</span></p>
            <ul className="text-left text-gray-700 space-y-3 mb-6">
              <li>✓ Everything in Free Member</li>
              <li>✓ Exclusive book discussions</li>
              <li>✓ Downloadable reading guides</li>
              <li>✓ 30% shop discount</li>
              <li>✓ Priority mentorship</li>
            </ul>
            <button className="w-full py-3 bg-[#185a82] text-white rounded-full font-semibold hover:bg-[#134961] transition">
              Join Premium
            </button>
          </div>

          {/* Partner Member */}
          <div className="bg-[#f8fafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-8">
            <h3 className="text-2xl font-semibold text-[#3c3333] mb-3">Partner Member</h3>
            <p className="text-4xl font-bold text-[#185a82] mb-6">$99<span className="text-base text-gray-600">/month</span></p>
            <ul className="text-left text-gray-700 space-y-3 mb-6">
              <li>✓ Everything in Premium Member</li>
              <li>✓ Choose next club nominations</li>
              <li>✓ Host conversations</li>
              <li>✓ Exclusive retreats</li>
              <li>✓ Personalized reading plans</li>
            </ul>
            <button className="w-full py-3 bg-[#185a82] text-white rounded-full font-semibold hover:bg-[#134961] transition">
              Become Partner
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-[#f1f7f7] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3c3333] mb-10">Why Join Our Book Club?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Heal Your Mind",
              text: "Access exclusive collections handpicked by trusted psychologists to support your mental wellness journey.",
            },
            {
              title: "Nurture Your Spirit",
              text: "Explore faith-based literature and spiritual wisdom that complement evidence-based mental health care.",
            },
            {
              title: "Connect With Others",
              text: "Join a supportive community of like-minded individuals who understand your wellness journey.",
            },
            {
              title: "Grow Continuously",
              text: "Learn from top professionals and access ongoing education to help you heal and develop.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#185a82] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Member Stories */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-[#3c3333] mb-10">Member Stories</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "This book club has been transformative for me. The carefully selected books have helped me rediscover my purpose and deepen my spiritual and mental peace.",
              name: "Sarah K.",
              title: "Premium Member",
            },
            {
              quote:
                "The reflection guides and supportive forum changed how I manage stress and connect with others in faith. I’m more conscious and grateful daily.",
              name: "Dr. Linus L.",
              title: "Partner Member",
            },
            {
              quote:
                "I love how structured and spiritually inspired this community is. The members and mentors truly care, and I’ve healed through shared growth and prayer.",
              name: "Nichole L.",
              title: "Premium Member",
            },
          ].map((story, i) => (
            <div
              key={i}
              className="border border-gray-200 p-8 rounded-2xl bg-[#f9fafa] shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 italic mb-4">“{story.quote}”</p>
              <p className="font-semibold text-[#185a82]">
                — {story.name}, <span className="text-gray-600">{story.title}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#f1f7f7] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3c3333] mb-10">How It Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              num: "1",
              title: "Join",
              desc: "Choose your membership and join our community. Start exploring our resources for personal and collective wellness.",
            },
            {
              num: "2",
              title: "Read & Reflect",
              desc: "Engage with monthly book selections curated by psychologists. Use study guides to deepen your understanding.",
            },
            {
              num: "3",
              title: "Connect & Grow",
              desc: "Participate in discussions, reflections, and groups designed to support community support and individual healing.",
            },
          ].map((step, i) => (
            <div key={i}>
              <div className="w-16 h-16 mx-auto bg-[#185a82] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-[#185a82] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3c3333] mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto text-left">
          {[
            "Can I cancel my membership anytime?",
            "What makes this book club different from others?",
            "Do I need to be religious to join?",
            "What are E-Courses?",
            "How often are new books added?",
            "Is the community forum moderated?",
          ].map((faq, i) => (
            <details
              key={i}
              className="border-b py-4 cursor-pointer"
            >
              <summary className="font-semibold text-[#185a82]">
                {faq}
              </summary>
              <p className="text-gray-600 mt-2 text-sm">
                Our book club is flexible and inclusive. Members can manage subscriptions or learn more by
                contacting support.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-[#cbe9ec] to-[#f9fafa] py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3c3333] mb-4">
          Start Your Wellness Journey Today
        </h2>
        <p className="text-gray-700 mb-8">
          Join thousands of members transforming their mental and spiritual wellness through reading,
          reflection, and community support.
        </p>
        <button className="bg-[#185a82] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#134961] transition">
          Join Now
        </button>
      </section>
        <Footer />
    </div>
  );
}
