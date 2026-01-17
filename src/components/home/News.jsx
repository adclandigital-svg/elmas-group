"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./news.css";

export default function FeaturedSection() {
  return (
    <section className="featured-wrap">
      <div className="featured-container">
        {/* LEFT COLUMN — ARTICLES SLIDER */}
        <div className="latest-articles">
          <h4>PROJECT BLOGS</h4>

          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={18}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            modules={[Autoplay]}
            className="article-swiper"
          >
            <SwiperSlide>
              <div className="article-card">
                <img src="https://img.freepik.com/premium-photo/cafe-interior-layout-loft-style-dark-colors-open-space-interior-view-various-coffee-welc_926199-2276413.jpg?w=2000" />
                <p>Skyline Residences Launches Premium Smart Homes</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="article-card">
                <img src="https://img.freepik.com/premium-photo/dark-modern-stylish-male-apartment-interior-with-lighting-decorative-walls-fireplace-dressing-area-huge-window_267786-301.jpg?w=2000" />
                <p>Green Living Communities Gain Strong Buyer Demand</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="article-card">
                <img src="https://img.freepik.com/premium-photo/dark-modern-stylish-male-apartment-interior-with-lighting-decorative-walls-fireplace-dressing-area-huge-window_267786-234.jpg?w=2000" />
                <p>Commercial Hubs Drive New Investment Opportunities</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="article-card">
                <img src="https://img.freepik.com/premium-photo/cafe-interior-layout-loft-style-dark-colors-open-space-interior-view-various-coffee-welc_926199-2276413.jpg?w=2000" />
                <p>Waterfront Residences Attract Premium Homebuyers</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="article-card">
                <img src="https://img.freepik.com/premium-photo/dark-modern-stylish-male-apartment-interior-with-lighting-decorative-walls-fireplace-dressing-area-huge-window_267786-301.jpg?w=2000" />
                <p>Smart Township Projects Record High Pre-Bookings</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="article-card">
                <img src="https://img.freepik.com/premium-photo/dark-modern-stylish-male-apartment-interior-with-lighting-decorative-walls-fireplace-dressing-area-huge-window_267786-234.jpg?w=2000" />
                <p>Office Parks Near Metro Corridors See Growth Surge</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* CENTER COLUMN — STATIC */}
        <div className="featured-main">
          <h5>LATEST PROJECT UPDATE</h5>
          <h2>SKYLINE RESIDENCES — THE NEXT ICONIC ADDRESS</h2>

          <div className="featured-image">
            <img src="https://img.freepik.com/premium-photo/dark-modern-stylish-male-apartment-interior-with-lighting-decorative-walls-fireplace-dressing-area-huge-window_267786-234.jpg?w=2000" />
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
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            modules={[Autoplay]}
            className="logo-swiper linear-scroll"
          >
            <SwiperSlide>
              <div className="logo-card">
                <img src="https://www.clipartmax.com/png/middle/113-1138661_captain-news-logo.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://e7.pngegg.com/pngimages/160/547/png-clipart-aaj-tak-india-television-channel-news-broadcasting-news-anchor-on-tv-breaking-news-television-text.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://www.vhv.rs/dpng/d/493-4935300_the-hindu-newspaper-logo-png-logo-of-the.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjjXoJrm98pN9PWgGodxByoe3Yc8bfIZaNM79xmEGUpJvFm0qPGr4T48&s=10" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://lamhas.com/wp-content/uploads/2022/06/8-1.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logo-card">
                <img src="https://www.clipartmax.com/png/middle/113-1138661_captain-news-logo.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://e7.pngegg.com/pngimages/160/547/png-clipart-aaj-tak-india-television-channel-news-broadcasting-news-anchor-on-tv-breaking-news-television-text.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://www.vhv.rs/dpng/d/493-4935300_the-hindu-newspaper-logo-png-logo-of-the.png" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjjXoJrm98pN9PWgGodxByoe3Yc8bfIZaNM79xmEGUpJvFm0qPGr4T48&s=10" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="logo-card">
                <img src="https://lamhas.com/wp-content/uploads/2022/06/8-1.png" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
