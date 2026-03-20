import { useEffect, useRef } from "react";

interface CursorParticle {
  x: number;
  y: number;
  size: number;
}

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const trail = useRef<CursorParticle[]>([]);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follow (lerp)
      current.current.x += (mouse.current.x - current.current.x) * 0.15;
      current.current.y += (mouse.current.y - current.current.y) * 0.15;

      trail.current.push({
        x: current.current.x,
        y: current.current.y,
        size: 2,
      });

      if (trail.current.length > 25) {
        trail.current.shift();
      }

      // Draw trail particles and connecting lines
      for (let i = 0; i < trail.current.length; i++) {
        const p = trail.current[i];

        ctx.fillStyle = "#37e2ff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (i > 0) {
          ctx.strokeStyle = "rgba(55,226,255,0.4)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(trail.current[i - 1].x, trail.current[i - 1].y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CustomCursor;
