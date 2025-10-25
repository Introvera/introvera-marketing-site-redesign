"use client";
import React from "react";
import { Card, CardBody } from "@heroui/react";
import { JSX } from "react/jsx-runtime";
import Image from "next/image";


export const Aboutus = () => {
  return (
    <section
      className="
        relative w-full
        bg-[url('/backgrounds/aboutus.png')] bg-cover bg-center
        "
    >
      <div className="relative mx-auto px-4 sm:px-24 lg:px-24 py-14 lg:py-24">

        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
          <span>ABOUT </span>
          <span className="gradient-text-line">
            INTROVERA
          </span>
        </h2>

        <p className="mt-8 text-base text-center text-balance">
          At Introvera, innovation is at the heart of everything we do. 
          We are a team of thinkers, creators, and engineers dedicated to 
          designing digital solutions that help businesses and individuals 
          thrive in a fast-changing, connected world. Our strength lies in 
          blending creativity, strategy, and technology to build software that’s 
          not only functional but also transformative. From scalable web platforms 
          to intelligent digital tools, we focus on creating solutions that solve 
          real problems, drive growth, and inspire progress. We believe great 
          technology starts with understanding people, their goals, their challenges, 
          and their vision for the future. That’s why every project at Introvera is 
          guided by collaboration, innovation, and a shared commitment to quality. 
          With a passion for progress and a mindset for excellence, we’re shaping a 
          future where technology empowers possibility, one idea, one experience, and 
          one solution at a time.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            isBlurred
            shadow="sm"
            className="
              bg-[linear-gradient(to_bottom_right,var(--color-gradient-card1),var(--color-gradient-card2))]
              backdrop-blur-xl
              rounded-2xl
            "
          >
            <CardBody className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <Image
                    src="/icons/target.png"
                    alt="Target Icon"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-wide">
                  <span className="gradient-text-line">
                    OUR MISSION
                  </span>
                </h3>
              </div>
              <p className="mt-4 leading-7">
                To drive digital transformation by providing cutting-edge technology solutions that
                are reliable, scalable, and user-friendly. We strive to help our clients achieve
                their goals through innovation, collaboration, and excellence.
              </p>
            </CardBody>
          </Card>

          <Card
            isBlurred
            shadow="sm"
            className="
              bg-[linear-gradient(to_bottom_right,var(--color-gradient-card2),var(--color-gradient-card1))]
              backdrop-blur-xl
              rounded-2xl
            "
          >
            <CardBody className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <Image
                    src="/icons/eye.png"
                    alt="Eye Icon"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-wide text-white">
                  <span className="gradient-text-line">
                    OUR VISION
                  </span>
                </h3>
              </div>
              <p className="mt-4 leading-7">
                To be a global leader in tech innovation, recognized for our commitment to quality,
                creativity, and customer success. We aim to shape a smarter, more connected future
                through transformative technology and meaningful digital experiences.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;