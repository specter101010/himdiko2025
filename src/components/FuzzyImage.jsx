import React, { useEffect, useRef } from "react";

const FuzzyImage = ({
  src,
  width = 100,
  height = 100,
  baseIntensity = 0,
  hoverIntensity = 0.4,
  enableHover = true,
}) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    let animationId;
    let isHovering = false;
    let isCancelled = false;

    image.src = src;

    const draw = () => {
      if (isCancelled || !ctx || !image.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const intensity = isHovering ? hoverIntensity : baseIntensity;
      const fuzzRange = 10;

      for (let y = 0; y < height; y++) {
        const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
        ctx.drawImage(image, 0, y, width, 1, dx, y, width, 1);
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    image.onload = () => {
      if (!canvas) return;
      canvas.width = width;
      canvas.height = height;

      draw();

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
      }
    };

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationId);
      if (enableHover) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [src, width, height, baseIntensity, hoverIntensity, enableHover]);

  return <canvas ref={canvasRef} style={{ width, height }} />;
};

export default FuzzyImage;
