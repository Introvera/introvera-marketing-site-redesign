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
    name: "Anushka Eranga",
    role: "Lead Software Engineer at Creative Software",
    quote:
      "What I admire most is these kids' mindset. They approach every idea like engineers test, iterate, refine but they also bring a creative energy that makes their work stand out.",
    avatar:
      "/backgrounds/testimonials/anushka.jpeg",
  },
  {
    id: "t2",
    name: "Sachini Pathinayaka",
    role: "Lead Software Engineer at IFS",
    quote:
      "These kids always been the kind of people who learn fast and build things that actually work. It’s been fun watching them grow as developers.",
    avatar:
      "/backgrounds/testimonials/sachini.jpeg",
  },
  {
    id: "t3",
    name: "Rashen Iddamalgoda",
    role: "Senior System Engineer at Pristine Solution (Pvt)Ltd",
    quote:
      "I’ve seen how passionate they are about learning and improving. They always push themselves to create something better each time.",
    avatar:
      "/backgrounds/testimonials/rashen.jpg",
  },
  // {
  //   id: "t4",
  //   name: "Aisha Perera",
  //   role: "Product Lead",
  //   quote:
  //     "Introvera moved us from concept to launch smoothly. Communication was clear and the deliverables matched exactly what we designed in Figma.",
  //   avatar:
  //     "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  // },
  // {
  //   id: "t5",
  //   name: "Liam Carter",
  //   role: "CTO",
  //   quote:
  //     "Clean architecture, on-time delivery, and great UI polish. Our web app performance improved significantly after their refactor.",
  //   avatar:
  //     "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  // },
  // {
  //   id: "t6",
  //   name: "Minali Jay",
  //   role: "Founder",
  //   quote:
  //     "They understood the problem deeply and shipped a reliable MVP fast. The team is responsive and easy to work with.",
  //   avatar:
  //     "/backgrounds/testimonials/John%20Doe%20Testimonial.png",
  // },
];

/* ─────────────────────────── DEESHANA Card ─────────────────────────── */
// const Card = ({ t }: { t: Testimonial }) => {
//   return (
//     <article
//       className="relative flex flex-col justify-between rounded-[20px] backdrop-blur px-5 pt-4 pb-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[rgba(76,1,174,0.28)] bg-black/[0.28]
//       h-[200px] sm:h-[320px] md:h-[362px]"
//     >
//       {/* Header */}
//       <div className="flex items-center gap-[14px]">
//           {t.avatar && (
//             <Image
//               src={t.avatar}
//               alt={t.name}
//               width={60}
//               height={60}
//               className="object-cover rounded-full 
//               w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px]"
//             />
//           )}
//         <div className="min-w-0">
//           <p className="text-bright font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[28px]">
//             {t.name}
//           </p>
//           <p className="text-bright-soft text-[12px] sm:text-[13px] md:text-[14px] leading-[16px] sm:leading-[18px] md:leading-[19.6px]">
//             {t.role}
//           </p>
//         </div>
//       </div>

//       {/* Gradient divider */}
//       <div
//         className="mt-4 mb-4 h-px w-full"
//         style={{
//           background:
//             "linear-gradient(90deg, rgba(123,22,255,0.04) 0%, #7B16FF 50%, rgba(123,22,255,0.04) 100%)",
//         }}
//       />

//       {/* Body */}
//       <p
//         className="text-white overflow-hidden
//         line-clamp-5 sm:line-clamp-6 md:line-clamp-none
//         text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[22.4px] 
//         h-[140px] sm:h-[170px] md:h-[221px]"
//       >
//         “{t.quote}”
//       </p>
//     </article>
//   );
// };
const Card = ({ t }: { t: Testimonial }) => {
  return (
    <article
      className="relative flex flex-col gap-3 sm:gap-4 md:gap-5
                 rounded-[20px] backdrop-blur px-5 pt-4 pb-5
                 shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                 border border-[rgba(76,1,174,0.28)] bg-black/[0.28]
                 h-auto"             // ← no fixed/min heights
    >
      {/* Header */}
      <div className="flex items-center gap-[14px]">
        {t.avatar && (
          <Image
            src={t.avatar}
            alt={t.name}
            width={60}
            height={60}
            className="object-cover rounded-full shrink-0
                       w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-bright font-semibold text-[16px] sm:text-[18px] md:text-[20px]
                        leading-[20px] sm:leading-[24px] md:leading-[28px]
                        break-words hyphens-auto whitespace-normal"
             title={t.name}>
            {t.name}
          </p>
          <p className="text-bright-soft text-[12px] sm:text-[13px] md:text-[14px]
                        leading-[16px] sm:leading-[18px] md:leading-[19.6px] break-words hyphens-auto whitespace-normal"
             title={t.role}>
            {t.role}
          </p>
        </div>
      </div>

      {/* Gradient divider */}
      <div
        className="my-3 h-px w-full"   // ← tighter margins
        style={{
          background:
            "linear-gradient(90deg, rgba(123,22,255,0.04) 0%, #7B16FF 50%, rgba(123,22,255,0.04) 100%)",
        }}
      />

      {/* Body */}
      <p className="text-white overflow-hidden break-words hyphens-auto
                   text-[14px] sm:text-[15px] md:text-[16px]
                   leading-[20px] sm:leading-[22px] md:leading-[22.4px]
                   line-clamp-5 sm:line-clamp-6 md:line-clamp-7">
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
          src="/backgrounds/testimonials/GradientBehindTestimonials.png"
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
