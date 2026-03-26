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
              <img src="/assets/Spring Elmas/0019.jpg" loading="lazy" />
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
              <img src="/assets/Spring Elmas/0020.jpg" loading="lazy" />
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
          <article key={1} className="mc-press-card reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <span>Press Release</span>
              <h4>Spring Elmas Towers Amber & Beryl Achieve Top-Out</h4>
              <p>
                Both towers reach their final height, marking a major
                construction milestone. Interior finishing and landscaping now
                underway for timely delivery.
              </p>
              <a href="#">Read More →</a>
            </div>
          </article>

          <article key={2} className="mc-press-card reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <span>Press Release</span>
              <h4>Elmas Aquacasa Wins 'Best Waterfront Project' Award</h4>
              <p>
                Recognized at the Noida Real Estate Excellence Awards 2025 for
                innovative design and sustainable lakeside development.
              </p>
              <a href="#">Read More →</a>
            </div>
          </article>

          <article key={3} className="mc-press-card reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <span>Press Release</span>
              <h4>Elmas Group Launches Green Building Initiative</h4>
              <p>
                All new projects to feature solar power, rainwater harvesting,
                and electric vehicle charging stations, aiming for IGBC Platinum
                certification.
              </p>
              <a href="#">Read More →</a>
            </div>
          </article>

          <article key={4} className="mc-press-card reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <span>Press Release</span>
              <h4>
                Strategic Partnership with Noida Authority for Infrastructure
              </h4>
              <p>
                Elmas Group collaborates on widening of sector roads and
                development of green belts around its projects to enhance
                resident connectivity.
              </p>
              <a href="#">Read More →</a>
            </div>
          </article>
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
              <img src="/assets/Spring Elmas/0016.jpg" loading="lazy" />
              <span>Luxury Living Room</span>
            </div>
          </div>
          <div className="mc-gallery-item reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="/assets/Spring Elmas/0015.jpg" loading="lazy" />
              <span>Modern Kitchen</span>
            </div>
          </div>
          <div className="mc-gallery-item reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="/assets/Spring Elmas/0017.jpg" loading="lazy" />
              <span>Bedroom Suite</span>
            </div>
          </div>
          <div className="mc-gallery-item tall reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="/assets/Spring Elmas/0023.jpg" loading="lazy" />
              <span>Grand Entrance Lobby</span>
            </div>
          </div>
          <div className="mc-gallery-item wide reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <img src="/assets/Spring Elmas/0004.jpg" loading="lazy" />
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
                src="https://www.youtube.com/embed/Td3HO6uWi5M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""
              ></iframe>
              <h4>Spring Elmas — Project Walkthrough</h4>
            </div>
          </div>

          <div className="mc-video-card reveal">
            <span className="reveal-mask" />
            <div className="reveal-inner">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sr19eLZi3Ak"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
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
