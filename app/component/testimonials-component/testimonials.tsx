"use client";

import Image from "next/image";

/* ─────────────────────────── Types & data ─────────────────────────── */
type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

// Demo data — you can replace freely
const ITEMS: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha Perera",
    role: "Product Lead",
    quote:
      "Introvera moved us from concept to launch smoothly. Communication was clear and the deliverables matched exactly what we designed in Figma.",
    avatar:
      "/backgrounds/testimonials/John%20Doe%20Testimonial.png", // default/fallback avatar
  },
  {
    id: "t2",
    name: "Liam Carter",
    role: "CTO",
    quote:
      "Clean architecture, on-time delivery, and great UI polish. Our web app performance improved significantly after their refactor.",
    avatar:
      "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  },
  {
    id: "t3",
    name: "Minali Jay",
    role: "Founder",
    quote:
      "They understood the problem deeply and shipped a reliable MVP fast. The team is responsive and easy to work with.",
    avatar:
      "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  },
  {
    id: "t4",
    name: "Aisha Perera",
    role: "Product Lead",
    quote:
      "Introvera moved us from concept to launch smoothly. Communication was clear and the deliverables matched exactly what we designed in Figma.",
    avatar:
      "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  },
  {
    id: "t5",
    name: "Liam Carter",
    role: "CTO",
    quote:
      "Clean architecture, on-time delivery, and great UI polish. Our web app performance improved significantly after their refactor.",
    avatar:
      "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  },
  {
    id: "t6",
    name: "Minali Jay",
    role: "Founder",
    quote:
      "They understood the problem deeply and shipped a reliable MVP fast. The team is responsive and easy to work with.",
    avatar:
      "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  },
];

/* ─────────────────────────── Card (visual unchanged) ─────────────────────────── */
const cardBase =
  "relative rounded-[20px] bg-black/30 backdrop-blur px-5 pt-4 pb-5 " +
  "shadow-[0_20px_60px_rgba(0,0,0,0.35)] " +
  "before:content-[''] before:absolute before:inset-0 before:rounded-[20px] " +
  "before:border before:[border-color:#7B16FF47]";

function Card({ t }: { t: Testimonial }) {
  return (
    <article className={cardBase}>
      {/* Header */}
      <div className="flex items-center gap-[19px]">
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full bg-white/10">
          {t.avatar ? (
            <Image
              src={t.avatar}
              alt={t.name}
              fill
              sizes="60px"
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="min-w-0">
          <p className="text-bright text-[20px] leading-[28px] font-semibold">
  {t.name}
</p>
<p className="text-bright-soft text-[14px] leading-[19.6px]">
  {t.role}
</p>
        </div>
      </div>

      {/* 1px gradient divider */}
      <div
        className="mt-4 mb-4 h-px w-[366px] max-w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(123,22,255,0.04) 0%, #7B16FF 50%, rgba(123,22,255,0.04) 100%)",
        }}
      />

      {/* Body */}
      <p className="text-bright-soft h-[221px] overflow-hidden text-white text-[16px] leading-[22.4px]">
        “{t.quote}”
      </p>
    </article>
  );
}

/* ─────────────────────────── Layout only ───────────────────────────
   - Site padding @ lg = 96px (px-24)
   - 32px gap under heading (mt-8)
   - Extra headroom inside grid (pt-12/pb-12)
   - Middle column lifted by 48px (-mt-12)
*/
export default function Testimonials({ items = ITEMS }: { items?: Testimonial[] }) {
  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <section
    id="testimonials"
    className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
    {/* Full-width background (covers heading + cards) */}
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
        src="/backgrounds/testimonials/gradient-behind-testimonials.png"
        alt="Testimonials background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
    </div>

    {/* Content container (site padding) */}
    <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-24">
        {/* Heading */}
        <h2 className="text-center text-white text-[28px] sm:text-[32px] font-[600]">
        STORIES OF{" "}
        <span className="bg-gradient-to-r from-[#655DF4] via-[#7E65E2] to-[#986DD0] bg-clip-text text-transparent">
            TRUST & TRANSFORMATION
        </span>
        </h2>

        {/* Thin rule – 16px below heading */}
        <div className="mt-4 h-[3px] w-full bg-gradient-to-r from-transparent via-[#5C7CFF] to-transparent" />

        {/* About 60–75px below rule (adjustable) */}
        <div className="mt-[128px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col gap-8">
            {col1.map((t) => (
                <Card key={t.id} t={t} />
            ))}
            </div>
            <div className="flex flex-col gap-8 -mt-12">
            {col2.map((t) => (
                <Card key={t.id} t={t} />
            ))}
            </div>
            <div className="flex flex-col gap-8">
            {col3.map((t) => (
                <Card key={t.id} t={t} />
            ))}
            </div>
        </div>
        </div>
    </div>
    </section>
  );
}
