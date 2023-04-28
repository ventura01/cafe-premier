import Image from "next/image";
import { racing_sans_one } from "@/data";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <Footer />
    </main>
  );
}
