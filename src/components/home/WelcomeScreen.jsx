"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./WelcomeScreen.css";

export default function WelcomeScreen() {
  const [show, setShow] = useState(true);
  const screenRef = useRef(null);
  const logoRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("elmas_welcome_seen");
    if (hasVisited) {
      setShow(false);
      return;
    }

    const tl = gsap.timeline();

    // Reset initial states
    gsap.set(logoRef.current, { xPercent: -50, yPercent: -50, x: 0, scale: 0.8, opacity: 0, clipPath: "inset(0 100% 0 0)" });
    
    // Content wrapper is fixed in its final position
    gsap.set(contentRef.current, { xPercent: -70, yPercent: -50, x: 350 });
    // Children (h1, p, button) start faded out and pushed down
    gsap.set(contentRef.current.children, { opacity: 0, y: 30 });

    // 1. "Cut cut" load effect using stepped ease
    tl.to(logoRef.current, {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      duration: 1.5,
      ease: "steps(8)",
      delay: 0.5
    });

    // Hold briefly
    tl.to({}, { duration: 0.4 });

    // 2. Drag image right to left
    tl.to(logoRef.current, {
      xPercent: -100, // Move left based on width for better responsiveness
      x: -50, // Slight extra push
      duration: 1.6,
      ease: "power3.inOut" // Ultra smooth easing
    });

    // 3. AFTER logo reaches left, reveal text sequentially (stagger)
    tl.to(contentRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.2, // H1 first, then paragraph, then button
      ease: "power2.out"
    }, "-=0.2"); // Starts just before logo fully stops for fluidity

    // 4. Premium Subtle Floating & Glowing Effect (Apple style)
    // The diamond smoothly hovers up and down
    gsap.to(logoRef.current, {
      y: "-=15",
      duration: 3, 
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    document.body.style.overflow = "hidden";
  }, []);

  const handleEnter = () => {
    gsap.to(screenRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setShow(false);
        sessionStorage.setItem("elmas_welcome_seen", "true");
        document.body.style.overflow = "";
      }
    });
  };

  if (!show) return null;

  return (
    <div className="welcome-screen" ref={screenRef}>
      <div className="welcome-layout">
        <div className="welcome-logo-wrapper" ref={logoRef}>
          <img 
            src="/assets/welcome-screen.webp" 
            alt="Welcome" 
            className="welcome-logo" 
            ref={imageRef} 
          />
        </div>
        
        <div className="welcome-text-content" ref={contentRef}>
          <h1>Welcome to Elmas Group</h1>
          <p>Discover a legacy of premium living, sustainable design, and unparalleled luxury in the heart of Noida Extension.</p>
          <button className="welcome-enter-btn" onClick={handleEnter}>
            Enter Site
          </button>
        </div>
      </div>
    </div>
  );
}
