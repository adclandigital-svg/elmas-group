"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./navbar.css";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {

  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);
  const toggleRef = useRef(null);
  const closeBtnRef = useRef(null);

  const [open, setOpen] = useState(false);

  useGSAP(() => {
    /* NAVBAR SCROLL COLOR CHANGE */
    ScrollTrigger.create({
      start: 50,
      onEnter: () => navbarRef.current.classList.add("scrolled"),
      onLeaveBack: () => navbarRef.current.classList.remove("scrolled"),
    });

    /* SIDEBAR TIMELINE */
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });

    tl.to(sidebarRef.current, {
      right: 0,
      duration: 0.45,
    })

    /* OPEN BUTTON */
    toggleRef.current.addEventListener("click", () => {
      open ? tl.reverse() : tl.play();
      setOpen(!open);
    });

    /* CLOSE BUTTON */
    closeBtnRef.current.addEventListener("click", () => {
      tl.reverse();
      setOpen(false);
    });

    /* CLICK OUTSIDE */
    document.addEventListener("click", (e) => {
      if (
        open &&
        !sidebarRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        tl.reverse();
        setOpen(false);
      }
    });
  }, []);

  return (
    <>
      <header ref={navbarRef} className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/assets/logo.png" width={100} loading="lazy" />
          </div>

          <nav className="nav-links">
            <a href="#">Spring Elmas</a>
            <a href="#">Elmas Aquacasa</a>

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
          <a className="sidebar-links-mobile">Spring Elmas</a>
          <a  className="sidebar-links-mobile">Elmas Aquacasa</a>
          <a href="/projects" className="sidebar-links-project">Projects</a>

          <div className="submenu">
            <a href="/projects?q=spring-elmas">Spring Elmas</a>
            <a href="/projects?q=elmas-aquacasa">Elmas Aquacasa</a>
          </div>
          <a href="/blogs">Blogs</a>
          <a href="/gallery">Gallery</a>
          <a href="/media">Media Centre</a>
          <a href="/careers">Job Openings</a>
          <a href="/contact">Reach us</a>
        </nav>
      </aside>
    </>
  );
}
