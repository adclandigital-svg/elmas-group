import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/logo.png" as="image" />
        <link rel="preload" href="https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="preload" href="https://fonts.gstatic.com/s/cinzel/v26/8vIJ7ww63mVu7gt79mT7.woff2" as="font" type="font/woff2" crossorigin />
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
