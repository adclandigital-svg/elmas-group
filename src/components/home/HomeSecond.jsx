"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Swiper v10+
import "swiper/css";
import "swiper/css/navigation";
import "./Homesecond.css";

export default function HomeSecond() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=50",
      title: "Infinity Pool",
    },
    {
      img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=50",
      title: "Fitness Hub",
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=50",
      title: "Secure Parking",
    },
    {
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=50",
      title: "Landscape Gardens",
    },
    {
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=50",
      title: "Lounge Areas",
    },
    {
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=50",
      title: "Solar Power",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=50",
      title: "Cycle Zone",
    },
    {
      img: "https://images.unsplash.com/photo-1600962815726-457c46a12681?w=800&q=50",
      title: "Kids Play Area",
    },
  ];
  const slides = [
    {
      video: "/assets/11.mp4",
      name: "John Anderson",
      desc: "Bought a 3BHK Apartment",
    },
    {
      video: "/assets/22.mp4",
      name: "Lisa Thompson",
      desc: "Invested in a Luxury Villa",
    },
    {
      video: "/assets/33.mp4",
      name: "Robert Williams",
      desc: "Sold Commercial Property Successfully",
    },
    {
      video: "/assets/11.mp4",
      name: "Emily Davis",
      desc: "Bought a Modern Studio Apartment",
    },
    {
      video: "/assets/22.mp4",
      name: "Michael Johnson",
      desc: "Invested in a Waterfront Property",
    },
    {
      video: "/assets/33.mp4",
      name: "Sophia Brown",
      desc: "Sold Her Apartment Above Market Price",
    },
  ];

  return (
    <>
      <section className="arch-facilities">
        <div className="arch-container">
          <div className="arch-header">
            <h2>
              Signature <br />
              Architectural Amenities
            </h2>
            <p>
              Our residential flats are equipped with carefully curated
              amenities designed for comfort, convenience, and modern living.
            </p>
          </div>

          {/* ---------- Slider ---------- */}
          <div className="arch-slider-wrapper">
            {/* Swiper will use your existing nav classes */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: ".arch-nav.next",
                prevEl: ".arch-nav.prev",
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {cards.map((card, i) => (
                <SwiperSlide key={i} className="arch-grid-slide">
                  <div className="arch-card">
                    <img className="float-img" src={card.img} loading="lazy" />
                    <h3>{card.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Keep your existing nav buttons */}
            <button className="arch-nav prev">‹</button>
            <button className="arch-nav next">›</button>
          </div>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h2>
              Featured <br />
              Architectural Projects
            </h2>
            <p>
              Discover our signature projects that blend innovative design,
              functionality, and timeless elegance, shaping inspiring spaces for
              modern living and work.
            </p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=50"
                loading="lazy"
                alt="Modern Living Room Interior"
              />
            </div>
            <div className="portfolio-card">
              <img
                src="https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-fabric-sofa_105762-2186.jpg"
                loading="lazy"
                alt="Kitchen and Dining Area"
              />
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=50"
                loading="lazy"
                alt="Bedroom Interior Design"
              />
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=50"
                loading="lazy"
                alt="Bright Hallway and Interior"
              />
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=50"
                loading="lazy"
                alt="Modern House Exterior"
              />
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=50"
                loading="lazy"
                alt="Stylish Home Exterior at Sunset"
              />
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=50"
                loading="lazy"
                alt="Living Room with Large Windows"
              />
            </div>
            <div className="portfolio-card">
              <img
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=50"
                loading="lazy"
                alt="Luxury Modern Living Space"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="adclan-testimonial-section">
      <div className="adclan-testimonial-heading">
        <h2>
          Hear From <br /> Our Happy Clients
        </h2>
      </div>
      <div className="adclan-testimonial-paragraph">
        <p>
          Discover why our clients trust us for their real estate needs. <br />
          Watch their video testimonials to see how we helped them find their
          dream homes and achieve successful property sales.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        className="adclan-swiper-container"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="adclan-slide-card">
            <div className="adclan-video-wrapper">
              <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
              <div className="adclan-video-text">
                <h3>{slide.name}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </>
  );
}
