"use client";
import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Floating Social Icons */}
      <div className="floating-socials">
        <a href="https://www.facebook.com/share/19wWTjrzYM/" className="social facebook" target="_blank" rel="noopener noreferrer">
          <span className="icon"><FaFacebookF /></span>
          <span className="text">Facebook</span>
        </a>

        <a href="#" className="social twitter" target="_blank" rel="noopener noreferrer">
          <span className="icon"><FaXTwitter /></span>
          <span className="text">X</span>
        </a>

        <a href="https://www.instagram.com/elmasgroupofficial/" className="social instagram" target="_blank" rel="noopener noreferrer">
          <span className="icon"><FaInstagram /></span>
          <span className="text">Instagram</span>
        </a>

        <a href="https://www.linkedin.com/in/elmas-group-05781a383" className="social linkedin" target="_blank" rel="noopener noreferrer">
          <span className="icon"><FaLinkedin /></span>
          <span className="text">LinkedIn</span>
        </a>

        <a href="https://youtube.com/@elmas_group?si=JLgSoep_jh6kORVv" className="social youtube" target="_blank" rel="noopener noreferrer">
          <span className="icon"><FaYoutube /></span>
          <span className="text">YouTube</span>
        </a>
      </div>

      <footer className="footer">
        {/* Top CTA Banner */}
        <div className="footer-cta">
          <h3>Let's Build Something Extraordinary Together</h3>
          <p>Discover premium living spaces crafted with precision and passion.</p>
          <Link href="/contact" className="footer-cta-btn">Get In Touch</Link>
        </div>

        <div className="footer-inner">
          {/* Brand / About */}
          <div className="footer-brand">
            <img src="/assets/logo-elmas.webp" className="footer-logo" width={160} loading="lazy" alt="Elmas Group" />
            <p>
              Designing spaces that feel alive, balanced, and enduring. Elmas
              Group is committed to building vibrant, sustainable communities.
            </p>
            <div className="footer-social-row">
              <a href="https://www.facebook.com/share/19wWTjrzYM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
              <a href="https://www.instagram.com/elmasgroupofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/elmas-group-05781a383" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://youtube.com/@elmas_group?si=JLgSoep_jh6kORVv" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <Link href="/blogs">Blogs</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/media">Media Centre</Link>
            <Link href="/careers">Job Openings</Link>
            <Link href="/contact">Contact us</Link>
          </div>

          {/* Policy Links */}
          <div className="footer-policy">
            <h4>Policies</h4>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/cookies-policy">Cookie Policy</Link>
          </div>

          {/* Footer Contact */}
          <div className="footer-connect">
            <h4>Connect</h4>

            <p>
              <FaMapMarkerAlt /> Elmas Group Greater Noida West 16B, Uttar Pradesh, India
            </p>

            <p>
              <FaPhoneAlt /> +91 84420 00039
            </p>

            <p>
              <FaEnvelope /> info@elmasgroup.in
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Elmas Group. All rights reserved.</span>
          <span className="footer-bottom-right">Crafted with precision in India</span>
        </div>
      </footer>
    </>
  );
}
