"use client";

import React from "react";
import "./maintenance.css";

export default function Maintenance() {
  return (
    <div className="maintenance-wrapper">
      {/* <div className="maintenance-overlay"></div> */}
      <div className="maintenance-content">
        <img src="/assets/logo.png" alt="Elmas Group Logo" className="maintenance-logo" />
        <h1 className="maintenance-text">Something amazing is coming!</h1>
      </div>
    </div>
  );
}
