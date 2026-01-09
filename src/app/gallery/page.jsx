"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GalleryPage.css";

gsap.registerPlugin(ScrollTrigger);

export const galleryImages = [
  { title: "Luxury Pool", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80" },
  { title: "Clubhouse Lounge", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" },
  { title: "Celebration Lawn", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80" },
  { title: "Fitness Center", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" },
  { title: "Kids Play Area", image: "https://images.unsplash.com/photo-1641693765525-ffae066e40a2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Jogging Track", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=1200&q=80" },
  { title: "Banquet Hall",  image: "https://plus.unsplash.com/premium_photo-1673626577922-1b3f9771fc3f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  { title: "Security & Safety", image: "https://images.unsplash.com/photo-1614213856754-b28af802aa04?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
  // duplicate or add more images as needed
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
