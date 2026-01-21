import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/logo.png" as="image" />
        <title>Elmas Group</title>
      </head>
      
      <body>
        <Navbar/>
        <SmoothScroll/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
