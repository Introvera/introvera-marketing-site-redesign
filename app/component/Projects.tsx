// "use client";

// import React from "react";
// import Image, { StaticImageData } from "next/image";
// // ⬇️ extended import (adds modal pieces)
// import {
//   Card,
//   CardBody,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
//   Link
// } from "@heroui/react";

// /* ─────────────────────────── Card Type (unchanged) ─────────────────────────── */
// type Project = { id: string; title: string; subtitle: string; bg: string; logo?: string };
// const PROJECTS: Project[] = [
//   { id: "p1", title: "DREAM AUTO", subtitle: "Vehicle Recommendation Platform", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
//   { id: "p2", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
//   { id: "p3", title: "WE NEIGHBOUR", subtitle: "Modern, Free Community Management Platform", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
//   { id: "p4", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
//   { id: "p5", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
// ];

// /* ─────────────────────── ▼▼ Modal additions ▼▼ ─────────────────────── */
// // Separate type for modal contents (your structure)
// type Img = string | StaticImageData;
// type ProjectDetail = {
//   title: string;
//   category: string;
//   description: string;
//   src: Img;
//   content: React.ReactNode;
//   link?: string;
//   projectphotos?: Img[];
// };

// // Map card.id -> modal content
// const DETAILS: Record<Project["id"], ProjectDetail> = {
// p1: {
//   title: "DREAM AUTO",
//   category: "Web App",
//   description:
//     "Vehicle Recommendation Platform!",
//   src: "/projects/schoolify/cover.jpg",
//   content: (
//     <>
//       Our vehicle recommendation platform is built to transform the way people
//       buy vehicles — especially those who feel overwhelmed by the complexity
//       of choosing the right car. Whether you&apos;re a first-time buyer, a busy
//       professional, or someone simply unsure of how to navigate loans and
//       insurance, our intelligent and user-friendly progressive web app is
//       designed with you in mind.
//       <br />
//       Using machine learning, we provide smart, personalized vehicle
//       suggestions tailored to your budget, lifestyle, and driving needs. From
//       fuel economy to loan compatibility, our system considers every factor
//       that matters — and gets smarter with every use. Alongside this, our
//       integrated chatbot breaks down finance and insurance options
//       step-by-step, so even those with no prior knowledge can make confident
//       decisions.
//       <br />
//       But we don&apos;t stop there. The app includes powerful features like
//       real-time price prediction, a vehicle comparison tool, availability
//       tracking, and even test drive booking. Buyers can browse or sell through
//       our built-in marketplace, while our insights into new and used vehicle
//       trends help users find value and make informed choices.
//       <br />
//       Whether you&apos;re looking for a budget car, a sustainable EV, or a
//       high-end investment vehicle, our platform is built to make the process
//       smarter, faster, and easier for everyone — no expertise required.
//     </>
//   ),
//   link: "https://www.dreamautomart.com/",
//   projectphotos: [
//     "/projects/schoolifycard.jpg",
//     "/projects/schoolifycard.jpg",
//     "/projects/schoolifycard.jpg",
//   ],
// },
// // Fill these with each project's unique content as you have it:
// p2: {
//   title: "Schoolify",
//   category: "Web App",
//   description:
//     "Your all-in-one learning companion, making studying smarter, not harder!",
//   src: "/projects/schoolify/cover.jpg",
//   content: (
//     <>
//       Schoolify is a unified digital platform designed to bridge the
//       communication and management gaps in Sri Lankan schools, especially in
//       rural and public education sectors. By centralizing essential school
//       operations, Schoolify empowers teachers, students, and parents to stay
//       connected, informed, and engaged — all from one place. With features
//       like real-time notifications, digital attendance tracking, assignment
//       and grade management, and a centralized school calendar, Schoolify
//       ensures that no student or parent misses critical academic updates. It
//       reduces the administrative burden on educators while increasing parental
//       involvement and student accountability. Through its intuitive interface
//       and resource-sharing capabilities, Schoolify supports high-quality,
//       accessible education by enabling remote access to study materials,
//       progress reports, and school announcements. By streamlining
//       communication and administration, Schoolify helps foster a more
//       inclusive, collaborative, and effective educational ecosystem in Sri
//       Lanka.
//     </>
//   ),
//   link: "https://www.getschoolify.com/",
//   projectphotos: [
//     "/projects/schoolifycard.jpg",
//     "/projects/schoolifycard.jpg",
//     "/projects/schoolifycard.jpg",
//   ],
// },
// p3: {
//   title: "WE NEIGHBOUR",
//   category: "Mobile App",
//   description:
//     "Modern, Free Community Management Platform",
//   src: "/projects/schoolify/cover.jpg",
//   content: (
//     <>
//       We Neighbour is a modern, free community management platform designed
//       specifically for apartment residents. Our mission is to build safer,
//       more connected, and resourceful communities by simplifying daily living
//       and encouraging meaningful engagement among neighbours. Whether it&apos;s
//       borrowing a tool, reporting a maintenance issue, or planning a community
//       event, We Neighbour brings all essential apartment functions into one
//       smart platform.
//       <br />
//       Residents gain verified access to a secure environment through
//       manager-approved profiles, ensuring privacy and safety. From real-time
//       safety alerts and maintenance tracking to event calendars, amenity
//       bookings, and visitor check-ins with QR codes, every feature is designed
//       to improve communication and convenience within your building. Our
//       platform also offers a trusted directory of service providers, a
//       community forum for open discussion, and wellness programs that promote
//       both physical and social wellbeing.
//       <br />
//       By supporting local businesses and making it easier for residents to
//       connect, collaborate, and care for their shared spaces, We Neighbour
//       transforms apartment living into a truly communal experience — safer,
//       smarter, and more engaging for everyone.
//     </>
//   ),
//   link: "https://www.weneighbour.live/",
//   projectphotos: [
//     "/projects/schoolifycard.jpg",
//     "/projects/schoolifycard.jpg",
//     "/projects/schoolifycard.jpg",
//   ],
// },
//   p4: {
//     title: "Schoolify",
//     category: "Web App",
//     description:
//       "Your all-in-one learning companion, making studying smarter, not harder!",
//     src: "/projects/schoolify/cover.jpg",
//     content: (
//       <>
//         Schoolify is a unified digital platform designed to bridge the
//         communication and management gaps in Sri Lankan schools, especially in
//         rural and public education sectors. By centralizing essential school
//         operations, Schoolify empowers teachers, students, and parents to stay
//         connected, informed, and engaged — all from one place. With features
//         like real-time notifications, digital attendance tracking, assignment
//         and grade management, and a centralized school calendar, Schoolify
//         ensures that no student or parent misses critical academic updates. It
//         reduces the administrative burden on educators while increasing parental
//         involvement and student accountability. Through its intuitive interface
//         and resource-sharing capabilities, Schoolify supports high-quality,
//         accessible education by enabling remote access to study materials,
//         progress reports, and school announcements. By streamlining
//         communication and administration, Schoolify helps foster a more
//         inclusive, collaborative, and effective educational ecosystem in Sri
//         Lanka.
//       </>
//     ),
//     link: "https://facebook.com",
//     projectphotos: [
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//     ],
//   },
//   p5: {
//     title: "Schoolify",
//     category: "Web App",
//     description:
//       "Your all-in-one learning companion, making studying smarter, not harder!",
//     src: "/projects/schoolify/cover.jpg",
//     content: (
//       <>
//         Schoolify is a unified digital platform designed to bridge the
//         communication and management gaps in Sri Lankan schools, especially in
//         rural and public education sectors. By centralizing essential school
//         operations, Schoolify empowers teachers, students, and parents to stay
//         connected, informed, and engaged — all from one place. With features
//         like real-time notifications, digital attendance tracking, assignment
//         and grade management, and a centralized school calendar, Schoolify
//         ensures that no student or parent misses critical academic updates. It
//         reduces the administrative burden on educators while increasing parental
//         involvement and student accountability. Through its intuitive interface
//         and resource-sharing capabilities, Schoolify supports high-quality,
//         accessible education by enabling remote access to study materials,
//         progress reports, and school announcements. By streamlining
//         communication and administration, Schoolify helps foster a more
//         inclusive, collaborative, and effective educational ecosystem in Sri
//         Lanka.
//       </>
//     ),
//     link: "https://facebook.com",
//     projectphotos: [
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//     ],
//   },
// };
// /* ─────────────────────── ▲▲ Modal additions ▲▲ ─────────────────────── */

