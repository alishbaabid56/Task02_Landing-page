
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Orbit,
} from "lucide-react";
import { useRef } from "react";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    value: "01",
    label: "Vision",
  },
  {
    value: "∞",
    label: "Possibilities",
  },
  {
    value: "24/7",
    label: "Innovation",
  },
];

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!containerRef.current) return;

    const rect =
      containerRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[45%]
            top-[30%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-violet-600
            blur-[150px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            absolute
            right-[-150px]
            top-[50%]
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

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >

        {/* ===================================================
            TOP LABEL
        =================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mb-16
            flex
            items-center
            justify-between
            sm:mb-24
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-violet-400" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
              About NOVA
            </span>
          </div>

          <span className="hidden font-mono text-[9px] tracking-[0.25em] text-white/20 sm:block">
            01 / 04
          </span>
        </motion.div>

        {/* ===================================================
            MAIN STATEMENT
        =================================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}

          <div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
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
                max-w-4xl
                text-5xl
                font-extralight
                leading-[0.98]
                tracking-[-0.05em]
                sm:text-7xl
                lg:text-[92px]
              "
            >
              We create what
              <br />

              <span className="relative inline-block text-white/30">
                comes next.

                {/* Animated underline */}

                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                  }}
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    bg-gradient-to-r
                    from-violet-400
                    to-transparent
                  "
                />
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                mt-10
                max-w-xl
                text-sm
                leading-7
                tracking-wide
                text-white/40
                sm:text-base
              "
            >
              NOVA is a creative technology concept built
              around one simple belief: the future should
              feel as extraordinary as it looks.
            </motion.p>

            {/* CTA */}

            <motion.a
              href="#services"
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
                delay: 0.45,
              }}
              whileHover={{
                x: 6,
              }}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/60
              "
            >
              Discover NOVA

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  transition
                  duration-300
                  group-hover:border-violet-400/50
                  group-hover:bg-violet-500/10
                "
              >
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.2}
                />
              </span>
            </motion.a>
          </div>

          {/* =================================================
              RIGHT INTERACTIVE ORBIT
          ================================================= */}

          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
            }}
            className="
              relative
              mx-auto
              flex
              h-[340px]
              w-[340px]
              items-center
              justify-center
              sm:h-[430px]
              sm:w-[430px]
            "
          >

            {/* Outer glow */}

            <div
              className="
                absolute
                h-48
                w-48
                rounded-full
                bg-violet-500/10
                blur-[90px]
                sm:h-64
                sm:w-64
              "
            />

            {/* Outer orbit */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-white/[0.08]
                sm:h-[350px]
                sm:w-[350px]
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-[-4px]
                  h-2
                  w-2
                  -translate-x-1/2
                  rounded-full
                  bg-violet-300
                  shadow-[0_0_20px_rgba(167,139,250,0.9)]
                "
              />
            </motion.div>

            {/* Second orbit */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[210px]
                w-[210px]
                rounded-full
                border
                border-violet-300/[0.12]
                sm:h-[280px]
                sm:w-[280px]
              "
            >
              <span
                className="
                  absolute
                  bottom-[8%]
                  right-[5%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-300
                  shadow-[0_0_15px_rgba(96,165,250,0.9)]
                "
              />
            </motion.div>

            {/* Center */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
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
                to-indigo-500/5
                shadow-[0_0_80px_rgba(124,58,237,0.2)]
                backdrop-blur-xl
                sm:h-36
                sm:w-36
              "
            >
              <div
                className="
                  absolute
                  inset-3
                  rounded-full
                  border
                  border-white/[0.06]
                "
              />

              <span className="text-xl font-extralight tracking-[0.15em] text-white/80 sm:text-2xl">
                N
              </span>
            </motion.div>

            {/* Floating icons */}

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
                left-[8%]
                top-[25%]
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              <Sparkles
                size={16}
                strokeWidth={1.2}
                className="text-violet-300"
              />
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
                bottom-[22%]
                right-[8%]
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              <Zap
                size={16}
                strokeWidth={1.2}
                className="text-blue-300"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[15%]
                top-[13%]
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/40
                backdrop-blur-xl
              "
            >
              <Orbit
                size={14}
                strokeWidth={1.2}
                className="text-white/50"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ===================================================
            STATS
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
            delay: 0.2,
          }}
          className="
            mt-24
            grid
            border-y
            border-white/[0.08]
            sm:mt-32
            sm:grid-cols-3
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="
                relative
                flex
                items-center
                justify-between
                border-b
                border-white/[0.08]
                py-7
                sm:border-b-0
                sm:px-8
                sm:py-9
                sm:first:pl-0
                sm:last:pr-0
              "
            >
              {/* Divider */}

              {index !== 0 && (
                <span
                  className="
                    absolute
                    left-0
                    top-1/2
                    hidden
                    h-8
                    w-px
                    -translate-y-1/2
                    bg-white/10
                    sm:block
                  "
                />
              )}

              <span className="font-mono text-2xl font-light text-white/80">
                {stat.value}
              </span>

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-16
            flex
            items-center
            gap-4
          "
        >
          <span className="h-px w-8 bg-white/15" />

          <p className="text-[8px] uppercase tracking-[0.35em] text-white/20">
            Designed for tomorrow
          </p>
        </motion.div>
      </div>
    </section>
  );
}

