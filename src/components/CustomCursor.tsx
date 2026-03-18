import { useEffect, useRef } from "react";

interface Trail {
  x: number;
  y: number;
  alpha: number;
  radius: number;
}

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const smoothMouse = useRef({ x: -100, y: -100 });
  const trails = useRef<Trail[]>([]);
  const visible = useRef(false);

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
      visible.current = true;
    };

    const handleLeave = () => { visible.current = false; };
    const handleEnter = () => { visible.current = true; };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follow
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.15;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.15;

      if (visible.current) {
        // Add trail particles
        trails.current.push({
          x: smoothMouse.current.x,
          y: smoothMouse.current.y,
          alpha: 0.6,
          radius: 3,
        });

        // Limit trail length
        if (trails.current.length > 25) trails.current.shift();

        // Draw trails
        for (let i = 0; i < trails.current.length; i++) {
          const t = trails.current[i];
          t.alpha -= 0.025;
          t.radius *= 0.96;

          if (t.alpha <= 0) {
            trails.current.splice(i, 1);
            i--;
            continue;
          }

          ctx.beginPath();
          ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(170, 100%, 50%, ${t.alpha})`;
          ctx.fill();
        }

        // Draw outer ring
        ctx.beginPath();
        ctx.arc(smoothMouse.current.x, smoothMouse.current.y, 16, 0, Math.PI * 2);
        ctx.strokeStyle = "hsla(170, 100%, 50%, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Glow around ring
        ctx.beginPath();
        ctx.arc(smoothMouse.current.x, smoothMouse.current.y, 18, 0, Math.PI * 2);
        ctx.strokeStyle = "hsla(170, 100%, 50%, 0.1)";
        ctx.lineWidth = 4;
        ctx.stroke();

        // Inner dot at actual mouse position
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(170, 100%, 50%)";
        ctx.shadowColor = "hsl(170, 100%, 50%)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ cursor: "none" }}
    />
  );
};

export default CustomCursor;
