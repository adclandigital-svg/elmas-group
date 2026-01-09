"use client";

import React, { useEffect, useState, useRef } from "react";
import "./project.css";
import HTMLFlipBook from "react-pageflip";
import NeighbourSection from "./components/NeighbourSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaChild,
  FaRunning,
  FaGamepad,
  FaShieldAlt,
  FaGlassCheers,
  FaBuilding,
} from "react-icons/fa";

const plans = [
  {
    title: "3 BHK + 2T - 1355 Sqft",
    image: "https://springelmas.com/img/others/1355.png",
    details: [
      { label: "Balcony Area", value: "186.87 Sqft" },
      { label: "Saleable Area", value: "1355 Sqft" },
      { label: "Builtup Area", value: "1039.35 Sqft" },
      { label: "RERA Carpet", value: "793.92 Sqft" },
    ],
    description:
      "Premium 3BHK home with airy balconies, spacious drawing room and elegant interiors.",
  },

  {
    title: "3 BHK + 3T - 1580 Sqft",
    image: "https://springelmas.com/img/others/1580.png",
    details: [
      { label: "Balcony Area", value: "195.96 Sqft" },
      { label: "Saleable Area", value: "1580 Sqft" },
      { label: "Builtup Area", value: "1200.66 Sqft" },
      { label: "RERA Carpet", value: "919.28 Sqft" },
    ],
    description:
      "Serene apartment flooded with natural light and thoughtfully designed spaces.",
  },

  {
    title: "3 BHK + 3T - 1600 Sqft",
    image: "https://springelmas.com/img/others/1600.png",
    details: [
      { label: "Balcony Area", value: "186.29 Sqft" },
      { label: "Saleable Area", value: "1600 Sqft" },
      { label: "Builtup Area", value: "1188.09 Sqft" },
      { label: "RERA Carpet", value: "940.43 Sqft" },
    ],
    description:
      "Lavish 3BHK residence with modern kitchen, wide balconies and luxury bathrooms.",
  },

  {
    title: "3BHK + Study - 1895 Sqft",
    image: "https://springelmas.com/img/others/1895.png",
    details: [
      { label: "Total Area", value: "1895 Sqft" },
      { label: "Bedroom", value: "132 Sqft" },
      { label: "Bathroom", value: "45 Sqft" },
      { label: "Balcony", value: "222.85 Sqft" },
    ],
    description:
      "Includes premium study room ideal for work-from-home lifestyle.",
  },

  {
    title: "4BHK + Servant - 2450 Sqft",
    image: "https://springelmas.com/img/others/2450.png",
    details: [
      { label: "Total Area", value: "2450 Sqft" },
      { label: "Bedroom", value: "154 Sqft" },
      { label: "Bathroom", value: "35 Sqft" },
      { label: "Balcony", value: "268.36 Sqft" },
    ],
    description:
      "Ultra-luxury residence with grand living spaces and separate servant room.",
  },
];

