"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./projectSlider.css";
import Link from "next/link";

export default function ProjectSlider() {
  return (
    <div className="project-slider-home">
      <div className="third-section-header">
        <h2 className="third-section-h1">
          Featured Architectural Projects
        </h2>
        <div className="third-section-divider">
          <span className="divider-diamond">◆</span>
        </div>
      </div>
      <p className="project-slider-desc">
        Discover our signature projects that blend innovative design, functionality, and timeless elegance, shaping inspiring spaces for modern living and work.
      </p>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="project-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="project-slide">
            <div className="project-image">
              <img src="/assets/Spring Elmas/spring-elmas-new.jpg" alt="" />
            </div>

            <div className="project-content">
              <h2>Spring Elmas</h2>
              <h3>Modern Living in a Green Haven</h3>
              <p>
                Spring Elmas is a thoughtfully planned residential community
                offering spacious homes, landscaped gardens, and world-class
                lifestyle amenities. Designed for comfort, connectivity, and
                everyday elegance, it delivers a balanced living experience in a
                thriving urban neighborhood.
              </p>
              <Link href="/projects/spring-elmas" className="project-btn">
                Explore Project
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-slide">
            <div className="project-image">
              <img src="https://seturealtors.com/wp-content/uploads/2026/02/sublime-spring-elmas-drawing-room-1170x738-1.webp" alt="Elmas Aquacasa" />
            </div>

            <div className="project-content">
              <h2>Elmas Aquacasa</h2>
              <h4>Designed for Comfort, Built for Luxury</h4>
              <p>
                Elmas Aquacasa is a premium residential development designed for
                elevated urban living. Featuring contemporary architecture,
                expansive green spaces, and resort-style amenities, the project
                offers thoughtfully crafted homes that balance elegance,
                comfort, and sustainability.
              </p>
              <Link href="/projects/elmas-aquacasa" className="project-btn">
                Explore Project
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
      </Swiper>
    </div>
  );
}
