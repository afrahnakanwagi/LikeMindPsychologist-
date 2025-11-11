import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Filter, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import logo from '../assests/logo.png';

export default function Blog() {
  // Sample articles data
  const articlesData = [
    {
      id: 1,
      title: "Mindfulness in Psychotherapy: A Review of Recent Publications",
      category: "Book Reviews",
      excerpt: "An in-depth analysis of the latest publications on integrating mindfulness practices into psychotherapy settings with evidence-based outcomes.",
      author: "Dr. Sarah Miller",
      date: "March 15, 2025",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Latest in Neuroscience: Neuroplasticity and Trauma Recovery",
      category: "Research Updates",
      excerpt: "Examining groundbreaking research on how the brain recovers and adapts following trauma, with implications for therapeutic approaches.",
      author: "Dr. Emily Rodriguez",
      date: "March 10, 2025",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Continuing Education: Digital Therapeutics in Modern Practice",
      category: "CE Credits",
      excerpt: "Earn CE credits while exploring the evolving role of therapy apps and telepsychology platforms in contemporary clinical practice.",
      author: "Dr. Michael Chen",
      date: "March 5, 2025",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "Managing Countertransference: Professional Development Strategies",
      category: "Professional Development",
      excerpt: "Essential strategies for identifying and managing countertransference to maintain therapeutic effectiveness and professional boundaries.",
      author: "Dr. Jennifer Adams",
      date: "March 1, 2025",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Attachment Theory Revisited: Contemporary Applications and Insights",
      category: "Research Updates",
      excerpt: "Modern perspectives on attachment theory and how these insights are influencing therapeutic approaches and understanding of adult relationships.",
      author: "Dr. David Kim",
      date: "February 25, 2025",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Evidence-Based Interventions for Anxiety Disorders: A Meta-Analysis",
      category: "Research Updates",
      excerpt: "Comprehensive analysis of current evidence-based interventions for treating various anxiety disorders including effectiveness and clinical applications.",
      author: "Dr. Amanda Foster",
      date: "February 20, 2025",
      readTime: "11 min read"
    },
    {
      id: 7,
      title: "Ethical Considerations in Telepsychology Practice",
      category: "Ethics & Standards",
      excerpt: "Navigate the ethical complexities of remote therapy delivery while maintaining professional standards and client confidentiality.",
      author: "Dr. Robert Thompson",
      date: "February 15, 2025",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Group Therapy Dynamics: Advanced Facilitation Techniques",
      category: "Clinical Practice",
      excerpt: "Master advanced facilitation skills for managing complex group dynamics and maximizing therapeutic outcomes in group settings.",
      author: "Dr. Lisa Martinez",
      date: "February 10, 2025",
      readTime: "10 min read"
    },
    {
      id: 9,
      title: "Trauma-Informed Care: Building Resilient Therapeutic Relationships",
      category: "Clinical Practice",
      excerpt: "Essential principles of trauma-informed care and their application in creating safe, supportive therapeutic environments.",
      author: "Dr. James Wilson",
      date: "February 5, 2025",
      readTime: "8 min read"
    }
  ];

  const categories = [
    { name: "All Articles", value: "all", count: articlesData.length },
    { name: "Clinical Practice", value: "Clinical Practice", count: 42 },
    { name: "Book Reviews", value: "Book Reviews", count: 18 },
    { name: "Research Updates", value: "Research Updates", count: 35 },
    { name: "CE Credits", value: "CE Credits", count: 24 },
    { name: "Professional Development", value: "Professional Development", count: 31 },
    { name: "Ethics & Standards", value: "Ethics & Standards", count: 15 }
  ];

  const popularPosts = [
    {
      id: 1,
      title: "The Complete Guide to Cognitive Behavioral Therapy Techniques",
      date: "February 15, 2025"
    },
    {
      id: 2,
      title: "Understanding the DSM-5: Updates and Clinical Implications",
      date: "February 8, 2025"
    },
    {
      id: 3,
      title: "Building a Thriving Private Practice: Business Essentials",
      date: "January 28, 2025"
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
        article.author.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
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

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80"
            alt="Calm background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#e6f4f5]/70 to-white"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#185a82] mb-6 leading-tight">
              Blog & <span className="text-[#1c8ca0]">Clinical Reflections</span>
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
          {/* Search Bar */}
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

          {/* Filter Tags */}
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
            {/* Featured Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden mb-10 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="h-64 md:h-96 bg-gradient-to-br from-[#e6f4f5] via-[#d4e9ed] to-[#c8e4e9] flex items-center justify-center">
                <span className="text-[#185a82] text-xl font-semibold">Featured Article</span>
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block bg-[#185a82] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Clinical Practice
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#185a82] mb-4">
                  The Art of Therapeutic Alliance: Building Trust in the Modern Clinical Setting
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore evidence-based strategies for developing and maintaining strong therapeutic alliances with clients across diverse populations. This comprehensive guide examines contemporary research on trust-building techniques and their impact on treatment outcomes across various therapeutic modalities.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#185a82] text-white rounded-full hover:bg-[#134961] transition font-medium"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>

            <h2 className="text-3xl font-bold text-[#185a82] mb-8">Latest Articles</h2>

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
                        <span className="text-[#185a82] font-medium">Article Image</span>
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

            {/* Popular Posts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#185a82] mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0 cursor-pointer hover:bg-[#f7fafb] p-2 rounded-xl transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#185a82] text-white rounded-full flex items-center justify-center font-bold">
                      {post.id}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#185a82] mb-1 text-sm leading-tight hover:text-[#1c8ca0] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
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