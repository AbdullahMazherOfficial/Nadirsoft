'use client';
import { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from "@/components/home/Navbar";
import Whatsapp from "@/components/common/Whatsapp";
import Footer from "@/components/home/Footer";

export default function ClientWrapper({ children }) {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoad) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[500] bg-white">
        <DotLottieReact
          src="/Videos/loading.lottie"
          loop
          autoplay
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Whatsapp />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}