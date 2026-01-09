"use client";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand / About */}
        <div className="footer-brand">
          <img src="/assets/logo.png" width={120} loading="lazy" />
          <p>
            Designing spaces that feel alive, balanced, and enduring. Elmas
            Group is committed to building vibrant, sustainable communities.
          </p>
        </div>

        {/* Quick Links (Sidebar URLs) */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <a href="/blogs">Blogs</a>
          <a href="/gallery">Gallery</a>
          <a href="/media">Media Centre</a>
          <a href="/careers">Job Openings</a>
          <a href="/contact">Reach us</a>
        </div>

        {/* Policy Links */}
        <div className="footer-policy">
          <h4>Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>

        {/* Connect / Social */}
        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
          <p>Elmas Group</p>
          <p>Noida Extension, Uttar Pradesh, India</p>
          <p>Email: info@elmasgroup.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Elmas Group | Based in India</span>
      </div>
    </footer>
  );
}
