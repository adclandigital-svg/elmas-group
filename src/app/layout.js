"use client";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ContactPopup from "@/components/layout/ContactPopup";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en" style={{ "--font-cormorant": cormorant.style.fontFamily }}>
      <head>
        <link rel="preload" href="/assets/logo.png" as="image" />
        <title>Elmas Group</title>
      </head>

      <body>
        {!isAdmin && <Navbar />}
        {!isAdmin && <SmoothScroll />}
        {children}
        {!isAdmin && <Footer />}
        {!isAdmin && <ContactPopup />}
      </body>
    </html>
  );
}
