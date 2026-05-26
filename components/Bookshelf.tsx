"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { books } from "@/data/books";

const Bookshelf = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeTab, setActiveTab] = useState<"read" | "want">("read");

  const filteredBooks = books.filter((book) => book.type === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="bookshelf"
      ref={ref}
      className="relative py-32 overflow-hidden bg-[#F6F1EA]"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b2a22_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#B07B4F]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
               <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-[0.3em] text-[#A46B42] font-medium mb-5"
          >
            Bookshelf
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[#2D1F18]">
                Books that shaped
                <br />
                my thinking.
              </h2>

              <p className="mt-7 text-[#6B5B52] max-w-2xl text-lg leading-relaxed">
                Philosophy, psychology, creativity, spirituality and timeless
                ideas that deeply influenced how I see life and build things.
              </p>
            </div>
          </motion.div>

          {/* 🔥 Apple / Notion Style Tabs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-2 bg-white/40 border border-[#E7DDD2] backdrop-blur-md p-1 rounded-full w-fit"
          >
            {(["read", "want"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-[#6B5B52] hover:text-[#2D1F18]"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#2D1F18] rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "read" ? "Books I have Read" : "Want to Read"}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* 📚 GRID */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          {filteredBooks.map((books, index) => (
            <motion.a
              key={index}
              href={books.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative rounded-[30px] overflow-hidden border border-[#E7DDD2] bg-[#FFFDF9]/80 backdrop-blur-sm shadow-[0_12px_35px_rgba(60,40,20,0.06)] hover:shadow-[0_22px_60px_rgba(60,40,20,0.14)] transition-all duration-500">

                {/* Cover */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={books.cover}
                    alt={books.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform">
                    <ArrowUpRight size={18} className="text-[#2D1F18]" />
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#F3E8DD]/95 text-[#9A6540] text-[11px] uppercase tracking-wide font-medium">
                      {books.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#2D1F18] line-clamp-2 group-hover:text-[#8C5A38] transition-colors">
                    {books.title}
                  </h3>

                  <p className="text-sm text-[#A46B42] mt-2 mb-3">
                    {books.author}
                  </p>

                  <p className="text-sm leading-relaxed text-[#6D5C52] line-clamp-3">
                    {books.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Bookshelf;