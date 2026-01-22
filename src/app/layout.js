import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ '--font-cormorant': cormorant.style.fontFamily}}>
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
