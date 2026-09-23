"use client";

import { useEffect, useState, useRef } from "react";

export interface CursorContextState {
  type: "default" | "button" | "image" | "muscle";
  label?: string;
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<CursorContextState>({
    type: "default",
  });
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  useEffect(() => {
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    const updatePosition = () => {
      posRef.current.x += (posRef.current.targetX - posRef.current.x) * 0.18;
      posRef.current.y += (posRef.current.targetY - posRef.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const muscleTarget = target.closest("[data-cursor-muscle]");
      if (muscleTarget) {
        const muscleName = muscleTarget.getAttribute("data-cursor-muscle") || "TƯ THẾ";
        setCursorState({ type: "muscle", label: muscleName });
        return;
      }

      const imageTarget = target.closest("[data-cursor-image]");
      if (imageTarget) {
        setCursorState({ type: "image", label: "CHI TIẾT" });
        return;
      }

      const buttonTarget = target.closest("button, a, [data-cursor-button]");
      if (buttonTarget) {
        setCursorState({ type: "button" });
        return;
      }

      setCursorState({ type: "default" });
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  const isButton = cursorState.type === "button";
  const isImage = cursorState.type === "image";
  const isMuscle = cursorState.type === "muscle";

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform flex items-center justify-center transition-[width,height,background-color,border-color] duration-300 ease-out rounded-full"
      style={{
        width: isImage || isMuscle ? "auto" : isButton ? "44px" : "9px",
        height: isImage || isMuscle ? "auto" : isButton ? "44px" : "9px",
        padding: isImage || isMuscle ? "6px 14px" : "0",
        backgroundColor: isImage || isMuscle
          ? "#C58F78"
          : isButton
          ? "rgba(212, 163, 115, 0.15)"
          : "#C58F78",
        border: isButton ? "1px solid #D4A373" : "none",
        boxShadow: isButton || isMuscle || isImage
          ? "0 4px 20px rgba(197, 143, 120, 0.35)"
          : "0 2px 10px rgba(197, 143, 120, 0.4)",
      }}
    >
      {(isImage || isMuscle) && (
        <span
          ref={labelRef}
          className="font-sans-clean font-semibold text-[11px] tracking-wider text-white uppercase select-none whitespace-nowrap"
        >
          {cursorState.label}
        </span>
      )}
    </div>
  );
}
