"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";
import Link from "next/link";
import "../GalleryPage.css";

gsap.registerPlugin(ScrollTrigger);

// Categorized images for SPRING ELMAS
const springElmasImages = [
  // Progress
  { title: "27-October-2025", image: "/construction/87.jpeg", category: "progress" },
  { title: "27-October-2025", image: "/construction/86.jpeg", category: "progress" },
  { title: "27-October-2025", image: "/construction/85.jpeg", category: "progress" },
  { title: "27-October-2025", image: "/construction/84.jpeg", category: "progress" },
  { title: "27-October-2025", image: "/construction/83.jpeg", category: "progress" },
  { title: "27-October-2025", image: "/construction/82.jpeg", category: "progress" },
  { title: "27-October-2025", image: "/construction/81.jpeg", category: "progress" },
  { title: "27-October-2025", image: "/construction/80.jpeg", category: "progress" },
  { title: "17-August-2025", image: "/construction/79.jpg", category: "progress" },
  { title: "17-August-2025", image: "/construction/78.jpg", category: "progress" },
  { title: "17-August-2025", image: "/construction/77.jpg", category: "progress" },
  { title: "17-August-2025", image: "/construction/76.jpg", category: "progress" },
  { title: "17-August-2025", image: "/construction/75.jpg", category: "progress" },
  { title: "17-August-2025", image: "/construction/74.jpg", category: "progress" },
  { title: "17-August-2025", image: "/construction/73.jpg", category: "progress" },
  { title: "17-August-2025", image: "/construction/72.jpg", category: "progress" },

  // Towers
  { title: "Tower - C (CORAL)", image: "/construction/55.jpg", category: "towers" },
  { title: "Tower - A (AMBER)", image: "/construction/54.jpg", category: "towers" },
  { title: "Tower - B (BERYL)", image: "/construction/53.jpg", category: "towers" },
  { title: "Tower - D (DIAMOND)", image: "/construction/52.jpg", category: "towers" },
  { title: "Tower - D (DIAMOND)", image: "/construction/51.jpg", category: "towers" },

  // Amenities
  { title: "Sport Area", image: "/construction/45.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/44.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/43.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/42.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/41.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/39.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/28.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/37.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/35.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/34.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/33.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/32.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/31.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/30.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/29.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/28.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/27.jpg", category: "amenities" },
];

// Categorized images for ELMAS AQUACASA
const elmasAquacasaImages = [
  // Progress
  { title: "02-April-2025", image: "/construction/71.jpg", category: "progress" },
  { title: "02-April-2025", image: "/construction/70.jpg", category: "progress" },
  { title: "02-April-2025", image: "/construction/69.jpg", category: "progress" },
  { title: "02-April-2025", image: "/construction/68.jpg", category: "progress" },
  { title: "02-April-2025", image: "/construction/67.jpg", category: "progress" },
  { title: "02-April-2025", image: "/construction/66.jpg", category: "progress" },
  { title: "25-12-2024", image: "/construction/65.jpg", category: "progress" },
  { title: "25-12-2024", image: "/construction/64.jpg", category: "progress" },
  { title: "25-12-2024", image: "/construction/63.jpg", category: "progress" },
  { title: "25-12-2024", image: "/construction/62.jpg", category: "progress" },
  { title: "25-12-2024", image: "/construction/61.jpg", category: "progress" },
  { title: "25-12-2024", image: "/construction/60.jpg", category: "progress" },
  { title: "25-09-2024", image: "/construction/59.jpg", category: "progress" },
  { title: "25-09-2024", image: "/construction/58.jpg", category: "progress" },
  { title: "25-09-2024", image: "/construction/57.jpg", category: "progress" },
  { title: "25-09-2024", image: "/construction/56.jpg", category: "progress" },

  // Towers
  { title: "Tower - C (CORAL)", image: "/construction/50.jpg", category: "towers" },
  { title: "Tower - B (BERYL)", image: "/construction/49.jpg", category: "towers" },
  { title: "Tower - A (AMBER)", image: "/construction/48.jpg", category: "towers" },
  { title: "Tower - C (CORAL)", image: "/construction/47.jpg", category: "towers" },
  { title: "Tower - B (BERYL)", image: "/construction/46.jpg", category: "towers" },

  // Amenities
  { title: "Sport Area", image: "/construction/26.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/25.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/24.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/23.jpg", category: "amenities" },
  { title: "Sport Area", image: "/construction/22.jpg", category: "amenities" },
  { title: "Park", image: "/construction/21.jpg", category: "amenities" },
  { title: "Badminton Court", image: "/construction/20.jpg", category: "amenities" },
  { title: "Kids Play", image: "/construction/19.jpg", category: "amenities" },
  { title: "Kids Play Area", image: "/construction/18.jpg", category: "amenities" },
  { title: "Swimming Pool", image: "/construction/17.jpg", category: "amenities" },
  { title: "Swimming Pool", image: "/construction/16.jpg", category: "amenities" },
  { title: "Lift Area", image: "/construction/15.jpg", category: "amenities" },
  { title: "Bed Room", image: "/construction/14.jpg", category: "amenities" },
  { title: "Dining Area", image: "/construction/13.jpg", category: "amenities" },
  { title: "Shopping Complex", image: "/construction/10.3.jpg", category: "amenities" },
  { title: "Shopping Complex", image: "/construction/10.2.jpg", category: "amenities" },
  { title: "Shopping Complex", image: "/construction/10.1.jpg", category: "amenities" },
];

