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
      cursorPos.current.x +=
        (targetPos.current.x - cursorPos.current.x) * 0.035;
      cursorPos.current.y +=
        (targetPos.current.y - cursorPos.current.y) * 0.035;

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
        zIndex: 50,
        pointerEvents: "none",
        width: "60vh",
        height: "60vh",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(110, 37, 153, 0.7) 0%, rgba(90, 38, 120, 0.7) 25%, rgba(73, 0, 115, 0.3) 50%, rgba(0, 0, 0, 0) 80%)",
        opacity: 0.3,
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.3s ease-in-out",
      }}
    ></div>
  );
}

// position: "fixed",
//     zIndex: 50,
//     pointerEvents: "none",
//     width: "60vh",
//     height: "60vh",
//     borderRadius: "50%",
//     background:
//       "radial-gradient(circle, rgba(51, 11, 74, 0.8) 0%, rgba(95, 35, 130, 0.6) 0%, rgba(73, 0, 115, 0.2) 50%, rgba(0, 0, 0, 0) 80%)",
//     opacity: 0.3,
//     transform: "translate(-50%, -50%)",
