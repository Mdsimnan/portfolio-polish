import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setTrailing((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [pos]);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          width: 6,
          height: 6,
          left: pos.x - 3,
          top: pos.y - 3,
          background: "hsl(170 100% 50%)",
          boxShadow: "0 0 8px hsl(170 100% 50% / 0.8)",
          transition: "none",
        }}
      />
      {/* Trailing glow ring */}
      <div
        className="fixed z-[9998] pointer-events-none rounded-full"
        style={{
          width: 32,
          height: 32,
          left: trailing.x - 16,
          top: trailing.y - 16,
          border: "1.5px solid hsl(170 100% 50% / 0.4)",
          boxShadow: "0 0 15px hsl(170 100% 50% / 0.15)",
          transition: "none",
        }}
      />
    </>
  );
};

export default CustomCursor;
