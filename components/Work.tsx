"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Digital Architecture",
    category: "Creative Technology",
    year: "2026",
    description:
      "A futuristic digital experience combining immersive visuals, interaction, and modern interface design.",
    gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
    shape: "sphere",
  },
  {
    number: "02",
    title: "Future Interface",
    category: "Product Experience",
    year: "2026",
    description:
      "An experimental interface designed around motion, depth, and intuitive digital interactions.",
    gradient: "from-cyan-400/15 via-blue-500/10 to-transparent",
    shape: "rings",
  },
  {
    number: "03",
    title: "Visual Intelligence",
    category: "AI / Experience",
    year: "2026",
    description:
      "A visual system exploring the intersection of artificial intelligence, creativity, and human interaction.",
    gradient: "from-fuchsia-500/15 via-violet-500/10 to-transparent",
    shape: "core",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-24
        text-white
        sm:px-8
        sm:py-28
        lg:px-10
        lg:py-32
      "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/3
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/[0.05]
            blur-[150px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-14
            flex
            flex-col
            gap-8
            sm:mb-20
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-violet-400" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                Selected work
              </span>
            </div>

            <h2
              className="
                text-5xl
                font-extralight
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-7xl
                lg:text-[86px]
              "
            >
              Ideas into
              <br />

              <span className="text-white/25">
                experiences.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35 sm:text-base">
            A selection of experiments, products, and digital
            experiences created at the intersection of design
            and technology.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-white/[0.018]
              "
            >
              <div
                className="
                  grid
                  lg:grid-cols-[0.45fr_0.55fr]
                "
              >
                {/* Project Information */}

                <div
                  className="
                    relative
                    z-20
                    flex
                    min-h-[420px]
                    flex-col
                    justify-between
                    p-7
                    sm:p-10
                    lg:p-12
                  "
                >
                  {/* Top */}

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
                      / {project.number}
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="mt-16">
                    <p className="mb-5 text-[8px] uppercase tracking-[0.35em] text-violet-300/60">
                      {project.category}
                    </p>

                    <h3
                      className="
                        max-w-md
                        text-4xl
                        font-extralight
                        leading-none
                        tracking-[-0.04em]
                        text-white
                        transition-transform
                        duration-700
                        group-hover:translate-x-2
                        sm:text-5xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-md
                        text-xs
                        leading-6
                        text-white/30
                        sm:text-sm
                      "
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* View Project */}

                  <div className="mt-12 flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        transition-colors
                        group-hover:border-violet-400/30
                      "
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.2}
                        className="
                          text-white/40
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-violet-300
                        "
                      />
                    </motion.div>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      View project
                    </span>
                  </div>
                </div>

                {/* Visual */}

                <div
                  className={`
                    relative
                    min-h-[330px]
                    overflow-hidden
                    bg-gradient-to-br
                    ${project.gradient}
                  `}
                >
                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/20
                      transition-opacity
                      duration-700
                      group-hover:bg-black/5
                    "
                  />

                  {/* ===============================
                      SPHERE
                  ================================ */}

                  {project.shape === "sphere" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 22,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          h-[230px]
                          w-[230px]
                          rounded-full
                          border
                          border-violet-300/15
                        "
                      />

                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          h-[180px]
                          w-[180px]
                          rounded-full
                          border
                          border-indigo-300/20
                        "
                      />

                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          relative
                          h-28
                          w-28
                          rounded-full
                          bg-gradient-to-br
                          from-violet-300/30
                          via-violet-500/10
                          to-transparent
                          shadow-[0_0_100px_rgba(139,92,246,0.25)]
                          backdrop-blur-xl
                        "
                      />

                      <div
                        className="
                          absolute
                          h-64
                          w-64
                          rounded-full
                          bg-violet-500/[0.06]
                          blur-[70px]
                        "
                      />
                    </div>
                  )}

                  {/* ===============================
                      RINGS
                  ================================ */}

                  {project.shape === "rings" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: 360,
                          scale: [1, 1.04, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="
                          relative
                          h-60
                          w-60
                          rounded-full
                          border
                          border-cyan-300/15
                        "
                      >
                        <div
                          className="
                            absolute
                            inset-6
                            rounded-full
                            border
                            border-blue-300/15
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-12
                            rounded-full
                            border
                            border-cyan-300/20
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-[72px]
                            rounded-full
                            bg-cyan-300/10
                            shadow-[0_0_80px_rgba(34,211,238,0.15)]
                          "
                        />

                        <span
                          className="
                            absolute
                            right-0
                            top-1/2
                            h-2
                            w-2
                            rounded-full
                            bg-cyan-200
                            shadow-[0_0_20px_rgba(103,232,249,0.9)]
                          "
                        />
                      </motion.div>
                    </div>
                  )}

                  {/* ===============================
                      CORE
                  ================================ */}

                  {project.shape === "core" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          h-60
                          w-60
                          rounded-[35%]
                          border
                          border-fuchsia-300/15
                        "
                      />

                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          h-44
                          w-44
                          rounded-[40%]
                          border
                          border-violet-300/20
                        "
                      />

                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          relative
                          h-20
                          w-20
                          rounded-full
                          bg-fuchsia-300/10
                          shadow-[0_0_100px_rgba(217,70,239,0.3)]
                          backdrop-blur-xl
                        "
                      />
                    </div>
                  )}

                  {/* Explore */}

                  <div
                    className="
                      absolute
                      bottom-7
                      right-7
                      flex
                      items-center
                      gap-3
                      opacity-50
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <span className="text-[8px] uppercase tracking-[0.3em] text-white/50">
                      Explore
                    </span>

                    <ExternalLink
                      size={13}
                      strokeWidth={1}
                      className="text-white/40"
                    />
                  </div>

                  {/* Hover Border */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[28px]
                      border
                      border-transparent
                      transition-all
                      duration-700
                      group-hover:border-violet-400/20
                    "
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.015]
            p-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-8
          "
        >
          <div>
            <p className="text-sm text-white/50">
              Have an idea worth building?
            </p>

            <p className="mt-1 text-xs text-white/20">
              Let&apos;s create something unexpected.
            </p>
          </div>

          <a
            href="#contact"
            className="
              group
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/50
              transition-colors
              hover:text-white
            "
          >
            Start a conversation

            <ArrowUpRight
              size={14}
              strokeWidth={1.2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}