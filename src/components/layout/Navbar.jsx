"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./navbar.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  // TODO: replace with your WhatsApp number in international format (no + or dashes)
  const WHATSAPP_NUMBER = "919876543210";
  const route = useRouter();
  const pathname = usePathname();

  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);
  const toggleRef = useRef(null);
  const closeBtnRef = useRef(null);
  const tlRef = useRef(null);
  const openRef = useRef(false);

  const [open, setOpen] = useState(false);

  /* Scroll detection for navbar background */
  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      if (window.scrollY > 300) {
        navbarRef.current.classList.add("scrolled");
      } else {
        navbarRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* GSAP SIDEBAR SETUP (RUNS ONCE) */
  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
    });

    tl.to(sidebarRef.current, {
      right: 0,
      duration: 0.45,
    });

    tlRef.current = tl;
  }, []);

  const openSidebar = () => {
    if (tlRef.current) tlRef.current.play();
    openRef.current = true;
    setOpen(true);
  };

  const closeSidebar = () => {
    if (tlRef.current) tlRef.current.reverse();
    openRef.current = false;
    setOpen(false);
  };

  const toggleHandler = (e) => {
    e.stopPropagation();
    openRef.current ? closeSidebar() : openSidebar();
  };

  const closeHandler = (e) => {
    e.stopPropagation();
    closeSidebar();
  };

  useEffect(() => {
    const outsideHandler = (e) => {
      if (
        openRef.current &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("click", outsideHandler);
    return () => document.removeEventListener("click", outsideHandler);
  }, []);

  const handleLinkClick = () => {
    if (openRef.current) {
      closeSidebar();
    }
  };
  const darkRoutes = [
    "/gallery",
    "/contact",
    "/blogs",
    "/careers",
    "/cookies-policy",
    "/terms-conditions",
    "/cookies-policy",
    "/construction-update"
  ];

  let isDark = darkRoutes.some((r) => pathname.startsWith(r));

  // Exception: Single blog inner pages have a light background now
  if (pathname.startsWith("/blogs/")) {
    isDark = false;
  }

  return (
    <>
      <header
        ref={navbarRef}
        className={`navbar ${isDark ? "theme-dark" : ""}`}
      >
        <div className="container nav-container">
          <div className="logo" onClick={() => route.push("/")} style={{ cursor: "pointer" }}>
            <img
              src="/assets/logo-elmas.webp"
              height="45"
              alt="Elmas Group"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <nav className="nav-links desktop-only">
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/projects/spring-elmas" onClick={handleLinkClick}>
              Spring Elmas
            </Link>
            <Link href="/projects/elmas-aquacasa" onClick={handleLinkClick}>
              Elmas Aquacasa
            </Link>
          </nav>

          <div className="nav-right">
            <div className="nav-phone desktop-only">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+91 84470 00039</span>
            </div>
            <Link href="/partner" className="partner-btn desktop-only">
              Become a Partner
            </Link>
            
            <div ref={toggleRef} className="menu-toggle" onClick={toggleHandler}>
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="10" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <aside ref={sidebarRef} className="sidebar">
        <button ref={closeBtnRef} className="sidebar-close" onClick={closeHandler}>
          <span></span>
          <span></span>
        </button>

        <div className="sidebar-logo">
          <img src="/assets/logo.png" alt="Elmas Group" width="120" />
        </div>

        <nav className="sidebar-links">
          <Link
            href="/projects/spring-elmas"
            className="sidebar-links-mobile"
            onClick={handleLinkClick}
          >
            Spring Elmas
          </Link>
          <Link
            href="/projects/elmas-aquacasa"
            className="sidebar-links-mobile"
            onClick={handleLinkClick}
          >
            Elmas Aquacasa
          </Link>
          <Link href="#" className="sidebar-links-project">
            Projects
          </Link>

          <div className="submenu">
            <Link href="/projects/spring-elmas" onClick={handleLinkClick}>
              Spring Elmas
            </Link>
            <Link href="/projects/elmas-aquacasa" onClick={handleLinkClick}>
              Elmas Aquacasa
            </Link>
          </div>
          <Link href="/blogs" onClick={handleLinkClick}>
            Blogs
          </Link>
          <Link href="/gallery" onClick={handleLinkClick}>
            Gallery
          </Link>
          <Link href="/media" onClick={handleLinkClick}>
            Media Centre
          </Link>
          <Link href="/construction-update" onClick={handleLinkClick}>
            Construction Updates
          </Link>
          <Link href="/careers" onClick={handleLinkClick}>
            Job Openings
          </Link>
          <Link href="/contact" onClick={handleLinkClick}>
            Contact us
          </Link>
        </nav>
      </aside>

      {/* Floating WhatsApp button - update number above */}
      {/* <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
            clipPath="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
          />
        </svg>
      </a> */}
    </>
  );
}
