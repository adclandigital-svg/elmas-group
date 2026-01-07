"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Homefirst.css";

gsap.registerPlugin(ScrollTrigger);

export default function Homefirst() {
  const thirdRef = useRef(null);
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const countersRef = useRef([]);

  useGSAP(() => {
    const section = thirdRef.current;

    /* ENTRY ANIMATION */
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      })
      .to(".third h1", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".third-second-img",
        {
          scale: 0.7,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        ".line",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.4"
      )
      .to(
        ".third-second-text > div",
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.5"
      );

    /* SLIDER ANIMATION */
    gsap.utils.toArray(".third-second-img").forEach((container) => {
      const slides = container.querySelectorAll(".slide-img");

      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "power2.inOut",
          duration: 0.8,
        },
      });

      slides.forEach((slide) => {
        tl.to(slide, {
          opacity: 1,
          scale: 1,
        }).to(
          slide,
          {
            opacity: 0,
            scale: 0.96,
          },
          "+=3"
        );
      });
    });
  }, []);

  // GSAP animation
  useGSAP(() => {
    const section = sectionRef.current;

    // ============================
    // TIMELINE ANIMATION ON SCROLL
    // ============================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reset",
      },
    });

    tl.to(".second h5", { opacity: 1, y: -40 })
      .fromTo(
        ".second-div1 img",
        { y: 40, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .to(".second-div2-inner", { opacity: 1, y: 0, stagger: 0.15 }, "-=0.4");

    // ============================
    // IMAGE SLIDER USING GSAP TIMELINE
    // ============================
    imagesRef.current.forEach((container) => {
      const slides = container.querySelectorAll("img");

      const sliderTL = gsap.timeline({ repeat: -1 });

      slides.forEach((slide) => {
        sliderTL
          .fromTo(
            slide,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
          )
          .to(slide, {
            opacity: 0,
            scale: 1.05,
            duration: 1,
            ease: "power2.out",
            delay: 3, // visible for 3s
          });
      });
    });

    // ============================
    // COUNT-UP NUMBERS
    // ============================
    countersRef.current.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => {
          gsap.to(el, {
            innerText: el.dataset.count,
            duration: 1.5,
            ease: "power1.out",
            snap: { innerText: 1 },
          });
        },
      });
    });
  }, []);
  return (
    <>
      <section className="section hero">
        <video
          className="hero-video"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          preload="none"
        >
          <source src="/assets/banner4.mp4" type="video/mp4" />
        </video>
      </section>
      <section ref={thirdRef} className="section third third-section">
        <h1>
          Giving the <br />
          best just for you
        </h1>
        <div className="third-second">
          <div className="third-second-img">
            <img
              className="slide-img active"
              src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2185.jpg"
              alt="residential"
              loading="lazy"
            />
            <img
              className="slide-img"
              src="https://img.freepik.com/free-photo/modern-interior-design-office_181624-21578.jpg"
              alt="commercial"
              loading="lazy"
            />
            <img
              className="slide-img"
              src="https://img.freepik.com/free-photo/minimalist-office-interior-design_23-2151826250.jpg?t=st=1766473652~exp=1766477252~hmac=6d0309ea549431e4e7a764a9d0f2b96ec5974b9108246429001fff3d5369ac0d&w=1480"
              alt="residential"
              loading="lazy"
            />
            <img
              className="slide-img"
              src="https://img.freepik.com/free-photo/modern-interior-design-office_181624-21578.jpg"
              alt="commercial"
              loading="lazy"
            />
          </div>
          <div className="third-second-text">
            <div className="residential-text active">
              <h1>
                {" "}
                <img
                  src="https://springelmas.com/img/logo.png"
                  width="110px"
                  alt=""
                />
                Spring Elmas
              </h1>
              <p>
                Spring Elmas has today evolved as one of the most vibrant real
                estate destinations, With a number of ongoing world-class
                developments and meticulous expansion.
              </p>
              <p>
                Where Spring Elmas in Noida Extension new launch residential
                project with The sweeping lush surrounding, assortment of finest
                amenities and ample space between towers will make your living
                an enriching experience,{" "}
              </p>
              <p>
                Going smart over the natural resources endow the residents with
                an eco-living in this blissfully tranquil location.
              </p>
            </div>
          </div>
        </div>
        <div className="third-second">
          <div className="third-second-img">
            <img
              className="slide-img active"
              src="https://img.freepik.com/free-photo/minimalist-office-interior-design_23-2151826242.jpg?t=st=1766473565~exp=1766477165~hmac=ee474eef7a9833808e6dbfe77557a4ef5a9fffdb1d657dece13cf85c21eb78f5&w=1480"
              alt="residential"
              loading="lazy"
            />
            <img
              className="slide-img"
              src="https://img.freepik.com/free-photo/minimalist-office-interior-design_23-2151826265.jpg?t=st=1766473605~exp=1766477205~hmac=185a1c133c60fe1e53c0dbda3566076af4a07aec45a26015d6fbdf8b87dbe717&w=1480"
              alt="commercial"
              loading="lazy"
            />
            <img
              className="slide-img"
              src="https://img.freepik.com/free-photo/minimalist-office-interior-design_23-2151826239.jpg?t=st=1766473624~exp=1766477224~hmac=35b1cc1ad37845c97707e292c21cefb6e18e1578fbc3160e39a523ccec71142e&w=1480"
              alt="residential"
              loading="lazy"
            />
            <img
              className="slide-img"
              src="https://img.freepik.com/free-photo/minimalist-office-interior-design_23-2151826250.jpg?t=st=1766473652~exp=1766477252~hmac=6d0309ea549431e4e7a764a9d0f2b96ec5974b9108246429001fff3d5369ac0d&w=1480"
              alt="commercial"
              loading="lazy"
            />
          </div>
          <div className="third-second-text">
            <div className="commercial-text">
              <h1>
                <img
                  src="http://rudrabuildwell.com/images/logo-aquacasa.gif"
                  width="70px"
                  alt=""
                />
                &nbsp;Elmas Aquacasa
              </h1>
              <p>
                Thoughtfully planned residential spaces designed to bring
                comfort, convenience, and a sense of belonging to everyday life.
                Homes crafted for modern families who value quality living and
                peaceful surroundings.
              </p>
              <p>
                Spacious layouts, abundant natural light, and smart use of space
                ensure that every home feels open, warm, and welcoming. From
                premium finishes to functional design, every detail is created
                to elevate your lifestyle.
              </p>
              <p>
                With amenities for relaxation, recreation, and community living,
                Elmas Aquacasa offers a perfect balance between privacy and
                togetherness. It is a place where families grow, relationships
                flourish, and life feels truly connected.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section ref={sectionRef} className="section second">
        <h2 className="section-title">
          Our Legacy in <br />
          Design &amp; Living
        </h2>

        <div className="second-div">
          {/* IMAGE SLIDER */}
          <div
            className="second-div1"
            ref={(el) => el && imagesRef.current.push(el)}
          >
            <img
              className="float-img"
              src="https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-fabric-sofa_105762-2186.jpg"
              loading="lazy"
            />
            <img
              className="float-img"
              src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2182.jpg"
              loading="lazy"
            />
            <img
              className="float-img"
              src="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg"
              loading="lazy"
            />
          </div>

          {/* TEXT + STATS */}
          <div className="second-div2">
            <h3>
              Being alive means energizing your body, expanding your mind, and
              awakening your soul. Discover spaces designed to help you live,
              work, shop, and play fully—where thoughtful design inspires
              balance, creativity, and well-being. From vibrant social
              environments to calm personal retreats, every space is crafted to
              support a lifestyle that feels meaningful, effortless, and deeply
              connected to how you experience life every day.
            </h3>

            <div>
              {[
                { count: 50, label: "Complete Projects" },
                { count: 70, label: "Years Experience" },
                { count: 15, label: "Lakh sq.m Delivered" },
                { count: 14, label: "Awards Won" },
              ].map((item, i) => (
                <div key={i} className="second-div2-inner">
                  <h1>
                    <span
                      data-count={item.count}
                      ref={(el) => el && countersRef.current.push(el)}
                    >
                      0
                    </span>
                    <span className="plus">+</span>
                  </h1>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
