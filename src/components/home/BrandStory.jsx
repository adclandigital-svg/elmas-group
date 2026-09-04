import React from 'react';
import Link from 'next/link';
import './brandstory.css';

export default function BrandStory() {
  return (
    <section className="brand-story-section">
      <div className="container">
        <div className="brand-story-container">
          
          {/* Left Content */}
          <div className="bs-content">
            <span className="bs-subtitle">CHANNEL PARTNER PROGRAM</span>
            <h2 className="bs-title">
              Partner with us to build <br/> <em>extraordinary futures.</em>
            </h2>
            <p className="bs-desc">
              Join our elite network to access premium real estate projects, dedicated support, and unmatched growth opportunities with Elmas Group.
            </p>
            <Link href="/partner" className="bs-btn">
              Become a Partner
            </Link>
          </div>

          {/* Right Image */}
          <div className="bs-image-wrapper">
            <img 
              src="/assets/building-1.webp" 
              alt="Elmas Group Partner" 
              className="bs-building-img"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
