import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoAnimated = ({ src, alt, className = "w-80" }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const el = logoRef.current;

    gsap.fromTo(
      el,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // mulai saat logo 80% masuk viewport
          end: "bottom 10%", // hilang saat 10% masih di viewport
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return <img ref={logoRef} src={src} alt={alt} className={className} />;
};

export default LogoAnimated;
