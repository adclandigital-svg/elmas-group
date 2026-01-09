"use client";

import { useEffect } from "react";
import gsap from "gsap";
import "./media-center.css";

export default function MediaCenterPage() {
  useEffect(() => {
    gsap.from(".mc-hero h1", { opacity: 0, y: 40, duration: 1.2 });
    gsap.from(".mc-ghost-text", { opacity: 0, y: -60, duration: 2 });
    gsap.from(".mc-card", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.1,
      ease: "power3.out",
      delay: 0.2,
    });
    gsap.from(".mc-gallery-grid img", {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.9,
      delay: 0.4,
    });
    gsap.from(".mc-video-grid iframe", {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.9,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="mc-page-wrapper">
      {/* HERO SECTION */}
      <section className="mc-hero">
        <div className="mc-ghost-text">MEDIA CENTER</div>
        <h1>Press, Updates & Brand Stories</h1>
        <p>
          Browse official releases, media coverage, interviews, photographs and
          featured videos from our brand archive.
        </p>
      </section>

      {/* PRESS CARDS */}
      <section className="mc-cards-grid">
        <article className="mc-card">
          <span className="mc-tag">Press Release</span>
          <h2>New strategic partnership announced</h2>
          <p>Official collaboration announcement summary.</p>
        </article>

        <article className="mc-card">
          <span className="mc-tag">In The News</span>
          <h2>Brand featured in international publication</h2>
          <p>Coverage highlighting milestones and leadership.</p>
        </article>

        <article className="mc-card">
          <span className="mc-tag">Interview</span>
          <h2>CEO speaks on growth and innovation</h2>
          <p>Key insights on mission, vision and culture.</p>
        </article>

        <article className="mc-card">
          <span className="mc-tag">Event</span>
          <h2>Participation in global business summit</h2>
          <p>Showcasing future roadmap and strategic direction.</p>
        </article>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mc-gallery">
        <h3>Image Library</h3>

        <div className="mc-gallery-grid">
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800"
            alt="Media Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
            alt="Media Image 2"
          />
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800"
            alt="Media Image 3"
          />
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="mc-video">
        <h3>Featured Videos</h3>

        <div className="mc-video-grid">
          <iframe
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="Video 1"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video 2"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
