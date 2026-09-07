"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";
import Link from "next/link";
import "../../construction-update/GalleryPage.css"; // Reuse the luxurious GalleryPage.css from construction-update

gsap.registerPlugin(ScrollTrigger);

// Gallery images for SPRING ELMAS
const springElmasImages = [
  { title: "Sport Area", image: "/assets/Spring Elmas/0007.jpg" },
  { title: "Park", image: "/assets/Spring Elmas/0006.jpg" },
  { title: "Badminton Court", image: "/assets/Spring Elmas/0003.jpg" },
  { title: "Kids Play", image: "/assets/Spring Elmas/0004.jpg" },
  { title: "Kids Play Area", image: "/assets/Spring Elmas/0005.jpg" },
  { title: "Swimming Pool", image: "/assets/Spring Elmas/0025.jpg" },
  { title: "Swimming Pool View", image: "/assets/Spring Elmas/0026.jpg" },
  { title: "Lift Area", image: "/springelmas_gallery/8.jpg" },
  { title: "Bed Room", image: "/assets/Spring Elmas/0012.jpg" },
  { title: "Dining Area", image: "/assets/Spring Elmas/0013.jpg" },
  { title: "Shopping Complex", image: "/assets/Spring Elmas/0022.jpg" },
  { title: "Shopping Complex Exterior", image: "/assets/Spring Elmas/0024.jpg" }
];

// Gallery images for ELMAS AQUACASA
const elmasAquacasaImages = [
  // Add Elmas Aquacasa images here
  // { title: "Example", image: "/assets/Aquacasa/example.jpg" },
];

export default function ProjectGalleryPage() {
  const params = useParams();
  const projectId = params.project;
  const projectName = projectId ? projectId.replace("-", " ").toUpperCase() : "Project";

  // Select images based on project
  const projectImages = projectId === "elmas-aquacasa" ? elmasAquacasaImages : springElmasImages;

  const [modalImage, setModalImage] = useState(null);
  const [modalIdx, setModalIdx] = useState(0);
  const gridRef = useRef(null);

  const openModal = (img, idx) => {
    setModalImage(img);
    setModalIdx(idx);
  };
  const closeModal = () => setModalImage(null);

  const goNext = (e) => {
    e.stopPropagation();
    const next = (modalIdx + 1) % projectImages.length;
    setModalIdx(next);
    setModalImage(projectImages[next]);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    const prev = (modalIdx - 1 + projectImages.length) % projectImages.length;
    setModalIdx(prev);
    setModalImage(projectImages[prev]);
  };

  // Animate cards on load
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".gallery-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.03,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, [projectImages.length]);

  // Keyboard nav for modal
  useEffect(() => {
    const handleKey = (e) => {
      if (!modalImage) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext(e);
      if (e.key === "ArrowLeft") goPrev(e);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalImage, modalIdx, projectImages]);

  // Hero background image based on project
  const heroBg = projectId === "elmas-aquacasa"
    ? "/construction/55.jpg" // Change this to your preferred Aquacasa hero image
    : "/assets/Spring Elmas/0025.jpg";

  return (
    <section className="gallery-page">
      {/* ===== HERO ===== */}
      <div className="cu-hero">
        <div className="cu-hero-bg">
          <img src={heroBg} alt="Gallery" />
          <div className="cu-hero-overlay"></div>
        </div>
        <div className="cu-hero-content">
          <span className="cu-hero-tag">Discover Elmas Group Moments</span>
          <h1><em>{projectName}</em></h1>
          <p>Explore our lifestyle, amenities, and beautiful spaces for {projectName}.</p>
        </div>
      </div>

      <div className="back-btn-container">
        <Link href="/gallery" className="grid-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Gallery
        </Link>
      </div>

      {/* ===== GALLERY GRID (No Tabs) ===== */}
      <div className="gallery-grid" ref={gridRef}>
        {projectImages.length > 0 ? (
          projectImages.map((img, i) => (
            <div
              className="gallery-card"
              key={`gallery-${i}`}
              onClick={() => openModal(img, i)}
            >
              <img src={img.image} alt={img.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-inner">
                  <span className="gallery-zoom-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                  </span>
                  <h3>{img.title}</h3>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", gridColumn: "1 / -1", padding: "100px 0", color: "#666" }}>
            <h2>Images Coming Soon</h2>
            <p>Gallery images for {projectName} will be available shortly.</p>
          </div>
        )}
      </div>

      {/* ===== LIGHTBOX MODAL ===== */}
      {modalImage && (
        <div className="cu-modal" onClick={closeModal}>
          <button className="cu-modal-nav cu-modal-prev" onClick={goPrev}>‹</button>
          <div className="cu-modal-body" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.image} alt={modalImage.title} />
            <div className="cu-modal-info">
              <h3>{modalImage.title}</h3>
              <span>{modalIdx + 1} / {projectImages.length}</span>
            </div>
            <button className="cu-modal-close" onClick={closeModal}>×</button>
          </div>
          <button className="cu-modal-nav cu-modal-next" onClick={goNext}>›</button>
        </div>
      )}
    </section>
  );
}
