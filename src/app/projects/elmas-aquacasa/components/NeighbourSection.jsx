"use client"
import { useState } from "react";
import "./NeighbourSection.css";

const slides = [
  {
    text: "Metro Station – just 5 minutes walk from the community",
    image: "https://img.freepik.com/premium-photo/monorail-train-sao-paulo-metro_926199-2833106.jpg?w=1480",
  },
    {
    text: "International Schools and Colleges within 10 minutes",
    image: "https://img.freepik.com/premium-photo/entrance-ackerman-union-ucla-with-modern-architectural-design_536604-18800.jpg?w=1480",
  },

  {
    text: "Multi-speciality hospitals and emergency care nearby",
    image: "https://img.freepik.com/premium-photo/aerial-photography-santa-giulia-milan-italy-residential-area-southeastern-outskirts-milan_611820-380.jpg?w=1480",
  },
  {
    text: "Premium shopping malls, cafes and multiplexes around the corner",
    image: "https://img.freepik.com/premium-photo/restaurant-with-large-glass-ceiling-tables-chairs_1065421-8566.jpg?w=1480",
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
