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

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ContactPopup from "@/components/layout/ContactPopup";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

import Maintenance from "@/components/Maintenance";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  
  // Set this flag to false in the future to disable the maintenance page
  const isMaintenance = true;

  return (
    <html lang="en" className={{"--font-cormorant": playfair.style.fontFamily}}>
      <head>
        <link rel="preload" href="/assets/logo.png" as="image" />
      </head>

      <body>
        {isMaintenance && <Maintenance />}
        {!isMaintenance && !isAdmin && <Navbar />}
        {!isMaintenance && !isAdmin && <SmoothScroll />}
        {!isMaintenance && children}
        {!isMaintenance && !isAdmin && <Footer />}
        {!isMaintenance && !isAdmin && <ContactPopup />}
      </body>
    </html>
  );
}