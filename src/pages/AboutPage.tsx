import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EMAIL = "osasuyiuhunmwagho@cmail.carleton.ca";
const GITHUB = "https://github.com/osasuyiuhunmwagho";

export default function AboutPage() {
  return (
    <div className="flex h-full min-h-0 flex-col px-4 py-4 text-left">
      <Link
        to="/"
        className="mb-3 inline-block shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/90 [text-shadow:0_0_6px_rgba(34,197,94,0.4)] hover:text-emerald-300"
      >
        ← Home
      </Link>
      <h2 className="shrink-0 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white [text-shadow:0_0_8px_rgba(34,197,94,0.45)] sm:text-base">
        About / Contact
      </h2>

      <div className="mt-3 min-h-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden pr-1 pb-2 [scrollbar-width:thin]">
        <motion.p
          className="font-sans text-[10px] leading-relaxed text-neutral-300 sm:text-[11px]"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          My name is <span className="font-semibold text-neutral-200">Osasuyi Uhunmwagho</span>
          . I&apos;m a third-year Computer Science (Honours) student — for now, focused on
          building useful software and creative experiences.
        </motion.p>

        <motion.div
          className="rounded border border-emerald-500/15 bg-black/45 p-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/80">
            Contact
          </p>
          <p className="font-sans text-[10px] text-neutral-400 sm:text-[11px]">
            Email — opens your mail app:
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-1 inline-block break-all font-mono text-[10px] text-emerald-400 underline decoration-emerald-500/50 underline-offset-2 [text-shadow:0_0_8px_rgba(34,197,94,0.25)] hover:text-emerald-300 sm:text-[11px]"
          >
            {EMAIL}
          </a>
          <p className="mt-3 font-sans text-[10px] text-neutral-400 sm:text-[11px]">
            GitHub:
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block break-all font-mono text-[10px] text-emerald-400 underline decoration-emerald-500/50 underline-offset-2 hover:text-emerald-300 sm:text-[11px]"
          >
            {GITHUB}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
