"use client";
import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

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
          <Link href="/blogs">Blogs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/media">Media Centre</Link>
          <Link href="/careers">Job Openings</Link>
          <Link href="/contact">Reach us</Link>
        </div>

        {/* Policy Links */}
        <div className="footer-policy">
          <h4>Policies</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <Link href="/cookies-policy">Cookie Policy</Link>
        </div>

        {/* Connect / Social */}
        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="social-icons">
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaFacebookF />
            </Link>
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