// export default function Projects() {
//   const scrollerRef = React.useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = React.useState(2);

//   // pointer-drag state (unchanged)
//   const dragging = React.useRef(false);
//   const startX = React.useRef(0);
//   const startScrollLeft = React.useRef(0);
//   const pointerId = React.useRef<number | null>(null);

//   // ▼▼ Modal state (new)
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [modalSize] = React.useState<"5xl">("5xl");
//   const [selectedId, setSelectedId] = React.useState<Project["id"] | null>(null);
//   const selected = selectedId ? DETAILS[selectedId] : null;

//   const openFor = (id: Project["id"]) => {
//     setSelectedId(id);
//     onOpen();
//   };

//   const updateActiveOnScroll = () => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const mid = el.scrollLeft + el.clientWidth / 2;
//     let best = 0;
//     let bestD = Infinity;
//     Array.from(el.children).forEach((ch, i) => {
//       const c = ch as HTMLElement;
//       const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid);
//       if (d < bestD) { bestD = d; best = i; }
//     });
//     setActive(best);
//   };

//   React.useEffect(() => {
//     const el = scrollerRef.current;
//     if (!el) return;

//     // Get the middle card
//     const midCard = el.children[2] as HTMLElement;
//     if (midCard) {
//       // Scroll horizontally to center it without affecting page scroll
//       const scrollLeft =
//         midCard.offsetLeft - (el.clientWidth - midCard.clientWidth) / 2;
//       el.scrollLeft = scrollLeft;
//     }
//   }, []);

//   const snapToActive = () => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     (el.children[active] as HTMLElement)?.scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest",
//     });
//   };

//   // Pointer Events (smooth + reliable)
//   const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     dragging.current = true;
//     pointerId.current = e.pointerId;
//     el.setPointerCapture(e.pointerId);
//     startX.current = e.clientX;
//     startScrollLeft.current = el.scrollLeft;
//     el.classList.add("dragging"); // disables snap while dragging
//   };

//   const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
//     const el = scrollerRef.current;
//     if (!el || !dragging.current) return;
//     // no need preventDefault when we have pointer capture
//     const dx = e.clientX - startX.current;
//     el.scrollLeft = startScrollLeft.current - dx;
//   };

//   const endPointer = () => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     if (pointerId.current !== null) {
//       try { el.releasePointerCapture(pointerId.current); } catch {}
//       pointerId.current = null;
//     }
//     dragging.current = false;
//     el.classList.remove("dragging");
//     // snap to nearest item after drag
//     requestAnimationFrame(snapToActive);
//   };

//   return (
//     <section id="projects"
//       className="
//         relative w-full
//          bg-cover bg-center
//         "
//     >
//         <section className="relative w-full py-16 md:py-20">
//       {/* Header */}
//       <div className="mx-auto max-w-6xl px-4 text-center select-none">
//         <h2 className="text-[28px] md:text-4xl font-extrabold tracking-wide">
//           <span className="text-white/90">SHOWCASE OF </span>
//             <span className="gradient-text-line">
//             INNOVATION
//           </span>        </h2>
//         <p className="mt-4 text-sm md:text-base text-white/60">
//           Explore our diverse portfolio of projects that showcase innovation,
//           creativity, and technical excellence. From intuitive mobile and web
//           applications to scalable backend systems and cloud solutions, each
//           project reflects our commitment to delivering impactful and user-focused,
//           and digital experiences.
//         </p>
//       </div>
//         {/* Yellow gradient balls over left & right cards */}
//       <div
//         aria-hidden
//         className="hidden md:block pointer-events-none absolute inset-0 z-10 overflow-hidden"
//       >
//         {/* Left ball */}
//         <div
//           className="absolute left-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 255, 0, 0) 90%)",
//           }}
//         />
//         {/* Right ball */}
//         <div
//           className="absolute right-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0) 90%)",
//           }}
//         />
//       </div>
//       {/* Carousel */}
//       <div className="relative mx-auto mt-10 ">
//         <div
//           ref={scrollerRef}
//           onScroll={updateActiveOnScroll}
//           onPointerDown={onPointerDown}
//           onPointerMove={onPointerMove}
//           onPointerUp={endPointer}
//           onPointerCancel={endPointer}
//           className={[
//             "mt-2 flex gap-6 overflow-x-auto pb-4 select-none",
//             "snap-x snap-mandatory",
//             "cursor-grab",
//             "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
//           ].join(" ")}
//         >
//           {PROJECTS.map((p, i) => {
//             const isActive = i === active;
//             return (
//               <div key={p.id} className="snap-center shrink-0 my-20" style={{ width: "min(88vw, 660px)" }}>
//               <Card
//                 as="div"
//                 isPressable
//                 onPress={() => {
//                   if (!dragging.current) openFor(p.id);
//                 }}
//                 className={[
//                   "relative h-[360px] md:h-[400px] rounded-2xl border border-white/10 overflow-hidden",
//                   "transition-all duration-300",
//                   isActive
//                     ? "scale-[1.05] opacity-100 z-[5] ring-[--color-gradient-ball] shadow-[0_0_80px_-20px_var(--color-gradient-ball)]"
//                     : "scale-[0.9] md:scale-[0.92] opacity-70 z-[1]",
//                 ].join(" ")}
//                 onDragStart={(e) => e.preventDefault()}
//               >
//                 <CardBody className="p-0 overflow-hidden">
//                   {/* Background image */}
//                   <div className="absolute inset-0">
//                     <Image
//                       src={p.bg}
//                       alt={`${p.title} preview`}
//                       fill
//                       priority={i === 2}
//                       className="object-cover"
//                       draggable={false}
//                     />
//                     <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_70%,rgba(0,0,0,0.1),rgba(0,0,0,0.65))]" />
//                   </div>

