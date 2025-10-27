// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

/* ── Types ── */
type NavLink = { label: string; href: string };
type SocialLink = { label: string; href: string; icon?: React.ReactNode };
type ContactConfig = {
  addressLines?: string[];
  phone?: { label?: string; value: string; href?: string };
  email?: { label?: string; value?: string; href?: string };
};
type LogoConfig = { src?: string; alt?: string; width?: number; height?: number; text?: string };
export type FooterConfig = {
  logo?: LogoConfig;
  blurb?: string;
  quickLinks?: NavLink[];
  socials?: SocialLink[];
  contact?: ContactConfig;
  showDivider?: boolean;
  copyright?: string;
  className?: string;
};

/* ── Icons (unchanged) ── */
const IcFacebook = (p: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.01 3.66 9.16 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.77 8.44-4.92 8.44-9.93z" />
  </svg>
);
const IcLinkedIn = (p: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.96v5.7H9.34V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.41-1.86 3.65 0 4.32 2.4 4.32 5.53v6.22zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);
const IcInstagram = (p: any) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
  </svg>
);
const IcGitHub = (p: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.76.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.4.98 0 1.96.14 2.88.4 2.2-1.5 3.17-1.19 3.17-1.19.63 1.65.23 2.87.11 3.17.75.8 1.2 1.85 1.2 3.11 0 4.44-2.69 5.41-5.26 5.7.41.36.77 1.06.77 2.13v3.16c0 .31.21.68.79.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
  </svg>
);
const IcMapPin = (p: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
  </svg>
);
const IcPhone = (p: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.25c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C11.07 22 2 12.93 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
  </svg>
);
const IcMail = (p: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3.2-8 5.2L4 7.2V6l8 5.2L20 6v1.2z" />
  </svg>
);

/* ── Defaults ── */
export const defaultFooterConfig: FooterConfig = {
  logo: { src: "/icons/logocolor.svg", alt: "Introvera", width: 140, height: 28 },
  blurb:
    "Empowering businesses with intelligent, scalable, and secure software solutions. We build with passion and purpose for the digital future.",
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#aboutus" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61577711031531", icon: <IcFacebook className="size-5" /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/introvera", icon: <IcLinkedIn className="size-5" /> },
    { label: "Instagram", href: "https://www.instagram.com/team_introvera/", icon: <IcInstagram className="size-5" /> },
    { label: "GitHub", href: "https://github.com/Introvera", icon: <IcGitHub className="size-5" /> },
  ],
  contact: {
    addressLines: ["275/3, New Kandy Road,", "Biyagama, Sri Lanka."],
    phone: { label: "+94 78364 0894", value: "+94783640894", href: "tel:+94783640894" },
    email: { label: "team@introvera@gmail.com", value: "teamintrovera@gmail.com", href: "mailto:teamintrovera@gmail.com" },
  },
  showDivider: true,
  copyright: "© 2025 Introvera. All rights reserved.",
};

/* ── Component ── */
export default function Footer({ config = defaultFooterConfig }: { config?: FooterConfig }) {
  const { logo, blurb, quickLinks = [], socials = [], contact, showDivider = true, copyright, className = "" } = config;

  return (
    <footer className={`w-full ${className}`} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* container */}
      <div className="mx-auto max-w-[1296px] px-4 sm:px-6 lg:px-8 pt-[72px] pb-[72px]">
        {/* Stack on mobile & tablet; keep your row only on lg+ */}
        <div className="flex flex-col items-center gap-y-[40px]
                 lg:grid lg:grid-cols-[360px_180px_180px_320px]
                 lg:gap-x-[84px] lg:items-start lg:w-[1292px] lg:mx-auto">
          {/* Brand */}
          <div className="lg:basis-[360px] lg:max-w-[360px] lg:flex-none space-y-[24px] text-center lg:text-left">
            {logo?.src ? (
              <div className="relative w-[196px] h-[39px] mx-auto lg:mx-0">
                <Image src={logo.src} alt={logo.alt ?? "Introvera"} fill className="object-contain" priority />
              </div>
            ) : logo?.text ? (
              <div className="text-xl font-semibold tracking-wide">{logo.text}</div>
            ) : null}

            {blurb && (
              <p className="text-bright-soft font-poppins text-[16px] font-normal leading-normal max-w-[360px] mx-auto lg:mx-0">
                {blurb}
              </p>
            )}
          </div>

          {/* Quick Links */}
          {quickLinks.length > 0 && (
            <div className="lg:basis-[180px] lg:flex-none text-center lg:text-left">
              <div className="mb-3 text-[18px] font-[600] leading-[32px] font-poppins bg-gradient-to-r from-[#655DF4] to-[#986DD0] bg-clip-text text-transparent">
                Quick Links
              </div>
              <ul className="space-y-[8px]">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block text-bright-soft font-poppins text-[16px] font-normal leading-normal hover:opacity-90 transition-opacity"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Socials */}
          {socials.length > 0 && (
            <div className="lg:basis-[180px] lg:flex-none text-center lg:text-left">
              <div className="mb-3 text-[18px] font-[600] leading-[32px] font-poppins bg-gradient-to-r from-[#655DF4] to-[#986DD0] bg-clip-text text-transparent">
                Follow Us
              </div>
              <ul className="space-y-[8px]">
                {socials.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex lg:flex items-center gap-[12px]"
                      aria-label={s.label}
                    >
                      <span className="w-5 h-5 flex-shrink-0 text-[#4E4F53] [&>svg]:w-5 [&>svg]:h-5 [&>svg]:block mx-auto lg:mx-0">
                        {s.icon}
                      </span>
                      <span className="text-bright-soft font-poppins text-[16px] font-normal leading-normal">
                        {s.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          {(contact?.addressLines?.length || contact?.phone?.value || contact?.email?.value) && (
            <div className="lg:basis-[320px] lg:flex-none text-center lg:text-left">
              <div className="mb-3 text-[18px] font-[600] leading-[32px] font-poppins bg-gradient-to-r from-[#655DF4] to-[#986DD0] bg-clip-text text-transparent">
                Contact Us
              </div>

              <div className="space-y-[14px] text-[16px] font-poppins font-normal leading-[20px] text-white">
                <div className="flex items-start justify-center lg:justify-start gap-[12px]">
                  <IcMapPin className="w-[28px] h-[28px] aspect-square fill-[#975EE1]" />
                  <address className="not-italic">
                    275/3, New Kandy Road,<br />Biyagama, Sri Lanka.
                  </address>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-[12px]">
                  <IcPhone className="w-[28px] h-[28px] aspect-square fill-[#975EE1]" />
                  <Link href="tel:+94783640894">+94 78364 0894</Link>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-[12px]">
                  <IcMail className="w-[28px] h-[28px] aspect-square fill-[#975EE1]" />
                  <Link href="mailto:teamintrovera@gmail.com">teamintrovera@gmail.com</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider & copyright */}
        {config.showDivider && (
          <div
            aria-hidden="true"
            className="mt-[52px] h-[2px] w-full max-w-[1296px] mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(74, 13, 153, 0.02) 0%, rgba(100, 18, 206, 0.80) 50%, rgba(74, 13, 153, 0.02) 100%)",
            }}
          />
        )}

        <div className="mt-[32px] sm:mt-[52px] w-full text-center text-[#797E82] font-poppins text-[14px] sm:text-[16px] font-normal leading-[28px] sm:leading-[32px]">
          {copyright ?? `© ${new Date().getFullYear()} Introvera. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
