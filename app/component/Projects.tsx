"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
// ⬇️ extended import (adds modal pieces)
import {
  Card,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link
} from "@heroui/react";

/* ─────────────────────────── Card Type (unchanged) ─────────────────────────── */
type Project = { id: string; title: string; subtitle: string; bg: string; logo?: string };
const PROJECTS: Project[] = [
  { id: "p1", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p2", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p3", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p4", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
  { id: "p5", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
];

/* ─────────────────────── ▼▼ Modal additions ▼▼ ─────────────────────── */
// Separate type for modal contents (your structure)
type Img = string | StaticImageData;
type ProjectDetail = {
  title: string;
  category: string;
  description: string;
  src: Img;
  content: React.ReactNode;
  link?: string;
  projectphotos?: Img[];
};

// Map card.id -> modal content
const DETAILS: Record<Project["id"], ProjectDetail> = {
  p1: {
    title: "Schoolify",
    category: "Web App",
    description:
      "Your all-in-one learning companion, making studying smarter, not harder!",
    src: "/projects/schoolify/cover.jpg", 
    content: (
      <div>
        Schoolify is a unified digital platform designed to bridge the
        communication and management gaps in Sri Lankan schools, especially in
        rural and public education sectors. By centralizing essential school
        operations, Schoolify empowers teachers, students, and parents to stay
        connected, informed, and engaged — all from one place. With features
        like real-time notifications, digital attendance tracking, assignment
        and grade management, and a centralized school calendar, Schoolify
        ensures that no student or parent misses critical academic updates. It
        reduces the administrative burden on educators while increasing parental
        involvement and student accountability. Through its intuitive interface
        and resource-sharing capabilities, Schoolify supports high-quality,
        accessible education by enabling remote access to study materials,
        progress reports, and school announcements. By streamlining
        communication and administration, Schoolify helps foster a more
        inclusive, collaborative, and effective educational ecosystem in Sri
        Lanka.
      </div>
    ),
    link: "https://facebook.com",
    projectphotos: [
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
    ],
  },
  // Fill these with each project's unique content as you have it:
  p2: {
    title: "Schoolify",
    category: "Web App",
    description:
      "Your all-in-one learning companion, making studying smarter, not harder!",
    src: "/projects/schoolify/cover.jpg", 
    content: (
      <div>
        Schoolify is a unified digital platform designed to bridge the
        communication and management gaps in Sri Lankan schools, especially in
        rural and public education sectors. By centralizing essential school
        operations, Schoolify empowers teachers, students, and parents to stay
        connected, informed, and engaged — all from one place. With features
        like real-time notifications, digital attendance tracking, assignment
        and grade management, and a centralized school calendar, Schoolify
        ensures that no student or parent misses critical academic updates. It
        reduces the administrative burden on educators while increasing parental
        involvement and student accountability. Through its intuitive interface
        and resource-sharing capabilities, Schoolify supports high-quality,
        accessible education by enabling remote access to study materials,
        progress reports, and school announcements. By streamlining
        communication and administration, Schoolify helps foster a more
        inclusive, collaborative, and effective educational ecosystem in Sri
        Lanka.
      </div>
    ),
    link: "https://facebook.com",
    projectphotos: [
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
    ],
  },
  p3: {
    title: "Schoolify",
    category: "Web App",
    description:
      "Your all-in-one learning companion, making studying smarter, not harder!",
    src: "/projects/schoolify/cover.jpg", 
    content: (
      <div>
        Schoolify is a unified digital platform designed to bridge the
        communication and management gaps in Sri Lankan schools, especially in
        rural and public education sectors. By centralizing essential school
        operations, Schoolify empowers teachers, students, and parents to stay
        connected, informed, and engaged — all from one place. With features
        like real-time notifications, digital attendance tracking, assignment
        and grade management, and a centralized school calendar, Schoolify
        ensures that no student or parent misses critical academic updates. It
        reduces the administrative burden on educators while increasing parental
        involvement and student accountability. Through its intuitive interface
        and resource-sharing capabilities, Schoolify supports high-quality,
        accessible education by enabling remote access to study materials,
        progress reports, and school announcements. By streamlining
        communication and administration, Schoolify helps foster a more
        inclusive, collaborative, and effective educational ecosystem in Sri
        Lanka.
      </div>
    ),
    link: "https://facebook.com",
    projectphotos: [
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
    ],
  },
  p4: {
    title: "Schoolify",
    category: "Web App",
    description:
      "Your all-in-one learning companion, making studying smarter, not harder!",
    src: "/projects/schoolify/cover.jpg", 
    content: (
      <div>
        Schoolify is a unified digital platform designed to bridge the
        communication and management gaps in Sri Lankan schools, especially in
        rural and public education sectors. By centralizing essential school
        operations, Schoolify empowers teachers, students, and parents to stay
        connected, informed, and engaged — all from one place. With features
        like real-time notifications, digital attendance tracking, assignment
        and grade management, and a centralized school calendar, Schoolify
        ensures that no student or parent misses critical academic updates. It
        reduces the administrative burden on educators while increasing parental
        involvement and student accountability. Through its intuitive interface
        and resource-sharing capabilities, Schoolify supports high-quality,
        accessible education by enabling remote access to study materials,
        progress reports, and school announcements. By streamlining
        communication and administration, Schoolify helps foster a more
        inclusive, collaborative, and effective educational ecosystem in Sri
        Lanka.
      </div>
    ),
    link: "https://facebook.com",
    projectphotos: [
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
    ],
  },
  p5: {
    title: "Schoolify",
    category: "Web App",
    description:
      "Your all-in-one learning companion, making studying smarter, not harder!",
    src: "/projects/schoolify/cover.jpg", 
    content: (
      <div>
        Schoolify is a unified digital platform designed to bridge the
        communication and management gaps in Sri Lankan schools, especially in
        rural and public education sectors. By centralizing essential school
        operations, Schoolify empowers teachers, students, and parents to stay
        connected, informed, and engaged — all from one place. With features
        like real-time notifications, digital attendance tracking, assignment
        and grade management, and a centralized school calendar, Schoolify
        ensures that no student or parent misses critical academic updates. It
        reduces the administrative burden on educators while increasing parental
        involvement and student accountability. Through its intuitive interface
        and resource-sharing capabilities, Schoolify supports high-quality,
        accessible education by enabling remote access to study materials,
        progress reports, and school announcements. By streamlining
        communication and administration, Schoolify helps foster a more
        inclusive, collaborative, and effective educational ecosystem in Sri
        Lanka.
      </div>
    ),
    link: "https://facebook.com",
    projectphotos: [
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
      "/projects/schoolifycard.jpg",
    ],
  },
};
/* ─────────────────────── ▲▲ Modal additions ▲▲ ─────────────────────── */

export default function Projects() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(2);

  // pointer-drag state (unchanged)
  const dragging = React.useRef(false);
  const startX = React.useRef(0);
  const startScrollLeft = React.useRef(0);
  const pointerId = React.useRef<number | null>(null);

  // ▼▼ Modal state (new)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSize] = React.useState<"5xl">("5xl");
  const [selectedId, setSelectedId] = React.useState<Project["id"] | null>(null);
  const selected = selectedId ? DETAILS[selectedId] : null;

  const openFor = (id: Project["id"]) => {
    setSelectedId(id);
    onOpen();
  };

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
    <section id="projects"
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
              "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 255, 0, 0) 90%)",
          }}
        />
        {/* Right ball */}
        <div
          className="absolute right-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0) 90%)",
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
              // <div key={p.id} className="snap-center shrink-0 my-20" style={{ width: "min(88vw, 660px)" }}>
                
              //   <Card 
              //   as="div" 
              //   isPressable
              //     /* ▼ Open modal only if not dragging */
              //     onPress={() => {
              //       if (!dragging.current) openFor(p.id);
              //     }}
              //   className={[
              //     "relative h-[360px] md:h-[400px] rounded-2xl border border-white/10 overflow-hidden",
              //     "transition-all duration-300",
              //     isActive
              //     ? "scale-[1.02] ring-(--color-gradient-ball) shadow-[0_0_70px_-20px_var(--color-gradient-ball)]"
              //     : "opacity-100",
              //   ].join(" ")}
              //     onDragStart={(e) => e.preventDefault()} // stop ghost-drag
              //   >
              //     <CardBody className="p-0 overflow-hidden">
              //       {/* Background image — not draggable */}
              //       <div className="absolute inset-0">
              //         <Image
              //           src={p.bg}
              //           alt={`${p.title} preview`}
              //           fill
              //           priority={i === 2}
              //           className="object-cover"
              //           draggable={false}
              //         />
              //         <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_70%,rgba(0,0,0,0.1),rgba(0,0,0,0.65))]" />
              //       </div>

              //       {/* Title row */}
              //       <div className="relative z-10 flex items-center gap-3 p-6">
              //         {p.logo && (
              //           <div className="relative">
              //             <Image 
              //             src={p.logo} 
              //             alt={`${p.title} logo`} 
              //             className="object-contain" 
              //             draggable={false}  
              //             width={80} 
              //             height={80}/>
              //           </div>
              //         )}
              //         <div className="min-w-0">
              //           <h3 className="text-xl md:text-2xl font-extrabold tracking-wide">{p.title}</h3>
              //           <p className="text-sm md:text-base">{p.subtitle}</p>
              //         </div>
              //       </div>

              //       {/* Center glow only on active */}
              //       {isActive && (
              //         <div
              //           aria-hidden
              //           className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-60"
              //           style={{ background: "radial-gradient(closest-side, rgba(122,108,255,0.5), rgba(122,108,255,0) 70%)" }}
              //         />
              //       )}
              //     </CardBody>
              //   </Card>
              // </div>
              <div key={p.id} className="snap-center shrink-0 my-20" style={{ width: "min(88vw, 660px)" }}>
  <Card 
    as="div" 
    isPressable
    onPress={() => {
      if (!dragging.current) openFor(p.id);
    }}
    className={[
      "relative h-[360px] md:h-[400px] rounded-2xl border border-white/10 overflow-hidden",
      "transition-all duration-300",
      isActive
        ? "scale-[1.05] opacity-100 z-[5] ring-[--color-gradient-ball] shadow-[0_0_80px_-20px_var(--color-gradient-ball)]"
        : "scale-[0.9] md:scale-[0.92] opacity-70 z-[1]",
    ].join(" ")}
    onDragStart={(e) => e.preventDefault()}
  >
    <CardBody className="p-0 overflow-hidden">
      {/* Background image */}
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
              height={80}
            />
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-wide">
            {p.title}
          </h3>
          <p className="text-sm md:text-base">{p.subtitle}</p>
        </div>
      </div>

      {/* Center glow only on active */}
      {isActive && (
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(122,108,255,0.5), rgba(122,108,255,0) 70%)",
          }}
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

    {/* ─────────────── Modal (5xl) — reads from DETAILS[selectedId] ─────────────── */}
    <Modal isOpen={isOpen} size={modalSize} scrollBehavior="outside" onClose={() => { setSelectedId(null); onClose(); }} backdrop="blur">
      <ModalContent>
        {(onCloseInner) => (
          <>
            <ModalHeader className="flex items-center gap-3">
              <div>
                <h1 className="md:text-4xl text-2xl">
                  {selected?.title}
                </h1>
                <p className="text-sm md:text-xl">
                  {selected?.category}
                </p>
              </div>
            </ModalHeader>

            <ModalBody>
              {selected && (
                <div className="space-y-6">
                  {selected.projectphotos && selected.projectphotos.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selected.projectphotos.map((src, idx) => (
                        <div key={idx} className="relative w-full h-48 rounded-xl overflow-hidden">
                          <Image
                            src={src}
                            alt={`Project photo ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <h4>{selected.description}</h4>
                  <p>{selected.content}</p>
                </div>
              )}
            </ModalBody>

            <ModalFooter className="flex justify-between items-center">
              {selected?.link && (
                <Link
                  isBlock
                  showAnchorIcon
                  color="secondary"
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </Link>
              )}
              <Button variant="light" color="danger" onPress={onCloseInner}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
    </section>
  );
}