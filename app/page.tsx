"use client";

import { NextUIProvider } from "@nextui-org/system";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Roadmap from "./components/Roadmap";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <NextUIProvider>
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Roadmap />
      <Waitlist />
      <Footer />
    </NextUIProvider>
  );
}
