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
              <p>Many well-known schools are located close to the project</p>
              <div className="nb-two-col">
                <ul>
                  <li>The School of Scholars – 0.1 km</li>
                  <li>SKS World School – 0.3 km</li>
                  <li>BLS World School – 0.38 km</li>
                  <li>The Wisdom Tree School – 0.7 km</li>
                </ul>
                <ul>
                  <li>Rama Devi International School – 1 km</li>
                  <li>Harshdeep Public School – 1.1 km</li>
                  <li>Golden Valley International School – 1.3 km</li>
                  <li>Royal World International School – 1.36 km</li>
                </ul>
              </div>
            </>
          )}

          {active === 1 && (
            <>
              <h3>Hospitals Nearby</h3>
              <p>Good hospitals and medical facilities are easily available</p>
              <div className="nb-two-col">
                <ul>
                  <li>Kashvi Hospital – 1 km</li>
                  <li>Kaith Hospital – 1.6 km</li>
                  <li>Yatharth Hospital – 2 km</li>
                </ul>
                <ul>
                  <li>NUmed Hospital – 3 km</li>
                  <li>Kailash Hospital – 10 km</li>
                </ul>
              </div>
            </>
          )}

          {active === 2 && (
            <>
              <h3>Shopping & Daily Needs</h3>
              <p>Malls and markets are close to the project</p>
              <div className="nb-two-col">
                <ul>
                  <li>PKS Town Central Mall – 5 min</li>
                  <li>Artha Mart – 5 min</li>
                </ul>
                <ul>
                  <li>Gaur City Mall – 10 min</li>
                  <li>Bhutani 32 City Centre Mall – 15 min</li>
                </ul>
              </div>
            </>
          )}

          {active === 3 && (
            <>
              <h3>Connectivity</h3>
              <p>Excellent connectivity across the city</p>
              <div className="nb-two-col">
                <ul>
                  <p>Road Access :</p>
                  <li>NH-24 Expressway – 6 min</li> {/* long distance → min */}
                  <li>FNG Expressway – 4 min</li> {/* long distance → min */}
                  <li>Noida–Greater Noida Expressway – 10 min</li> {/* long distance → min */}
                  <li>Jewar Airport (upcoming) – 35 min</li> {/* long distance → min */}
                </ul>
                <ul>
                  <p>Public Transport :</p>
                  <li>Sector-52 Metro Station – 8 km</li> {/* nearby → keep km */}
                  <li>Gaur City Chowk / Bus Stop – 2 km</li> {/* nearby → keep km */}
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
