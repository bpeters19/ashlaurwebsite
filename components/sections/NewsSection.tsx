"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NewsSection = () => {
  const featuredArticle = {
    title: "ASHLAUR Wins Major Infrastructure Contract",
    excerpt: "We're excited to announce our selection for the $250M downtown transit project, showcasing our commitment to sustainable urban development.",
    image: "https://picsum.photos/600/400?random=22",
    date: "January 15, 2024",
    readTime: "3 min read"
  };

  const recentArticles = [
    {
      title: "New Safety Initiative Reduces Incidents by 40%",
      date: "January 10, 2024",
      image: "https://picsum.photos/300/200?random=23"
    },
    {
      title: "Sustainability Report: Carbon Neutral by 2030",
      date: "January 5, 2024",
      image: "https://picsum.photos/300/200?random=24"
    },
    {
      title: "Community Impact: $2M Donated to Local Schools",
      date: "December 28, 2023",
      image: "https://picsum.photos/300/200?random=25"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Latest News & Insights</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Stay informed about our latest projects, industry insights, and company news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-surface rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64 md:h-80">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-muted mb-4">
                  <span>{featuredArticle.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{featuredArticle.title}</h3>
                <p className="text-muted mb-6">{featuredArticle.excerpt}</p>
                <button className="text-primary hover:text-secondary font-semibold">
                  Read Full Article →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Recent Articles */}
          <div className="space-y-6">
            {recentArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-32">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-muted mb-2">{article.date}</div>
                  <h4 className="font-semibold text-secondary mb-2">{article.title}</h4>
                  <button className="text-primary hover:text-secondary text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center pt-4"
            >
              <button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-md transition duration-300">
                View All News
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;