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

import { useEffect } from "react";
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

import DisclaimerBar from "@/components/layout/DisclaimerBar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    // Import Bootstrap JS for client-side functionality (modals, dropdowns, etc.)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
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
        {!isAdmin && <Navbar />}
        {!isAdmin && <SmoothScroll />}
        {children}
        {!isAdmin && <Footer />}
        {/* {!isAdmin && <ContactPopup />} */}
        {!isAdmin && <DisclaimerBar />}
        <script src="https://digitalmarketingai.classofachievers.in/static/chatbot-widget.js" data-bot-id="9e612d5c-91ae-4622-bf0e-52a895913fea"></script>
      </body>
    </html>
  );
}