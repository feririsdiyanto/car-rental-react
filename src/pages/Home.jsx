import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import OurService from "../components/OurService";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Testimoni from "../components/Testimoni";
import Faq from "../components/Faq";
import WhyUs from "../components/WhyUs";
import SewaMobil from "../components/SewaMobil";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimoni />
      <SewaMobil />
      <Faq />
      <Footer />
    </>
  );
}
