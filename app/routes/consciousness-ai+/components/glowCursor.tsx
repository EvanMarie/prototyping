import React, { useEffect, useRef } from "react";

export default function GlowCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      targetPos.current = { x: event.clientX, y: event.clientY };
    };

    const updateCursorPosition = () => {
      cursorPos.current.x += (targetPos.current.x - cursorPos.current.x) * 0.04;
      cursorPos.current.y += (targetPos.current.y - cursorPos.current.y) * 0.04;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      requestAnimationFrame(updateCursorPosition);
    };

    document.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        zIndex: 30,
        pointerEvents: "none",
        width: "70vh",
        height: "70vh",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(140, 19, 240, 0.8) 0%, rgba(140, 19, 240, 0.6) 25%, rgba(140, 19, 240, 0) 50%, rgba(140, 19, 240, 0) 80%, transparent 100%)",
        opacity: 0.3,
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.3s ease-in-out",
        backdropFilter: "blur(10px)",
      }}
    ></div>
  );
}
