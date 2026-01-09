"use client";

import React, { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { allBlogs } from "../blogData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BlogDetail.css";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetailPage() {
  const params = useParams(); // get slug from URL
  const router = useRouter();

  const blog = allBlogs.find((b) => b.slug === params.slug);

  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!blog) return;

    const elements = [titleRef.current, imageRef.current, contentRef.current];

    elements.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [blog]);

  if (!blog) {
    return <p className="not-found">Blog not found.</p>;
  }

  return (
    <section className="blog-detail-page">
      {/* HERO SECTION */}
      <div className="blog-hero" ref={imageRef}>
        <img src={blog.image} alt={blog.title} />

        <div className="blog-hero-overlay" />

        <div className="blog-hero-content" ref={titleRef}>
          <p onClick={() => router.back()}>← Back to Insights & Stories</p>
          <h1>{blog.title}</h1>

          <div className="blog-meta">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.author}</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="blog-body" ref={contentRef}>
        <h5>[ blogs / {params?.slug} ]</h5>
        <p>{blog.content}</p>
      </div>
    </section>
  );
}
