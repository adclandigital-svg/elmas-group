"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./projectSlider.css";
import Link from "next/link";

export default function ProjectSlider() {
  return (
    <div className="project-slider-home">
      <h2>
        Featured <br />
        Architectural Projects
      </h2>
      <p>
        Discover our signature projects that blend innovative design,
        functionality, and timeless elegance, <br />
        shaping inspiring spaces for modern living and work.
      </p>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
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
          <div
            className="project-slide"
            style={{
              backgroundImage:
                "url('https://seturealtors.com/wp-content/uploads/2026/02/sublime-spring-elmas-drawing-room-1170x738-1.webp)",
            }}
          >
            <div className="project-image"></div>

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
