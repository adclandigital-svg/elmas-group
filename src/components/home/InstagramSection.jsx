"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./instagram.css";

export default function InstagramSection() {
  const [posts, setPosts] = useState([]);

  // Fallback static images if API key is not provided or API fails
  const fallbackPosts = [
    {
      id: 1,
      image: "https://www.instagram.com/p/DcjMKZoJw81/media/?size=l",
      link: "https://www.instagram.com/p/DcjMKZoJw81/",
    },
    {
      id: 2,
      image: "https://www.instagram.com/p/DcjMG4fp40E/media/?size=l",
      link: "https://www.instagram.com/p/DcjMG4fp40E/",
    },
    {
      id: 3,
      image: "https://www.instagram.com/p/DchS9WPSu5h/media/?size=l",
      link: "https://www.instagram.com/p/DchS9WPSu5h/",
    },
    {
      id: 4,
      image: "https://www.instagram.com/p/DcdrUxfRgDq/media/?size=l",
      link: "https://www.instagram.com/p/DcdrUxfRgDq/",
    },
    {
      id: 5,
      image: "https://www.instagram.com/p/DcbPyR0pEtf/media/?size=l",
      link: "https://www.instagram.com/p/DcbPyR0pEtf/",
    },
    {
      id: 6,
      image: "https://www.instagram.com/p/DcbPsIBho09/media/?size=l",
      link: "https://www.instagram.com/p/DcbPsIBho09/",
    }
  ];

  React.useEffect(() => {
    const fetchInstagramPosts = async () => {
      // NOTE: Instagram blocks direct scraping. To make this work dynamically, 
      // you need an Instagram Graph API Access Token and Account ID.
      // Set them in your .env or .env.local file.
      const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
      const accountId = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_ID;

      if (!token || !accountId) {
        setPosts(fallbackPosts);
        return;
      }

      try {
        const res = await fetch(
          `https://graph.facebook.com/v19.0/${accountId}/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=10`
        );
        const data = await res.json();

        if (data && data.data) {
          const dynamicPosts = data.data
            .filter(item => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM" || item.media_type === "VIDEO")
            .map(item => ({
              id: item.id,
              image: item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url,
              link: item.permalink,
            }));

          if (dynamicPosts.length > 0) {
            setPosts(dynamicPosts);
          } else {
            setPosts(fallbackPosts);
          }
        } else {
          setPosts(fallbackPosts);
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setPosts(fallbackPosts);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="instagram-section">
      <div className="insta-container">
        <div className="insta-header">
          <div className="insta-title-wrap">
            <h2>Follow Us on Instagram</h2>
            <p>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @elmasgroupofficial
            </p>
          </div>
          <a
            href="https://www.instagram.com/elmasgroupofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            View Profile
          </a>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={4}
          loop={true}
          speed={800}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="insta-swiper"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="insta-slide">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-card"
              >
                <img src={post.image} alt="Instagram Post" loading="lazy" referrerPolicy="no-referrer" />
                <div className="insta-overlay">
                  <div className="insta-icon">
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
