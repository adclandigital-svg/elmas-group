"use client";
import { useState } from "react";
import "./NeighbourSection.css";

export default function NeighbourSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="nb-section">
      <div className="nb-image-wrapper">
        {/* Images */}
        <img
          src="https://img.freepik.com/premium-photo/entrance-ackerman-union-ucla-with-modern-architectural-design_536604-18800.jpg?w=1480"
          className={`nb-image ${active === 0 ? "active" : ""}`}
          alt=""
        />
        <img
          src="https://img.freepik.com/premium-photo/aerial-photography-santa-giulia-milan-italy-residential-area-southeastern-outskirts-milan_611820-380.jpg?w=1480"
          className={`nb-image ${active === 1 ? "active" : ""}`}
          alt=""
        />
        <img
          src="https://img.freepik.com/premium-photo/restaurant-with-large-glass-ceiling-tables-chairs_1065421-8566.jpg?w=1480"
          className={`nb-image ${active === 2 ? "active" : ""}`}
          alt=""
        />
        <img
          src="https://img.freepik.com/premium-photo/monorail-train-sao-paulo-metro_926199-2833106.jpg?w=1480"
          className={`nb-image ${active === 3 ? "active" : ""}`}
          alt=""
        />

        {/* Content */}
        <div className="nb-center-title">
          {active === 0 && (
            <>
              <h3>Nearby Schools</h3>
              <p>Top schools located close to Spring Elmas</p>
              <div className="nb-two-col">
                <ul>
                  <li>The Wisdom Tree School – 0.7 km</li>
                  <li>SKS World School – 1 km</li>
                  <li>Rama Devi International School – 1.2 km</li>
                  <li>Golden Valley International School – 1.4 km</li>
                </ul>
                <ul>
                  <li>Ryan International School – 3 km</li>
                  <li>Delhi Public School, Noida – 6 km</li>
                  <li>Pacific World School – 5 km</li>
                  <li>Lotus Valley International School – 7 km</li>
                </ul>
              </div>
            </>
          )}

          {active === 1 && (
            <>
              <h3>Hospitals Nearby</h3>
              <p>Multi-specialty hospitals within easy reach</p>
              <div className="nb-two-col">
                <ul>
                  <li>Yatharth Super Speciality Hospital – 2 km</li>
                  <li>Fortis Hospital, Noida – 8 km</li>
                  <li>Kailash Hospital – 10 km</li>
                </ul>
                <ul>
                  <li>Jaypee Hospital – 12 km</li>
                  <li>Max Super Speciality Hospital – 14 km</li>
                </ul>
              </div>
            </>
          )}

          {active === 2 && (
            <>
              <h3>Shopping & Daily Needs</h3>
              <p>Malls, markets and entertainment hubs nearby</p>
              <div className="nb-two-col">
                <ul>
                  <li>Gaur City Mall – 8 min</li>
                  <li>Logix City Centre – 15 min</li>
                </ul>
                <ul>
                  <li>DLF Mall of India – 25 min</li>
                  <li>Shipra Mall – 20 min</li>
                </ul>
              </div>
            </>
          )}

          {active === 3 && (
            <>
              <h3>Connectivity</h3>
              <p>Seamless road and metro connectivity</p>
              <div className="nb-two-col">
                <ul>
                  <p>Road Access :</p>
                  <li>NH-24 Expressway – 6 min</li>
                  <li>FNG Expressway – 8 min</li>
                  <li>Noida–Greater Noida Expressway – 12 min</li>
                  <li>Jewar Airport (upcoming) – 40 min</li>
                </ul>
                <ul>
                  <p>Public Transport :</p>
                  <li>Sector-52 Metro Station – 8 km</li>
                  <li>Gaur Chowk Bus Stop – 2 km</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Tabs */}
        <div className="nb-text-grid">
          <p
            className={`nb-text ${active === 0 ? "active" : ""}`}
            onMouseEnter={() => setActive(0)}
            onClick={() => setActive(0)}
          >
            Nearby Schools
          </p>
          <p
            className={`nb-text ${active === 1 ? "active" : ""}`}
            onMouseEnter={() => setActive(1)}
            onClick={() => setActive(1)}
          >
            Hospitals Nearby
          </p>
          <p
            className={`nb-text ${active === 2 ? "active" : ""}`}
            onMouseEnter={() => setActive(2)}
            onClick={() => setActive(2)}
          >
            Shopping & Daily Needs
          </p>
          <p
            className={`nb-text ${active === 3 ? "active" : ""}`}
            onMouseEnter={() => setActive(3)}
            onClick={() => setActive(3)}
          >
            Connectivity
          </p>
        </div>
      </div>
    </section>
  );
}
