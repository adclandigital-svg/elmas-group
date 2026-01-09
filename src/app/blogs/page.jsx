"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allBlogs } from "./blogData"; // Your JSON
import "./BlogPage.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const blogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const blogRefs = useRef([]);

  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  // Blogs to show on current page
  const visibleBlogs = allBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  useEffect(() => {
    blogRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [currentPage]);
//   useGSAP(() => {
//     gsap.utils.toArray(".blog-reveal").forEach((el) => {
//       gsap.set(el, { transformOrigin: "top" });

//       gsap.fromTo(
//         el,
//         { scaleY: 1 },
//         {
//           scaleY: 0,
//           duration: 0.6,
//           ease: "power3.out",
//           stagger: 0.12,
//           scrollTrigger: {
//             trigger: ".blog-grid",
//             start: "top 89%",
//             markers: true,
//           },
//         }
//       );
//     });
//   }, [currentPage]);

  useGSAP(() => {
    const reveals = gsap.utils.toArray(".blog-reveal");

    gsap.set(reveals, { transformOrigin: "top" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 85%",
          end: "bottom 10%",
        },
      })
      .fromTo(
        reveals,
        { scaleY: 1 },
        {
          scaleY: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.09, // <- true sequential reveal
        }
      );
  }, [currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page change
  };

  return (
    <section className="blog-page">
      <div className="blog-header">
        <h4>Insights & Stories</h4>
        <h1>Latest <span>Insights</span></h1>
        <p>Insights, stories, and trends from premium real estate.</p>
      </div>

      <div className="blog-grid">
        {visibleBlogs.map((blog, i) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.slug}
            className="blog-card-link"
          >
            <div className="blog-card" ref={(el) => (blogRefs.current[i] = el)}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="blog-reveal"></span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
