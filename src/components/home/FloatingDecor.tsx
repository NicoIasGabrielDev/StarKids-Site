"use client";

import { useMemo } from "react";

type Star = { top: number; left: number; size: number; delay: number; dur: number; color: string };
type Music = { top: number; left: number; size: number; delay: number; dur: number; color: string; icon: string };

export default function FloatingDecor() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 10 + Math.random() * 20,
      delay: Math.random() * 3,
      dur: 3 + Math.random() * 4,
      color: Math.random() > 0.5 ? "#FCD34D" : "#60A5FA",
    }));
  }, []);

  const musicIcons = useMemo<Music[]>(() => {
    const icons = ["🎵", "🎶", "🎼", "🎹", "🎸", "🎺", "🎻", "🥁", "🎤", "🎧"];
    const colors = ["#3B82F6", "#FCD34D", "#60A5FA", "#FBBF24"];

    return icons.map((icon) => ({
      icon,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 3,
      dur: 6 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((s, i) => (
        <div
          key={`bg-star-${i}`}
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            color: s.color,
            animation: `twinkleBackground ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          ⭐
        </div>
      ))}

      {musicIcons.map((m, i) => (
        <div
          key={`bg-music-${i}`}
          className="absolute opacity-15"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            fontSize: `${m.size}px`,
            color: m.color,
            animation: `floatBackground ${m.dur}s ease-in-out ${m.delay}s infinite`,
          }}
        >
          {m.icon}
        </div>
      ))}
    </div>
  );
}
