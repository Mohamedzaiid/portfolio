import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Zaid | Full-Stack Developer",
  description:
    "Results-driven full-stack developer building scalable, high-performance web applications with React, Next.js, Node.js, and Express. Clean architecture, secure APIs, and polished UI.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Mohamed Zaid",
  ],
  authors: [{ name: "Mohamed Zaid" }],
  openGraph: {
    title: "Mohamed Zaid | Full-Stack Developer",
    description:
      "Building scalable, high-performance web applications with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Zaid | Full-Stack Developer",
    description:
      "Building scalable, high-performance web applications with modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