//                   {/* Title row */}
//                   <div className="relative z-10 flex items-center gap-3 p-6">
//                     {p.logo && (
//                       <div className="relative">
//                         <Image
//                           src={p.logo}
//                           alt={`${p.title} logo`}
//                           className="object-contain"
//                           draggable={false}
//                           width={80}
//                           height={80}
//                         />
//                       </div>
//                     )}
//                     <div className="min-w-0">
//                       <h3 className="text-xl md:text-2xl font-extrabold tracking-wide">
//                         {p.title}
//                       </h3>
//                       <p className="text-sm md:text-base">{p.subtitle}</p>
//                     </div>
//                   </div>

//                   {/* Center glow only on active */}
//                   {isActive && (
//                     <div
//                       aria-hidden
//                       className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-60"
//                       style={{
//                         background:
//                           "radial-gradient(closest-side, rgba(122,108,255,0.5), rgba(122,108,255,0) 70%)",
//                       }}
//                     />
//                   )}
//                 </CardBody>
//               </Card>
//             </div>
//             );
//           })}
//         </div>
//         {/* Dots navigation — only visible on mobile */}
//         <div className="flex justify-center gap-2 mt-4 md:hidden">
//           {PROJECTS.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 const el = scrollerRef.current;
//                 if (!el) return;
//                 (el.children[i] as HTMLElement)?.scrollIntoView({
//                   behavior: "smooth",
//                   inline: "center",
//                   block: "nearest",
//                 });
//                 setActive(i);
//               }}
//               className={[
//                 "w-2 h-2 rounded-full transition-all duration-300",
//                 i === active ? "bg-purple-300" : "bg-white/30",
//               ].join(" ")}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Disable snap during drag for butter-smooth feel */}
//       <style jsx global>{`
//         .dragging {
//           scroll-behavior: auto !important;
//           cursor: grabbing !important;
//           scroll-snap-type: none !important;
//         }
//       `}</style>
//     </section>

//     {/* ─────────────── Modal (5xl) — reads from DETAILS[selectedId] ─────────────── */}
//     <Modal isOpen={isOpen} size={modalSize} scrollBehavior="outside" onClose={() => { setSelectedId(null); onClose(); }} backdrop="blur">
//       <ModalContent>
//         {(onCloseInner) => (
//           <>
//             <ModalHeader className="flex items-center gap-3">
//               <div>
//                 <h1 className="md:text-4xl text-2xl">
//                   {selected?.title}
//                 </h1>
//                 <p className="text-sm md:text-xl">
//                   {selected?.category}
//                 </p>
//               </div>
//             </ModalHeader>

//             <ModalBody>
//               {selected && (
//                 <div className="space-y-6">
//                   {selected.projectphotos && selected.projectphotos.length > 0 && (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {selected.projectphotos.map((src, idx) => (
//                         <div key={idx} className="relative w-full h-48 rounded-xl overflow-hidden">
//                           <Image
//                             src={src}
//                             alt={`Project photo ${idx + 1}`}
//                             fill
//                             className="object-cover"
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                   <h4>{selected.description}</h4>
//                   <p>{selected.content}</p>
//                 </div>
//               )}
//             </ModalBody>

//             <ModalFooter className="flex justify-between items-center">
//               {selected?.link && (
//                 <Link
//                   isBlock
//                   showAnchorIcon
//                   color="secondary"
//                   href={selected.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Visit Project
//                 </Link>
//               )}
//               <Button variant="light" color="danger" onPress={onCloseInner}>
//                 Close
//               </Button>
//             </ModalFooter>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//     </section>
//   );
// }

// "use client";

// import React from "react";
// import Image, { StaticImageData } from "next/image";
// // ⬇️ extended import (adds modal pieces)
// import {
//   Card,
//   CardBody,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
//   Link
// } from "@heroui/react";

// /* ─────────────────────────── Card Type (unchanged) ─────────────────────────── */
// type Project = { id: string; title: string; subtitle: string; bg: string; logo?: string };
// const PROJECTS: Project[] = [
//   { id: "p1", title: "DREAM AUTO", subtitle: "Vehicle Recommendation Platform", bg: "/projects/dreamauto.jpg", logo: "/icons/dreamautologo.png" },
//   { id: "p2", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
//   { id: "p3", title: "WE NEIGHBOUR", subtitle: "Modern, Free Community Management Platform", bg: "/projects/weneighbour.jpg", logo: "/icons/weneighbourlogo.png" },
//   // { id: "p4", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
//   // { id: "p5", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
// ];

// /* ─────────────────────── ▼▼ Modal additions ▼▼ ─────────────────────── */
// type Img = string | StaticImageData;
// type ProjectDetail = {
//   title: string;
//   category: string;
//   description: string;
//   src: Img;
//   content: React.ReactNode;
//   link?: string;
//   projectphotos?: Img[];
// };

