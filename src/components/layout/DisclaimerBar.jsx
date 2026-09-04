"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./DisclaimerBar.css";

export default function DisclaimerBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("elmas_disclaimer_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("elmas_disclaimer_consent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("elmas_disclaimer_consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="disclaimer-wrapper">
      <div className="container">
        <div className="disclaimer-bar">
          <div className="disclaimer-bar-content">
            <p>
              The information contained on the Website is for general information purposes only. By clicking "Accept", you agree to our <Link href="/disclaimer">Disclaimer & Privacy Policy</Link>.
            </p>
            <div className="disclaimer-bar-actions">
              <button className="disclaimer-btn reject-btn" onClick={handleReject}>Reject All</button>
              <button className="disclaimer-btn accept-btn" onClick={handleAccept}>Accept All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
