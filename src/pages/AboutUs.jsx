import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar, FaShieldAlt, FaUsers, FaCross, FaHeart, FaBook, FaHome } from "react-icons/fa";
// To use image from assets folder, uncomment the line below and update the img src
import founder from "../assests/founder.png";

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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#9dd5d6]/90 via-[#a8dadc]/80 to-[#f9fafa]/90"></div>

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

            {/* Meet Our Founder Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f8fafa", minHeight: "600px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4 text-[#185a82]"
              style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
            >
              Meet Our Founder
            </h2>
            <div className="w-24 h-1 bg-[#9dd5d6] mx-auto rounded-full mb-3"></div>
            <p className="text-base text-[#185a82] font-semibold">Ugandan Mental Health Professional</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start bg-white rounded-2xl shadow-2xl p-8 md:p-12" style={{ border: "2px solid #9dd5d6" }}>
            {/* Founder Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Image path: Place rachaal.jpg in public folder, or import from assets and use src={rachaalImage} */}
                <img
                  src={founder}
                  alt="Racheal Kisakye - Founder"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = {founder};
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#185a82]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9dd5d6]/30 rounded-full -z-10"></div>
            </div>

            {/* Founder Bio */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-3xl font-bold mb-2 text-[#185a82]"
                  style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
                >
                  Racheal Kisakye
                </h3>
                <p className="text-lg text-[#5DA8A3] font-semibold mb-4">
                  Founder & Mental Health Professional
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                  <span className="px-3 py-1 bg-[#9dd5d6]/20 rounded-full">10+ Years Experience</span>
                  <span className="px-3 py-1 bg-[#9dd5d6]/20 rounded-full">Clinical Expert</span>
                </div>
              </div>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-base">
                  Racheal Kisakye is a dedicated mental health professional with over 10 years of experience in program development, implementation, and clinical services. She integrates mental health care across diverse settings, including clinical, humanitarian, corporate, and faith-based environments, using various therapeutic interventions to provide holistic care to vulnerable communities.
                </p>
                <p className="text-base">
                  Guided by her faith, Racheal is passionate about creating safe spaces for healing and growth, aiming to inspire courage, healing, and wholeness. As a wife, mother of two, and born-again Christian, she prioritizes her family's well-being, enjoys songwriting and journaling, and offers remote mental health services from her home office, making a positive impact in her community and beyond.
                </p>
              </div>

              {/* Personal Touchpoints */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <FaHeart className="text-[#185a82] mt-1 text-xl" />
                  <div>
                    <p className="font-semibold text-[#185a82] text-sm">Family First</p>
                    <p className="text-xs text-gray-600">Wife & Mother of Two</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCross className="text-[#185a82] mt-1 text-xl" />
                  <div>
                    <p className="font-semibold text-[#185a82] text-sm">Faith-Driven</p>
                    <p className="text-xs text-gray-600">Born-Again Christian</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBook className="text-[#185a82] mt-1 text-xl" />
                  <div>
                    <p className="font-semibold text-[#185a82] text-sm">Creative</p>
                    <p className="text-xs text-gray-600">Songwriter & Journalist</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaHome className="text-[#185a82] mt-1 text-xl" />
                  <div>
                    <p className="font-semibold text-[#185a82] text-sm">Accessible</p>
                    <p className="text-xs text-gray-600">Remote Services Available</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[#9dd5d6]/10 rounded-xl p-6 border-l-4 border-[#185a82] mt-6">
                <p className="text-gray-700 italic text-lg">
                  "Creating safe spaces for healing and growth, inspiring courage, healing, and wholeness."
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Program Development",
                desc: "10+ years designing and implementing mental health programs",
                icon: <FaUsers className="text-3xl text-[#185a82]" />,
              },
              {
                title: "Holistic Care",
                desc: "Integrating faith with evidence-based therapeutic interventions",
                icon: <FaHeart className="text-3xl text-[#185a82]" />,
              },
              {
                title: "Diverse Settings",
                desc: "Experience across clinical, humanitarian, corporate, and faith-based environments",
                icon: <FaShieldAlt className="text-3xl text-[#185a82]" />,
              },
            ].map(({ title, desc, icon }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 border border-[#9dd5d6]/20 hover:shadow-lg transition"
              >
                <div className="mb-4">{icon}</div>
                <h4 className="font-semibold text-lg text-[#185a82] mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
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