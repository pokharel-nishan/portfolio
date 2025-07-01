import { useEffect, useRef } from "react";

const STAR_COUNT = 120;
const STAR_COLORS = {
  dark: [
    "rgba(255,255,255,0.85)", // white
    "rgba(167,139,250,0.7)", // purple
    "rgba(96,165,250,0.7)", // blue
    "rgba(251,191,36,0.6)", // gold
  ],
  light: [
    "rgba(80,80,100,0.7)", // soft gray
    "rgba(167,139,250,0.6)", // purple
    "rgba(96,165,250,0.6)", // blue
    "rgba(251,191,36,0.5)", // gold
  ],
};

function getTheme() {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }
  return "dark";
}

function randomStar(width, height, starColors) {
  return {
    x: (Math.random() - 0.5) * width,
    y: (Math.random() - 0.5) * height,
    z: Math.random() * width,
    color:
      Math.random() < 0.15
        ? starColors[Math.floor(Math.random() * starColors.length)]
        : starColors[0],
    size: Math.random() * 1.5 + 1.5,
  };
}

export const StarBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let centerX = width / 2;
    let centerY = height / 2;
    let fov = width;
    let speed = 2.2;

    function getStarColors() {
      // Always get the current theme
      const theme = getTheme();
      return STAR_COLORS[theme];
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      canvas.width = width;
      canvas.height = height;
      // Always use the current theme's colors
      starsRef.current = Array.from({ length: STAR_COUNT }, () =>
        randomStar(width, height, getStarColors())
      );
    }

    resize();

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let star of starsRef.current) {
        star.z -= speed;
        if (star.z < 1) {
          // Always use the current theme's colors
          Object.assign(star, randomStar(width, height, getStarColors()));
          star.z = width;
        }
        const k = fov / star.z;
        const sx = star.x * k + centerX;
        const sy = star.y * k + centerY;
        const starSize = star.size * k * 0.7;
        ctx.beginPath();
        ctx.arc(sx, sy, starSize, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 12 * k;
        ctx.globalAlpha = Math.min(1, k * 0.7);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      resize(); // Regenerate stars with the new theme's colors
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
        background: "transparent",
      }}
    />
  );
};
