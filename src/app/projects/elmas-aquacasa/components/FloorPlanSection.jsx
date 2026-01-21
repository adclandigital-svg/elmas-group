"use client";
import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./FloorPlanSection.css"

export default function FloorPlanSection({ plans = [], handleFlip, setShowForm }) {
  const flipBook = useRef(null);
  const [size, setSize] = useState({ width: 700, height: 600 });

  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth;
      if (w > 1200) setSize({ width: 700, height: 600 });
      else if (w > 900) setSize({ width: 560, height: 500 });
      else if (w > 600) setSize({ width: 420, height: 520 });
      else setSize({ width: w - 40, height: Math.min((w - 40) * 1.3, 600) });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="fp-book-section" style={{ minHeight: "650px" }}>
      <h2 className="fp-book-title">Floor Plans</h2>

      <HTMLFlipBook
        width={size.width}
        height={size.height}
        className="fp-flipbook"
        showCover={false}
        drawShadow={true}
        maxShadowOpacity={0.8}
        flippingTime={900}
        swipeDistance={30}
        useMouseEvents={true}
        mobileScrollSupport={true}
        ref={flipBook}
        onFlip={handleFlip}
      >
        {plans.length > 0
          ? plans.map((plan, index) => (
              <React.Fragment key={index}>
                <div className="fp-page fp-front">
                  <img src={plan.image} alt={plan.title} className="fp-image" loading="lazy" />
                  <h3 className="fp-page-title">{plan.title}</h3>
                </div>

                <div className="fp-page fp-back">
                  <h3 className="fp-page-title">{plan.title}</h3>
                  <p className="fp-description">{plan.description}</p>
                  <ul className="fp-details-list">
                    {plan.details.map((d, i2) => (
                      <li key={i2}>
                        <span>{d.label}</span>
                        <strong>{d.value}</strong>
                      </li>
                    ))}
                  </ul>
                  <div className="fp-page-download">
                    <a onClick={() => setShowForm("Brochure")}>Brochure</a>
                    <a onClick={() => setShowForm("Price")}>Price List</a>
                  </div>
                </div>
              </React.Fragment>
            ))
          : <p>Loading floor plans...</p>}
      </HTMLFlipBook>
    </section>
  );
}
