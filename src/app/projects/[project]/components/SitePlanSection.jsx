"use client";
import React from "react";
import "./siteplan.css";

export default function SitePlanSection() {
  return (
    <section className="siteplan-section">
      
      {/* Heading */}
      <div className="siteplan-heading">
        <h2>Master Site Plan</h2>
        <p>Explore the complete layout and structure of our project</p>
      </div>

      {/* Image */}
      <div className="siteplan-container">
        <img
          src="https://springelmas.com/img/others/siteplan.png"
          alt="Site Plan"
          className="siteplan-image"
        />
      </div>

    </section>
  );
}