// const DETAILS: Record<Project["id"], ProjectDetail> = {
//     p1: {
//     title: "DREAM AUTO",
//     category: "Web App",
//     description:
//       "Vehicle Recommendation Platform!",
//     src: "/projects/schoolify/cover.jpg",
//     content: (
//       <>
//         Our vehicle recommendation platform is built to transform the way people
//         buy vehicles — especially those who feel overwhelmed by the complexity
//         of choosing the right car. Whether you&apos;re a first-time buyer, a busy
//         professional, or someone simply unsure of how to navigate loans and
//         insurance, our intelligent and user-friendly progressive web app is
//         designed with you in mind.
//         <br />
//         Using machine learning, we provide smart, personalized vehicle
//         suggestions tailored to your budget, lifestyle, and driving needs. From
//         fuel economy to loan compatibility, our system considers every factor
//         that matters — and gets smarter with every use. Alongside this, our
//         integrated chatbot breaks down finance and insurance options
//         step-by-step, so even those with no prior knowledge can make confident
//         decisions.
//         <br />
//         But we don&apos;t stop there. The app includes powerful features like
//         real-time price prediction, a vehicle comparison tool, availability
//         tracking, and even test drive booking. Buyers can browse or sell through
//         our built-in marketplace, while our insights into new and used vehicle
//         trends help users find value and make informed choices.
//         <br />
//         Whether you&apos;re looking for a budget car, a sustainable EV, or a
//         high-end investment vehicle, our platform is built to make the process
//         smarter, faster, and easier for everyone — no expertise required.
//       </>
//     ),
//     link: "https://www.dreamautomart.com/",
//     projectphotos: [
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//     ],
//   },
//   // Fill these with each project's unique content as you have it:
//   p2: {
//     title: "Schoolify",
//     category: "Web App",
//     description:
//       "Your all-in-one learning companion, making studying smarter, not harder!",
//     src: "/projects/schoolify/cover.jpg",
//     content: (
//       <>
//         Schoolify is a unified digital platform designed to bridge the
//         communication and management gaps in Sri Lankan schools, especially in
//         rural and public education sectors. By centralizing essential school
//         operations, Schoolify empowers teachers, students, and parents to stay
//         connected, informed, and engaged — all from one place. With features
//         like real-time notifications, digital attendance tracking, assignment
//         and grade management, and a centralized school calendar, Schoolify
//         ensures that no student or parent misses critical academic updates. It
//         reduces the administrative burden on educators while increasing parental
//         involvement and student accountability. Through its intuitive interface
//         and resource-sharing capabilities, Schoolify supports high-quality,
//         accessible education by enabling remote access to study materials,
//         progress reports, and school announcements. By streamlining
//         communication and administration, Schoolify helps foster a more
//         inclusive, collaborative, and effective educational ecosystem in Sri
//         Lanka.
//       </>
//     ),
//     link: "https://www.getschoolify.com/",
//     projectphotos: [
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//       "/projects/schoolifycard.jpg",
//     ],
//   },
//   p3: {
//     title: "WE NEIGHBOUR",
//     category: "Mobile App",
//     description:
//       "Modern, Free Community Management Platform",
//     src: "/projects/schoolify/cover.jpg",
//     content: (
//       <>
//         We Neighbour is a modern, free community management platform designed
//         specifically for apartment residents. Our mission is to build safer,
//         more connected, and resourceful communities by simplifying daily living
//         and encouraging meaningful engagement among neighbours. Whether it&apos;s
//         borrowing a tool, reporting a maintenance issue, or planning a community
//         event, We Neighbour brings all essential apartment functions into one
//         smart platform.
//         <br />
//         Residents gain verified access to a secure environment through
//         manager-approved profiles, ensuring privacy and safety. From real-time
//         safety alerts and maintenance tracking to event calendars, amenity
//         bookings, and visitor check-ins with QR codes, every feature is designed
//         to improve communication and convenience within your building. Our
//         platform also offers a trusted directory of service providers, a
//         community forum for open discussion, and wellness programs that promote
//         both physical and social wellbeing.
//         <br />
//         By supporting local businesses and making it easier for residents to
//         connect, collaborate, and care for their shared spaces, We Neighbour
//         transforms apartment living into a truly communal experience — safer,
//         smarter, and more engaging for everyone.
//       </>
//     ),
//     link: "https://www.weneighbour.live/",
//     projectphotos: [
//       "/projects/weneighbour/1.jpg",
//       "/projects/weneighbour/2.jpg",
//       "/projects/weneighbour/3.jpg",
//       "/projects/weneighbour/4.jpg",
//     ],
//   },
//   // p4: {
//   //   title: "Schoolify",
//   //   category: "Web App",
//   //   description: "Your all-in-one learning companion, making studying smarter, not harder!",
//   //   src: "/projects/schoolify/cover.jpg",
//   //   content: <>Schoolify is a unified digital platform designed to bridge the communication and management gaps…</>,
//   //   link: "https://facebook.com",
//   //   projectphotos: ["/projects/schoolifycard.jpg", "/projects/schoolifycard.jpg", "/projects/schoolifycard.jpg"],
//   // },
//   // p5: {
//   //   title: "Schoolify",
//   //   category: "Web App",
//   //   description: "Your all-in-one learning companion, making studying smarter, not harder!",
//   //   src: "/projects/schoolify/cover.jpg",
//   //   content: <>Schoolify is a unified digital platform designed to bridge the communication and management gaps…</>,
//   //   link: "https://facebook.com",
//   //   projectphotos: ["/projects/schoolifycard.jpg", "/projects/schoolifycard.jpg", "/projects/schoolifycard.jpg"],
//   // },
// };
// /* ─────────────────────── ▲▲ Modal additions ▲▲ ─────────────────────── */

// export default function Projects() {
//   const scrollerRef = React.useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = React.useState(2);

//   // pointer-drag state
//   const dragging = React.useRef(false);
//   const startX = React.useRef(0);
//   const startScrollLeft = React.useRef(0);
//   const pointerId = React.useRef<number | null>(null);

//   // Modal state
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [modalSize] = React.useState<"5xl">("5xl");
//   const [selectedId, setSelectedId] = React.useState<Project["id"] | null>(null);
//   const selected = selectedId ? DETAILS[selectedId] : null;
//   const openFor = (id: Project["id"]) => { setSelectedId(id); onOpen(); };

//   // ── Infinite loop setup ──────────────────────────────────────────────
//   const LOOPED_PROJECTS = React.useMemo(() => [...PROJECTS, ...PROJECTS, ...PROJECTS], []);
//   const centerOffset = PROJECTS.length; // start in middle copy

//   // exact distance for one full group (measured, not estimated)
//   const groupSpanRef = React.useRef<number | null>(null);
//   const suppressUpdateRef = React.useRef(false); // ignore active calc during teleport

//   const measureGroupSpan = () => {
//     const el = scrollerRef.current;
//     if (!el) return null;
//     const a = el.children[centerOffset] as HTMLElement | undefined; // first of middle copy
//     const b = el.children[centerOffset + PROJECTS.length] as HTMLElement | undefined; // first of right copy
//     if (!a || !b) return null;
//     return b.offsetLeft - a.offsetLeft; // exact pixel span of one group
//   };

