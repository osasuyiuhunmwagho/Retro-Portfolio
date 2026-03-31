import { motion } from "framer-motion";
import TVStatic from "./TVStatic";

interface TVScreenProps {
  label: string;
  sublabel: string;
  href: string;
  top: string;
  left: string;
  width: string;
  height: string;
  clip: string;
  index: number;
  external?: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function TVScreen({
  label,
  sublabel,
  href,
  top,
  left,
  width,
  height,
  clip,
  index,
  external = false,
  onHoverStart,
  onHoverEnd,
}: TVScreenProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group absolute flex items-center justify-center overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      style={{ top, left, width, height, clipPath: clip }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.45 }}
      whileHover={{ scale: 1.04, zIndex: 30 }}
      whileTap={{ scale: 1.08, zIndex: 30 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      aria-label={label}
    >
      {/* Black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated static noise with jitter + flicker */}
      <motion.div
        className="absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-40"
        animate={{
          x: [0, -1.5, 1, -0.5, 1.5, 0],
          y: [0, 0.8, -1, 0.5, -0.8, 0],
          opacity: [0.6, 0.75, 0.55, 0.7, 0.58, 0.65],
        }}
        transition={{ duration: 0.35, repeat: Infinity, ease: "linear" }}
      >
        <TVStatic />
      </motion.div>

      {/* Text — stays readable on top of static */}
      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-3 text-center"
        animate={{ x: [0, -0.7, 0.7, 0], opacity: [0.92, 1, 0.9, 1] }}
        transition={{ duration: 0.22, repeat: Infinity, ease: "linear" }}
      >
        <span className="font-sans text-[clamp(0.95rem,2.4vw,1.4rem)] font-bold uppercase tracking-wide text-white [text-shadow:0_0_8px_#22c55e,0_0_20px_#22c55e,0_0_40px_rgba(34,197,94,0.5)]">
          <span className="inline group-hover:hidden">{label}</span>
          <span className="hidden group-hover:inline">{sublabel}</span>
        </span>
      </motion.div>
    </motion.a>
  );
}
