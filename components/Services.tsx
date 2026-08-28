
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Box,
  Code2,
  Layers3,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Creative Direction",
    short: "VISION",
    description:
      "We turn ambitious ideas into clear visual directions, distinctive identities, and experiences built to stand apart.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Digital Experiences",
    short: "EXPERIENCE",
    description:
      "Immersive digital experiences that combine thoughtful interaction, motion, and technology into one seamless journey.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "3D & Motion",
    short: "MOTION",
    description:
      "Dynamic 3D worlds, cinematic motion, and visual systems designed to make digital products feel alive.",
    icon: Box,
  },
  {
    number: "04",
    title: "Technology",
    short: "BUILD",
    description:
      "Modern, responsive, and scalable interfaces engineered with precision from the first interaction to the final detail.",
    icon: Code2,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-20
        text-white
        sm:px-8
        sm:py-24
        lg:px-10
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}

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
            left-[55%]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-600/[0.06]
            blur-[150px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            bottom-[-150px]
            left-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-indigo-600/[0.05]
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-16
            grid
            gap-8
            lg:mb-24
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >
          {/* Heading */}

          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-violet-400" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
                What we create
              </span>
            </div>

            <h2
              className="
                text-5xl
                font-extralight
                leading-[0.98]
                tracking-[-0.05em]
                sm:text-7xl
                lg:text-[88px]
              "
            >
              Built for
              <br />

              <span className="text-white/30">
                what&apos;s next.
              </span>
            </h2>
          </div>

          {/* Description */}

          <div className="lg:pb-2">
            <p
              className="
                max-w-md
                text-sm
                leading-7
                tracking-wide
                text-white/40
                sm:text-base
              "
            >
              From the first idea to the final interaction,
              NOVA combines strategy, design, motion, and
              technology to create experiences that move
              people.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            SERVICE SYSTEM
        =================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">

          {/* =================================================
              LEFT — VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              hidden
              min-h-[500px]
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.02]
              lg:flex
            "
          >
            {/* Visual center */}

            <div className="absolute inset-0 flex items-center justify-center">

              {/* Outer orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-[300px]
                  w-[300px]
                  rounded-full
                  border
                  border-white/[0.07]
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-[-3px]
                    h-1.5
                    w-1.5
                    -translate-x-1/2
                    rounded-full
                    bg-violet-300
                    shadow-[0_0_15px_rgba(167,139,250,0.9)]
                  "
                />
              </motion.div>

              {/* Inner orbit */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 17,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-[210px]
                  w-[210px]
                  rounded-full
                  border
                  border-violet-400/[0.12]
                "
              >
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-1
                    w-1
                    -translate-x-1/2
                    rounded-full
                    bg-blue-300
                    shadow-[0_0_12px_rgba(96,165,250,0.9)]
                  "
                />
              </motion.div>

              {/* Core */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 40px rgba(124,58,237,0.12)",
                    "0 0 90px rgba(124,58,237,0.25)",
                    "0 0 40px rgba(124,58,237,0.12)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-violet-300/20
                  bg-gradient-to-br
                  from-violet-500/20
                  to-indigo-500/[0.04]
                  backdrop-blur-xl
                "
              >
                <span className="text-3xl font-extralight tracking-[0.2em] text-white/80">
                  N
                </span>

                <div
                  className="
                    absolute
                    inset-3
                    rounded-full
                    border
                    border-white/[0.06]
                  "
                />
              </motion.div>

              {/* Floating number */}

              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-12
                  top-16
                  font-mono
                  text-[10px]
                  tracking-[0.3em]
                  text-white/20
                "
              >
                04
              </motion.div>

              <motion.div
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-16
                  right-12
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                NOVA SYSTEM
              </motion.div>
            </div>

            {/* Corner label */}

            <div
              className="
                absolute
                bottom-7
                left-7
                flex
                items-center
                gap-3
              "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Creative system active
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — SERVICES
          ================================================= */}

          <div className="space-y-2">

            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = active === index;

              return (
                <motion.div
                  key={service.number}
                  initial={{
                    opacity: 0,
                    x: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "border-violet-400/25 bg-white/[0.045]"
                        : "border-white/[0.07] bg-white/[0.018]"
                    }
                  `}
                >
                  {/* Active glow */}

                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      h-40
                      w-40
                      rounded-full
                      bg-violet-500/10
                      blur-[70px]
                    "
                  />

                  <div className="relative p-6 sm:p-7">

                    {/* Top */}

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-5">

                        <span
                          className={`
                            font-mono
                            text-[10px]
                            tracking-[0.25em]
                            transition-colors
                            duration-300
                            ${
                              isActive
                                ? "text-violet-300"
                                : "text-white/20"
                            }
                          `}
                        >
                          {service.number}
                        </span>

                        <span
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.3em]
                            text-white/20
                          "
                        >
                          {service.short}
                        </span>
                      </div>

                      <motion.div
                        animate={{
                          rotate: isActive ? 45 : 0,
                        }}
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "border-violet-400/30 bg-violet-500/10"
                              : "border-white/10"
                          }
                        `}
                      >
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.2}
                          className={
                            isActive
                              ? "text-violet-300"
                              : "text-white/30"
                          }
                        />
                      </motion.div>
                    </div>

                    {/* Main */}

                    <div className="mt-7 flex items-start gap-5">

                      <motion.div
                        animate={{
                          scale: isActive ? 1.08 : 1,
                          rotate: isActive ? -5 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`
                          hidden
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          sm:flex
                          ${
                            isActive
                              ? "border-violet-400/25 bg-violet-500/10"
                              : "border-white/[0.08] bg-white/[0.02]"
                          }
                        `}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.2}
                          className={
                            isActive
                              ? "text-violet-300"
                              : "text-white/30"
                          }
                        />
                      </motion.div>

                      <div>
                        <h3
                          className={`
                            text-2xl
                            font-light
                            tracking-tight
                            transition-colors
                            duration-300
                            sm:text-3xl
                            ${
                              isActive
                                ? "text-white"
                                : "text-white/65"
                            }
                          `}
                        >
                          {service.title}
                        </h3>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 16 : 0,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-lg text-xs leading-6 text-white/35 sm:text-sm">
                            {service.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Progress line */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      bg-gradient-to-r
                      from-violet-400
                      via-violet-400/30
                      to-transparent
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            mt-20
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.08]
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            Strategy · Design · Motion · Technology
          </p>

          <a
            href="#work"
            className="
              group
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/45
              transition-colors
              hover:text-white
            "
          >
            Explore our work

            <ArrowUpRight
              size={13}
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

