"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./projectspecification.css"

gsap.registerPlugin(ScrollTrigger);

const specs = [
  {
    title: "Project Overview",
    items: [
      "Prime City Location",
      "Spread Across 8+ Acres",
      "RERA Registered Project",
      "2/3/4 BHK Residences",
    ],
  },
  {
    title: "Apartment Specifications",
    items: [
      "Premium Vitrified Flooring",
      "Modular Kitchen Provision",
      "UPVC Windows",
      "Designer Bathrooms",
    ],
  },
  {
    title: "Structure & Material",
    items: [
      "Earthquake Resistant RCC Structure",
      "AAC Block Walls",
      "Weatherproof External Paint",
    ],
  },
  {
    title: "Amenities & Lifestyle",
    items: [
      "Clubhouse & Swimming Pool",
      "Gym & Yoga Studio",
      "Kids Play Area",
      "Jogging Track",
    ],
  },
];

export default function ProjectSpecifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".spec-card");

    gsap.from(cards, {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="spec-section" ref={sectionRef}>
      <h2 className="spec-title">Project Specifications</h2>

      <div className="spec-grid">
        {specs.map((block, i) => (
          <div key={i} className="spec-card">
            <h3>{block.title}</h3>
            <ul>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
