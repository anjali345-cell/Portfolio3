"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },

    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 bg-[#F7F3EE] overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EFE3D3] rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* HEADER */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <p className="uppercase tracking-[0.25em] text-sm text-[#A66A3F] mb-4">
              Contact
            </p>

            <h2
              className="text-5xl md:text-6xl text-[#2B1D16] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Let’s Create Something
            </h2>

            <p className="text-[#6F6258] max-w-2xl mx-auto leading-8">
              Whether it’s a freelance project, collaboration, or just a simple
              hello — my inbox is always open.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* LEFT SIDE */}
            <motion.div variants={itemVariants} className="space-y-10">
              <div>
                <h3 className="text-4xl text-[#2B1D16] mb-6 font-semibold">
                  Let’s work together
                </h3>

                <p className="text-[#6F6258] leading-8 text-lg">
                  I love building thoughtful digital experiences with clean UI,
                  smooth interactions, and meaningful design. If you have an
                  idea in mind, I’d genuinely love to hear about it.
                </p>
              </div>

              {/* CONTACT INFO */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 bg-[#FFFDFC] border border-[#E5D8C9] rounded-2xl p-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EFE7DD] flex items-center justify-center">
                    <Mail className="text-[#4B2E1E]" size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-[#A08B7B] mb-1">Email</p>

                    <a
                      href="mailto:anjali.sh93026@gmail.com"
                      className="text-[#2B1D16] font-medium hover:text-[#A66A3F] transition-colors"
                    >
                      anjali.sh93026@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 bg-[#FFFDFC] border border-[#E5D8C9] rounded-2xl p-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#EFE7DD] flex items-center justify-center">
                    <MapPin className="text-[#4B2E1E]" size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-[#A08B7B] mb-1">Location</p>

                    <p className="text-[#2B1D16] font-medium">India</p>
                  </div>
                </motion.div>
              </div>

              {/* SOCIALS */}
              <div>
                <p className="text-[#2B1D16] font-medium mb-5">
                  Find me online
                </p>

                <div className="flex gap-4">
                  {[
                    {
                      href: "https://github.com/anjali345-cell",
                      icon: Github,
                    },
                    {
                      href:
                        "https://www.linkedin.com/in/anjali-s-15187b22a/",
                      icon: Linkedin,
                    },
                    {
                      href: "mailto:anjali.sh93026@gmail.com",
                      icon: Mail,
                    },
                    {
                      href: "https://x.com/anjali63664",
                      icon: X,
                    },
                  ].map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-2xl bg-[#FFFDFC] border border-[#E5D8C9] flex items-center justify-center shadow-sm hover:shadow-lg transition-all"
                      >
                        <Icon className="text-[#4B2E1E]" size={22} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="bg-[#FFFDFC] border border-[#E5D8C9] rounded-[32px] p-8 md:p-10 shadow-[0_10px_50px_rgba(75,46,30,0.06)]"
              >
                <div className="space-y-7">
                  <div>
                    <label className="block text-sm text-[#6F6258] mb-3">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-[#F7F3EE] border border-[#E5D8C9] text-[#2B1D16] placeholder:text-[#B5A79B] outline-none focus:border-[#A66A3F] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#6F6258] mb-3">
                      Your Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-[#F7F3EE] border border-[#E5D8C9] text-[#2B1D16] placeholder:text-[#B5A79B] outline-none focus:border-[#A66A3F] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#6F6258] mb-3">
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 rounded-2xl bg-[#F7F3EE] border border-[#E5D8C9] text-[#2B1D16] placeholder:text-[#B5A79B] outline-none focus:border-[#A66A3F] transition-all resize-none"
                    />
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl bg-[#4B2E1E] text-white font-medium shadow-[0_10px_30px_rgba(75,46,30,0.18)] hover:bg-[#3A2417] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />

                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* SUCCESS */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-[#E8F5E9] text-[#2E7D32] text-center"
                    >
                      Message sent successfully ✨
                    </motion.div>
                  )}

                  {/* ERROR */}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-[#FDECEC] text-[#C62828] text-center"
                    >
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;