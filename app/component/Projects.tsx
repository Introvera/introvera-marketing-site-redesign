// components/Projects.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/react";

type Project = { id: string; title: string; subtitle: string; bg: string; logo?: string };
const PROJECTS: Project[] = [
  { id: "p1", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p2", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p3", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p4", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p5", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
];

export default function Projects() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(2);

  // pointer-drag state
  const dragging = React.useRef(false);
  const startX = React.useRef(0);
  const startScrollLeft = React.useRef(0);
  const pointerId = React.useRef<number | null>(null);

  const updateActiveOnScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestD = Infinity;
    Array.from(el.children).forEach((ch, i) => {
      const c = ch as HTMLElement;
      const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid);
      if (d < bestD) { bestD = d; best = i; }
    });
    setActive(best);
  };
  
  React.useEffect(() => {
  const el = scrollerRef.current;
  if (!el) return;

  // Get the middle card
  const midCard = el.children[2] as HTMLElement;
  if (midCard) {
    // Scroll horizontally to center it without affecting page scroll
    const scrollLeft =
      midCard.offsetLeft - (el.clientWidth - midCard.clientWidth) / 2;
    el.scrollLeft = scrollLeft;
  }
}, []);

  const snapToActive = () => {
    const el = scrollerRef.current;
    if (!el) return;
    (el.children[active] as HTMLElement)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  // Pointer Events (smooth + reliable)
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragging.current = true;
    pointerId.current = e.pointerId;
    el.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    el.classList.add("dragging"); // disables snap while dragging
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const el = scrollerRef.current;
    if (!el || !dragging.current) return;
    // no need preventDefault when we have pointer capture
    const dx = e.clientX - startX.current;
    el.scrollLeft = startScrollLeft.current - dx;
  };

  const endPointer = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (pointerId.current !== null) {
      try { el.releasePointerCapture(pointerId.current); } catch {}
      pointerId.current = null;
    }
    dragging.current = false;
    el.classList.remove("dragging");
    // snap to nearest item after drag
    requestAnimationFrame(snapToActive);
  };

  return (
    <section id="aboutus"
      className="
        relative w-full
        bg-[url('/backgrounds/aboutus.png')] bg-cover bg-center
        "
    >
    <section className="relative w-full py-16 md:py-20">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 text-center select-none">
        <h2 className="text-[28px] md:text-4xl font-extrabold tracking-wide">
          <span className="text-white/90">SHOWCASE OF </span>
            <span className="gradient-text-line">
            INNOVATION
          </span>        </h2>
        <p className="mt-4 text-sm md:text-base text-white/60">
          Explore our diverse portfolio of projects that showcase innovation, 
          creativity, and technical excellence. From intuitive mobile and web 
          applications to scalable backend systems and cloud solutions, each 
          project reflects our commitment to delivering impactful and user-focused, 
          and digital experiences.
        </p>
      </div>
        {/* Yellow gradient balls over left & right cards */}
      <div
        aria-hidden
        className="hidden md:block pointer-events-none absolute inset-0 z-10 overflow-hidden"
      >
        {/* Left ball */}
        <div
          className="absolute left-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 255, 0, 0) 70%)",
          }}
        />
        {/* Right ball */}
        <div
          className="absolute right-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0) 70%)",
          }}
        />
      </div>
      {/* Carousel */}
      <div className="relative mx-auto mt-10 ">
        <div
          ref={scrollerRef}
          onScroll={updateActiveOnScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
          className={[
            "mt-2 flex gap-6 overflow-x-auto pb-4 select-none",
            "snap-x snap-mandatory",
            "cursor-grab",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {PROJECTS.map((p, i) => {
            const isActive = i === active;
            return (
              <div key={p.id} className="snap-center shrink-0 my-20" style={{ width: "min(88vw, 660px)" }}>
                
                <Card
                  className={[
                    "relative h-[360px] md:h-[400px] rounded-2xl border border-white/10 overflow-hidden",
                    "transition-all duration-300",
                    isActive
                    ? "scale-[1.02] ring-(--color-gradient-ball) shadow-[0_0_70px_-20px_var(--color-gradient-ball)]"
                    : "opacity-100",
                  ].join(" ")}
                  onDragStart={(e) => e.preventDefault()} // stop ghost-drag
                >
                  <CardBody className="p-0 overflow-hidden">
                    {/* Background image — not draggable */}
                    <div className="absolute inset-0">
                      <Image
                        src={p.bg}
                        alt={`${p.title} preview`}
                        fill
                        priority={i === 2}
                        className="object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_70%,rgba(0,0,0,0.1),rgba(0,0,0,0.65))]" />
                    </div>

                    {/* Title row */}
                    <div className="relative z-10 flex items-center gap-3 p-6">
                      {p.logo && (
                        <div className="relative">
                          <Image 
                          src={p.logo} 
                          alt={`${p.title} logo`} 
                          className="object-contain" 
                          draggable={false}  
                          width={80} 
                          height={80}/>
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-xl md:text-2xl font-extrabold tracking-wide">{p.title}</h3>
                        <p className="text-sm md:text-base">{p.subtitle}</p>
                      </div>
                    </div>

                    {/* Center glow only on active */}
                    {isActive && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-60"
                        style={{ background: "radial-gradient(closest-side, rgba(122,108,255,0.5), rgba(122,108,255,0) 70%)" }}
                      />
                    )}
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disable snap during drag for butter-smooth feel */}
      <style jsx global>{`
        .dragging {
          scroll-behavior: auto !important;
          cursor: grabbing !important;
          scroll-snap-type: none !important;
        }
      `}</style>
    </section>
    </section>
  );
}