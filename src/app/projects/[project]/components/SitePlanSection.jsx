"use client";
import React from "react";
import "./siteplan.css";

export default function SitePlanSection() {
  return (
    <section className="siteplan-section">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center siteplan-heading">
            <span className="tag mb-3 d-inline-block">MASTER PLAN</span>
            <h2 className="mb-4">
              Master Site Plan
            </h2>
            <p>
              Explore the complete layout and structure of our project
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-12">
            <div className="siteplan-container">
              <img
                src="https://springelmas.com/img/others/siteplan.png"
                alt="Spring Elmas Master Site Plan"
                className="siteplan-image"
                loading="lazy"
              />
              <div className="siteplan-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}