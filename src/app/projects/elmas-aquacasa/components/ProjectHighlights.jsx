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
  FaLeaf 
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectHighlights() {
  const sectionRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".ph-eyebrow", {
        // y: 20,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(
          ".ph-list li",
          {
            y: 20,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from(
          ".ph-item",
          {
            // y: 24,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.25",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ph-section">
      <div className="ph-container">
        {/* LEFT */}
        <div className="ph-left">
          <span className="ph-eyebrow">PROJECT HIGHLIGHTS</span>
          <ul className="ph-list">
            <li>
              <span>01</span> Grand Luxury Entrance
            </li>
            <li>
              <span>02</span> Premium Doors & Smart Security
            </li>
            <li>
              <span>03</span> Oversized UPVC Windows
            </li>
            <li>
              <span>04</span> Modern Modular Kitchen
            </li>
            <li>
              <span>05</span> Luxury Bedrooms & Balconies
            </li>
            <li>
              <span>06</span> Glass Balcony Railings + Extra-Wide Deck-Style
              Balconies
            </li>
            <li>
              <span>07</span> Branded Bath Fittings
            </li>
            <li>
              <span>08</span> Trusted Electrical Setup
            </li>
            <li>
              <span>09</span> High-Speed Branded Elevators
            </li>
            <li>
              <span>10</span> Grand Lifestyle Club Amenities
            </li>
            <li>
              <span>11</span> Central Green Park – A Landmark Open Space USP
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="ph-right">
          <span className="ph-eyebrow">KEY SPECIFICATIONS</span>

          <div className="ph-grid">
            <Spec
              icon={<FaCouch />}
              title="GRAND LUXURY ENTRANCE"
              text="Double-height lobby, Italian marble flooring & designer wall paneling for a 5-star arrival experience."
            />
            <Spec
              icon={<FaShieldAlt />}
              title="PREMIUM DOORS & SMART SECURITY"
              text="8 ft designer doors with smart lock + video doorbell for enhanced elegance & safety."
            />
            <Spec
              icon={<FaLightbulb />}
              title="OVERSIZED UPVC WINDOWS"
              text="8 ft glass sliders bringing in abundant natural light and a premium modern look."
            />
            <Spec
              icon={<FaWarehouse />}
              title="MODERN MODULAR KITCHEN"
              text="Granite countertop, double sink, dual plumbing & below-counter setup for a functional and stylish workspace."
            />
            <Spec
              icon={<FaBed />}
              title="LUXURY BEDROOMS & BALCONIES"
              text="600×1200 mm premium tiles / wooden flooring options + anti-skid balcony tiles for safety and aesthetics."
            />
            <Spec
              icon={<FaVideo />}
              title="GLASS BALCONY RAILINGS"
              text="Toughened glass railing + extra-wide deck-style balconies — among the widest in the segment."
            />
            <Spec
              icon={<FaBath />}
              title="BRANDED BATH FITTINGS"
              text="Grohe / American Standard / Jaguar / Roca — premium durability and comfort."
            />
            <Spec
              icon={<FaBolt />}
              title="TRUSTED ELECTRICAL SETUP"
              text="In-wiring from Havells / Polycab. Electrical fittings from Philips / Anchor / Encore / Northwest."
            />
            <Spec
              icon={<FaWarehouse />}
              title="HIGH-SPEED BRANDED ELEVATORS"
              text="Schindler / OTIS / Mitsubishi for smooth and reliable movement."
            />
            <Spec
              icon={<FaCouch />}
              title="GRAND LIFESTYLE CLUB AMENITIES"
              text="70,000–85,000 sq ft club with pools, sports courts, gym, spa, theatre, banquet hall, kids zones, temple & pet area."
            />
            <Spec
              icon={<FaLeaf />}
              title="CENTRAL GREEN PARK"
              text="Approx. 17,000 meters landscaped green park with lawns, walking zones & serene open leisure spaces."
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
