
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MousePointer2,
} from "lucide-react";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================================
   MAIN 3D ORB
========================================================= */

function AuraOrb() {
  const orb = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (orb.current) {
      orb.current.rotation.x = Math.sin(time * 0.25) * 0.15;
      orb.current.rotation.y = time * 0.16;
    }

    if (inner.current) {
      inner.current.rotation.x = time * 0.18;
      inner.current.rotation.y = -time * 0.22;
    }
  });

  return (
    <group ref={orb}>
      <mesh scale={2.15}>
        <icosahedronGeometry args={[1, 5]} />
        <meshPhysicalMaterial
          color="#5b21b6"
          emissive="#4c1d95"
          emissiveIntensity={2}
          roughness={0.08}
          metalness={0.85}
          transmission={0.25}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      <mesh ref={inner} scale={1.35}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#312e81"
          emissive="#6366f1"
          emissiveIntensity={1.8}
          roughness={0.04}
          metalness={0.2}
          transmission={0.75}
          thickness={2}
          transparent
          opacity={0.8}
          clearcoat={1}
        />
      </mesh>

      <pointLight
        position={[0, 0, 0]}
        intensity={8}
        distance={7}
        color="#8b5cf6"
      />

      <pointLight
        position={[2, 1, 2]}
        intensity={5}
        distance={6}
        color="#38bdf8"
      />
    </group>
  );
}

/* =========================================================
   ORBIT RING
========================================================= */

function Ring({
  rotation,
  scale,
  speed,
  opacity,
}: {
  rotation: [number, number, number];
  scale: number;
  speed: number;
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;

    ref.current.rotation.z = time * speed;
    ref.current.rotation.x =
      rotation[0] + Math.sin(time * 0.3) * 0.08;
  });

  return (
    <mesh
      ref={ref}
      rotation={rotation}
      scale={scale}
    >
      <torusGeometry args={[2, 0.012, 16, 220]} />
      <meshBasicMaterial
        color="#a78bfa"
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

/* =========================================================
   ORBITING LIGHT
========================================================= */

function OrbitLight({
  radius,
  speed,
  offset,
}: {
  radius: number;
  speed: number;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const time =
      state.clock.elapsedTime * speed + offset;

    ref.current.position.x =
      Math.cos(time) * radius;

    ref.current.position.z =
      Math.sin(time) * radius;

    ref.current.position.y =
      Math.sin(time * 1.5) * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.065, 20, 20]} />
      <meshBasicMaterial color="#c4b5fd" />
    </mesh>
  );
}

/* =========================================================
   3D SCENE
========================================================= */

