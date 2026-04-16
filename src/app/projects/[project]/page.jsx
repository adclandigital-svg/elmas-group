"use client";

import React, { useEffect, useState, useRef } from "react";
import "./project.css";
import HTMLFlipBook from "react-pageflip";
import { gsap } from "gsap";
import ProjectHighlights from "./components/ProjectHighlights";
import { useGSAP } from "@gsap/react";
import LocationSection from "./components/LocationSection";
import SitePlanSection from "./components/SitePlanSection";
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
    image: "/assets/spring-elmas-map/1.png",
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
    image: "/assets/spring-elmas-map/2.png",
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
    image: "/assets/spring-elmas-map/3.png",
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
    image: "/assets/spring-elmas-map/4.png",
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
    image: "/assets/spring-elmas-map/5.png",
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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("leadData");
    if (saved) {
      setFormData(JSON.parse(saved));
      setSubmitted(true);
    }
  }, []);

  const handleTabClick = (index) => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(index * 2);
    }
  };

  const handleFlip = (e) => {
    const page = e.data;
    const index =
      window.innerWidth < 768 ? Math.trunc(page / 2) : Math.floor(page / 2);
    setActiveIndex(index);
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
        },
      );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!submitted) {
        const res = await fetch("/api/send-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            type: showForm === "Brochure" ? "Brochure" : "Price List",
            project: "Spring Elmas",
          }),
        });

        if (!res.ok) throw new Error("API failed");

        sessionStorage.setItem("leadData", JSON.stringify(formData));
        setSubmitted(true);
      }

      const link = document.createElement("a");
      link.href =
        showForm === "Brochure"
          ? "/assets/Spring-Elmas-Brochure.pdf"
          : "/assets/SpringElmasPriceList.pdf";
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Lead submission failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const [size, setSize] = useState({ width: 700, height: 600 });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;

      if (w >= 1400) setSize({ width: 700, height: 600 });
      else if (w >= 1024) setSize({ width: 620, height: 520 });
      else if (w >= 768) setSize({ width: 520, height: 460 });
      else if (w >= 480) setSize({ width: 360, height: 440 });
      else setSize({ width: 300, height: 400 });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className="project-page">
        <section className="hero-video-section">
          <video
            className="hero-video"
            // src="https://www.som.com/wp-content/uploads/2025/06/WeBank-Homepage_noBMU-1748959748.mp4"
            src="/assets/b11.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
            className="hero-video-fallback"
            loading="lazy"
          />

          <div className="hero-overlay">
            <p>[ project / spring-elmas ]</p>
            <h1>Spring Elmas</h1>
          </div>
        </section>
      </div>
      <div className="facilities-section-outer">
        <section className="facilities-section">
          <div className="text-side">
            <p className="tag">PROJECT AMENITIES</p>
            <h2>
              Premium Lifestyle <br /> At Spring Elmas
            </h2>
            <p>
              A thoughtfully designed residential community <br /> offering
              luxury, comfort and modern living in the heart of Greater <br />
              Noida West. Every amenity is crafted to elevate your everyday
              lifestyle.
            </p>
            <p>
              Enjoy a perfect blend of wellness, recreation and relaxation with{" "}
              <br />
              world-class facilities inside a secure gated township designed for{" "}
              <br />
              families, professionals and future-ready living.
            </p>
          </div>

          <div className="icon-grid">
            <div className="icon-box">
              <FaSwimmingPool /> Swimming Pool
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaBuilding /> Clubhouse
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaDumbbell /> Fitness Centre
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaChild /> Kids Play Zone
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaRunning /> Jogging Track
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaGamepad /> Indoor Games <br /> Room
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaShieldAlt /> 3-Tier Security <br /> System
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaGlassCheers /> Party Hall / <br /> Banquet
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="facilities-wrapper">
        <section className="arrival-section">
          <p className="tag">RELAXATION & COMFORT</p>
          <h2>
            Your Dream <br /> Home Awaits Your Arrival!
          </h2>

          <div className="arrival-images">
            <div>
              <img
                className="float-img"
                src="/assets/Spring Elmas/0004.jpg"
                loading="lazy"
              />
              <span className="blog-reveal"></span>
            </div>
            <div>
              <img
                className="float-img"
                src="/assets/Spring Elmas/0026.jpg"
                loading="lazy"
              />
              <span className="blog-reveal"></span>
            </div>
            <div>
              <img
                className="float-img"
                src="/assets/Spring Elmas/0024.jpg"
                loading="lazy"
              />
              <span className="blog-reveal"></span>
            </div>
          </div>
        </section>

        {/* ----------- AMENITIES & SERVICES GRID CARDS ----------- */}
        {/* <section className="services-section">
          <p className="tag">LUXURY, COMFORT & COMMUNITY LIFE</p>

          <div className="services-header">
            <h2>Living Comforts & Services</h2>
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
                <span className="blog-reveal"></span>
              </div>

              <h3>Clubhouse Lounge</h3>
              <p>Community Hangout & Indoor Games</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://img.freepik.com/premium-photo/young-female-with-outdoor-activities-city-park-yoga-is-her-chosen-activity_159755-8469.jpg?ga=GA1.1.143927192.1764420012&semt=ais_hybrid&w=600&q=80" />
                <span className="blog-reveal"></span>
              </div>

              <h3>Spa & Wellness</h3>
              <p>Sauna, Yoga, Meditation Deck</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600" />
                <span className="blog-reveal"></span>
              </div>
              <h3>Celebration Lawn</h3>
              <p>Party, Events & Gatherings</p>
            </div>

            <div className="service-card">
              <div>
                <img src="https://img.freepik.com/premium-photo/fitness-room_47474-105.jpg?w=600" />
                <span className="blog-reveal"></span>
              </div>
              <h3>Fitness Center</h3>
              <p>Modern Gym & Training Studio</p>
            </div>
          </div>
        </section> */}
      </div>
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>About Spring Elmas</h2>
            <div className="project-address">
              <span>Project Location</span>
              <p>
                Sector-12, Greater Noida West <br />
                (Noida Extension), Uttar Pradesh – 201318
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="about-text">
              <p>
                Spring Elmas is a premium residential development crafted to
                deliver elegant architecture, spacious homes and thoughtfully
                curated lifestyle amenities. Every residence is designed to
                offer superior comfort, natural ventilation and modern living
                experiences.
              </p>

              <p>
                Located in the heart of Greater Noida West, the project enjoys
                excellent connectivity to Noida, Delhi and major business hubs
                while being surrounded by schools, hospitals, shopping
                destinations and daily conveniences — making it ideal for
                families and working professionals.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat">
                <h3>5</h3>
                <span>Acres of development</span>
              </div>

              <div className="stat">
                <h3>8</h3>
                <span>Residential towers</span>
              </div>

              <div className="stat">
                <h3>632</h3>
                <span>Premium apartments</span>
              </div>

              <div className="stat">
                <h3>65%</h3>
                <span>Open & landscaped spaces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <NeighbourSection /> */}
      <LocationSection />
      <ProjectHighlights />
      <SitePlanSection />
      <section className="fp-book-section">
        <h2 className="fp-book-title">Blueprints of Better Living</h2>
        <div className="fp-tabs">
          {plans.map((plan, i) => (
            <button
              key={i}
              className={`fp-tab ${activeIndex === i ? "active1" : ""}`}
              onClick={() => handleTabClick(i)}
            >
              {plan.title}
            </button>
          ))}
        </div>

        <HTMLFlipBook
          width={size.width}
          height={size.height}
          className="fp-flipbook"
          showCover={false}
          drawShadow={true}
          maxShadowOpacity={0.8}
          flippingTime={900}
          swipeDistance={30}
          useMouseEvents={true}
          mobileScrollSupport={true}
          ref={flipBook}
          onFlip={handleFlip}
        >
          {plans.flatMap((plan, index) => [
            <div className="fp-page fp-front" key={`front-${index}`}>
              <img
                src={plan.image}
                alt={plan.title}
                className="fp-image"
                loading="lazy"
              />
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
              <div className="fp-page-download">
                <a onClick={() => setShowForm("Brochure")}> Brochure</a>
                <a onClick={() => setShowForm("Price")}>Price List</a>
              </div>
            </div>,
          ])}
        </HTMLFlipBook>
      </section>

      <section className="map-section">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps?q=28.5623129,77.4830676&z=15&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✕
            </button>

            <h3>
              Download {showForm == "Brochure" ? "Brochure" : "Price List"}
            </h3>
            <p>Please fill the details to proceed</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                disabled={submitted}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={submitted}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                disabled={submitted}
              />

              <button type="submit">
                {submitted ? "Download" : "Submit & Download"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
