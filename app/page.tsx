"use client";
import {Card, CardFooter, Image, Button} from "@heroui/react";
import {Aboutus} from "./component/AboutUs";
import Testimonials from "./component/testimonials-component/testimonials";
export default function Home() {
  return (
      <>
      <Aboutus />
      <Testimonials/>
      </>
  );
}
