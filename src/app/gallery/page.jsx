"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GalleryPage.css";

gsap.registerPlugin(ScrollTrigger);

export const galleryImages = [
  { title: "Sport Area", image: "/springelmas_gallery/1.jpg" },
  { title: "Park", image: "/springelmas_gallery/2.jpg" },
  { title: "Badminton Court", image: "/springelmas_gallery/3.jpg" },
  { title: "Kids Play", image: "/springelmas_gallery/4.jpg" },
  { title: "Kids Play Area", image: "/springelmas_gallery/5.jpg" },
  { title: "Swimming Pool", image: "/springelmas_gallery/6.jpg" },
  { title: "Swimming Pool View", image: "/springelmas_gallery/7.jpg" },
  { title: "Lift Area", image: "/springelmas_gallery/8.jpg" },
  { title: "Bed Room", image: "/springelmas_gallery/9.jpg" },
  { title: "Dining Area", image: "/springelmas_gallery/10.jpg" },
  { title: "Shopping Complex", image: "/springelmas_gallery/11.jpg" },
  { title: "Shopping Complex Exterior", image: "/springelmas_gallery/12.jpg" }
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
        }
      );
    });

    const overlays = gsap.utils.toArray(".gallery-reveal");
    gsap.set(overlays, { transformOrigin: "top" });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top 85%",
        end: "bottom 10%",
      },
    }).fromTo(
      overlays,
      { scaleY: 1 },
      { scaleY: 0, duration: 0.6, ease: "power3.out", stagger: 0.09 }
    );
  }, []);

  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <h1>Explore <span>Elmas Group Moments</span></h1>
        <p>Discover our lifestyle, amenities, and beautiful spaces.</p>
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
            <span className="gallery-reveal"></span>
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
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}
