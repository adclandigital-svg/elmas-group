"use client";

import React, { useState } from "react";
import "./LocationSection.css";
import {
  TbSchool,
  TbBuildingHospital,
  TbShoppingBag,
  TbTrain,
} from "react-icons/tb";

const contentData = {
  schools: {
    icon: <TbSchool size={28} color="#b27f38" />,
    title: "Nearby Schools",
    items: [
      ["The Wisdom Tree School", "0.7 km"],
      ["SKS World School", "1 km"],
      ["Rama Devi International School", "1.2 km"],
      ["Golden Valley International School", "1.4 km"],
      ["Ryan International School", "3 km"],
      ["Delhi Public School, Noida", "6 km"],
      ["Pacific World School", "5 km"],
      ["Lotus Valley International School", "7 km"],
    ],
  },
  hospitals: {
    icon: <TbBuildingHospital size={28} color="#b27f38" />,
    title: "Hospitals Nearby",
    items: [
      ["Yatharth Super Speciality Hospital", "2 km"],
      ["Fortis Hospital, Noida", "8 km"],
      ["Kailash Hospital", "10 km"],
      ["Jaypee Hospital", "12 km"],
      ["Max Super Speciality Hospital", "14 km"],
    ],
  },
  shopping: {
    icon: <TbShoppingBag size={28} color="#b27f38" />,
    title: "Shopping & Daily Needs",
    items: [
      ["Gaur City Mall", "8 min"],
      ["Logix City Centre", "15 min"],
      ["DLF Mall of India", "25 min"],
      ["Shipra Mall", "20 min"],
    ],
  },
  connectivity: {
    icon: <TbTrain size={28} color="#b27f38" />,
    title: "Connectivity",
    items: [
      ["NH-24 Expressway", "6 min"],
      ["FNG Expressway", "8 min"],
      ["Noida–Greater Noida Expressway", "12 min"],
      ["Jewar Airport (Upcoming)", "40 min"],
      ["Sector-52 Metro Station", "8 km"],
      ["Gaur Chowk Bus Stop", "2 km"],
    ],
  },
};

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState("schools");

  return (
    <section className="luxury-section bg-grey">
      <div className="luxury-pattern"></div>
      <div className="luxury-wrap">
        {/* Header */}
        <div className="luxury-head">
          <div className="luxury-head-left">
            <div className="luxury-eyebrow">Spring Elmas</div>
            <h2>
              Where Luxury Begins With <span>Perfect Placement</span>
            </h2>
            <p>
              Elite schools, world-class hospitals, lifestyle retail, and
              seamless connectivity — all perfectly positioned around your home.
            </p>
          </div>

          <div className="luxury-head-right">
            <div className="luxury-stat-grid">
              <div className="luxury-stat">
                <h4>8+ Schools Nearby</h4>
                <p>
                  Top educational institutions within minutes of your residence.
                </p>
              </div>
              <div className="luxury-stat">
                <h4>5 Major Hospitals</h4>
                <p>Advanced healthcare infrastructure around your home.</p>
              </div>
              <div className="luxury-stat">
                <h4>Premium Retail Access</h4>
                <p>Malls, markets & lifestyle hubs just moments away.</p>
              </div>
              <div className="luxury-stat">
                <h4>Expressway Connectivity</h4>
                <p>Fast access to Noida, Delhi & Jewar Airport corridor.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="luxury-tabs-wrap">
          <div className="luxury-tabs">
            {Object.keys(contentData).map((key) => (
              <div
                key={key}
                className={`luxury-tab ${activeTab === key ? "active" : ""}`}
                onMouseEnter={() => setActiveTab(key)}
              >
                {contentData[key].icon} {contentData[key].title}
              </div>
            ))}
          </div>

          <div className="luxury-panel">
            <div className="luxury-panel-inner">
              <div className="luxury-panel-head">
                <div className="luxury-panel-icon">
                  {contentData[activeTab].icon}
                </div>
                <h3>{contentData[activeTab].title}</h3>
              </div>
              <div className="luxury-list">
                {contentData[activeTab].items.map(([name, distance], idx) => (
                  <div key={idx} className="luxury-item">
                    {name} <span>{distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
