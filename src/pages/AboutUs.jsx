import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaStar, FaShieldAlt, FaUsers, FaCross, FaHeart, FaBook, FaHome,
  FaEye, FaBullseye, FaLightbulb, FaHandsHelping, FaUserTie, FaPray,
  FaEnvelope, FaPhone, FaLinkedin
} from "react-icons/fa";
import founder from "../assests/founder.png";

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
      <Navbar />
      <br /><br /><br />

      {/* HERO SECTION – MATCHING THE SCREENSHOT LAYOUT */}
      <section className="relative w-full min-h-[600px] grid md:grid-cols-2">

        {/* LEFT SIDE IMAGE WITH ORGANIC CURVE OVERLAY */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
            alt="community"
            className="w-full h-full object-cover"
          />

          {/* Curved SVG Mask */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
          >
            <path
              d="
          M0,0 
          C150,50 250,150 400,180 
          C550,210 650,120 800,0 
          L800,600 
          L0,600 
          Z
        "
              fill="#9dd5d6"
            />
          </svg>
        </div>

        {/* RIGHT SIDE TEXT BLOCK */}
        <div
          className="flex flex-col justify-center px-10 py-16 text-white bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]"
        >
          <p className="tracking-widest text-lg text-[#185a82] mb-4">
            ABOUT LIKE MIND PSYCHOLOGIST
          </p>

          <h1
            className="text-4xl text-[#185a82] md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Welcome to Like Mind Psychologist!
          </h1>

          <p className="text-lg leading-relaxed text-[#000000] max-w-xl">
            We help people heal, grow, and discover who they truly are. By integrating
            Christian faith with evidence-based psychology, we promote holistic
            wellbeing that transforms lives and communities.
          </p>
        </div>
      </section>

      {/* MEET OUR FOUNDER */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#3c3333" }}>
              Meet Our Founder
            </h2>
            <p className="text-base text-[#000000] font-semibold">Ugandan Mental Health Professional</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start bg-white rounded-2xl shadow-2xl p-8 md:p-12" style={{ border: "2px solid #9dd5d6" }}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={founder}
                  alt="Racheal Kisakye - Founder"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/500?text=Founder+Image"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#185a82]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9dd5d6]/30 rounded-full -z-10"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#185a82" }}>
                  Racheal Kisakye
                </h3>
                <p className="text-lg font-semibold mb-4" style={{ color: "#000000" }}>
                  Founder & Mental Health Professional
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-6">
                  <span className="px-3 py-1 bg-[#9dd5d6]/20 rounded-full">10+ Years Experience</span>
                  <span className="px-3 py-1 bg-[#9dd5d6]/20 rounded-full">Clinical Expert</span>
                  <span className="px-3 py-1 bg-[#9dd5d6]/20 rounded-full">Faith-Integrated</span>
                </div>
              </div>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>Racheal Kisakye is a dedicated mental health professional with over 10 years of experience in program development, implementation, and clinical services. She integrates mental health care across diverse settings, including clinical, humanitarian, corporate, and faith-based environments.</p>
                <p>Guided by her faith, Racheal creates safe spaces for healing and growth. As a wife, mother of two, and born-again Christian, she offers remote mental health services from her home office, making a positive impact in her community and beyond.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <FaHeart className="text-[#185a82] mt-1 text-xl" />
                  <div><p className="font-semibold text-[#185a82] text-sm">Family First</p><p className="text-xs text-gray-600">Wife & Mother of Two</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCross className="text-[#185a82] mt-1 text-xl" />
                  <div><p className="font-semibold text-[#185a82] text-sm">Faith-Driven</p><p className="text-xs text-gray-600">Born-Again Christian</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBook className="text-[#185a82] mt-1 text-xl" />
                  <div><p className="font-semibold text-[#185a82] text-sm">Creative</p><p className="text-xs text-gray-600">Songwriter & Journalist</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <FaHome className="text-[#185a82] mt-1 text-xl" />
                  <div><p className="font-semibold text-[#185a82] text-sm">Accessible</p><p className="text-xs text-gray-600">Remote Services</p></div>
                </div>
              </div>

              <div className="bg-[#9dd5d6]/10 rounded-xl p-6 border-l-4 border-[#185a82] mt-6">
                <p className="text-gray-700 italic text-lg">
                  "Creating safe spaces for healing and growth, inspiring courage, healing, and wholeness."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Program Development", desc: "10+ years designing and implementing mental health programs", icon: <FaUsers className="text-3xl text-[#185a82]" /> },
              { title: "Holistic Care", desc: "Integrating faith with evidence-based therapeutic interventions", icon: <FaHeart className="text-3xl text-[#185a82]" /> },
              { title: "Diverse Settings", desc: "Clinical, humanitarian, corporate, and faith-based environments", icon: <FaShieldAlt className="text-3xl text-[#185a82]" /> },
            ].map(({ title, desc, icon }, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-[#9dd5d6]/20 hover:shadow-lg transition">
                <div className="mb-4">{icon}</div>
                <h4 className="font-semibold text-lg text-[#185a82] mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
        <div>
          <h2 className="text-3xl font-semibold mb-6" style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#3c3333" }}>
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            Like Mind Psychologist was founded to build a faith-based space for psychologists seeking to deepen their clinical practice while aligning with spiritual values.
          </p>
          <p className="text-gray-700">
            Today, that small circle has evolved into a thriving community — supporting mental health professionals worldwide through shared wisdom, faith integration, and clinical growth.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?auto=format&fit=crop&w=900&q=80" alt="Our Story" className="rounded-2xl shadow-lg w-full object-cover" />
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#9dd5d6]/30">
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-3xl text-[#185a82]" />
              <h3 className="text-2xl font-bold" style={{ color: "#185a82", fontFamily: "'Alegreya Sans SC'" }}>Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To revolutionize mental health care by seamlessly blending Christian faith and evidence-based research, fostering holistic well-being and transformative growth.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#9dd5d6]/30">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-3xl text-[#185a82]" />
              <h3 className="text-2xl font-bold" style={{ color: "#185a82", fontFamily: "'Alegreya Sans SC'" }}>Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Equipping born-again clinical psychologists and society with essential resources to foster growth, collaboration, and holistic care.
            </p>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#3c3333" }}>
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <FaHeart className="text-4xl text-[#185a82]" />, title: "Holistic Well-being", desc: "Christ-centered mental health care promoting spiritual and emotional wellness." },
              { icon: <FaLightbulb className="text-4xl text-[#185a82]" />, title: "Transformative Growth", desc: "Empowering personal and professional development through mentoring and learning." },
              { icon: <FaUsers className="text-4xl text-[#185a82]" />, title: "Community Advancement", desc: "Building connections among like-minded professionals for collaboration." },
              { icon: <FaHandsHelping className="text-4xl text-[#185a82]" />, title: "Innovative Integration", desc: "Developing new resources blending faith and clinical best practices." }
            ].map((area, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#9dd5d6]/30 hover:shadow-md transition">
                <div className="flex-shrink-0">{area.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: "#185a82" }}>{area.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#185a82] py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>Our Values</h2>
          <br /><br />
          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              { title: "Christ-Centeredness", desc: "Integrating faith and mental health for comprehensive well-being.", icon: <FaCross /> },
              { title: "Integrity", desc: "Upholding biblical principles and professional ethics.", icon: <FaShieldAlt /> },
              { title: "Excellence", desc: "Striving for quality and effectiveness in all we do.", icon: <FaStar /> },
              { title: "Compassion", desc: "Embracing empathy and kindness in care.", icon: <FaHeart /> },
              { title: "Community", desc: "Fostering collaboration and support among members.", icon: <FaUsers /> }
            ].map((value, idx) => (
              <div key={idx} className="bg-[#ffffff] backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white transition">
                <div className="text-3xl mb-3 text-[#185a82]">{value.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-[#185a82]">{value.title}</h3>
                <p className="text-sm opacity-90 text-[#000000]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM - Modern Card Design */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#185a82] font-semibold text-3xl font-bold mb-4 tracking-wider uppercase">Our Team</span>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              United by faith, driven by excellence, committed to transforming lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Esther Mbabazi',
                role: 'Clinical Psychologist',
                specialty: 'CBT Specialist',
                email: 'esther@likemind.com',
                phone: '+256 700 123 456',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Pastor James Okello',
                role: 'Chaplain & Counselor',
                specialty: 'Faith Integration',
                email: 'james@likemind.com',
                phone: '+256 700 789 012',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Sarah Nansubuga',
                role: 'Trauma Therapist',
                specialty: 'EMDR Certified',
                email: 'sarah@likemind.com',
                phone: '+256 700 345 678',
                img: 'https://images.unsplash.com/photo-1580489940927-265c7f03a8e4?auto=format&fit=crop&w=800&q=80'
              }
            ].map((person, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-[#185a82] text-[#ffffff] rounded-full text-sm font-bold">
                      {person.specialty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                    <p className="text-sm opacity-90">{person.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-gray-600 hover:text-[#185a82] transition group/link">
                      <FaEnvelope className="text-[#185a82]" />
                      <span className="text-sm group-hover/link:underline">{person.email}</span>
                    </a>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaPhone className="text-[#185a82]" />
                      <span className="text-sm">{person.phone}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#185a82] text-white py-3 rounded-xl font-semibold hover:bg-[#185a82] hover:text-[#ffffff] transition-all flex items-center justify-center gap-2 group/btn">
                    Connect
                    {/* <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" /> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
        <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#3c3333" }}>
          Join Our Faith-Based Psychology Network
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-[#000000]">
          Be part of a transformative movement — where faith meets clinical excellence and community thrives.
        </p>
        <button className="bg-[#185a82] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#9dd5d6] transition hover:text-[#3c3333] hover:shadow-lg transform hover:scale-105">
          Become a Member
        </button>
      </section>

      <Footer />
    </div>
  );
}