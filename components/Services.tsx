
"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Orbit,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Intelligent",
    description:
      "Ideas become smarter when creativity and intelligence move together.",
    tag: "THINK",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Immersive",
    description:
      "Experiences designed to feel alive, responsive, and impossible to ignore.",
    tag: "FEEL",
  },
  {
    number: "03",
    icon: Orbit,
    title: "Limitless",
    description:
      "No fixed boundaries. Just new possibilities waiting to be explored.",
    tag: "CREATE",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-28
        text-white
        sm:px-8
        sm:py-36
        lg:px-10
        lg:py-44
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/[0.06]
            blur-[150px]
            sm:h-[600px]
            sm:w-[600px]
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

      {/* =================================================
          SECTION HEADER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-20 max-w-3xl sm:mb-28"
        >
          {/* Eyebrow */}

          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
              The NOVA experience
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-extralight
              leading-[1.05]
              tracking-[-0.04em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            More than an idea.
            <br />

            <span className="text-white/35">
              It's an experience.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              tracking-wide
              text-white/40
              sm:text-base
            "
          >
            NOVA brings intelligence, imagination, and technology
            together to create experiences that feel one step ahead.
          </p>
        </motion.div>

        {/* =================================================
            FEATURE CARDS
        ================================================= */}

        <div
          className="
            grid
            gap-4
            md:grid-cols-3
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-7
                  backdrop-blur-xl
                  transition-colors
                  duration-500
                  hover:border-violet-400/25
                  hover:bg-white/[0.04]
                  sm:p-8
                "
              >
                {/* Card Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-56
                    w-56
                    rounded-full
                    bg-violet-500/[0.08]
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:bg-violet-500/[0.16]
                  "
                />

                {/* Number */}

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
                    {feature.number}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    transition={{
                      duration: 0.3,
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
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.2}
                      className="text-white/45"
                    />
                  </motion.div>
                </div>

                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -5,
                  }}
                  className="
                    relative
                    mt-20
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-400/20
                    bg-violet-500/[0.08]
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.2}
                    className="text-violet-300"
                  />

                  {/* Icon glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      -z-10
                      rounded-xl
                      bg-violet-500/20
                      blur-xl
                    "
                  />
                </motion.div>

                {/* Content */}

                <div className="relative mt-7">
                  <div className="mb-2 text-[8px] font-medium uppercase tracking-[0.3em] text-violet-300/60">
                    {feature.tag}
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-light
                      tracking-tight
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[280px]
                      text-xs
                      leading-6
                      text-white/35
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom line */}

                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.4 + index * 0.12,
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

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-6
            border-t
            border-white/[0.08]
            pt-8
            sm:mt-28
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="max-w-md text-[10px] uppercase leading-6 tracking-[0.2em] text-white/25">
            Built for those who see beyond
            <br />
            what already exists.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              System online
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

