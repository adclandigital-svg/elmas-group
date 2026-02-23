"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GalleryPage.css";

gsap.registerPlugin(ScrollTrigger);

export const galleryImages = [
  { title: "27-October-2025", image: "/construction/87.jpeg" },
  { title: "27-October-2025", image: "/construction/86.jpeg" },
  { title: "27-October-2025", image: "/construction/85.jpeg" },
  { title: "27-October-2025", image: "/construction/84.jpeg" },
  { title: "27-October-2025", image: "/construction/83.jpeg" },
  { title: "27-October-2025", image: "/construction/82.jpeg" },
  { title: "27-October-2025", image: "/construction/81.jpeg" },
  { title: "27-October-2025", image: "/construction/80.jpeg" },
  { title: "17-August-2025", image: "/construction/79.jpg" },
  { title: "17-August-2025", image: "/construction/78.jpg" },
  { title: "17-August-2025", image: "/construction/77.jpg" },
  { title: "17-August-2025", image: "/construction/76.jpg" },
  { title: "17-August-2025", image: "/construction/75.jpg" },
  { title: "17-August-2025", image: "/construction/74.jpg" },
  { title: "17-August-2025", image: "/construction/73.jpg" },
  { title: "17-August-2025", image: "/construction/72.jpg" },
  { title: "02-April-2025", image: "/construction/71.jpg" },
  { title: "02-April-2025", image: "/construction/70.jpg" },
  { title: "02-April-2025", image: "/construction/69.jpg" },
  { title: "02-April-2025", image: "/construction/68.jpg" },
  { title: "02-April-2025", image: "/construction/67.jpg" },
  { title: "02-April-2025", image: "/construction/66.jpg" },
  { title: "25-12-2024", image: "/construction/65.jpg" },
  { title: "25-12-2024", image: "/construction/64.jpg" },
  { title: "25-12-2024", image: "/construction/63.jpg" },
  { title: "25-12-2024", image: "/construction/62.jpg" },
  { title: "25-12-2024", image: "/construction/61.jpg" },
  { title: "25-12-2024", image: "/construction/60.jpg" },
  { title: "25-09-2024", image: "/construction/59.jpg" },
  { title: "25-09-2024", image: "/construction/58.jpg" },
  { title: "25-09-2024", image: "/construction/57.jpg" },
  { title: "25-09-2024", image: "/construction/56.jpg" },
  { title: "Tower - C (CORAL)", image: "/construction/55.jpg" },
  { title: "Tower - A (AMBER)", image: "/construction/54.jpg" },
  { title: "Tower - B (BERYL)", image: "/construction/53.jpg" },
  { title: "Tower - D (DIAMOND)", image: "/construction/52.jpg" },
  { title: "Tower - D (DIAMOND)", image: "/construction/51.jpg" },
  { title: "Tower - C (CORAL)", image: "/construction/50.jpg" },
  { title: "Tower - B (BERYL)", image: "/construction/49.jpg" },
  { title: "Tower - A (AMBER)", image: "/construction/48.jpg" },
  { title: "Tower - C (CORAL)", image: "/construction/47.jpg" },
  { title: "Tower - B (BERYL)", image: "/construction/46.jpg" },
  { title: "Sport Area", image: "/construction/45.jpg" },
  { title: "Sport Area", image: "/construction/44.jpg" },
  { title: "Sport Area", image: "/construction/43.jpg" },
  { title: "Sport Area", image: "/construction/42.jpg" },
  { title: "Sport Area", image: "/construction/41.jpg" },
  { title: "Sport Area", image: "/construction/39.jpg" },
  { title: "Sport Area", image: "/construction/28.jpg" },
  { title: "Sport Area", image: "/construction/37.jpg" },
  { title: "Sport Area", image: "/construction/35.jpg" },
  { title: "Sport Area", image: "/construction/34.jpg" },
  { title: "Sport Area", image: "/construction/33.jpg" },
  { title: "Sport Area", image: "/construction/32.jpg" },
  { title: "Sport Area", image: "/construction/31.jpg" },
  { title: "Sport Area", image: "/construction/30.jpg" },
  { title: "Sport Area", image: "/construction/29.jpg" },
  { title: "Sport Area", image: "/construction/28.jpg" },
  { title: "Sport Area", image: "/construction/27.jpg" },
  { title: "Sport Area", image: "/construction/26.jpg" },
  { title: "Sport Area", image: "/construction/25.jpg" },
  { title: "Sport Area", image: "/construction/24.jpg" },
  { title: "Sport Area", image: "/construction/23.jpg" },
  { title: "Sport Area", image: "/construction/22.jpg" },
  { title: "Park", image: "/construction/21.jpg" },
  { title: "Badminton Court", image: "/construction/20.jpg" },
  { title: "Kids Play", image: "/construction/19.jpg" },
  { title: "Kids Play Area", image: "/construction/18.jpg" },
  { title: "Swimming Pool", image: "/construction/17.jpg" },
  { title: "Swimming Pool", image: "/construction/16.jpg" },
  { title: "Lift Area", image: "/construction/15.jpg" },
  { title: "Bed Room", image: "/construction/14.jpg" },
  { title: "Dining Area", image: "/construction/13.jpg" },
  { title: "Shopping Complex", image: "/construction/10.3.jpg" },
  { title: "Shopping Complex", image: "/construction/10.2.jpg" },
  { title: "Shopping Complex", image: "/construction/10.1.jpg" }
];

export default function GalleryPage() {
  const blogsPerPage = 8;
  const [modalImage, setModalImage] = useState(null);
  const imageRefs = useRef([]);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    imageRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    const overlays = gsap.utils.toArray(".gallery-reveal");
    gsap.set(overlays, { transformOrigin: "top" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 85%",
          end: "bottom 10%",
        },
      })
      .fromTo(
        overlays,
        { scaleY: 1 },
        { scaleY: 0, duration: 0.6, ease: "power3.out", stagger: 0.09 },
      );
  }, []);

  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <h1>
          <span>Project Construction Updates</span>
        </h1>
        <p>
          Track the latest development progress across all our ongoing projects.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages?.map((img, i) => (
          <div
            className="gallery-card"
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            onClick={() => openModal(img)}
          >
            <img src={img.image} alt={img.title} loading="lazy" />
            {/* <span className="gallery-reveal"></span> */}
            <div className="gallery-overlay">
              <h3>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.image} alt={modalImage.title} />
            <h3>{modalImage.title}</h3>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