const tabs = [
  { key: "progress", label: "Under Construction", icon: "🏗️" },
  { key: "towers", label: "Towers", icon: "🏢" },
  { key: "amenities", label: "Amenities", icon: "✨" },
];

export default function ProjectGalleryPage() {
  const params = useParams();
  const projectId = params.project;
  const projectName = projectId ? projectId.replace("-", " ").toUpperCase() : "Project";

  // Determine which images to show based on the project URL
  const projectImages = projectId === "elmas-aquacasa" ? elmasAquacasaImages : springElmasImages;

  const [activeTab, setActiveTab] = useState("progress");
  const [modalImage, setModalImage] = useState(null);
  const [modalIdx, setModalIdx] = useState(0);
  const gridRef = useRef(null);

  const openModal = (img, idx) => {
    setModalImage(img);
    setModalIdx(idx);
  };
  const closeModal = () => setModalImage(null);

  const filteredImages = projectImages.filter(
    (img) => img.category === activeTab
  );

  const goNext = (e) => {
    e.stopPropagation();
    const next = (modalIdx + 1) % filteredImages.length;
    setModalIdx(next);
    setModalImage(filteredImages[next]);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    const prev = (modalIdx - 1 + filteredImages.length) % filteredImages.length;
    setModalIdx(prev);
    setModalImage(filteredImages[prev]);
  };

  // Animate cards on tab change
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
        }
      );
    }
  }, [activeTab, filteredImages.length]);

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
  }, [modalImage, modalIdx, filteredImages]);

  // Hero background image based on project
  const heroBg = projectId === "elmas-aquacasa"
    ? "/construction/55.jpg" // Change this to your preferred Aquacasa hero image
    : "/construction/87.jpeg";

  return (
    <section className="gallery-page">
      {/* ===== HERO ===== */}
      <div className="cu-hero">
        <div className="cu-hero-bg">
          <img src={heroBg} alt="Construction" />
          <div className="cu-hero-overlay"></div>
        </div>
        <div className="cu-hero-content">
          <span className="cu-hero-tag">Live Project Updates</span>
          <h1><em>{projectName}</em> Construction</h1>
          <p>Track the latest development progress for {projectName}.</p>
        </div>
      </div>

      {/* ===== FILTER TABS ===== */}
      <div className="cu-tabs-wrap">
        <div className="cu-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`cu-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="cu-tab-icon">{tab.icon}</span>
              <span className="cu-tab-label">{tab.label}</span>
              <span className="cu-tab-count">
                {projectImages.filter((i) => i.category === tab.key).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="back-btn-container">
        <Link href="/construction-update" className="grid-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Projects
        </Link>
      </div>

      {/* ===== GALLERY GRID ===== */}
      <div className="gallery-grid" ref={gridRef}>
        {filteredImages.length > 0 ? (
          filteredImages.map((img, i) => (
            <div
              className="gallery-card"
              key={`${activeTab}-${i}`}
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
            <p>Construction updates for this category will be available shortly.</p>
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
              <span>{modalIdx + 1} / {filteredImages.length}</span>
            </div>
            <button className="cu-modal-close" onClick={closeModal}>×</button>
          </div>
          <button className="cu-modal-nav cu-modal-next" onClick={goNext}>›</button>
        </div>
      )}
    </section>
  );
}
