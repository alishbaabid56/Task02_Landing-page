
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
} from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[#050505]
        text-white
      "
    >
      {/* ==========================================
          BACKGROUND
      =========================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Animated Glow */}

        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [20, -20, 20],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-600/[0.05]
            blur-[150px]
          "
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-10
          lg:py-28
        "
      >
        {/* ==========================================
            MAIN CTA
        =========================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.08]
            bg-white/[0.02]
            px-6
            py-14
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* CTA Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-40
              w-72
              -translate-x-1/2
              rounded-full
              bg-violet-500/[0.08]
              blur-[80px]
            "
          />

          <div className="relative z-10 text-center">
            <p
              className="
                mb-6
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-violet-300/50
              "
            >
              Have an idea?
            </p>

            <h2
              className="
                mx-auto
                max-w-4xl
                text-4xl
                font-extralight
                leading-[1]
                tracking-[-0.05em]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Let&apos;s build something
              <br />

              <span className="text-white/25">
                extraordinary.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-lg
                text-sm
                leading-7
                text-white/30
              "
            >
              Have a project, idea, or experiment in mind?
              Let&apos;s turn it into something people remember.
            </p>

            {/* CTA Button */}

            <motion.a
              href="mailto:hello@nova.dev"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                mx-auto
                mt-9
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3.5
                text-xs
                font-medium
                text-black
                transition-shadow
                duration-300
                hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]
              "
            >
              <Mail size={15} strokeWidth={1.7} />

              Start a conversation

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.a>
          </div>
        </motion.div>

        {/* ==========================================
            FOOTER NAVIGATION
        =========================================== */}

        <div
          className="
            mt-16
            grid
            gap-12
            border-b
            border-white/[0.07]
            pb-12
            sm:mt-20
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr]
            lg:gap-20
          "
        >
          {/* Brand */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <a
              href="#"
              className="
                inline-block
                text-2xl
                font-medium
                tracking-[0.12em]
              "
            >
              NOVA
            </a>

            <p
              className="
                mt-5
                max-w-xs
                text-xs
                leading-6
                text-white/25
              "
            >
              Designing digital experiences where
              technology meets imagination.
            </p>
          </motion.div>

          {/* Navigation */}

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
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <p
              className="
                mb-5
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Explore
            </p>

            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-xs
                    text-white/45
                    transition-colors
                    hover:text-white
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={12}
                    className="
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}

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
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <p
              className="
                mb-5
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Connect
            </p>

            <div className="flex flex-col gap-3">

              {/* GitHub */}

              <a
                href="#"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-xs
                  text-white/45
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-[8px]
                    font-semibold
                    transition-colors
                    group-hover:border-white/30
                  "
                >
                  GH
                </span>

                GitHub

                <ArrowUpRight
                  size={12}
                  className="
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-xs
                  text-white/45
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-sm
                    border
                    border-white/10
                    text-[9px]
                    font-semibold
                    transition-colors
                    group-hover:border-white/30
                  "
                >
                  in
                </span>

                LinkedIn

                <ArrowUpRight
                  size={12}
                  className="
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              {/* Email */}

              <a
                href="mailto:hello@nova.dev"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-xs
                  text-white/45
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={14}
                  strokeWidth={1.4}
                />

                Email

                <ArrowUpRight
                  size={12}
                  className="
                    opacity-0
                    transition-all
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

            </div>
          </motion.div>
        </div>

        {/* ==========================================
            BOTTOM BAR
        =========================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/20
            "
          >
            © 2026 NOVA. All rights reserved.
          </p>

          {/* Back To Top */}

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/30
              transition-colors
              hover:text-white
            "
          >
            Back to top

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
                transition-colors
                group-hover:border-white/25
              "
            >
              <ArrowUp
                size={13}
                strokeWidth={1.4}
              />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

