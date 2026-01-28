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
  FaLeaf,
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
              <span>01</span> Grand Gated Community Entrance
            </li>
            <li>
              <span>02</span> Smart Home Security & Video Door Phone
            </li>
            <li>
              <span>03</span> Large Windows for Natural Light & Ventilation
            </li>
            <li>
              <span>04</span> Modular Kitchen with Utility Balcony
            </li>
            <li>
              <span>05</span> Spacious Bedrooms with Attached Balconies
            </li>
            <li>
              <span>06</span> Wide Glass Balconies & Elegant Railings
            </li>
            <li>
              <span>07</span> Branded Bathroom Fittings
            </li>
            <li>
              <span>08</span> Power Backup for Common Areas & Lifts
            </li>
            <li>
              <span>09</span> High-Speed Elevators in All Towers
            </li>
            <li>
              <span>10</span> Premium Clubhouse & Lifestyle Amenities
            </li>
            <li>
              <span>11</span> Landscaped Greens & Central Open Spaces
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="ph-right">
          <span className="ph-eyebrow">KEY SPECIFICATIONS</span>

          <div className="ph-grid">
            <Spec
              icon={<FaCouch />}
              title="GRAND COMMUNITY ENTRANCE"
              text="Secure gated entry with elegant driveway and welcoming drop-off plaza creating a premium first impression."
            />
            <Spec
              icon={<FaShieldAlt />}
              title="SMART SECURITY SYSTEM"
              text="Video door phone, intercom facility and CCTV surveillance across common areas for enhanced safety."
            />
            <Spec
              icon={<FaLightbulb />}
              title="LARGE WINDOWS & BALCONIES"
              text="Well-ventilated homes with large glass windows and wide balconies for maximum daylight and airflow."
            />
            <Spec
              icon={<FaWarehouse />}
              title="MODULAR KITCHEN SETUP"
              text="Granite countertop, utility balcony provision and ample storage for convenient everyday cooking."
            />
            <Spec
              icon={<FaBed />}
              title="SPACIOUS BEDROOMS"
              text="Well-proportioned bedrooms with premium vitrified tiles and attached balconies in select layouts."
            />
            <Spec
              icon={<FaVideo />}
              title="GLASS BALCONY RAILINGS"
              text="Modern glass railings offering open views, safety and an elevated lifestyle feel."
            />
            <Spec
              icon={<FaBath />}
              title="BRANDED BATH FITTINGS"
              text="Premium sanitaryware and CP fittings ensuring durability, comfort and elegant design."
            />
            <Spec
              icon={<FaBolt />}
              title="POWER & ELECTRICAL SYSTEM"
              text="Concealed copper wiring with modular switches and power backup for common areas and lifts."
            />
            <Spec
              icon={<FaWarehouse />}
              title="HIGH-SPEED ELEVATORS"
              text="Automatic elevators in all towers for smooth, efficient and secure vertical movement."
            />
            <Spec
              icon={<FaCouch />}
              title="LIFESTYLE CLUBHOUSE"
              text="Modern clubhouse featuring gymnasium, indoor games, multipurpose hall, yoga zone and community spaces."
            />
            <Spec
              icon={<FaLeaf />}
              title="LANDSCAPED CENTRAL GREENS"
              text="Beautifully landscaped gardens with walking paths, seating areas and serene open spaces for residents."
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
