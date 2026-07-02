import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TIMBRE — Studio One | Concept by Tarun Jamana",
  description:
    "Hear the whole picture. A concept campaign landing page for Studio One wireless headphones — fictional brand, clean-room build.",
};

export default function ClpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${syne.variable} ${manrope.variable} bg-tb-bg font-tb-body text-tb-text antialiased`}
    >
      {children}
    </div>
  );
}
