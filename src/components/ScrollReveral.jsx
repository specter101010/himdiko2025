import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealBlock = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  start = 'top bottom',
  end = 'bottom center',
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start,
        end,
        scrub: true,
      },
    });

    timeline.fromTo(
      el,
      {
        opacity: baseOpacity,
        rotate: baseRotation,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
        transformOrigin: 'center center',
      },
      {
        opacity: 1,
        rotate: 0,
        filter: 'blur(0px)',
        ease: 'power2.out',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseOpacity, baseRotation, blurStrength, start, end]);

  return (
    <div ref={containerRef} className={containerClassName}>
      {children}
    </div>
  );
};

export default ScrollRevealBlock;
