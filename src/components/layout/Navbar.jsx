"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./navbar.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const route = useRouter();

  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);
  const toggleRef = useRef(null);
  const closeBtnRef = useRef(null);
  const tlRef = useRef(null);
  const openRef = useRef(false);

  const [open, setOpen] = useState(false);

  /* GSAP SETUP (RUNS ONCE) */
  useGSAP(() => {
    ScrollTrigger.create({
      start: 50,
      onEnter: () => navbarRef.current.classList.add("scrolled"),
      onLeaveBack: () => navbarRef.current.classList.remove("scrolled"),
    });

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

  /* EVENTS */
  useEffect(() => {
    const openSidebar = () => {
      tlRef.current.play();
      openRef.current = true;
      setOpen(true);
    };

    const closeSidebar = () => {
      tlRef.current.reverse();
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

    const outsideHandler = (e) => {
      if (
        openRef.current &&
        sidebarRef.current &&
        toggleRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        closeSidebar();
      }
    };

    toggleRef.current.addEventListener("click", toggleHandler);
    closeBtnRef.current.addEventListener("click", closeHandler);
    document.addEventListener("click", outsideHandler);

    return () => {
      toggleRef.current?.removeEventListener("click", toggleHandler);
      closeBtnRef.current?.removeEventListener("click", closeHandler);
      document.removeEventListener("click", outsideHandler);
    };
  }, []);

  const handleLinkClick = () => {
    if (openRef.current) {
      tlRef.current.reverse();
      openRef.current = false;
      setOpen(false);
    }
  };

  return (
    <>
      <header ref={navbarRef} className="navbar">
        <div className="nav-container" style={{ cursor: "pointer" }}>
          <div className="logo" onClick={() => route.push("/")}>
            <img src="/assets/logo.png" width={100} loading="lazy" />
          </div>

          <nav className="nav-links">
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/projects/spring-elmas" onClick={handleLinkClick}>
              Spring Elmas
            </Link>
            <Link href="/projects/elmas-aquacasa" onClick={handleLinkClick}>
              Elmas Aquacasa
            </Link>

            <div ref={toggleRef} className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>

      <aside ref={sidebarRef} className="sidebar">
        <button ref={closeBtnRef} className="sidebar-close">
          <span></span>
          <span></span>
        </button>

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
          <Link href="/careers" onClick={handleLinkClick}>
            Job Openings
          </Link>
          <Link href="/contact" onClick={handleLinkClick}>
            Reach us
          </Link>
        </nav>
      </aside>
    </>
  );
}
