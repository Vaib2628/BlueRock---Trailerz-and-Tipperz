import CustomCursor from '@/components/ui/CustomCursor';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Features from '@/components/sections/Features';
import Process from '@/components/sections/Process';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Features />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