//   const teleportBy = (delta: number) => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     suppressUpdateRef.current = true;
//     el.classList.add("teleport"); // disable smooth/snap just for this tick
//     el.scrollLeft += delta;
//     // allow layout to settle, then re-enable updates
//     requestAnimationFrame(() => {
//       el.classList.remove("teleport");
//       suppressUpdateRef.current = false;
//     });
//   };

//   const handleInfiniteScroll = () => {
//     const el = scrollerRef.current;
//     if (!el) return false;

//     // 🚫 Never teleport while dragging (mobile fix)
//     if (dragging.current) return false;

//     if (groupSpanRef.current == null) {
//       groupSpanRef.current = measureGroupSpan() ?? null;
//     }
//     const span = groupSpanRef.current;
//     if (!span) return false;

//     const leftAnchor = (el.children[centerOffset] as HTMLElement)?.offsetLeft ?? 0;
//     const rightAnchor =
//       (el.children[centerOffset + PROJECTS.length] as HTMLElement)?.offsetLeft ??
//       leftAnchor + span;

//     // Add a small hysteresis to avoid instant re-teleport
//     const PAD = Math.max(4, Math.floor(span * 0.02)); // 2% or >=4px

//     // If scrolled past left of middle copy, jump right by one span.
//     if (el.scrollLeft < leftAnchor - PAD) {
//       teleportBy(span);
//       return true;
//     }
//     // If scrolled past right anchor (into the 3rd copy), jump left by one span.
//     if (el.scrollLeft > rightAnchor + PAD) {
//       teleportBy(-span);
//       return true;
//     }
//     return false;
//   };

//   const updateActiveOnScroll = () => {
//     const didTeleport = handleInfiniteScroll();
//     if (didTeleport || suppressUpdateRef.current) return;

//     const el = scrollerRef.current;
//     if (!el) return;
//     const mid = el.scrollLeft + el.clientWidth / 2;
//     let best = 0;
//     let bestD = Infinity;
//     Array.from(el.children).forEach((ch, i) => {
//       const c = ch as HTMLElement;
//       const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid);
//       if (d < bestD) { bestD = d; best = i; }
//     });
//     setActive(best % PROJECTS.length);
//   };

//   React.useEffect(() => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const midIndex = centerOffset + 2; // center-ish card in middle copy
//     const midCard = el.children[midIndex] as HTMLElement;
//     if (midCard) {
//       el.classList.add("teleport");
//       el.scrollLeft = midCard.offsetLeft - (el.clientWidth - midCard.clientWidth) / 2;
//       // measure once layout is stable
//       requestAnimationFrame(() => {
//         groupSpanRef.current = measureGroupSpan();
//         el.classList.remove("teleport");
//       });
//     }
//   }, [centerOffset]);

//   const snapToActive = () => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const targetIndex = centerOffset + active; // always snap within middle copy
//     (el.children[targetIndex] as HTMLElement)?.scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest",
//     });
//   };

//   // Pointer Events (smooth + reliable)
//   const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     dragging.current = true;
//     pointerId.current = e.pointerId;
//     el.setPointerCapture(e.pointerId);
//     startX.current = e.clientX;
//     startScrollLeft.current = el.scrollLeft;
//     el.classList.add("dragging"); // disables snap while dragging
//   };

//   const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
//     const el = scrollerRef.current;
//     if (!el || !dragging.current) return;
//     const dx = e.clientX - startX.current;
//     el.scrollLeft = startScrollLeft.current - dx;
//   };

//   const endPointer = () => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     if (pointerId.current !== null) {
//       try { el.releasePointerCapture(pointerId.current); } catch {}
//       pointerId.current = null;
//     }
//     dragging.current = false;
//     el.classList.remove("dragging");
//     requestAnimationFrame(snapToActive);
//   };

//   return (
//     <section id="projects" className="relative w-full bg-cover bg-center">
//       <section className="relative w-full py-16 md:py-20">
//         {/* Header */}
//         <div className="mx-auto max-w-6xl px-4 text-center select-none">
//           <h2 className="text-[28px] md:text-4xl font-extrabold tracking-wide">
//             <span className="text-white/90">SHOWCASE OF </span>
//             <span className="gradient-text-line">INNOVATION</span>
//           </h2>
//           <p className="mt-4 text-sm md:text-base text-white/60">
//             Explore our diverse portfolio of projects that showcase innovation, creativity, and technical excellence…
//           </p>
//         </div>

//         {/* Yellow gradient balls over left & right cards */}
//         <div aria-hidden className="hidden md:block pointer-events-none absolute inset-0 z-10 overflow-hidden">
//           <div
//             className="absolute left-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
//             style={{ background: "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 255, 0, 0) 90%)" }}
//           />
//           <div
//             className="absolute right-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
//             style={{ background: "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0) 90%)" }}
//           />
//         </div>

//         {/* Carousel */}
//         <div className="relative mx-auto mt-10 ">
//           <div
//             ref={scrollerRef}
//             onScroll={updateActiveOnScroll}
//             onPointerDown={onPointerDown}
//             onPointerMove={onPointerMove}
//             onPointerUp={endPointer}
//             onPointerCancel={endPointer}
//             className={[
//               "mt-2 flex gap-6 overflow-x-auto pb-4 select-none",
//               "snap-x snap-mandatory",
//               "cursor-grab",
//               "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
//               "loop-scroller", // mobile stability helpers
//             ].join(" ")}
//           >
//             {LOOPED_PROJECTS.map((p, i) => {
//               const isActive = (i % PROJECTS.length) === active;
//               return (
//                 <div
//                   key={`${p.id}-${i}`}
//                   className="snap-center shrink-0 my-20"
//                   style={{ width: "min(88vw, 660px)" }}
//                 >
//                   <Card
//                     as="div"
//                     isPressable
//                     onPress={() => { if (!dragging.current) openFor(p.id); }}
//                     className={[
//                       "relative h-[360px] md:h-[400px] rounded-2xl border border-white/10 overflow-hidden",
//                       "transition-all duration-300",
//                       isActive
//                         ? "scale-[1.05] opacity-100 z-[5] ring-[--color-gradient-ball] shadow-[0_0_80px_-20px_var(--color-gradient-ball)]"
//                         : "scale-[0.9] md:scale-[0.92] opacity-70 z-[1]",
//                     ].join(" ")}
//                     onDragStart={(e) => e.preventDefault()}
//                   >
//                     <CardBody className="p-0 overflow-hidden">
//                       {/* Background image */}
//                       <div className="absolute inset-0">
//                         <Image
//                           src={p.bg}
//                           alt={`${p.title} preview`}
//                           fill
//                           priority={i === centerOffset}
//                           className="object-cover"
//                           draggable={false}
//                         />
//                         <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_70%,rgba(0,0,0,0.1),rgba(0,0,0,0.65))]" />
//                       </div>

