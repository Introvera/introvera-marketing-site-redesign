import type { Metadata } from "next";
import { Saira, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "../app/provider";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Introvera - Innovating Tomorrow, One Line of Code at a Time",
  description: "Empowering businesses with intelligent, scalable, and secure software solutions. We build with passion and purpose for the digital future.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${saira.variable} ${poppins.variable} dark scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://introvera.com" />
      </head>
      <body
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
