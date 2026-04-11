import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import NeuralBackground from "../NeuralBackground";
import type { MonitorOutletContext } from "../monitorOutletContext";

const SCREEN_STYLE = { top: "6%", left: "9%", width: "84%", height: "76%" } as const;

/** Power button: all values are % of the monitor frame (the box that matches Monitor.png). Scales with the image — not with viewport breakpoints. */
const POWER_BUTTON = {
  bottom: "0.2%",
  left: "18%",
  width: "36%",
  height: "6.5%",
} as const;

type MonitorPowerContextValue = {
  isOn: boolean;
  setOn: (value: boolean) => void;
  toggle: () => void;
};

const MonitorPowerContext = createContext<MonitorPowerContextValue | null>(null);

export function useMonitorPower() {
  const ctx = useContext(MonitorPowerContext);
  if (!ctx) {
    throw new Error("useMonitorPower must be used within MonitorLayout");
  }
  return ctx;
}

export default function MonitorLayout() {
  const location = useLocation();
  /** Fresh visit / full reload: screen starts off; user powers on (state lives for SPA session only). */
  const [isOn, setOn] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const fade = reduceMotion ? 0 : 0.25;

  const toggle = () => setOn((v) => !v);

  useEffect(() => {
    if (location.pathname !== "/") {
      setHoveredNav(null);
    }
  }, [location.pathname]);

  return (
    <MonitorPowerContext.Provider value={{ isOn, setOn, toggle }}>
      <section className="relative h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]">
        <div
          className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out ${
            isOn ? "opacity-100" : "opacity-[0.22]"
          }`}
          aria-hidden
        >
          <NeuralBackground activeScreen={hoveredNav} />
        </div>

        <motion.div
          className="relative z-10 flex h-full min-h-0 w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-fit max-h-[100dvh] max-w-[100vw]">
            <img
              src="/Monitor.png"
              alt=""
              className="relative z-10 block max-h-[100dvh] max-w-[100vw] h-auto w-auto select-none object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] pointer-events-none"
              draggable={false}
            />

            {/* Power: size/position = POWER_BUTTON (% of monitor frame). Edit POWER_BUTTON above. */}
            <button
              type="button"
              onClick={toggle}
              aria-pressed={isOn}
              aria-label={isOn ? "Turn monitor off" : "Turn monitor on"}
              className="absolute z-40 flex items-center justify-center overflow-hidden rounded-sm border border-neutral-600/90 bg-gradient-to-b from-neutral-500 to-neutral-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_8px_rgba(0,0,0,0.65)] transition hover:brightness-110 active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:opacity-[0.5] before:mix-blend-overlay before:bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_2px),repeating-linear-gradient(90deg,rgba(0,0,0,0.2)_0,rgba(0,0,0,0.2)_1px,transparent_1px,transparent_3px),repeating-linear-gradient(45deg,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_4px),radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.14),transparent_40%)] after:pointer-events-none after:absolute after:inset-0 after:opacity-[0.35] after:mix-blend-soft-light after:bg-[repeating-linear-gradient(0deg,transparent_0,transparent_2px,rgba(255,255,255,0.04)_2px,rgba(255,255,255,0.04)_3px)]"
              style={POWER_BUTTON}
            >
              <span
                className={`relative z-10 h-[min(42%,0.5rem)] w-[min(42%,0.5rem)] min-h-[6px] min-w-[6px] shrink-0 rounded-full shadow-sm ${
                  isOn
                    ? "bg-emerald-400 shadow-[0_0_8px_#22c55e]"
                    : "bg-red-950/90 ring-1 ring-red-900/80"
                }`}
              />
              <span className="sr-only">{isOn ? "On" : "Off"}</span>
            </button>

            {/* Screen */}
            <div
              className="absolute z-20 flex flex-col overflow-hidden rounded-sm"
              style={SCREEN_STYLE}
            >
              <div className="absolute inset-0 bg-[#050505]" />

              <AnimatePresence mode="wait">
                {isOn ? (
                  <motion.div
                    key="on"
                    className="relative z-10 flex h-full min-h-0 w-full flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: fade }}
                  >
                    <div className="absolute inset-0 z-0">
                      <NeuralBackground activeScreen={hoveredNav} />
                    </div>
                    <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
                      <Outlet
                        context={
                          { setHoveredNav } satisfies MonitorOutletContext
                        }
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="off"
                    className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-[#0a0a0a]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  >
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600"
                      role="status"
                      aria-live="polite"
                    >
                      No signal
                    </p>
                    <p className="mt-2 font-sans text-xs text-neutral-500">
                      Press the power button below to turn on
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>
    </MonitorPowerContext.Provider>
  );
}