//                       {/* Title row */}
//                       <div className="relative z-10 flex items-center gap-3 p-6">
//                         {p.logo && (
//                           <div className="relative">
//                             <Image
//                               src={p.logo}
//                               alt={`${p.title} logo`}
//                               className="object-contain"
//                               draggable={false}
//                               width={80}
//                               height={80}
//                             />
//                           </div>
//                         )}
//                         <div className="min-w-0">
//                           <h3 className="text-xl md:text-2xl font-extrabold tracking-wide">{p.title}</h3>
//                           <p className="text-sm md:text-base">{p.subtitle}</p>
//                         </div>
//                       </div>

//                       {/* Center glow only on active */}
//                       {isActive && (
//                         <div
//                           aria-hidden
//                           className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] opacity-60"
//                           style={{ background: "radial-gradient(closest-side, rgba(122,108,255,0.5), rgba(122,108,255,0) 70%)" }}
//                         />
//                       )}
//                     </CardBody>
//                   </Card>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Dots navigation — only visible on mobile */}
//           <div className="flex justify-center gap-2 mt-4 md:hidden">
//             {PROJECTS.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   const el = scrollerRef.current;
//                   if (!el) return;
//                   const targetIndex = centerOffset + i; // snap inside middle copy
//                   (el.children[targetIndex] as HTMLElement)?.scrollIntoView({
//                     behavior: "smooth",
//                     inline: "center",
//                     block: "nearest",
//                   });
//                   setActive(i);
//                 }}
//                 className={[
//                   "w-2 h-2 rounded-full transition-all duration-300",
//                   i === active ? "bg-purple-300" : "bg-white/30",
//                 ].join(" ")}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Disable snap during drag + during teleport; mobile stability */}
//         <style jsx global>{`
//           .dragging,
//           .teleport {
//             scroll-behavior: auto !important;
//             scroll-snap-type: none !important;
//           }
//           .dragging { cursor: grabbing !important; }

//           /* 🧘 mobile stability */
//           .loop-scroller {
//             overscroll-behavior-x: contain;
//             -webkit-overflow-scrolling: touch;
//             touch-action: pan-y;
//           }
//         `}</style>
//       </section>

//       {/* ─────────────── Modal (5xl) — reads from DETAILS[selectedId] ─────────────── */}
//       <Modal
//         isOpen={isOpen}
//         size={modalSize}
//         scrollBehavior="outside"
//         onClose={() => { setSelectedId(null); onClose(); }}
//         backdrop="blur"
//       >
//         <ModalContent>
//           {(onCloseInner) => (
//             <>
//               <ModalHeader className="flex items-center gap-3">
//                 <div>
//                   <h1 className="md:text-4xl text-2xl">{selected?.title}</h1>
//                   <p className="text-sm md:text-xl">{selected?.category}</p>
//                 </div>
//               </ModalHeader>

//               <ModalBody>
//                 {selected && (
//                   <div className="space-y-6">
//                     {selected.projectphotos && selected.projectphotos.length > 0 && (
//                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {selected.projectphotos.map((src, idx) => (
//                           <div key={idx} className="relative w-full h-48 rounded-xl overflow-hidden">
//                             <Image
//                               src={src}
//                               alt={`Project photo ${idx + 1}`}
//                               fill
//                               className="object-cover"
//                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     <h4>{selected.description}</h4>
//                     <p>{selected.content}</p>
//                   </div>
//                 )}
//               </ModalBody>

//               <ModalFooter className="flex justify-between items-center">
//                 {selected?.link && (
//                   <Link
//                     isBlock
//                     showAnchorIcon
//                     color="secondary"
//                     href={selected.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Visit Project
//                   </Link>
//                 )}
//                 <Button variant="light" color="danger" onPress={onCloseInner}>
//                   Close
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </section>
//   );
// }

"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
// ⬇️ extended import (adds modal pieces)
import {
  Button,
  Card,
  CardBody,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

/* ─────────────────────────── Card Type (unchanged) ─────────────────────────── */
type Project = {
  id: string;
  title: string;
  subtitle: string;
  bg: string;
  logo?: string;
};
const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "DREAM AUTO",
    subtitle: "Vehicle Recommendation Platform",
    bg: "/projects/dreamauto.jpg",
    logo: "/icons/dreamautologo.png",
  },
  {
    id: "p2",
    title: "SCHOOLIFY",
    subtitle: "Learning Management System",
    bg: "/projects/schoolifycard.jpg",
    logo: "/icons/schoolifylogo.png",
  },
  {
    id: "p3",
    title: "WE NEIGHBOUR",
    subtitle: "Modern, Free Community Management Platform",
    bg: "/projects/weneighbour.jpg",
    logo: "/icons/weneighbourlogo.png",
  },
  {
    id: "p4",
    title: "Ultracraft",
    subtitle: "Furniture & Interior Solutions Website",
    bg: "/projects/ultracraft.jpg",
    logo: "/icons/ultracraftlogo.png",
  },
  {
    id: "p5",
    title: "ADEaZ",
    subtitle: "Online Fashion Store",
    bg: "/projects/adeaz.jpg",
    logo: "/icons/adeazlogo.png",
  },

  // { id: "p5", title: "SCHOOLIFY", subtitle: "Learning Management System", bg: "/projects/schoolifycard.jpg", logo: "/icons/schoolifylogo.png" },
];

/* ─────────────────────── ▼▼ Modal additions ▼▼ ─────────────────────── */
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

