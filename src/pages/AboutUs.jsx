import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar, FaShieldAlt, FaUsers, FaCross } from "react-icons/fa";
// import aboutImage from "../assests/about.png";

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "'Alegreya Sans', sans-serif", color: "#3c3333" }}>
      <Navbar />
<br /><br /><br />
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <section className="text-center mb-16">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            About Like Mind Psychologist
          </h1>
          <p className="text-[#185a82] text-sm md:text-base">
            Cultivating Excellence in Clinical Practice Through Faith, Community, and Continuing Education
          </p>
        </section>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto mb-20 leading-relaxed text-sm md:text-base">
          <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>
            Our Story
          </h2>
          <p className="mb-4">
            Like Mind Psychologist Book Club was founded with a singular vision: to create a vibrant, faith-based community where licensed psychologists can deepen their clinical expertise while integrating their spiritual values into their practice. Recognizing the unique challenges faced by mental health professionals seeking to align their professional work with their personal faith, we established this community as a sanctuary for intellectual growth and spiritual nourishment.
          </p>
          <p>
            Our journey began with a small group of dedicated clinicians who believed that the most transformative therapeutic relationships emerge when practitioners cultivate both clinical excellence and spiritual authenticity. Today, we continue to honor that foundational vision by providing curated resources, fostering meaningful connections, and supporting the holistic development of psychologists committed to faith-integrated practice.
          </p>
        </section>

        {/* Our Mission */}
        <section className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>
            Our Mission
          </h2>
          <p className="italic text-[#185a82] max-w-3xl mx-auto mb-10">
            To empower licensed psychologists to achieve clinical excellence while integrating faith and values into their therapeutic practice, fostering a supportive community of like-minded professionals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Foster Clinical Excellence",
                desc: "We are committed to advancing evidence-based practice and professional development through carefully curated clinical literature, continuing education, and peer collaboration that elevates the standard of psychological care.",
                icon: <FaStar className="text-[#185a82] text-3xl mb-3" />,
              },
              {
                title: "Build Community",
                desc: "We create meaningful connections among psychologists who share common values, providing networking opportunities, mentorship, and collaborative spaces where professionals can grow together and support one another.",
                icon: <FaUsers className="text-[#185a82] text-3xl mb-3" />,
              },
              {
                title: "Integrate Faith & Practice",
                desc: "We honor the integration of spiritual values and clinical work, recognizing that faith-informed psychology enriches therapeutic relationships and promotes holistic healing for both practitioners and their clients.",
                icon: <FaCross className="text-[#185a82] text-3xl mb-3" />,
              },
              {
                title: "Support Professional Growth",
                desc: "We provide comprehensive resources, continuing education credits, and professional development opportunities that enable psychologists to advance their careers while maintaining ethical standards and personal integrity.",
                icon: <FaShieldAlt className="text-[#185a82] text-3xl mb-3" />,
              },
            ].map(({ title, desc, icon }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6"
                style={{ color: "#3c3333" }}
              >
                {icon}
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-7xl mx-auto mb-20 px-4 md:px-0">
          <h2
            className="text-2xl font-semibold text-center mb-10"
            style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            What We Offer
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center text-sm text-[#3c3333]">
            {[
              {
                title: "Curated Clinical Books",
                desc: "Access our expertly selected collection of evidence-based clinical literature, carefully reviewed by experienced practitioners to ensure relevance and quality for modern therapeutic practice.",
                icon: <FaStar className="mx-auto text-[#185a82] text-4xl mb-4" />,
              },
              {
                title: "CE Credit Courses",
                desc: "Earn continuing education credits through our comprehensive online and in-person courses, designed to meet licensing requirements while advancing your clinical knowledge and skills.",
                icon: <FaShieldAlt className="mx-auto text-[#185a82] text-4xl mb-4" />,
              },
              {
                title: "Professional Community",
                desc: "Connect with like-minded psychologists through networking events, discussion forums, and collaborative learning opportunities that foster meaningful professional relationships and peer support.",
                icon: <FaUsers className="mx-auto text-[#185a82] text-4xl mb-4" />,
              },
              {
                title: "Faith-Based Resources",
                desc: "Explore thoughtfully developed resources that help integrate spiritual values into clinical practice, including guides, research, and case studies on faith-informed psychological care.",
                icon: <FaCross className="mx-auto text-[#185a82] text-4xl mb-4" />,
              },
            ].map(({ title, desc, icon }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6"
                style={{ color: "#3c3333" }}
              >
                {icon}
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto mb-20 px-4 md:px-0">
          <h2
            className="text-2xl font-semibold text-center mb-10"
            style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center text-sm text-[#3c3333]">
            {[
              {
                title: "Excellence",
                desc: "We are dedicated to the highest standards of clinical practice, continuous learning, and professional development that honor both our clients and our profession.",
                icon: <FaStar className="mx-auto text-[#185a82] text-3xl mb-2" />,
              },
              {
                title: "Integrity",
                desc: "We uphold ethical principles, transparency, and authenticity in all our endeavors, ensuring that our actions align with our values and serve the greater good of the mental health community.",
                icon: <FaShieldAlt className="mx-auto text-[#185a82] text-3xl mb-2" />,
              },
              {
                title: "Community",
                desc: "We believe in the power of collective wisdom and mutual support, fostering inclusive spaces where diverse perspectives are valued and all members feel welcomed and heard.",
                icon: <FaUsers className="mx-auto text-[#185a82] text-3xl mb-2" />,
              },
              {
                title: "Faith",
                desc: "We respect and celebrate the spiritual dimensions of human experience, recognizing that faith can be a source of resilience, meaning, and healing in therapeutic relationships.",
                icon: <FaCross className="mx-auto text-[#185a82] text-3xl mb-2" />,
              },
            ].map(({ title, desc, icon }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6"
                style={{ color: "#3c3333" }}
              >
                {icon}
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto mb-20 px-4 md:px-0 text-center">
          <h2
            className="text-2xl font-semibold mb-10"
            style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}
          >
            Our Leadership Team
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Mitchell",
                role: "Founder & Clinical Director",
                desc: "Licensed Clinical Psychologist with 15+ years of experience in faith-integrated therapy and organizational leadership.",
              },
              {
                name: "Dr. James Chen",
                role: "Education Coordinator",
                desc: "Specializes in curriculum development and continuing education with expertise in evidence-based clinical training.",
              },
              {
                name: "Dr. Rebecca Thompson",
                role: "Community Engagement Manager",
                desc: "Dedicated to building meaningful connections and fostering a supportive community of mental health professionals.",
              },
              {
                name: "Dr. Michael Rodriguez",
                role: "Research & Resources Director",
                desc: "Leads clinical research initiatives and curates high-quality resources for our professional community.",
              },
            ].map(({ name, role, desc }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 text-left"
                style={{ color: "#3c3333" }}
              >
                <div className="h-32 bg-gradient-to-br from-[#9dd5d6] to-[#185a82] rounded-md mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-semibold text-lg mb-1">{name}</h3>
                <p className="italic text-sm text-[#185a82] mb-3">{role}</p>
                <p className="text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact By Numbers */}
        <section className="bg-[#f0f9fa] py-16 px-6 text-center max-w-7xl mx-auto rounded-lg mb-20">
          <h2
            className="text-2xl font-semibold mb-10"
            style={{ fontFamily: "'Alegreya Sans SC', sans-serif", color: "#3c3333" }}
          >
            Our Impact By Numbers
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-[#185a82] font-semibold text-lg">
            {[
              { label: "Psychologists Served", value: "500+" },
              { label: "CE Credit Courses", value: "50+" },
              { label: "Books Reviewed", value: "100+" },
              { label: "CE Credits Earned", value: "1000+" },
            ].map(({ label, value }, idx) => (
              <div key={idx} className="border border-[#185a82] rounded-lg py-6">
                <p className="text-4xl">{value}</p>
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Community */}
        <section className="text-center mb-24">
          <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Alegreya Sans SC', sans-serif" }}>
            Join Our Community
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-sm text-[#3c3333]">
            Become part of a thriving network of psychologists dedicated to clinical excellence and faith-integrated practice. Together, we grow stronger.
          </p>
          <button
            className="bg-[#185a82] text-white px-6 py-2 rounded-full hover:bg-[#134961] transition"
            style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
          >
            Become a Member Today
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
