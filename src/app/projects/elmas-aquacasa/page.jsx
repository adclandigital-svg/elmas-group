"use client";

import React, { useEffect, useState, useRef } from "react";
import "./project.css";
import HTMLFlipBook from "react-pageflip";
import NeighbourSection from "./components/NeighbourSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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

  useGSAP(() => {
    const reveals = gsap.utils.toArray(".blog-reveal");

    gsap.set(reveals, { transformOrigin: "top" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: reveals,
          start: "top 85%",
          end: "bottom 10%",
          markers: true,
        },
      })
      .fromTo(
        reveals,
        { scaleY: 1 },
        {
          scaleY: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.09, // <- true sequential reveal
        }
      );
  }, []);

  return (
    <>
      <div className="project-page">
        {/* ⭐ HERO VIDEO SECTION ⭐ */}
        <section className="hero-video-section">
          <video
            className="hero-video"
            src="/assets/aqua.mp4"
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
            <p>[ project / elmas-aquacasa ]</p>
            <h1>Elmas Aquacasa</h1>

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
            <div className="icon-box" style={{ backgroundImage: "url()" }}>
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
              <FaShieldAlt /> 24×7 Security
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
            <div>
              <img
                className="float-img"
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900"
                alt="Luxury Pool"
              />
              <span className="blog-reveal"></span>
            </div>
            <div>
              <img
                className="float-img"
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=900"
                alt="Modern Living Room"
              />
              <span className="blog-reveal"></span>
            </div>
            <div>
              <img
                className="float-img"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900"
                alt="Waterfront Lifestyle"
              />
              <span className="blog-reveal"></span>
            </div>
          </div>
        </section>

        {/* ----------- AMENITIES & SERVICES GRID CARDS ----------- */}
        <section className="services-section">
          <p className="tag">LUXURY, COMFORT & COMMUNITY LIFE</p>

          <div className="services-header">
            <h2>Amenities & Lifestyle Services</h2>
            <p>
              Thoughtfully crafted lifestyle avenues at Rudra Aquacasa offer a
              perfect balance of leisure, wellness and community living.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div>
                <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80" />
                <span className="blog-reveal"></span>
              </div>
              <h3>Resort-Style Swimming Pool</h3>
              <p>Jacuzzi · Deck · Aqua Fun Zone</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" />
                <span className="blog-reveal"></span>
              </div>
              <h3>Luxury Clubhouse Lounge</h3>
              <p>Café · Games · Co-working Spaces</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80" />
                <span className="blog-reveal"></span>
              </div>
              <h3>Celebration Lawn</h3>
              <p>Weddings · Parties · Open-air Events</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80" />
                <span className="blog-reveal"></span>
              </div>
              <h3>Premium Fitness Center</h3>
              <p>Cardio Zone · CrossFit · Personal Training</p>
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
