import { Link, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import MailIcon from "../components/MailIcon";
import { CONTACT_EMAIL } from "../constants/contact";
import type { MonitorOutletContext } from "../monitorOutletContext";

const NAV_ITEMS: readonly {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About Me / Contact", href: "/about" },
];

export default function HomeScreen() {
  const { setHoveredNav } = useOutletContext<MonitorOutletContext>();

  return (
    <div className="relative h-full min-h-0 w-full">
      <motion.a
        href={`mailto:${CONTACT_EMAIL}`}
        className="absolute top-2 right-2 z-10 flex items-center gap-1.5 rounded-md border border-emerald-500/35 bg-black/55 px-2 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-emerald-400 shadow-[0_0_14px_rgba(34,197,94,0.25)] backdrop-blur-[2px] transition hover:border-emerald-400/55 hover:bg-black/75 hover:text-emerald-300 sm:top-3 sm:right-3 sm:gap-2 sm:px-2.5 sm:py-2 sm:text-[9px]"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onHoverStart={() => setHoveredNav(3)}
        onHoverEnd={() => setHoveredNav(null)}
        aria-label={`Email ${CONTACT_EMAIL}`}
      >
        <MailIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
        <span className="leading-none">Contact</span>
      </motion.a>

      <div className="flex h-full min-h-0 flex-col items-center justify-center gap-4 px-4 py-4 sm:gap-5">
      {NAV_ITEMS.map((item, index) => {
        const label = (
          <span className="inline-block rounded-md border border-emerald-500/20 bg-black/40 px-4 py-2.5 font-sans text-[clamp(0.75rem,1.8vw,1.05rem)] font-bold uppercase tracking-wider text-white transition-all duration-300 [text-shadow:0_0_8px_#22c55e,0_0_20px_rgba(34,197,94,0.4)] group-hover:border-emerald-400/50 group-hover:bg-black/60 group-hover:[text-shadow:0_0_12px_#22c55e,0_0_30px_#22c55e,0_0_50px_rgba(34,197,94,0.5)] sm:px-6 sm:py-3 sm:text-[clamp(0.9rem,2vw,1.2rem)]">
            {item.label}
          </span>
        );

        if (item.external) {
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block w-full max-w-xs text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onHoverStart={() => setHoveredNav(index)}
              onHoverEnd={() => setHoveredNav(null)}
            >
              {label}
            </motion.a>
          );
        }

        return (
          <motion.div
            key={item.label}
            className="group relative w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setHoveredNav(index)}
            onHoverEnd={() => setHoveredNav(null)}
          >
            <Link to={item.href} className="block">
              {label}
            </Link>
          </motion.div>
        );
      })}
      </div>
    </div>
  );
}
