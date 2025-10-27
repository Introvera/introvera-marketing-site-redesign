"use client";
import {Card, CardFooter, Image, Button} from "@heroui/react";
import Hero from "@/app/component/Hero";
import {Aboutus} from "./component/AboutUs";
import ServicesGrid from "./component/Ourservice";
import Testimonials from "./component/testimonials-component/testimonials";
import WhyChooseUs from "./component/WhyChooseUs";
import Projects from "./component/Projects";
import Contactus from "./component/Contactus";
export default function Home() {
  return (
      <>
      
      <Hero />
      <Aboutus />
      <WhyChooseUs />
      <ServicesGrid />
      <Projects />
      <Testimonials/>
      <Contactus />
      </>
  );
}