const DETAILS: Record<Project["id"], ProjectDetail> = {
  p1: {
    title: "DREAM AUTO",
    category: "Web App",
    description: "Vehicle Recommendation Platform!",
    src: "/projects/schoolify/cover.jpg",
    content: (
      <>
        Our vehicle recommendation platform is built to transform the way people
        buy vehicles — especially those who feel overwhelmed by the complexity
        of choosing the right car. Whether you&apos;re a first-time buyer, a
        busy professional, or someone simply unsure of how to navigate loans and
        insurance, our intelligent and user-friendly progressive web app is
        designed with you in mind.
        <br />
        Using machine learning, we provide smart, personalized vehicle
        suggestions tailored to your budget, lifestyle, and driving needs. From
        fuel economy to loan compatibility, our system considers every factor
        that matters — and gets smarter with every use. Alongside this, our
        integrated chatbot breaks down finance and insurance options
        step-by-step, so even those with no prior knowledge can make confident
        decisions.
        <br />
        But we don&apos;t stop there. The app includes powerful features like
        real-time price prediction, a vehicle comparison tool, availability
        tracking, and even test drive booking. Buyers can browse or sell through
        our built-in marketplace, while our insights into new and used vehicle
        trends help users find value and make informed choices.
        <br />
        Whether you&apos;re looking for a budget car, a sustainable EV, or a
        high-end investment vehicle, our platform is built to make the process
        smarter, faster, and easier for everyone — no expertise required.
      </>
    ),
    link: "https://www.dreamautomart.com/",
    projectphotos: [
      "/projects/dreamauto/2.jpeg",
      "/projects/dreamauto/3.jpeg",
      "/projects/dreamauto/1.jpeg",
    ],
  },
  p2: {
    title: "Schoolify",
    category: "Web App",
    description:
      "Your all-in-one learning companion, making studying smarter, not harder!",
    src: "/projects/schoolify/cover.jpg",
    content: (
      <>
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
      </>
    ),
    link: "https://www.getschoolify.com/",
    projectphotos: [
      "/projects/schoolify/1.png",
      "/projects/schoolify/2.png",
      "/projects/schoolify/3.png",
    ],
  },
  p3: {
    title: "WE NEIGHBOUR",
    category: "Mobile App",
    description: "Modern, Free Community Management Platform",
    src: "/projects/schoolify/cover.jpg",
    content: (
      <>
        We Neighbour is a modern, free community management platform designed
        specifically for apartment residents. Our mission is to build safer,
        more connected, and resourceful communities by simplifying daily living
        and encouraging meaningful engagement among neighbours. Whether
        it&apos;s borrowing a tool, reporting a maintenance issue, or planning a
        community event, We Neighbour brings all essential apartment functions
        into one smart platform.
        <br />
        Residents gain verified access to a secure environment through
        manager-approved profiles, ensuring privacy and safety. From real-time
        safety alerts and maintenance tracking to event calendars, amenity
        bookings, and visitor check-ins with QR codes, every feature is designed
        to improve communication and convenience within your building. Our
        platform also offers a trusted directory of service providers, a
        community forum for open discussion, and wellness programs that promote
        both physical and social wellbeing.
        <br />
        By supporting local businesses and making it easier for residents to
        connect, collaborate, and care for their shared spaces, We Neighbour
        transforms apartment living into a truly communal experience — safer,
        smarter, and more engaging for everyone.
      </>
    ),
    link: "https://www.weneighbour.live/",
    projectphotos: [
      "/projects/weneighbour/1.png",
      "/projects/weneighbour/2.png",
      "/projects/weneighbour/3.png",
    ],
  },
  p4: {
    title: "Ultracraft",
    category: "Website",
    description: "Ultracraft.lk — Furniture & Interior Solutions Website",
    src: "/projects/weneighbour/cover.jpg",
    content: (
      <>
        <strong>Ultracraft.lk</strong> is a premium furniture and custom
        interior solutions company based in Sri Lanka. We designed and developed
        their official website to showcase Ultracraft's craftsmanship, attention
        to detail, and bespoke interior services through a clean, elegant, and
        user-first design.
        <br />
        <br />
        The site highlights curated furniture collections with high-quality
        imagery and provides clear, informative service pages for custom
        interiors, space planning, and renovations. Every interaction — from
        browsing products to requesting a consultation — is fast, intuitive, and
        optimized for both desktop and mobile users.
        <br />
        <br />
        Built with a focus on performance and ease of management, the website
        includes streamlined navigation, easy content updates for the Ultracraft
        team, and smooth visual presentation to reinforce the brand's premium
        positioning. The end result is a visually striking, professional online
        presence that helps Ultracraft.lk connect with customers, showcase their
        work, and grow their business.
      </>
    ),
    link: "https://ultracraft.lk/",
    projectphotos: [
      "/projects/ultracraft/1.png",
      "/projects/ultracraft/2.png",
      "/projects/ultracraft/3.png",
    ],
  },
  p5: {
    title: "ADEaZ",
    category: "Website",
    description: "Adeaz Your Ultimate Online Fashion Destination!",
    src: "/projects/adeaz/cover.jpg",
    content: (
      <>
        <strong>ADEaZ</strong> is a premium online fashion destination based in
        Sri Lanka. We designed and developed their official website to showcase
        ADEaZ’s curated collections, effortless style, and customer-first
        shopping experience through a clean, modern, and visually-driven design.
        <br />
        <br />
        The site highlights seasonal clothing lines, accessories, and footwear
        with high-quality imagery and clear product detail pages. Every
        interaction — from browsing curated looks to adding items to cart and
        tracking orders — is fast, intuitive, and optimized for both desktop and
        mobile users.
        <br />
        <br />
        Built with a focus on conversion and ease of management, the website
        includes streamlined navigation, powerful filters, secure checkout
        options, and simple content updates for the Adeaz team. The result is a
        stylish, reliable online presence that helps Adeaz connect with
        customers, showcase new trends, and grow the brand.
      </>
    ),
    link: "https://adeaz.netlify.app",
    projectphotos: [
      "/projects/adeaz/1.png",
      "/projects/adeaz/2.png",
      "/projects/adeaz/3.png",
    ],
  },
};
/* ─────────────────────── ▲▲ Modal additions ▲▲ ─────────────────────── */

