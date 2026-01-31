"use client";

import React, { useEffect, useState, useRef } from "react";
import "./project.css";
import HTMLFlipBook from "react-pageflip";
import NeighbourSection from "./components/NeighbourSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocationSection from "./components/LocationSection";
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
import ProjectHighlights from "./components/ProjectHighlights";
const plans = [
  {
    title: "2BHK + 2T - 1055 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big1.jpg",
    details: [
      { label: "Saleable Area", value: "1055 Sqft" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Tower", value: "T4 To T9" },
    ],
    description: "2 Bedroom + 2 Toilet",
  },
  {
    title: "2BHK + 2T - 1065 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big2.jpg",
    details: [
      { label: "Saleable Area", value: "1065 Sqft" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Tower", value: "T6" },
    ],
    description: "2 Bedroom + 2 Toilet",
  },
  {
    title: "2BHK + 2T + Study - 1227 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big3.jpg",
    details: [
      { label: "Saleable Area", value: "1227 Sqft" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Tower", value: "T4 To T9" },
    ],
    description: "2 Bedroom + 2 Toilet + Study",
  },
  {
    title: "2BHK + 2T - 1320 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big4.jpg",
    details: [
      { label: "Saleable Area", value: "1320 Sqft" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Tower", value: "T3, T10, T11 & T18" },
    ],
    description: "2 Bedroom + 2 Toilet",
  },
  {
    title: "3BHK + 2T - 1450 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big11.jpg",
    details: [
      { label: "Saleable Area", value: "1450 Sqft" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "2" },
      { label: "Tower", value: "T4 To T9" },
    ],
    description: "3 Bedroom + 2 Toilet",
  },
  {
    title: "3BHK + 3T + Store - 1655 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big5.jpg",
    details: [
      { label: "Saleable Area", value: "1655 Sqft" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Tower", value: "T1 - T14" },
    ],
    description: "3 Bedroom + 3 Toilet + Store",
  },
  {
    title: "3BHK + 3T + Store - 1681 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big6.jpg",
    details: [
      { label: "Saleable Area", value: "1681 Sqft" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Tower", value: "T2 & T12" },
    ],
    description: "3 Bedroom + 3 Toilet + Store",
  },
  {
    title: "3BHK + 3T + Servant - 1825 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big7.jpg",
    details: [
      { label: "Saleable Area", value: "1825 Sqft" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
    ],
    description: "3 Bedroom + 3 Toilet + Servant",
  },
  {
    title: "3BHK + 3T + Servant - 1832 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big8.jpg",
    details: [
      { label: "Saleable Area", value: "1832 Sqft" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
    ],
    description: "3 Bedroom + 3 Toilet + Servant",
  },
  {
    title: "3BHK + 3T + Servant - 1840 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big9.jpg",
    details: [
      { label: "Saleable Area", value: "1840 Sqft" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Tower", value: "T16 & T17" },
    ],
    description: "3 Bedroom + 3 Toilet + Servant",
  },
  {
    title: "4BHK + 3T + Servant - 2225 Sqft",
    image: "/assets/aquacasa/aquacasa-fp-big10.jpg",
    details: [
      { label: "Saleable Area", value: "2225 Sqft" },
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "3" },
      { label: "Tower", value: "T16 & T17" },
    ],
    description: "4 Bedroom + 3 Toilet + Servant",
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
            project: "Elmas Aquacasa",
          }),
        });

        if (!res.ok) throw new Error("API failed");

        sessionStorage.setItem("leadData", JSON.stringify(formData));
        setSubmitted(true);
      }

      const link = document.createElement("a");
      link.href =
        showForm === "Brochure"
          ? "/assets/AC-brochure-new.pdf"
          : "/assets/AC-brochure-new.pdf";
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
            loading="lazy"
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
      <div className="facilities-section-outer">
        <section className="facilities-section">
          <div className="text-side">
            <p className="tag">PROJECT FACILITIES</p>
            <h2>
              World-Class <br /> Residential Amenities
            </h2>
            <p>
              Aqua Casa is where tranquility meets modern living. Inspired by
              the calming essence of water, our homes are designed to bring
              peace, freshness, and a sense of harmony to everyday life. Every
              corner of Aqua Casa reflects comfort, elegance, and a connection
              with nature—making it not just a house, but a sanctuary you’ll be
              proud to call home.
            </p>
            <p>Fresh Living, Inspired by Nature.</p>
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
              <FaDumbbell /> Gymnasium
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaChild /> Kids Play Area
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
              <FaGamepad /> Indoor Games
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaShieldAlt /> 24x7 Security
              <img
                src="/assets/dimond stroke pngs 2.png"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="icon-box">
              <FaGlassCheers /> Banquet Hall
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
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
                loading="lazy"
              />
              <span className="blog-reveal"></span>
            </div>
            <div>
              <img
                className="float-img"
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6"
                loading="lazy"
              />
              <span className="blog-reveal"></span>
            </div>
            <div>
              <img
                className="float-img"
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
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
            <h2>About Project</h2>
            <div className="project-address">
              <span>Project Location</span>
              <p>
                Sector-16, Noida Extension <br />
                (Greater Noida West), Uttar Pradesh – 201318
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="about-text">
              <p>
                Elmas Aqua Casa is a premium residential development designed to
                offer spacious homes with modern architecture, landscaped green
                spaces, and lifestyle-focused amenities for comfortable urban
                living.
              </p>

              <p>
                Strategically located in Sector-16, Greater Noida West, the
                project enjoys excellent connectivity to Noida, Ghaziabad, and
                Delhi NCR through major expressways, metro routes, and upcoming
                infrastructure.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat">
                <h3>10+</h3>
                <span>Acres of land</span>
              </div>

              <div className="stat">
                <h3>9</h3>
                <span>Residential towers</span>
              </div>

              <div className="stat">
                <h3>1,450+</h3>
                <span>Premium residences</span>
              </div>

              <div className="stat">
                <h3>70%</h3>
                <span>Open & landscaped spaces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <NeighbourSection /> */}
      <LocationSection />
      <ProjectHighlights />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019949809906!2d-122.41941568468193!3d37.77492977975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2d2b20f7%3A0xadc7d5d0f5f1e5ab!2sCity%20Center!5e0!3m2!1sen!2s!4v1700000000000"
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
