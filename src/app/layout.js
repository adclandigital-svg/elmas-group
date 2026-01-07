import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Elmas Group</title>
      <body>
        <Navbar/>
        <SmoothScroll/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
