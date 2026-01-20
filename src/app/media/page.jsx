"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./media-center.css";

gsap.registerPlugin(ScrollTrigger);

export default function MediaCenterPage() {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        const mask = el.querySelector(".reveal-mask");
        const content = el.querySelector(".reveal-inner");

        gsap.set(mask, { xPercent: 0 });
        gsap.set(content, { clipPath: "inset(0 100% 0 0)" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });

        tl.to(mask, {
          xPercent: 100,
          duration: 0.7,
          ease: "power4.inOut",
        }).to(
          content,
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power4.out",
          },
          0,
        );
      });
    },
    { scope },
  );

  return (
    <main className="mc-wrap" ref={scope}>
      {/* ================= HERO ================= */}
      <section className="mc-hero">
        <div className="mc-hero-overlay" />
        <div className="mc-hero-content">
          <span className="mc-eyebrow">MEDIA CENTRE</span>
          <h1>
            Stories That Shape
            <br />
            Modern Living
          </h1>
          <p>
            Discover press releases, industry recognition, project launches, and
            exclusive brand stories from our journey in luxury real estate.
          </p>
        </div>
      </section>

      {/* ================= FEATURED PRESS ================= */}
      <section className="mc-featured">
        <div className="mc-section-head">
          <div className="reveal-inner">
            <h2>Latest Highlights</h2>
            <p>Our most recent press coverage and announcements</p>
          </div>
        </div>

        <div className="mc-featured-grid">
          <article className="mc-feature-card ">
            <div className="reveal-inner reveal">
              <span className="reveal-mask" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400" />
              <div className="mc-feature-overlay">
                <span>Press Release</span>
                <h3>Spring Elmas Launches Premium Smart Residences</h3>
                <p>
                  Introducing future-ready homes blending luxury,
                  sustainability, and urban convenience in Noida Extension.
                </p>
                <a href="#">Read Story</a>
              </div>
            </div>
          </article>

          <article className="mc-feature-card ">
            <div className="reveal-inner reveal">
              <span className="reveal-mask" />
              <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1400" />
              <div className="mc-feature-overlay">
                <span>In The News</span>
                <h3>Elmas Group Featured Among Top Emerging Developers</h3>
                <p>
                  Industry leaders recognize our commitment to quality design
                  and future-forward communities.
                </p>
                <a href="#">Read Story</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ================= PRESS GRID ================= */}
      <section className="mc-press">
        <div className="mc-section-head left reveal">
          <span className="reveal-mask" />
          <div className="reveal-inner">
            <h2>Press & Announcements</h2>
            <p>Updates from our projects, leadership and milestones</p>
          </div>
        </div>

        <div className="mc-press-grid">
          {[1, 2, 3, 4].map((_, i) => (
            <article key={i} className="mc-press-card reveal">
              <span className="reveal-mask" />
              <div className="reveal-inner">
                <span>Press Release</span>
                <h4>Elmas Aquacasa Construction Milestone Achieved</h4>
                <p>
                  Phase 1 structural completion reached ahead of schedule,
                  reaffirming our delivery commitment.
                </p>
                <a href="#">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mc-gallery">
        <div className="mc-section-head center">
          <div className="reveal-inner">
            <h2>Project Gallery</h2>
            <p>Visual stories from our developments and lifestyle spaces</p>
          </div>
        </div>

        <div className="mc-gallery-grid">
          <div className="mc-gallery-item tall reveal">
            <div className="reveal-inner">
              <span className="reveal-mask" />
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400" />
              <span>Luxury Living Room</span>
            </div>
          </div>
          <div className="mc-gallery-item reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400" />
              <span>Modern Kitchen</span>
            </div>
          </div>
          <div className="mc-gallery-item reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400" />
              <span>Bedroom Suite</span>
            </div>
          </div>
          <div className="mc-gallery-item tall reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400" />
              <span>Grand Entrance Lobby</span>
            </div>
          </div>
          <div className="mc-gallery-item wide reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600" />
              <span>Clubhouse & Amenities</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="mc-video">
        <div className="mc-section-head center reveal">
          <span className="reveal-mask" />
          <div className="reveal-inner">
            <h2>Brand Films</h2>
            <p>Explore our projects through immersive visuals</p>
          </div>
        </div>

        <div className="mc-video-grid">
          <div className="mc-video-card reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <iframe
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                loading="lazy"
                allowFullScreen
              ></iframe>
              <h4>Spring Elmas — Project Walkthrough</h4>
            </div>
          </div>

          <div className="mc-video-card reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                loading="lazy"
                allowFullScreen
              ></iframe>
              <h4>Elmas Group — Brand Story</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="mc-contact ">
        

        <div className="mc-contact-box reveal">
          <span className="reveal-mask" />
          <div className="reveal-inner ">
            
            <h3>Connect With Our Media Desk</h3>
            <p>
              Journalists, partners, and collaborators — reach our
              communications team for press kits, interviews, site visits, and
              brand resources.
            </p>
            <a href="/contact">Request Media Access</a>
          </div>
        </div>
      </section>
    </main>
  );
}
