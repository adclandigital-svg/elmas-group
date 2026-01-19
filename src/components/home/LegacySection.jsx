"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LegacySection.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { count: 50, label: "Completed Projects" },
  { count: 70, label: "Years Experience" },
  { count: 15, label: "Lakh sq.m Delivered" },
  { count: 14, label: "Awards Won" },
];

const images = [
  "/assets/luxury-modern-living-room-with-elegant-decor-generated-by-ai.jpg",
  "/assets/modern-living-room-with-sectional-sofa-fireplace.jpg",
  "/assets/interior-design-neoclassical-style-with-furnishings-decor.jpg",
];

export default function LuxurySectionRedesign() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const section = sectionRef.current;

    // Animate counters when in view
    countersRef.current.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => {
          gsap.to(el, {
            innerText: el.dataset.count,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.out",
          });
        },
      });
    });

    // Animate title
    gsap.from(".luxury-title", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="luxury-section-redesign">
      {/* Hero Title */}
      <div className="hero-content">
        <h2 className="luxury-title">Our Legacy in Design & Living</h2>
      </div>

      {/* Image Slider */}
      <div className="luxury-slider">
        {images.map((src, i) => (
          <div
            key={i}
            className={`luxury-slide ${i === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
        <div className="slider-overlay"></div>
      </div>

      {/* Stats / Diamonds */}
      <div className="luxury-stats">
        {stats.map((item, i) => (
          <div key={i} className="diamond-card">
            <div className="diamond">
              <img src="/assets/dimond stroke pngs.png" alt="diamond" />
            </div>
            <h1>
              <span
                data-count={item.count}
                ref={(el) => el && countersRef.current.push(el)}
              >
                0
              </span>
              <span className="plus">+</span>
            </h1>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
