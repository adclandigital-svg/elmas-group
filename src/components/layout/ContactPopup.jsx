"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import "./ContactPopup.css";

export default function ContactPopup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ Show popup only if not submitted in this session
  useEffect(() => {
    const submitted = sessionStorage.getItem("contactPopupSubmitted");
    if (submitted) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    gsap.to(".cp-overlay", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setShow(false),
    });
  };

  useEffect(() => {
    if (show) {
      gsap.fromTo(".cp-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        ".cp-content",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      );
    }
  }, [show]);

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(form.phone))
      return "Enter valid 10-digit phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter valid email";
    if (form.message.trim().length < 5) return "Message too short";
    return null;
  };

  // ✅ Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", phone: "", email: "", message: "" });

        // ✅ Lock popup for this session
        sessionStorage.setItem("contactPopupSubmitted", "true");

        // ✅ Close popup after success
        setTimeout(closePopup, 1200);
      } else {
        setStatus(data.message || "❌ Failed to send message");
      }
    } catch (err) {
      setStatus("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="cp-overlay" onClick={closePopup}>
      <div className="cp-content" onClick={(e) => e.stopPropagation()}>
        <button className="cp-close-btn" onClick={closePopup}>
          ✕
        </button>

        <div className="cp-header">
          <h2>Get in Touch</h2>
          <p>Let's Build Something Amazing Together</p>
        </div>

        <p
          className={`cp-status ${
            status?.includes("✅") ? "success" : "error"
          }`}
        >
          {status || ""}
        </p>

        <form className="cp-form" onSubmit={handleSubmit}>
          <div className="cp-group">
            <input
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="cp-group">
            <input
              name="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type="tel"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="cp-group">
            <input
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="cp-group">
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="3"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="cp-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
