import Image from "next/image";
import { racing_sans_one } from "@/data";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";


export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <ProductsSection />
      <ContactUs />
      <Footer />
    </main>
  );
}
