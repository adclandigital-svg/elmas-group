"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // ✅ default import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Animate all float images
    const images = gsap.utils.toArray(".float-img");
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { y: -100 },
        {
          y: 100,
          ease: "linear",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  return null;
}
