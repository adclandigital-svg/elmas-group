import React from 'react';
import './innerhero.css';

export default function InnerHero({ title, subtitle, tag, bgImage, description }) {
  return (
    <div className="inner-hero">
      <div className="inner-hero-bg">
        <img src={bgImage || "/construction/87.jpeg"} alt={title} />
        <div className="inner-hero-overlay"></div>
      </div>
      <div className="inner-hero-content">
        {tag && <span className="inner-hero-tag">{tag}</span>}
        <h1>
          {subtitle && <span>{subtitle} </span>}
          <em>{title}</em>
        </h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
