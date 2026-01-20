"use client";

import "./ProjectHighlights.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCouch,
  FaLightbulb,
  FaBed,
  FaBath,
  FaWarehouse,
  FaBolt,
  FaVideo,
  FaShieldAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectHighlights() {
  const sectionRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    tl.from(".ph-eyebrow", {
      y: 30,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        ".ph-number-wrap h1",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3",
      )
      .from(
        ".ph-subtitle",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.4",
      )
      .from(
        ".ph-list li",
        {
          x: -40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.5,
        },
        "-=0.2",
      )
      .from(
        ".ph-item",
        {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
        },
        "-=0.4",
      );
  }, []);

  return (
    <section ref={sectionRef} className="ph-section">
      <div className="ph-container">
        {/* LEFT */}
        <div className="ph-left">
          <span className="ph-eyebrow">PROJECT HIGHLIGHTS</span>

          <div className="ph-number-wrap">
            <h1>01</h1>
          </div>

          <p className="ph-subtitle">THE FLAGSHIP RESIDENCE</p>

          <ul className="ph-list">
            
            <li>
              <span>01</span> Limited Edition Residences
            </li>
            <li>
              <span>02</span> 50+ Floor Infinity Pool
            </li>
            <li>
              <span>03</span> 45+ Floor Gardens & Terraces
            </li>
            <li>
              <span>04</span> Smart Home Automation
            </li>
            <li>
              <span>05</span> Panoramic Gardens & Terraces
            </li>
            <li>
              <span>06</span> Smart Home Automation
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="ph-right">
          <span className="ph-eyebrow">KEY SPECIFICATIONS</span>

          <div className="ph-grid">
            <Spec
              icon={<FaCouch />}
              title="LIVING ROOM"
              text="Italian Marble Flooring with Acoustic Underlay"
            />
            <Spec
              icon={<FaLightbulb />}
              title="DINING AREA"
              text="Architectural Cove Lighting with Smart Dimming"
            />
            <Spec
              icon={<FaBed />}
              title="MASTER BEDROOM"
              text="Engineered Wooden Flooring with Walk-in Wardrobe"
            />
            <Spec
              icon={<FaBed />}
              title="GUEST BEDROOM"
              text="Premium Laminated Flooring with Mood Lighting"
            />
            <Spec
              icon={<FaBath />}
              title="MASTER BATHROOM"
              text="Rain Shower, Wall-Hung WC & Designer Vanity"
            />
            <Spec
              icon={<FaWarehouse />}
              title="WARDROBES"
              text="Soft-Close Modular Wardrobes with Sensor Lighting"
            />
            <Spec
              icon={<FaBath />}
              title="POWDER ROOM"
              text="Imported Fixtures with Stone Counter Basin"
            />
            <Spec
              icon={<FaWarehouse />}
              title="STORAGE"
              text="Custom Utility Cabinets with Hidden Shelving"
            />
            <Spec
              icon={<FaVideo />}
              title="SURVEILLANCE"
              text="24/7 CCTV Monitoring with Mobile Access"
            />
            <Spec
              icon={<FaShieldAlt />}
              title="SECURITY"
              text="Biometric Entry & Video Door Phone System"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ icon, title, text }) {
  return (
    <div className="ph-item">
      <div className="ph-icon-wrap">{icon}</div>
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
