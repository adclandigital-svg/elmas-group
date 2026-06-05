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
      {/* Floating Social Icons */}
      <div className="floating-socials">
        <a
          href="#"
          className="social facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="text">Facebook</span>
        </a>

        <a
          href="#"
          className="social twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FaXTwitter />
          </span>
          <span className="text">X</span>
        </a>

        <a
          href="https://www.instagram.com/elmasgroupofficial/"
          className="social instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="text">Instagram</span>
        </a>

        <a
          href="#"
          className="social linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FaLinkedin />
          </span>
          <span className="text">LinkedIn</span>
        </a>

        <a
          href="#"
          className="social youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FaYoutube />
          </span>
          <span className="text">YouTube</span>
        </a>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          {/* Brand / About */}
          <div className="footer-brand">
            <img
              src="/assets/logo.png"
              className="footer-logo"
              width={120}
              loading="lazy"
            />
            <p>
              Designing spaces that feel alive, balanced, and enduring. Elmas
              Group is committed to building vibrant, sustainable communities.
            </p>
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
              <FaMapMarkerAlt /> Elmas Group Noida Extension, <br /> Uttar Pradesh, India 
            </p>  
            

            <p>
              <FaEnvelope />  info@elmasgroup.in
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Elmas Group | Based in India</span>
        </div>
      </footer>
    </>
  );
}
