
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  
 
];

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <nav className="mx-auto flex h-20 max-w-350 items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="group relative flex items-center gap-2"
        >
          {/* Logo mark */}
          <motion.span
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.4 }}
            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
          </motion.span>

          <span className="text-[17px] font-medium tracking-[0.18em] text-white">
            NOVA
          </span>

          {/* Logo glow */}
          <span className="absolute -inset-3 -z-10 rounded-full bg-violet-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-9 md:flex"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              variants={navItem}
              href={link.href}
              whileHover={{ y: -2 }}
              className="group relative text-[13px] font-medium tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}

              {/* Animated underline */}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-blue-400 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop CTA */}
        <motion.a
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          href="#contact"
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-[12px] font-medium tracking-wide text-white backdrop-blur-xl transition-colors hover:border-violet-400/30 hover:bg-white/[0.1] md:flex"
        >
          {/* Hover glow */}
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-500/20 via-purple-500/10 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          Start a Project

          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 backdrop-blur-xl transition-colors hover:bg-white/[0.08] hover:text-white md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.7,
                }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.7,
                }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              variants={navContainer}
              initial="hidden"
              animate="visible"
              className="p-5"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -15,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
                    },
                  }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-4 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={15}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
                  />
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: 0.2,
                    },
                  },
                }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
