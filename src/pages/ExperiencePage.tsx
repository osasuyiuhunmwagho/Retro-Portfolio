import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExperiencePage() {
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
          Experience
        </h2>
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden pr-1 pb-2 [scrollbar-width:thin]">
        <motion.article
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="rounded border border-emerald-500/15 bg-black/45 p-3"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <a
              href="https://realvictor-website.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group flex shrink-0 flex-col items-center gap-1.5 sm:w-28"
            >
              <div className="flex h-16 w-full items-center justify-center rounded border border-white/10 bg-white/5 p-2 transition group-hover:border-emerald-500/40">
                <img
                  src="/real-victors-logo.png"
                  alt="RealVictors logo"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <span className="text-center font-mono text-[8px] text-emerald-400 underline decoration-emerald-500/40 group-hover:text-emerald-300">
                realvictor-website.vercel.app
              </span>
            </a>
            <div className="min-w-0 flex-1">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wide text-white [text-shadow:0_0_6px_rgba(34,197,94,0.35)]">
                RealVictors
              </h3>
              <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 font-mono text-[7px] uppercase tracking-wider text-emerald-500/85 sm:text-[8px]">
                <span>Co-founder · Sports social platform</span>
                <span className="text-right font-mono text-[7px] normal-case tracking-normal text-neutral-400 sm:text-[8px] sm:whitespace-nowrap">
                  September 2025 – present
                </span>
              </div>
              <p className="mt-1.5 font-sans text-[9px] leading-snug text-neutral-400 sm:text-[10px]">
                I am co-founder of RealVictors. This is a sports-focused mobile app to be launched May
                1st. I help shape product direction, UI polish, and shipping features that connect 
                athletes around the games they care about.
              </p>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="rounded border border-emerald-500/15 bg-black/45 p-3"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <div className="flex shrink-0 flex-col items-center gap-1.5 sm:w-28">
              <div className="flex h-16 w-full items-center justify-center overflow-hidden rounded border border-white/10 bg-[#111]">
                <img
                  src="/FA.png"
                  alt="Founder Athlete"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-500">
                Founder Athlete
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wide text-white [text-shadow:0_0_6px_rgba(34,197,94,0.35)]">
                Founder Athlete
              </h3>
              <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 font-mono text-[7px] uppercase tracking-wider text-emerald-500/85 sm:text-[8px]">
                <span>Full stack developer intern</span>
                <span className="text-right font-mono text-[7px] normal-case tracking-normal text-neutral-400 sm:text-[8px] sm:whitespace-nowrap">
                  Remote (Toronto, Ontario) · June – October 2025
                </span>
              </div>
              <p className="mt-1.5 font-sans text-[9px] leading-snug text-neutral-400 sm:text-[10px]">
                I was a full stack developer intern at Founder Athlete, working on an
                athlete-centered product from the ground up, including the personalized training
                engine, and the personal landing site the platform.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
