"use client";

import React from "react";
import Link from "next/link";
import "../construction-update/ProjectsPage.css"; // Reuse the luxurious projects styling

const projects = [
  {
    id: "spring-elmas",
    title: "SPRING ELMAS",
    description: "Experience luxurious living with state-of-the-art amenities, beautiful landscapes, and premium quality construction.",
    image: "/assets/Spring Elmas/0007.jpg",
  },
  {
    id: "elmas-aquacasa",
    title: "ELMAS AQUACASA",
    description: "A prestigious development offering exquisite waterfront views and an unmatched lifestyle standard.",
    image: "/construction/55.jpg",
  }
];

export default function GalleryProjectsPage() {
  return (
    <section className="projects-page">
      {/* ===== HERO ===== */}
      <div className="projects-hero">
        <div className="projects-hero-bg">
          <img src="/assets/Spring Elmas/0025.jpg" alt="Gallery Overview" onError={(e) => { e.target.src = "/construction/87.jpeg"; }} />
          <div className="projects-hero-overlay"></div>
        </div>
        <div className="projects-hero-content">
          <span className="projects-hero-tag">Discover Elmas Group Moments</span>
          <h1><em>Project</em> Gallery</h1>
          <p>Explore our lifestyle, amenities, and beautiful spaces across our premium projects.</p>
        </div>
      </div>

      {/* ===== PROJECTS GRID ===== */}
      <div className="projects-grid-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <Link href={`/gallery/${project.id}`}><div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
              </div></Link>
              <div className="project-content">
                <Link href={`/gallery/${project.id}`}><h2>{project.title}</h2></Link>
                <p>{project.description}</p>
                <Link href={`/gallery/${project.id}`} className="view-pictures-btn">
                  View Pictures
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