export default function ProjectPage() {
  const flipBook = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(index * 2); // Each plan has front/back => multiply by 2
    }
    setActiveIndex(index);
  };
  const handleFlip = (e) => {
    const page = e.data; // current page number
    const planIndex = Math.floor(page / 2);
    setActiveIndex(planIndex);
  };

  return (
    <>
      <div className="project-page">
        {/* ⭐ HERO VIDEO SECTION ⭐ */}
        <section className="hero-video-section">
          <video
            className="hero-video"
            src="/assets/project.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* fallback image if video not supported */}
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
            className="hero-video-fallback"
          />

          <div className="hero-overlay">
            <p>[ project / spring-elmas ]</p>
            <h1>Spring Elmas</h1>

            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ad esse excepturi itaque? Qui veniam totam omnis, et adipisci modi quibusdam. Maiores aperiam in totam tempore debitis libero asperiores temporibus.
            </p> */}
          </div>
        </section>
      </div>
      <div className="facilities-wrapper">
        {/* ----------- FACILITIES ICON GRID ----------- */}
        <section className="facilities-section">
          <div className="text-side">
            <p className="tag">PROJECT FACILITIES</p>
            <h2>
              World-Class <br /> Residential Amenities
            </h2>
            <p>
              Designed to elevate everyday living with comfort, luxury and
              security. <br />
              Experience premium lifestyle features inside your gated community.
            </p>
          </div>

          <div className="icon-grid">
            <div className="icon-box">
              <FaSwimmingPool /> Swimming Pool
            </div>

            <div className="icon-box">
              <FaBuilding /> Clubhouse
            </div>

            <div className="icon-box">
              <FaDumbbell /> Gymnasium
            </div>

            <div className="icon-box">
              <FaChild /> Kids Play Area
            </div>

            <div className="icon-box">
              <FaRunning /> Jogging Track
            </div>

            <div className="icon-box">
              <FaGamepad /> Indoor Games
            </div>

            <div className="icon-box">
              <FaShieldAlt /> 24x7 Security
            </div>

            <div className="icon-box">
              <FaGlassCheers /> Banquet Hall
            </div>
          </div>
        </section>

        {/* ----------- ARRIVAL SECTION (3 IMAGES) ----------- */}
        <section className="arrival-section">
          <p className="tag">RELAXATION & COMFORT</p>
          <h2>
            Your Dream <br /> Home Awaits Your Arrival!
          </h2>

          <div className="arrival-images">
            <img
              className="float-img"
              src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
            />
            <img
              className="float-img"
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6"
            />
            <img
              className="float-img"
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
            />
          </div>
        </section>

        {/* ----------- AMENITIES & SERVICES GRID CARDS ----------- */}
        <section className="services-section">
          <p className="tag">LUXURY, COMFORT & COMMUNITY LIFE</p>

          <div className="services-header">
            <h2>Amenities & Lifestyle Services</h2>
            <p>
              Discover thoughtfully curated lifestyle spaces that bring families
              together <br /> and offer unmatched leisure and recreation inside
              the community.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div>
                <img src="https://img.freepik.com/premium-photo/chairs-table-living-room_1048944-18456116.jpg?w=600" />
              </div>

              <h3>Clubhouse Lounge</h3>
              <p>Community Hangout & Indoor Games</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://img.freepik.com/premium-photo/young-female-with-outdoor-activities-city-park-yoga-is-her-chosen-activity_159755-8469.jpg?ga=GA1.1.143927192.1764420012&semt=ais_hybrid&w=600&q=80" />
              </div>

              <h3>Spa & Wellness</h3>
              <p>Sauna, Yoga, Meditation Deck</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600" />
              </div>
              <h3>Celebration Lawn</h3>
              <p>Party, Events & Gatherings</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://img.freepik.com/premium-photo/fitness-room_47474-105.jpg?w=600" />
              </div>
              <h3>Fitness Center</h3>
              <p>Modern Gym & Training Studio</p>
            </div>
          </div>
        </section>
      </div>
      <NeighbourSection />
      <section className="fp-book-section">
        <h2 className="fp-book-title">Blueprints of Better Living</h2>

        {/* Tabs */}
        <div className="fp-tabs">
          {plans.map((plan, i) => (
            <button
              key={i}
              className={`fp-tab ${activeIndex === i ? "active" : ""}`}
              onClick={() => handleTabClick(i)}
            >
              {plan.title}
            </button>
          ))}
        </div>

        {/* Flipbook */}
        <HTMLFlipBook
          width={700}
          height={600}
          className="fp-flipbook"
          showCover={false}
          // shadow + realism
          drawShadow={true}
          maxShadowOpacity={0.8}
          flippingTime={900}
          swipeDistance={30}
          // required for depth
          useMouseEvents={true}
          mobileScrollSupport={false}
          ref={flipBook}
          onFlip={handleFlip}
        >
          {plans.flatMap((plan, index) => [
            <div className="fp-page fp-front" key={`front-${index}`}>
              <img src={plan.image} alt={plan.title} className="fp-image" />
              <h3 className="fp-page-title">{plan.title}</h3>
            </div>,

            <div className="fp-page fp-back" key={`back-${index}`}>
              <h3 className="fp-page-title">{plan.title}</h3>
              <p className="fp-description">{plan.description}</p>
              <ul className="fp-details-list">
                {plan.details.map((d, i2) => (
                  <li key={i2}>
                    <span>{d.label}</span>
                    <strong>{d.value}</strong>
                  </li>
                ))}
              </ul>
            </div>,
          ])}
        </HTMLFlipBook>
      </section>

      <section className="map-section">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019949809906!2d-122.41941568468193!3d37.77492977975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2d2b20f7%3A0xadc7d5d0f5f1e5ab!2sCity%20Center!5e0!3m2!1sen!2s!4v1700000000000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
