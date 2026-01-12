"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./careers.css";
import { useRef } from "react";

export default function CareerPage() {
  const btnRef = useRef(null);
  // Animate elements once on mount
  useGSAP(() => {
    // Animate left panel
    gsap.from(".career-left-panel", {
      x: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    });

    // Animate right panel
    gsap.from(".career-right-panel", {
      x: 100,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []); // Empty dependency → runs once on mount

  return (
    <div className="career-page">
      {/* LEFT IMAGE PANEL */}
      <div className="career-left-panel">
        <img
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
          alt="Building"
        />
        <div className="career-tagline">
          <h4>Building Legacies.</h4>
          <p>Your Dreams, Our Blueprint.</p>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="career-right-panel">
        <div className="career-contact-info">
          <h5>Get in Touch</h5>
          <h2>Let's Build Together</h2>
          <p>
            Reach out to us for any inquiries, collaborations, or investments.
          </p>

          <div className="contact-details">
            <div className="visit">
              <strong>Visit Us</strong>
              <p>Elmas Group Noida Extension, Uttar Pradesh, India</p>
            </div>
            <div className="contact">
              <strong>Email:</strong> info@elmasgroup.com
              <br />
              <strong>Phone:</strong> +91 98765 43210
            </div>
          </div>
        </div>

        <form className="career-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Mobile Number" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <textarea placeholder="How can we help you?" rows="4"></textarea>
          </div>
          <button className="career-btn" ref={btnRef}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
