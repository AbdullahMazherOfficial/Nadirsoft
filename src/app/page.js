'use client'
import About from "@/components/about/About";
import Business from "@/components/home/Business";
import FAQsSection from "@/components/home/FAQsSection";
import Header from "@/components/home/Header";
import Projects from "@/components/home/Projects";
import Sector from "@/components/home/Sector";
import Testimonials from "@/components/home/Testinomials";
import Tools from "@/components/home/Tools";
import Banner from "@/components/home/Banner";
import Process from "@/components/home/Process";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Business />
      <Tools />
      <Projects />
      <Testimonials />
      <Sector />
      <FAQsSection />
      <Process />
    </>
  );
}