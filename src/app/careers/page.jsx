"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./careers.css";
import { useState } from "react";

export default function CareerPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    message: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // success | error

  useGSAP(() => {
    gsap.from(".career-left-panel", {
      x: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
    });

    gsap.from(".career-right-panel", {
      x: 100,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []);

  // ✅ Validation
  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(form.phone))
      return "Enter valid mobile number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter valid email address";
    if (!form.position.trim()) return "Position is required";
    if (!form.resume) return "Please upload your resume";
    if (!form.resume) return "Please upload your resume";
    if (form.resume.size > 1 * 1024 * 1024) return "Resume must be under 1MB";
    return null;
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setStatus(error);
      setStatusType("error");
      return;
    }

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => fd.append(key, value));

      const res = await fetch("/api/career", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Application submitted successfully!");
        setStatusType("success");
        setForm({
          name: "",
          phone: "",
          email: "",
          position: "",
          message: "",
          resume: null,
        });
      } else {
        setStatus("❌ Failed to submit application");
        setStatusType("error");
      }
    } catch (err) {
      setStatus("❌ Server error. Try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-page">
      {/* LEFT IMAGE PANEL */}
      <div className="career-left-panel">
        <img
          src="/assets/Spring Elmas/0014.jpg"
          alt="Building"
        />
        <div className="career-tagline">
          <h4>Building Legacies.</h4>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="career-right-panel">
        <div className="career-contact-info">
          <h5>Careers</h5>
          <h2>Let's Build Together</h2>
          <p>
            Apply to be part of a growing organization shaping tomorrow’s
            spaces.
          </p>

          <div className="contact-details">
            <div className="visit">
              <strong>Visit Us :</strong>
              <p>Elmas Group Noida Extension, Uttar Pradesh, India</p>
            </div>
            <div className="contact">
              <strong>Email:</strong> hr@elmasgroup.com
              <br />
              <strong>Phone:</strong> +91 98765 43210
            </div>
          </div>
        </div>

        {/* ✅ FORM */}
        {status && <p className={`form-status ${statusType}`}>{status}</p>}
        <form className="career-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Position Applying For"
              value={form.position}
              onChange={(e) => setForm({ ...form, position: e.target.value })}
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Cover Message (Optional)"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* ✅ RESUME UPLOAD */}
          <div className="form-group file-upload">
            <label>Upload Resume (PDF / DOC)</label>
            <div className={`resume-upload ${form.resume ? "has-file" : ""}`}>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setForm({
                    ...form,
                    resume: e.target.files[0],
                  })
                }
              />
              <div className="upload-ui">
                <span className="upload-icon">📄</span>
                <p>
                  {form.resume
                    ? form.resume.name
                    : "Drag & drop your resume here"}
                  <br />
                  <span>or click to browse</span>
                </p>
              </div>
            </div>
          </div>

          <button className="career-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
