"use client";
import {Card, CardFooter, Image, Button} from "@heroui/react";
import Hero from "@/app/component/Hero";
import {Aboutus} from "./component/AboutUs";
export default function Home() {
  return (
      <>
      <Hero />
      <Aboutus />
      </>
  );
}
