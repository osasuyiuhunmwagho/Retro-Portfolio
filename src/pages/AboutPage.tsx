import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MailIcon from "../components/MailIcon";
import { CONTACT_EMAIL, GITHUB_PROFILE } from "../constants/contact";

export default function AboutPage() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col px-4 py-4 text-left">
      <Link
        to="/"
        className="mb-3 inline-block shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/90 [text-shadow:0_0_6px_rgba(34,197,94,0.4)] hover:text-emerald-300"
      >
        ← Home
      </Link>

      <div className="flex shrink-0 items-start justify-between gap-2">
        <h2 className="min-w-0 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white [text-shadow:0_0_8px_rgba(34,197,94,0.45)] sm:text-base">
          About / Contact
        </h2>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-sm border border-emerald-500/35 bg-black/50 px-2.5 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-emerald-400 [text-shadow:0_0_8px_rgba(34,197,94,0.25)] transition hover:border-emerald-400/55 hover:bg-black/70 hover:text-emerald-300 sm:text-[9px]"
          >
            Contact ↓
          </button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-emerald-500/35 bg-black/50 text-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.15)] transition hover:border-emerald-400/55 hover:bg-black/70 hover:text-emerald-300"
            aria-label={`Send email to ${CONTACT_EMAIL}`}
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-3 min-h-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden pr-1 pb-2 [scrollbar-width:thin]">
        <motion.p
          className="font-sans text-[10px] leading-relaxed text-neutral-300 sm:text-[11px]"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          My name is <span className="font-semibold text-neutral-200">Osasuyi Uhunmwagho</span>
          . I&apos;m a third-year Computer Science (Honours) student specializing in Machine Learning
          and Artificial Intelligence, focused on building software that is both useful and thoughtfully
          designed.
        </motion.p>

        <motion.div
          className="rounded border border-emerald-500/10 bg-black/30 p-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/75">
            Why tech
          </p>
          <p className="font-sans text-[10px] leading-relaxed text-neutral-300 sm:text-[11px]">
            I chose this field because it lets you take an idea and turn it into something real that. This stems from a passion of creation and growing to solving complex problems(in Maths, Physics,etc.) generally. 
          
          </p>
        </motion.div>

        <motion.div
          className="rounded border border-emerald-500/10 bg-black/30 p-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/75">
            Away from the keyboard
          </p>
          <ul className="list-inside list-disc space-y-1.5 font-sans text-[10px] leading-relaxed text-neutral-300 marker:text-emerald-600/70 sm:text-[11px]">
            <li>
              Graphic Design
            </li>
            <li>
               Soccer
            </li>
            <li>
              tennis; regular 5K runs for fitness and headspace
            </li>

          </ul>
        </motion.div>

        <motion.div
          ref={contactRef}
          id="contact"
          className="scroll-mt-2 rounded border border-emerald-500/15 bg-black/45 p-3"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/80">
            Contact
          </p>
          <p className="font-sans text-[10px] text-neutral-400 sm:text-[11px]">
            Email — opens your mail app:
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-1 inline-block break-all font-mono text-[10px] text-emerald-400 underline decoration-emerald-500/50 underline-offset-2 [text-shadow:0_0_8px_rgba(34,197,94,0.25)] hover:text-emerald-300 sm:text-[11px]"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-3 font-sans text-[10px] text-neutral-400 sm:text-[11px]">
            GitHub:
          </p>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block break-all font-mono text-[10px] text-emerald-400 underline decoration-emerald-500/50 underline-offset-2 hover:text-emerald-300 sm:text-[11px]"
          >
            {GITHUB_PROFILE}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
