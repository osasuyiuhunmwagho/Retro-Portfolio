import { useRef, useEffect, useCallback } from "react";

const CANVAS_SIZE = 128;
const FPS = 18;

export default function TVStatic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameId = useRef(0);
  const lastDraw = useRef(0);

  const drawNoise = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(CANVAS_SIZE, CANVAS_SIZE);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const val = Math.random() > 0.5 ? 255 : 0;
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
      data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  useEffect(() => {
    const interval = 1000 / FPS;

    const loop = (timestamp: number) => {
      if (timestamp - lastDraw.current >= interval) {
        drawNoise();
        lastDraw.current = timestamp;
      }
      frameId.current = requestAnimationFrame(loop);
    };

    frameId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId.current);
  }, [drawNoise]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      className="absolute inset-0 h-full w-full [image-rendering:pixelated]"
    />
  );
}
