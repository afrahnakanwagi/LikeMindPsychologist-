import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar, FaShieldAlt, FaUsers, FaCross } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
      <Navbar />
      <br /><br /><br />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Gray-Cyan Overlay */}
        <div className="absolute inset-0 bg-[#9dd5d6]/100 mix-blend-multiply"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "'Alegreya Sans SC',Alegreya Sans", color: "#3c3333" }}
          >
            About Like Mind Psychologist
          </h1>
          <p className="text-lg italic text-gray-100"
          style={{color:"#000000"}}>
            “Faith and Psychology in Harmony — Cultivating Excellence, Connection, and Purpose.”
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-3xl font-semibold mb-6 text-[#185a82]"
            style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            Like Mind Psychologist was founded to build a faith-based space for
            psychologists seeking to deepen their clinical practice while
            aligning with spiritual values. It began as a small circle of
            clinicians passionate about combining evidence-based therapy with
            the power of faith and empathy.
          </p>
          <p className="text-gray-700">
            Today, that small circle has evolved into a thriving community —
            supporting mental health professionals worldwide through shared
            wisdom, faith integration, and clinical growth.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?auto=format&fit=crop&w=900&q=80"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#185a82] py-20 text-center px-6">
        <h2
          className="text-3xl font-semibold mb-6 text-[#ffff]"
          style={{ fontFamily: "'Alegreya Sans SC', Alegreya Sans" }}
        >
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto mb-10"
        style={{color:"#000000"}}>
          To empower licensed psychologists to achieve clinical excellence while
          integrating faith and values into practice — nurturing both
          professional and spiritual growth.
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaStar className="text-4xl text-[#185a82] mb-4 mx-auto" />,
              title: "Excellence",
              desc: "Elevating the standard of clinical care through ongoing education and research.",
            },
            {
              icon: <FaUsers className="text-4xl text-[#185a82] mb-4 mx-auto" />,
              title: "Community",
              desc: "Building lasting professional and spiritual connections among psychologists.",
            },
            {
              icon: <FaCross className="text-4xl text-[#185a82] mb-4 mx-auto" />,
              title: "Faith Integration",
              desc: "Bridging faith and psychology for a holistic therapeutic approach.",
            },
            {
              icon: (
                <FaShieldAlt className="text-4xl text-[#185a82] mb-4 mx-auto" />
              ),
              title: "Integrity",
              desc: "Upholding ethical and moral principles in every aspect of practice.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105"
            >
              {icon}
              <h3 className="font-semibold mb-2 text-lg" style={{color:"#185a82"}}>{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2
          className="text-3xl font-semibold text-[#185a82] mb-10"
          style={{ fontFamily: "'Alegreya Sans SC', Alegreya Sans" }}
        >
          What We Offer
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
              title: "Curated Clinical Books",
            },
            {
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
              title: "CE Credit Courses",
            },
            {
              img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
              title: "Professional Community",
            },
            {
              img: "https://images.unsplash.com/photo-1520975926219-57c6f1aa8680?auto=format&fit=crop&w=800&q=80",
              title: "Faith-Based Resources",
            },
          ].map(({ img, title }, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={img}
                alt={title}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-[#185a82] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">
                  Explore our growing selection designed to inspire and empower
                  your professional journey.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-[#f9fafb] py-20 px-6 text-center">
        <h2
          className="text-3xl font-semibold mb-10 text-[#185a82]"
          style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
        >
          Meet Our People
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Dr. Sarah Mitchell",
              role: "Founder & Clinical Director",
              img: "https://images.unsplash.com/photo-1614289371518-7c968ccdc877?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Dr. James Chen",
              role: "Education Coordinator",
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Dr. Rebecca Thompson",
              role: "Community Manager",
              img: "https://images.unsplash.com/photo-1603415526960-f7e0328da6e3?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Dr. Michael Rodriguez",
              role: "Research Director",
              img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
            },
          ].map(({ name, role, img }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img src={img} alt={name} className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-[#185a82] mb-1">
                  {name}
                </h3>
                <p className="text-sm italic text-gray-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa] text-white">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color:"#3c3333" }}
        >
          Join Our Faith-Based Psychology Network
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-[#000000]">
          Be part of a transformative movement — where faith meets clinical
          excellence and community thrives.
        </p>
        <button className="bg-[#185a82] text-[#ffff] px-8 py-3 rounded-full font-semibold hover:bg-[#9dd5d6] transition hover:text-[#3c3333]">
          Become a Member
        </button>
      </section>

      <Footer />
    </div>
  );
}