function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={2}
      />

      <pointLight
        position={[-4, 2, 3]}
        intensity={6}
        color="#7c3aed"
      />

      <pointLight
        position={[4, -2, 2]}
        intensity={4}
        color="#2563eb"
      />

      <AuraOrb />

      <Ring
        rotation={[Math.PI / 2.5, 0.2, 0]}
        scale={1.45}
        speed={0.18}
        opacity={0.6}
      />

      <Ring
        rotation={[Math.PI / 3, -0.4, 0.3]}
        scale={1.65}
        speed={-0.13}
        opacity={0.35}
      />

      <Ring
        rotation={[0.3, Math.PI / 2, 0.8]}
        scale={1.2}
        speed={0.1}
        opacity={0.25}
      />

      <OrbitLight
        radius={3}
        speed={0.4}
        offset={0}
      />

      <OrbitLight
        radius={2.8}
        speed={-0.3}
        offset={2}
      />

      <OrbitLight
        radius={3.25}
        speed={0.22}
        offset={4}
      />

      <Sparkles
        count={140}
        scale={[8, 7, 7]}
        size={1.5}
        speed={0.2}
        opacity={0.45}
      />
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        mt-10
        min-h-[calc(100svh-5rem)]
        overflow-hidden
        bg-[#050505]
        text-white
        sm:mt-20
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-700/10
            blur-[160px]
            sm:h-[650px]
            sm:w-[650px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-700/10
            blur-[130px]
          "
        />
      </div>

      {/* 3D BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[5]
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-[82vw]
            w-[82vw]
            max-h-[780px]
            max-w-[780px]
            sm:h-[720px]
            sm:w-[720px]
          "
        >
          <Canvas
            camera={{
              position: [0, 0, 7],
              fov: 42,
            }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
            }}
          >
            <Scene />
          </Canvas>
        </div>
      </div>

      {/* Vignette */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[8]
        "
        style={{
          background:
            "radial-gradient(circle at center, transparent 15%, rgba(5,5,5,0.12) 45%, rgba(5,5,5,0.75) 100%)",
        }}
      />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[9]
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* FRONT CONTENT */}

      <div
        className="
          relative
          z-[20]
          flex
          min-h-[calc(100svh-5rem)]
          items-center
          justify-center
          px-5
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Top Text */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
              letterSpacing: "0.7em",
            }}
            animate={{
              opacity: 1,
              y: 0,
              letterSpacing: "0.45em",
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="
              mb-5
              pl-[0.45em]
              text-[8px]
              uppercase
              text-white/75
              sm:mb-6
              sm:text-[10px]
            "
          >
            Welcome to the future
          </motion.p>

          {/* Main Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.1,
              delay: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              select-none
              whitespace-nowrap
              text-[18vw]
              font-extralight
              leading-none
              tracking-[0.16em]
              text-white
              drop-shadow-[0_4px_35px_rgba(0,0,0,0.95)]
              sm:text-[110px]
              md:text-[130px]
              lg:text-[155px]
              xl:text-[175px]
            "
          >
            NOVA
          </motion.h1>

          {/* Decorative Line */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 65,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="
              mt-5
              h-px
              bg-gradient-to-r
              from-transparent
              via-violet-400
              to-transparent
            "
          />

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.3,
            }}
            className="
              mt-6
              max-w-[290px]
              text-[10px]
              leading-6
              tracking-[0.08em]
              text-white/55
              sm:max-w-md
              sm:text-[11px]
            "
          >
            Where imagination meets intelligent
            technology.
          </motion.p>

          {/* CTA */}

          <motion.a
            href="#work"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.45,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              mt-8
              flex
              items-center
              gap-3
              border
              border-white/15
              bg-black/30
              px-6
              py-3
              backdrop-blur-xl
              transition
              hover:border-violet-400/40
            "
          >
            <span className="text-[9px] uppercase tracking-[0.25em]">
              Explore
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.3}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Left Message */}

      <motion.div
        initial={{
          opacity: 0,
          x: -25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          absolute
          left-6
          top-1/2
          z-[25]
          hidden
          -translate-y-1/2
          md:block
          lg:left-10
        "
      >
        <div className="max-w-[150px]">
          <div className="mb-4 h-px w-8 bg-violet-400" />

          <p className="text-[9px] uppercase leading-[1.9] tracking-[0.25em] text-white/45 lg:text-[10px]">
            We don't follow
            <br />
            the{" "}
            <span className="text-violet-300">
              future.
            </span>
          </p>
        </div>
      </motion.div>

      {/* Right Message */}

      <motion.div
        initial={{
          opacity: 0,
          x: 25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.1,
        }}
        className="
          absolute
          right-6
          top-1/2
          z-[25]
          hidden
          -translate-y-1/2
          text-right
          md:block
          lg:right-10
        "
      >
        <div className="ml-auto max-w-[150px]">
          <div className="mb-4 ml-auto h-px w-8 bg-blue-400" />

          <p className="text-[9px] uppercase leading-[1.9] tracking-[0.25em] text-white/45 lg:text-[10px]">
            We create
            <br />
            <span className="text-blue-300">
              it.
            </span>
          </p>
        </div>
      </motion.div>

      {/* Top Label */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="
          absolute
          left-1/2
          top-8
          z-[30]
          -translate-x-1/2
        "
      >
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="h-px w-7 bg-white/20" />

          <span className="text-[8px] uppercase tracking-[0.4em] text-white/45 sm:text-[9px]">
            Creative Intelligence
          </span>

          <span className="h-px w-7 bg-white/20" />
        </div>
      </motion.div>

      {/* Floating Label */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
        className="
          absolute
          right-[7%]
          top-[24%]
          z-[30]
          hidden
          lg:block
        "
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />

          <span className="text-[7px] uppercase tracking-[0.2em] text-white/40">
            Enter the future
          </span>

          <ArrowUpRight
            size={10}
            className="text-white/40"
          />
        </div>
      </motion.div>

      {/* Mouse Hint */}

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.6,
        }}
        className="
          absolute
          bottom-10
          right-6
          z-[30]
          hidden
          lg:block
        "
      >
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 backdrop-blur-xl">
          <MousePointer2
            size={12}
            strokeWidth={1.2}
            className="text-violet-300"
          />

          <span className="text-[7px] uppercase tracking-[0.2em] text-white/35">
            Move to explore
          </span>
        </div>
      </motion.div>

      {/* Mobile Scroll */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.7,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-[30]
          flex
          -translate-x-1/2
          flex-col
          items-center
          lg:hidden
        "
      >
        <p className="mb-3 whitespace-nowrap text-[7px] uppercase tracking-[0.3em] text-white/30">
          Explore the possibilities
        </p>

        <motion.a
          href="#work"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/30
            backdrop-blur-xl
          "
        >
          <ArrowDown
            size={15}
            strokeWidth={1.2}
            className="text-white/50"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}