/* Helper to show landscape vs portrait nicely in 3-col grid */
const ProjectPhoto: React.FC<{ src: Img; alt: string }> = ({ src, alt }) => {
  const [isPortrait, setIsPortrait] = React.useState(false);

  return (
    <div
      className={[
        "relative w-full rounded-xl overflow-hidden flex items-center justify-center",
        isPortrait ? "h-72" : "h-48", // taller cell for vertical screenshots
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={isPortrait ? "object-contain" : "object-cover"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        onLoadingComplete={(img: {
          naturalWidth: number;
          naturalHeight: number;
        }) => {
          if (img.naturalHeight > img.naturalWidth) {
            setIsPortrait(true);
          }
        }}
      />
    </div>
  );
};

export default function Projects() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(2);

  // pointer-drag state
  const dragging = React.useRef(false);
  const startX = React.useRef(0);
  const startScrollLeft = React.useRef(0);
  const pointerId = React.useRef<number | null>(null);

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalSize] = React.useState<"5xl">("5xl");
  const [selectedId, setSelectedId] = React.useState<Project["id"] | null>(
    null
  );
  const selected = selectedId ? DETAILS[selectedId] : null;
  const openFor = (id: Project["id"]) => {
    setSelectedId(id);
    onOpen();
  };

  // ── Infinite loop setup ──────────────────────────────────────────────
  const LOOPED_PROJECTS = React.useMemo(
    () => [...PROJECTS, ...PROJECTS, ...PROJECTS],
    []
  );
  const centerOffset = PROJECTS.length; // start in middle copy

  // exact distance for one full group (measured, not estimated)
  const groupSpanRef = React.useRef<number | null>(null);
  const suppressUpdateRef = React.useRef(false); // ignore active calc during teleport

  const measureGroupSpan = () => {
    const el = scrollerRef.current;
    if (!el) return null;
    const a = el.children[centerOffset] as HTMLElement | undefined; // first of middle copy
    const b = el.children[centerOffset + PROJECTS.length] as
      | HTMLElement
      | undefined; // first of right copy
    if (!a || !b) return null;
    return b.offsetLeft - a.offsetLeft; // exact pixel span of one group
  };

  const teleportBy = (delta: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    suppressUpdateRef.current = true;
    el.classList.add("teleport"); // disable smooth/snap just for this tick
    el.scrollLeft += delta;
    // allow layout to settle, then re-enable updates
    requestAnimationFrame(() => {
      el.classList.remove("teleport");
      suppressUpdateRef.current = false;
    });
  };

  const handleInfiniteScroll = () => {
    const el = scrollerRef.current;
    if (!el) return false;

    // 🚫 Never teleport while dragging (mobile fix)
    if (dragging.current) return false;

    if (groupSpanRef.current == null) {
      groupSpanRef.current = measureGroupSpan() ?? null;
    }
    const span = groupSpanRef.current;
    if (!span) return false;

    const leftAnchor =
      (el.children[centerOffset] as HTMLElement)?.offsetLeft ?? 0;
    const rightAnchor =
      (el.children[centerOffset + PROJECTS.length] as HTMLElement)
        ?.offsetLeft ?? leftAnchor + span;

    // Add a small hysteresis to avoid instant re-teleport
    const PAD = Math.max(4, Math.floor(span * 0.02)); // 2% or >=4px

    // If scrolled past left of middle copy, jump right by one span.
    if (el.scrollLeft < leftAnchor - PAD) {
      teleportBy(span);
      return true;
    }
    // If scrolled past right anchor (into the 3rd copy), jump left by one span.
    if (el.scrollLeft > rightAnchor + PAD) {
      teleportBy(-span);
      return true;
    }
    return false;
  };

  const updateActiveOnScroll = () => {
    const didTeleport = handleInfiniteScroll();
    if (didTeleport || suppressUpdateRef.current) return;

    const el = scrollerRef.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestD = Infinity;
    Array.from(el.children).forEach((ch, i) => {
      const c = ch as HTMLElement;
      const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - mid);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setActive(best % PROJECTS.length);
  };

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const midIndex = centerOffset + 2; // center-ish card in middle copy
    const midCard = el.children[midIndex] as HTMLElement;
    if (midCard) {
      el.classList.add("teleport");
      el.scrollLeft =
        midCard.offsetLeft - (el.clientWidth - midCard.clientWidth) / 2;
      // measure once layout is stable
      requestAnimationFrame(() => {
        groupSpanRef.current = measureGroupSpan();
        el.classList.remove("teleport");
      });
    }
  }, [centerOffset]);

  const snapToActive = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const targetIndex = centerOffset + active; // always snap within middle copy
    (el.children[targetIndex] as HTMLElement)?.scrollIntoView({
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
    const dx = e.clientX - startX.current;
    el.scrollLeft = startScrollLeft.current - dx;
  };

  const endPointer = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (pointerId.current !== null) {
      try {
        el.releasePointerCapture(pointerId.current);
      } catch {}
      pointerId.current = null;
    }
    dragging.current = false;
    el.classList.remove("dragging");
    requestAnimationFrame(snapToActive);
  };

  return (
    <section id="projects" className="relative w-full bg-cover bg-center">
      <section className="relative w-full py-16 md:py-20">
        {/* Header */}
        <div className="mx-auto max-w-6xl px-4 text-center select-none">
          <h2 className="text-[28px] md:text-4xl font-extrabold tracking-wide">
            <span className="text-white/90">SHOWCASE OF </span>
            <span className="gradient-text-line">INNOVATION</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/60">
            Explore our diverse portfolio of projects that showcase innovation,
            creativity, and technical excellence…
          </p>
        </div>

        {/* Yellow gradient balls over left & right cards */}
        <div
          aria-hidden
          className="hidden md:block pointer-events-none absolute inset-0 z-10 overflow-hidden"
        >
          <div
            className="absolute left-[-200px] top-82 h-[400px] w-[500px] rounded-full opacity-100 blur-[10px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0.65), rgba(0, 255, 0, 0) 90%)",
            }}
          />
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
              "loop-scroller",
            ].join(" ")}
          >
            {LOOPED_PROJECTS.map((p, i) => {
              const isActive = i % PROJECTS.length === active;
              return (
                <div
                  key={`${p.id}-${i}`}
                  className="snap-center shrink-0 my-20"
                  style={{ width: "min(88vw, 660px)" }}
                >
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
                          priority={i === centerOffset}
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

          {/* Dots navigation — only visible on mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollerRef.current;
                  if (!el) return;
                  const targetIndex = centerOffset + i; // snap inside middle copy
                  (el.children[targetIndex] as HTMLElement)?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });
                  setActive(i);
                }}
                className={[
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === active ? "bg-purple-300" : "bg-white/30",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Disable snap during drag + during teleport; mobile stability */}
        <style jsx global>{`
          .dragging,
          .teleport {
            scroll-behavior: auto !important;
            scroll-snap-type: none !important;
          }
          .dragging {
            cursor: grabbing !important;
          }

          .loop-scroller {
            overscroll-behavior-x: contain;
            -webkit-overflow-scrolling: touch;
            touch-action: pan-y;
          }
        `}</style>
      </section>

      {/* ─────────────── Modal (5xl) — reads from DETAILS[selectedId] ─────────────── */}
      <Modal
        isOpen={isOpen}
        size={modalSize}
        scrollBehavior="outside"
        onClose={() => {
          setSelectedId(null);
          onClose();
        }}
        backdrop="blur"
      >
        <ModalContent>
          {(onCloseInner) => (
            <>
              <ModalHeader className="flex items-center gap-3">
                <div>
                  <h1 className="md:text-4xl text-2xl">{selected?.title}</h1>
                  <p className="text-sm md:text-xl">{selected?.category}</p>
                </div>
              </ModalHeader>

              <ModalBody>
                {selected && (
                  <div className="space-y-6">
                    {selected.projectphotos &&
                      selected.projectphotos.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {selected.projectphotos.map((src, idx) => (
                            <ProjectPhoto
                              key={idx}
                              src={src}
                              alt={`Project photo ${idx + 1}`}
                            />
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
