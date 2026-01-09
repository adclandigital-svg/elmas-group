"use client"
import { useState } from "react";
import "./NeighbourSection.css";

const slides = [
  {
    text: "Metro Station – just 5 minutes walk from the community",
    image: "https://images.unsplash.com/photo-1534595038511-9f219fe0c979",
  },
    {
    text: "International Schools and Colleges within 10 minutes",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },

  {
    text: "Multi-speciality hospitals and emergency care nearby",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    text: "Premium shopping malls, cafes and multiplexes around the corner",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  
];



export default function NeighbourSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="nb-section">
      <div className="nb-image-wrapper">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            className={`nb-image ${active === i ? "active" : ""}`}
            alt=""
          />
        ))}

        <div className="nb-center-title">
            {slides[active].text}
        </div>

        <div className="nb-text-grid">
          {slides.map((s, i) => (
            <p
              key={i}
              className={`nb-text ${active === i ? "active" : "exit"}`}
              onMouseEnter={() => setActive(i)}
            >
              {s.text}
            </p>
          ))}
        </div>
      </div>
    </section>
    
  );
}
