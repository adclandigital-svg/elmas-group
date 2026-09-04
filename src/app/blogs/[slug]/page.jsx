"use client";

import React, { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { allBlogs } from "../blogData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BlogDetail.css";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetailPage() {
  const params = useParams(); // get slug from URL
  const router = useRouter();

  const currentIndex = allBlogs.findIndex((b) => b.slug === params.slug);
  const blog = currentIndex !== -1 ? allBlogs[currentIndex] : null;

  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog = currentIndex !== -1 && currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

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
      
      <div className="blog-detail-container">
        {/* HEADER SECTION */}
        <div className="blog-detail-header" ref={titleRef}>
          <button className="blog-back-btn" onClick={() => router.back()}>
            <span>←</span> Back to Insights
          </button>
          
          <div className="blog-meta-top">
            <span className="blog-cat">{blog.category || "Real Estate"}</span>
            <span className="blog-date-sep">•</span>
            <span className="blog-date">{blog.date}</span>
          </div>

          <h1>{blog.title}</h1>
          
          <div className="blog-author-meta">
            Written by <strong>{blog.author}</strong>
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <div className="blog-detail-image-wrapper" ref={imageRef}>
          <img src={blog.image} alt={blog.title} />
        </div>

        {/* CONTENT */}
        <div className="blog-detail-body" ref={contentRef}>
          <p className="drop-cap">{blog.content}</p>
        </div>

        {/* PREV / NEXT NAVIGATION */}
        <div className="blog-detail-nav">
          {prevBlog ? (
            <Link href={`/blogs/${prevBlog.slug}`} className="nav-prev">
              <span className="nav-label">← Previous Article</span>
              <span className="nav-title">{prevBlog.title}</span>
            </Link>
          ) : (
            <div className="nav-empty"></div>
          )}

          {nextBlog ? (
            <Link href={`/blogs/${nextBlog.slug}`} className="nav-next">
              <span className="nav-label">Next Article →</span>
              <span className="nav-title">{nextBlog.title}</span>
            </Link>
          ) : (
            <div className="nav-empty"></div>
          )}
        </div>
      </div>

    </section>
  );
}
