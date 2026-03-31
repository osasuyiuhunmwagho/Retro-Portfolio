import { useMemo } from "react";
import { motion } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
}

interface Edge {
  from: Node;
  to: Node;
  dist: number;
}

const NODE_COUNT = 40;
const CONNECT_RADIUS = 28;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function buildNetwork() {
  const rand = seededRandom(42);
  const nodes: Node[] = Array.from({ length: NODE_COUNT }, (_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
  }));

  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECT_RADIUS) {
        edges.push({ from: nodes[i], to: nodes[j], dist });
      }
    }
  }

  return { nodes, edges };
}

const SCREEN_Y_ZONES = [18, 38, 62, 82];

function proximityOpacity(
  nodeY: number,
  activeIndex: number | null,
  base: number,
  boost: number,
) {
  if (activeIndex === null) return base;
  const zoneY = SCREEN_Y_ZONES[activeIndex];
  const distance = Math.abs(nodeY - zoneY);
  const factor = Math.max(0, 1 - distance / 30);
  return base + factor * boost;
}

interface NeuralBackgroundProps {
  activeScreen: number | null;
}

export default function NeuralBackground({
  activeScreen,
}: NeuralBackgroundProps) {
  const { nodes, edges } = useMemo(buildNetwork, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map((edge, i) => {
          const midY = (edge.from.y + edge.to.y) / 2;
          const opacity = proximityOpacity(midY, activeScreen, 0.06, 0.18);

          return (
            <motion.line
              key={i}
              x1={edge.from.x}
              y1={edge.from.y}
              x2={edge.to.x}
              y2={edge.to.y}
              stroke="#22c55e"
              strokeWidth={0.15}
              initial={{ opacity: 0.06 }}
              animate={{ opacity }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          );
        })}

        {nodes.map((node) => {
          const opacity = proximityOpacity(node.y, activeScreen, 0.12, 0.5);
          const r = proximityOpacity(node.y, activeScreen, 0.35, 0.4);

          return (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              fill="#22c55e"
              initial={{ opacity: 0.12, r: 0.35 }}
              animate={{ opacity, r }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {/* Slow global pulse */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.04),transparent_70%)]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
