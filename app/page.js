import '../app/globals.css';
import Image from "next/image";
import HeroSection from "./sections/hero";
import AboutSection from "./sections/about";
import ServicesSection from "./sections/services";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
