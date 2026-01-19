"use client";

import "./media-center.css";

export default function MediaCenterPage() {
  return (
    <main className="mc-wrap">
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
          <h2>Latest Highlights</h2>
          <p>Our most recent press coverage and announcements</p>
        </div>

        <div className="mc-featured-grid">
          <article className="mc-feature-card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400" />
            <div className="mc-feature-overlay">
              <span>Press Release</span>
              <h3>Spring Elmas Launches Premium Smart Residences</h3>
              <p>
                Introducing future-ready homes blending luxury, sustainability,
                and urban convenience in Noida Extension.
              </p>
              <a href="#">Read Story</a>
            </div>
          </article>

          <article className="mc-feature-card">
            <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1400" />
            <div className="mc-feature-overlay">
              <span>In The News</span>
              <h3>Elmas Group Featured Among Top Emerging Developers</h3>
              <p>
                Industry leaders recognize our commitment to quality design and
                future-forward communities.
              </p>
              <a href="#">Read Story</a>
            </div>
          </article>
        </div>
      </section>

      {/* ================= PRESS GRID ================= */}
      <section className="mc-press">
        <div className="mc-section-head left">
          <h2>Press & Announcements</h2>
          <p>Updates from our projects, leadership and milestones</p>
        </div>

        <div className="mc-press-grid">
          <article className="mc-press-card">
            <span>Press Release</span>
            <h4>Elmas Aquacasa Construction Milestone Achieved</h4>
            <p>
              Phase 1 structural completion reached ahead of schedule,
              reaffirming our delivery commitment.
            </p>
            <a href="#">Read More →</a>
          </article>

          <article className="mc-press-card">
            <span>Interview</span>
            <h4>CEO Shares Vision for Sustainable Urban Living</h4>
            <p>
              Leadership insights on smart cities, green development and
              community-driven design.
            </p>
            <a href="#">Read More →</a>
          </article>

          <article className="mc-press-card">
            <span>Award</span>
            <h4>Spring Elmas Wins Excellence in Residential Design</h4>
            <p>
              Recognized for architectural innovation, planning and resident
              lifestyle experience.
            </p>
            <a href="#">Read More →</a>
          </article>

          <article className="mc-press-card">
            <span>Event</span>
            <h4>Elmas Group at National Real Estate Summit 2025</h4>
            <p>
              Showcasing upcoming developments and investment opportunities
              across NCR.
            </p>
            <a href="#">Read More →</a>
          </article>
        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="mc-gallery">
        <div className="mc-section-head center">
          <h2>Project Gallery</h2>
          <p>Visual stories from our developments and lifestyle spaces</p>
        </div>

        <div className="mc-gallery-grid">
          <div className="mc-gallery-item tall">
            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400" />
            <span>Luxury Living Room</span>
          </div>
          <div className="mc-gallery-item">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400" />
            <span>Modern Kitchen</span>
          </div>
          <div className="mc-gallery-item">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400" />
            <span>Bedroom Suite</span>
          </div>
          <div className="mc-gallery-item tall">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400" />
            <span>Grand Entrance Lobby</span>
          </div>
          <div className="mc-gallery-item wide">
            <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600" />
            <span>Clubhouse & Amenities</span>
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="mc-video">
        <div className="mc-section-head center">
          <h2>Brand Films</h2>
          <p>Explore our projects through immersive visuals</p>
        </div>

        <div className="mc-video-grid">
          <div className="mc-video-card">
            <iframe
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="Project Walkthrough"
              loading="lazy"
              allowFullScreen
            ></iframe>
            <h4>Spring Elmas — Project Walkthrough</h4>
          </div>

          <div className="mc-video-card">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Brand Film"
              loading="lazy"
              allowFullScreen
            ></iframe>
            <h4>Elmas Group — Brand Story</h4>
          </div>
        </div>
      </section>

      {/* ================= MEDIA CONTACT ================= */}
      <section className="mc-contact">
        <div className="mc-contact-box">
          <h3>Connect With Our Media Desk</h3>
          <p>
            Journalists, partners, and collaborators — reach our communications
            team for press kits, interviews, site visits, and brand resources.
          </p>
          <a href="/contact">Request Media Access</a>
        </div>
      </section>
    </main>
  );
}
