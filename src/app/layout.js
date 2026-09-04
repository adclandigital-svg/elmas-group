// "use client";

// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import SmoothScroll from "@/components/layout/SmoothScroll";
// import ContactPopup from "@/components/layout/ContactPopup";
// import { usePathname } from "next/navigation";
// import { Cormorant_Garamond } from "next/font/google";

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   display: "swap",
// });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const isAdmin = pathname.startsWith("/admin");

//   return (
//     <html lang="en" style={{ "--font-cormorant": cormorant.style.fontFamily }}>
//       <head>
//         <link rel="preload" href="/assets/logo.png" as="image" />
//         <title>Elmas Group</title>
//       </head>

//       <body>
//         {!isAdmin && <Navbar />}
//         {!isAdmin && <SmoothScroll />}
//         {children}
//         {!isAdmin && <Footer />}
//         {!isAdmin && <ContactPopup />}
//       </body>
//     </html>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ContactPopup from "@/components/layout/ContactPopup";
import { usePathname } from "next/navigation";
import { Nunito_Sans, Cormorant_Garamond } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

import Maintenance from "@/components/Maintenance";
import DisclaimerBar from "@/components/layout/DisclaimerBar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  
  // Set maintenance mode state
  const [isMaintenance, setIsMaintenance] = useState(true);

  useEffect(() => {
    // Import Bootstrap JS for client-side functionality (modals, dropdowns, etc.)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // 1. Automatically disable maintenance mode for your local development environment
    if (process.env.NODE_ENV === "development") {
      setIsMaintenance(false);
      return;
    }

    // 2. Secret URL bypass for production (Live Website)
    // To view the site on live: yourwebsite.com/?preview=true
    // To re-enable maintenance on live: yourwebsite.com/?preview=false
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "true") {
      localStorage.setItem("bypass_maintenance", "true");
    } else if (params.get("preview") === "false") {
      localStorage.removeItem("bypass_maintenance");
    }

    if (localStorage.getItem("bypass_maintenance") === "true") {
      setIsMaintenance(false);
    }
  }, []);

  return (
    <html lang="en" style={{ 
      "--font-nunito": nunito.style.fontFamily,
      "--font-cormorant": cormorant.style.fontFamily 
    }}>
      <head>
        <link rel="preload" href="/assets/logo.png" as="image" />
      </head>

      <body>
        {isMaintenance && <Maintenance />}
        {!isMaintenance && !isAdmin && <Navbar />}
        {!isMaintenance && !isAdmin && <SmoothScroll />}
        {!isMaintenance && children}
        {!isMaintenance && !isAdmin && <Footer />}
        {/* {!isMaintenance && !isAdmin && <ContactPopup />} */}
        {!isMaintenance && !isAdmin && <DisclaimerBar />}
        <script src="https://digitalmarketingai.classofachievers.in/static/chatbot-widget.js" data-bot-id="9e612d5c-91ae-4622-bf0e-52a895913fea"></script>
      </body>
    </html>
  );
}