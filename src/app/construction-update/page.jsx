"use client";

import React from "react";
import Link from "next/link";
import "./ProjectsPage.css";

const projects = [
  {
    id: "spring-elmas",
    title: "SPRING ELMAS",
    description: "Experience luxurious living with state-of-the-art amenities, beautiful landscapes, and premium quality construction.",
    image: "/construction/87.jpeg", // Placeholder image from the gallery
  },
  {
    id: "elmas-aquacasa",
    title: "ELMAS AQUACASA",
    description: "A prestigious development offering exquisite waterfront views and an unmatched lifestyle standard.",
    image: "/construction/55.jpg", // Placeholder image from the gallery
  }
];

export default function ConstructionProjectsPage() {
  return (
    <section className="projects-page">
      {/* ===== HERO ===== */}
      <div className="projects-hero">
        <div className="projects-hero-bg">
          <img src="/construction/hero-placeholder.jpg" alt="Construction Overview" onError={(e) => { e.target.src = "/construction/87.jpeg"; }} />
          <div className="projects-hero-overlay"></div>
        </div>
        <div className="projects-hero-content">
          <span className="projects-hero-tag">Live Updates</span>
          <h1><em>Ongoing</em> Construction</h1>
          <p>Track the latest development progress across our premium projects.</p>
        </div>
      </div>

      {/* ===== PROJECTS GRID ===== */}
      <div className="projects-grid-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <Link href={`/construction-update/${project.id}`}><div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
              </div></Link>
              <div className="project-content">
                <Link href={`/construction-update/${project.id}`}><h2>{project.title}</h2></Link>
                <p>{project.description}</p>
                <Link href={`/construction-update/${project.id}`} className="view-pictures-btn">
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
