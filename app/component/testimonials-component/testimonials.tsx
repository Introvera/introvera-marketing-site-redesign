"use client";

import Image from "next/image";

/* ─────────────────────────── Types & Data ─────────────────────────── */
type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const ITEMS: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha Perera",
    role: "Product Lead",
    quote:
      "Introvera moved us from concept to launch smoothly. Communication was clear and the deliverables matched exactly what we designed in Figma.",
    avatar:
      "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
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

/* ─────────────────────────── Card ─────────────────────────── */
const Card = ({ t }: { t: Testimonial }) => {
  return (
    <article
      className="relative flex flex-col justify-between rounded-[20px] backdrop-blur px-5 pt-4 pb-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[rgba(76,1,174,0.28)] bg-black/[0.28]
      h-[200px] sm:h-[320px] md:h-[362px]"
    >
      {/* Header */}
      <div className="flex items-center gap-[14px]">
        <div className="relative overflow-hidden rounded-full bg-white/10
          h-[50px] sm:h-[55px] md:h-[60px] w-[50px] sm:w-[55px] md:w-[60px]">
          {t.avatar && (
            <Image
              src={t.avatar}
              alt={t.name}
              fill
              sizes="(max-width: 640px) 50px, (max-width: 768px) 55px, 60px"
              className="object-cover"
            />
          )}
        </div>
        <div className="min-w-0">
          <p className="text-bright font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[28px]">
            {t.name}
          </p>
          <p className="text-bright-soft text-[12px] sm:text-[13px] md:text-[14px] leading-[16px] sm:leading-[18px] md:leading-[19.6px]">
            {t.role}
          </p>
        </div>
      </div>

      {/* Gradient divider */}
      <div
        className="mt-4 mb-4 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(123,22,255,0.04) 0%, #7B16FF 50%, rgba(123,22,255,0.04) 100%)",
        }}
      />

      {/* Body */}
      <p
        className="text-white overflow-hidden
        line-clamp-5 sm:line-clamp-6 md:line-clamp-none
        text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[22.4px] 
        h-[140px] sm:h-[170px] md:h-[221px]"
      >
        “{t.quote}”
      </p>
    </article>
  );
};

/* ─────────────────────────── Layout ─────────────────────────── */
export default function Testimonials({ items = ITEMS }: { items?: Testimonial[] }) {
  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="testimonials"
      className="relative w-full py-12 sm:py-12 lg:py-18 overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="https://kzpotlpfxxhmtzvmvbxr.supabase.co/storage/v1/object/sign/marketingSiteImgs/testimonialsImgs/GradientBehindTestimonials.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYTNiOGMwMi1kNDIwLTQ1ZGEtOTZjMi1mYzI5ZWZmYjQ0ZDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYXJrZXRpbmdTaXRlSW1ncy90ZXN0aW1vbmlhbHNJbWdzL0dyYWRpZW50QmVoaW5kVGVzdGltb25pYWxzLnBuZyIsImlhdCI6MTc2MTU3MTQzOCwiZXhwIjozMzI5NzU3MTQzOH0.0nmB_c3O1OHRavNQB6DQdp5sp8yJbMAFc6m-jCYE5n4"
          alt="Testimonials background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-24">
        <h2 className="text-center text-white text-[28px] sm:text-[32px] font-[600]">
          STORIES OF{" "}
          <span className="bg-gradient-to-r from-[#655DF4] via-[#7E65E2] to-[#986DD0] bg-clip-text text-transparent">
            TRUST & TRANSFORMATION
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-[64px]">
          {/* Mobile: stacked cards */}
          <div className="block sm:hidden flex flex-col gap-[14px]">
            {items.map((t) => (
              <Card key={t.id} t={t} />
            ))}
          </div>

          {/* Medium & Large screens: 3 columns */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-[14px] items-start mt-30">
            <div className="flex flex-col gap-[14px]">
              {col1.map((t) => (
                <Card key={t.id} t={t} />
              ))}
            </div>
            <div className="flex flex-col gap-[14px] -mt-12">
              {col2.map((t) => (
                <Card key={t.id} t={t} />
              ))}
            </div>
            <div className="flex flex-col gap-[14px]">
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
