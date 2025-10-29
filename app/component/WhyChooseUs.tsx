"use client";
import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/react";

/* ─────────────────────────── Feature Model ─────────────────────────── */
type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string; // icon path under /public/icons
  bg: string;   // gradient background for the card
};

/* ─────────────────────────── Feature Data ─────────────────────────── */
const FEATURES: Feature[] = [
  {
    id: "clean-code",
    title: "CLEAN CODE",
    description: "We write readable, maintainable code that’s easy to scale.",
    icon: "/icons/code.png",
    bg: "linear-gradient(139deg, rgba(0,0,0,0.37) 27.11%, rgba(53,51,51,0.37) 100%)",
  },
  {
    id: "agile-process",
    title: "AGILE PROCESS",
    description: "We work in fast, flexible sprints to deliver results quickly.",
    icon: "/icons/transistor.png",
    bg: "linear-gradient(139deg, rgba(53,51,51,0.37) 27.11%, rgba(0,0,0,0.37) 60.05%, rgba(0,0,0,0.37) 100%)",
  },
  {
    id: "clear-communication",
    title: "CLEAR COMMUNICATION",
    description: "We keep you updated every step of the way, no surprises.",
    icon: "/icons/wifi.png",
    bg: "linear-gradient(125deg, rgba(0,0,0,0.37) 76.11%, rgba(53,51,51,0.37) 100%)",
  },
  {
    id: "business-focused",
    title: "BUSINESS-FOCUSED",
    description: "Our solutions align with your goals, not just the tech.",
    icon: "/icons/trade.png",
    bg: "linear-gradient(160deg, rgba(53,51,51,0.37) 2.6%, rgba(0,0,0,0.37) 96.04%)",
  },
  {
    id: "on-time-delivery",
    title: "ON-TIME DELIVERY",
    description: "We plan realistically and hit deadlines without drama.",
    icon: "/icons/clock.png",
    bg: "linear-gradient(125deg, rgba(0,0,0,0.37) 76.14%, rgba(53,51,51,0.37) 100%)",
  },
  {
    id: "skilled-team",
    title: "SKILLED TEAM",
    description: "Experienced developers, designers, and strategists on every project.",
    icon: "/icons/people.png",
    bg: "linear-gradient(232deg, rgba(53,51,51,0.37) 0%, rgba(0,0,0,0.37) 32%)",
  },
];

/* ─────────────────────────── Reusable Feature Card ─────────────────────────── */
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card
      isBlurred
      shadow="sm"
      className="rounded-2xl backdrop-blur-xl"
      style={{ background: feature.bg }}
    >
      <CardBody className="p-4 md:p-5">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-lg md:text-2xl font-extrabold tracking-wide uppercase">
            {feature.title}
          </h2>
        </div>
        <p className="mt-3 leading-6">{feature.description}</p>
      </CardBody>
    </Card>
  );
}

/* ─────────────────────────── Main Component ─────────────────────────── */
const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative mx-auto px-4 sm:px-24 lg:px-24">
      {/* WHITE PANEL */}
      <div
        className="
          relative rounded-[20px] py-8 px-6
          bg-white/4
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(255,255,255,0.04)]
        "
      >
        {/* background glows behind panel */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-[20px]"
          style={{
            background: `
              radial-gradient(40% 60% at 15% 5%,
                color-mix(in srgb, var(--color-gradient-ball) 40%, transparent) 0%,
                transparent 70%
              ),
              radial-gradient(90% 90% at 90% 100%,
                color-mix(in srgb, var(--color-gradient-ball) 40%, transparent) 0%,
                transparent 70%
              )`,
          }}
        />

        {/* header */}
        <div className="relative flex flex-col items-center gap-3 mb-12">
          <h1 className="text-center text-3xl sm:text-4xl tracking-wide uppercase mb-3">
            <span>Why Choose </span>
            <span className="gradient-text-line">US?</span>
          </h1>
          <p className="text-center leading-6">
            At Introvera, we don’t just deliver software, we deliver confidence.
            Our process is built on transparency, efficiency, and technical excellence,
            ensuring every project runs smoothly from concept to completion. With a focus
            on clean code, agile practices, and strong collaboration, we help businesses
            achieve results that are reliable, scalable, and built to last.
          </p>
        </div>

        {/* grid of dynamic feature cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;