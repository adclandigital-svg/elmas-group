"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./news.css";
import { allBlogs } from "@/app/blogs/blogData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FeaturedSection() {
  const route = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="featured-wrap">
      <div className="featured-container">
        {/* LEFT COLUMN — ARTICLES SLIDER */}
        <div className="latest-articles">
          <h4>PROJECT BLOGS</h4>

          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={8}
            loop={true}
            speed={1200}
            centeredSlides={true}
            allowTouchMove={true}
            simulateTouch={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => {
              setTimeout(() => swiper.update(), 100);
            }}
            modules={[Autoplay]}
            className="article-swiper"
            breakpoints={{
              0: {
                direction: "horizontal",
                slidesPerView: 1,
                spaceBetween: 8,
              },
              600: {
                direction: "horizontal",
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1025: {
                direction: "vertical",
                slidesPerView: 3,
                spaceBetween: 8,
              },
            }}
          >
            {allBlogs?.slice(0, 5)?.map((blog, index) => (
              <SwiperSlide
                key={index}
                className="article-card-upper"
                onClick={() => route.push(`/blogs/${blog.slug}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="article-card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading={index === 0 ? "eager" : "lazy"} // fix layout shift
                  />
                  <p>{blog.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CENTER COLUMN */}
        <div className="featured-main">
          <h5>LATEST PROJECT UPDATE</h5>
          <h2>SKYLINE RESIDENCES — THE NEXT ICONIC ADDRESS</h2>

          <div className="featured-image">
            <img
              src="https://elmas-group.vercel.app/construction/87.jpeg"
              loading="eager"
              alt="project"
            />
            <p className="featured-desc">
              Our latest project update reveals the launch of Skyline Residences
              — a future-ready residential landmark offering premium smart
              homes, expansive green landscapes, and world-class lifestyle
              amenities. Strategically located in the city’s fastest-growing
              corridor, the development features modern clubhouses, wellness
              zones, retail boulevards, and advanced security systems,
              delivering a refined living experience for today’s urban families
              and tomorrow’s investors.
            </p>
          </div>

          {/* LOGO STRIP */}
          <Swiper
            direction="horizontal"
            slidesPerView="auto"
            spaceBetween={40}
            loop={true}
            speed={5000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => {
              setTimeout(() => swiper.update(), 100);
            }}
            modules={[Autoplay]}
            className="logo-swiper linear-scroll"
          >
            {/* <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://www.clipartmax.com/png/middle/113-1138661_captain-news-logo.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://e7.pngegg.com/pngimages/160/547/png-clipart-aaj-tak-india-television-channel-news-broadcasting-news-anchor-on-tv-breaking-news-television-text.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://www.vhv.rs/dpng/d/493-4935300_the-hindu-newspaper-logo-png-logo-of-the.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjjXoJrm98pN9PWgGodxByoe3Yc8bfIZaNM79xmEGUpJvFm0qPGr4T48&s=10"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://lamhas.com/wp-content/uploads/2022/06/8-1.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://www.clipartmax.com/png/middle/113-1138661_captain-news-logo.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://e7.pngegg.com/pngimages/160/547/png-clipart-aaj-tak-india-television-channel-news-broadcasting-news-anchor-on-tv-breaking-news-television-text.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://www.vhv.rs/dpng/d/493-4935300_the-hindu-newspaper-logo-png-logo-of-the.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjjXoJrm98pN9PWgGodxByoe3Yc8bfIZaNM79xmEGUpJvFm0qPGr4T48&s=10"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo-card">
                <img
                  src="https://lamhas.com/wp-content/uploads/2022/06/8-1.png"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
