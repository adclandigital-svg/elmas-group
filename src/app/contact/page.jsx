"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./contact.css";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  useGSAP(() => {
    // left side text
    gsap.from(".left-text h1, .left-text p", {
      scrollTrigger: ".left-side",
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });

    // right side form
    gsap.from(
      ".right-side h2, .right-side h1, .right-side p, .right-side .form-group",
      {
        scrollTrigger: ".right-side",
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      }
    );

    // info cards
    gsap.from(".info-cards .info-card", {
      scrollTrigger: ".info-cards",
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // map reveal
    gsap.from(".map-section iframe", {
      scrollTrigger: ".map-section",
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // FAQ animation
    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
      },
      opacity: 1,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does Elmas Group offer?",
      answer:
        "We offer real estate development, investment opportunities, and property management services tailored to our clients' needs.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach us via the contact form above, call us at +91 98765 43210, or email info@elmasgroup.com.",
    },
    {
      question: "Where are you located?",
      answer: "Our office is located at Noida Extension, Uttar Pradesh, India.",
    },
    {
      question: "Do you take project collaborations?",
      answer:
        "Yes! We welcome collaborations on real estate projects and investment opportunities. Reach out through our contact form.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="contact-page">
      {/* SPLIT SECTION */}
      <section className="split-section">
        {/* LEFT SIDE IMAGE + TEXT */}
        <div className="left-side">
          <div className="left-text">
            <h1>Welcome to Elmas Group</h1>
            <p>
              Our team is here to provide the best services and support. Reach
              out to us anytime—we’d love to connect! We specialize in
              delivering top-notch solutions tailored to your needs. Our office
              is a hub of creativity, collaboration, and innovation, where every
              project is handled with care and expertise. Whether you want to
              discuss a new project, ask questions, or just say hello, we are
              always ready to assist you. Your satisfaction is our priority.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM + INFO */}
        <div className="right-side">
          <h2>Get in Touch</h2>
          <h1>Let's Build Together</h1>
          <p>
            Reach out to us for any inquiries, collaborations, or investments.
          </p>
          <div className="info-cards">
            <div className="info-card">
              <span className="icon">📍</span>
              <div>
                <h3>Address</h3>
                <p>Elmas Group Noida Extension, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="info-card">
              <span className="icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="info-card">
              <span className="icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>info@elmasgroup.com</p>
              </div>
            </div>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="form-group">
            <textarea rows="5" placeholder="Your Message"></textarea>
          </div>

          <button className="contact-btn">Send Message</button>

          {/* INFO CARDS BELOW FORM */}
        </div>
      </section>
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="faq-toggle">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </section>
    </div>
  );
}
