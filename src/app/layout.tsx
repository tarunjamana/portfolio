import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ReducedMotionProvider } from "@/lib/reduced-motion";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarun Jamana",
  description:
    "Web experiences that resonate. Engineered to be fast, accessible, and measured.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReducedMotionProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-house focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg focus:outline-2 focus:outline-offset-2 focus:outline-accent-hover"
          >
            Skip to content
          </a>
          <SmoothScroll />
          {children}
          <Analytics />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
