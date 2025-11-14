// src/pages/Blog.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Filter, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import book from '../assests/book.png';

export default function Blog() {
  // === MOCK LATEST ARTICLES: Ugandan Authors (6 entries, recent 2025 dates) ===
  const articlesData = [
    {
      id: 1,
      title: "Healing Through Storytelling: A Review of 'Kintu' by Jennifer Nansubuga Makumbi",
      category: "Book Reviews",
      excerpt: "How ancestral narratives in Uganda’s first English novel inform trauma recovery and collective identity in therapy.",
      author: "Dr. Aisha Nakato",
      date: "November 8, 2025",
      readTime: "9 min read"
    },
    {
      id: 2,
      title: "Resilience in Post-Conflict Uganda: Insights from 'Abyssinian Chronicles'",
      category: "Research Updates",
      excerpt: "Moses Isegawa’s epic reveals family systems and psychological survival during the Amin era — implications for modern practice.",
      author: "Prof. Joseph Kizza",
      date: "November 5, 2025",
      readTime: "11 min read"
    },
    {
      id: 3,
      title: "Spiritual Coping in Ugandan Women: Lessons from Doreen Baingana’s Short Stories",
      category: "Clinical Practice",
      excerpt: "Faith-based resilience in 'The Official Guide to the Pearl of Africa' and its use in culturally sensitive therapy.",
      author: "Dr. Ruth Namubiru",
      date: "November 1, 2025",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Intergenerational Trauma in 'Tropical Fish' by Doreen Baingana",
      category: "Book Reviews",
      excerpt: "A clinical lens on how childhood experiences echo into adulthood — applications in family therapy.",
      author: "Ms. Grace Atim",
      date: "October 28, 2025",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Post-Colonial Identity in 'The Invisible Weevil' by Mary Karooro Okurut",
      category: "Research Updates",
      excerpt: "Exploring self-worth and mental health in post-independence Uganda through literary analysis.",
      author: "Dr. Samuel Mugarura",
      date: "October 22, 2025",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Grief and Community Healing in 'Song of Lawino' by Okot p'Bitek",
      category: "Clinical Practice",
      excerpt: "Using oral poetry traditions to facilitate group therapy and cultural mourning practices.",
      author: "Ms. Lillian Tibatemwa",
      date: "October 18, 2025",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "All Articles", value: "all", count: articlesData.length },
    { name: "Book Reviews", value: "Book Reviews", count: 2 },
    { name: "Research Updates", value: "Research Updates", count: 2 },
    { name: "Clinical Practice", value: "Clinical Practice", count: 2 },
  ];

  // === BOOK CLUB: The Gifts of Imperfection (3-Month Journey) ===
  const bookClubLetters = [
    {
      id: 1,
      title: "January Letter: Embracing Vulnerability – Week 1 Reflections",
      date: "January 15, 2025",
      author: "Sarah K., Licensed Psychologist, Kampala",
      excerpt: "Starting 'The Gifts of Imperfection' felt like stepping into a mirror..."
    },
    {
      id: 2,
      title: "February Letter: Letting Go of Perfectionism – A Therapist's Journey",
      date: "February 12, 2025",
      author: "Dr. Mark L., Clinical Supervisor, Gulu",
      excerpt: "This month, I confronted my own 'hustle for worthiness' in supervision..."
    },
    {
      id: 3,
      title: "March Letter: Cultivating Self-Compassion – Final Reflections",
      date: "March 10, 2025",
      author: "Esther M., Counseling Psychologist, Mbarara",
      excerpt: "As we close the 3-month journey, I now integrate self-compassion into every session..."
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const articlesPerPage = 6;

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    let filtered = articlesData;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setShowMobileFilters(false);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-0 bg-gradient-to-b from-[#e6f4f5] via-white to-[#f7fafb] font-['Alegreya_Sans'] text-gray-800 overflow-hidden">
      <Navbar />
  <br /><br />
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#9dd5d6] to-[#f9fafa]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80"
            alt="Calm background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#e6f4f5]/70 to-white"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#3c3333] mb-6 leading-tight">
              OUR <span className="text-[#3c3333]">BLOG</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Evidence-based insights, professional development, and clinical wisdom for licensed psychologists committed to excellence in practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------ PHILOSOPHY INTRO ------------------ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6 py-16 text-center leading-relaxed text-gray-700"
      >
        <h2 className="text-3xl font-bold text-[#185a82] mb-6">
          Insights Rooted in Evidence & Compassion
        </h2>
        <p className="text-lg mb-4">
          At <span className="font-semibold text-[#1c8ca0]">Like Mind Psychologists</span>,
          we share knowledge that bridges clinical expertise with human understanding. 
          Our blog features research updates, therapeutic insights, and reflections on the art of healing.
        </p>
        <p className="text-lg">
          Whether you're a seasoned practitioner or exploring mental health topics, 
          each article invites deeper understanding and professional growth.
        </p>
      </motion.section>

      {/* ------------------ SEARCH & FILTER ------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles by title, author, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#185a82] transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleSearch}
              className="px-6 py-3 bg-[#185a82] text-white rounded-full hover:bg-[#134961] transition font-medium"
            >
              Search
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition font-medium flex items-center justify-center gap-2"
            >
              {showMobileFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
              Filters
            </motion.button>
          </div>

          <div className={`flex flex-wrap gap-3 ${showMobileFilters ? 'block' : 'hidden md:flex'}`}>
            {categories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCategoryChange(category.value)}
                className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${
                  selectedCategory === category.value
                    ? 'bg-[#185a82] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ------------------ MAIN CONTENT ------------------ */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-2">
            {/* === FEATURED: Gifts of Imperfection Book Club (AZURE THEME) === */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden mb-10 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="h-64 md:h-96 bg-gradient-to-br from-[#0d6efd] via-[#0d6efd]/90 to-[#0d6efd]/70 relative overflow-hidden">
                <img
                  src={book}
                  alt="The Gifts of Imperfection by Brené Brown"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="inline-block bg-[#185a82] text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                    Book Club Selection
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    The Gifts of Imperfection
                  </h2>
                  <p className="text-lg font-medium">by Brené Brown</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <strong>3-Month Book Club Journey (Jan–Mar 2025)</strong><br />
                  This quarter, our community is diving deep into Brené Brown’s transformative work on courage, compassion, and connection. 
                  Each month, members share personal and professional reflections on embracing imperfection in therapy and life.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff] border border-[#185a82] text-[#185a82] rounded-full hover:bg-[#185a82] hover:text-white transition font-medium"
                >
                  Join the Discussion
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>

            <h2 className="text-3xl font-bold text-[#3c3333] mb-8">Latest Articles</h2>

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {paginatedArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100 cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-[#e6f4f5] via-[#d4e9ed] to-[#c8e4e9] flex items-center justify-center">
                        <span className="text-[#185a82] font-medium">Ugandan Voices</span>
                      </div>
                      <div className="p-6">
                        <span className="inline-block bg-[#e6f4f5] text-[#185a82] px-3 py-1 rounded-full text-xs font-medium mb-3">
                          {article.category}
                        </span>
                        <h3 className="text-lg font-bold text-[#185a82] mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <span className="text-xs text-[#1c8ca0] font-medium">{article.readTime}</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    {currentPage > 1 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-5 py-2 border-2 border-gray-200 rounded-full hover:bg-[#185a82] hover:text-white hover:border-[#185a82] transition-colors font-medium"
                      >
                        Previous
                      </motion.button>
                    )}
                    {[...Array(totalPages)].map((_, index) => (
                      <motion.button
                        key={index + 1}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 border-2 rounded-full transition-colors font-medium ${
                          currentPage === index + 1
                            ? 'bg-[#185a82] text-white border-[#185a82]'
                            : 'border-gray-200 hover:bg-[#185a82] hover:text-white hover:border-[#185a82]'
                        }`}
                      >
                        {index + 1}
                      </motion.button>
                    ))}
                    {currentPage < totalPages && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-5 py-2 border-2 border-gray-200 rounded-full hover:bg-[#185a82] hover:text-white hover:border-[#185a82] transition-colors font-medium"
                      >
                        Next
                      </motion.button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-4 h-fit space-y-6">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#185a82] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => handleCategoryChange(category.value)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-[#f7fafb] transition-colors text-left group"
                  >
                    <span className="text-gray-700 group-hover:text-[#185a82] transition-colors">
                      {category.name}
                    </span>
                    <span className="bg-[#e6f4f5] text-[#185a82] px-3 py-1 rounded-full text-xs font-medium">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* === BOOK CLUB LETTERS (AZURE ACCENTS) === */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#185a82] mb-4">Book Club Letters</h3>
              <div className="space-y-4">
                {bookClubLetters.map((letter) => (
                  <div
                    key={letter.id}
                    className="pb-4 border-b border-gray-100 last:border-0 last:pb-0 cursor-pointer hover:bg-[#f7fafb] p-2 rounded-xl transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#185a82] to-[#185a82] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {letter.id}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#185a82] mb-1 text-sm leading-tight hover:text-[#0d6efd] transition-colors">
                          {letter.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-1">{letter.author}</p>
                        <p className="text-xs text-gray-600 line-clamp-2">{letter.excerpt}</p>
                        <p className="text-xs text-gray-400 mt-1">{letter.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-4 py-2 bg-[#185a82] text-white text-sm rounded-full hover:bg-[#185a82] transition font-medium"
              >
                Read All Letters
              </motion.button>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#185a82] to-[#134961] rounded-2xl shadow-md p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-[#c8e4e9] text-sm mb-4">
                Get the latest insights delivered to your inbox
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-full mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1c8ca0]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full px-4 py-3 bg-white text-[#185a82] rounded-full font-semibold hover:bg-[#f7fafb] transition"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}