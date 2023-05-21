import Image from "next/image";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import Footer from "components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-rose-400">
      <Navbar />
      <Hero />
      <Footer />
      {/* 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
    */}
    </div>
  );
}
