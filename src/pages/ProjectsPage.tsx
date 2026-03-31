import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Skin Cancer Detector",
    tag: "COMP 3106 · PyTorch · ResNet18",
    blurb:
      "Team project: deep learning agent for skin lesion images — benign vs malignant with transfer learning, augmentation, and evaluation metrics on HAM-style data.",
    href: "https://github.com/2025F-COMP3106/project-group-41",
    image: "/CancerTron.png",
    imageAlt: "Cancer-Tron 3000 project artwork",
  },
  {
    title: "Debunk — SMC Trading Strategy",
    tag: "Python · Interactive Brokers",
    blurb:
      "Algorithmic trading system using Smart Money Concepts: multi-timeframe bias, confluence, and a staged decision pipeline with real broker data.",
    href: "https://github.com/osasuyiuhunmwagho/SMC-algorithm",
    image: "/Debunked-smc.png",
    imageAlt: "Debunk SMC strategy preview",
  },
  {
    title: "AGI Hackathon — Web3 Invoicing",
    tag: "React · TypeScript · Stripe · Solana",
    blurb:
      "Hackathon build: invoices with traditional and crypto pay flows — dashboard, Supabase backend, and dual payment rails.",
    href: "https://github.com/osasuyiuhunmwagho/AI-Thinkerers-hackathon-2025",
    image: "/AGI-hackathon.png",
    imageAlt: "AGI hackathon project",
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="flex h-full min-h-0 flex-col px-3 py-3 sm:px-4 sm:py-4">
      <div className="mb-2 shrink-0">
        <Link
          to="/"
          className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/90 [text-shadow:0_0_6px_rgba(34,197,94,0.4)] hover:text-emerald-300"
        >
          ← Home
        </Link>
        <h2 className="mt-2 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white [text-shadow:0_0_8px_rgba(34,197,94,0.45)] sm:text-base">
          Projects
        </h2>
        <p className="mt-1 font-sans text-[10px] leading-snug text-neutral-500 sm:text-[11px]">
          GitHub opens in a new tab.
        </p>
      </div>

      <ul className="min-h-0 flex-1 space-y-3 overflow-y-auto overflow-x-hidden pr-1 pb-2 [scrollbar-width:thin]">
        {PROJECTS.map((project, i) => (
          <motion.li
            key={project.href}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex gap-2 rounded border border-emerald-500/15 bg-black/45 p-2 transition hover:border-emerald-400/35 sm:gap-3 sm:p-3"
            >
              <div className="h-16 w-20 shrink-0 overflow-hidden rounded border border-white/10 bg-[#111] sm:h-[4.5rem] sm:w-24">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-sans text-[11px] font-bold uppercase leading-tight tracking-wide text-white [text-shadow:0_0_6px_rgba(34,197,94,0.35)] sm:text-xs">
                  {project.title}
                </h3>
                <p className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-emerald-500/85 sm:text-[9px]">
                  {project.tag}
                </p>
                <p className="mt-1 font-sans text-[9px] leading-snug text-neutral-400 sm:text-[10px]">
                  {project.blurb}
                </p>
                <span className="mt-1 inline-block font-mono text-[8px] text-emerald-400 underline decoration-emerald-500/40 underline-offset-1 group-hover:text-emerald-300 sm:text-[9px]">
                  GitHub →
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
