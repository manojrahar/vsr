import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/GlobalBackground";
import { GameSystemProvider } from "@/context/GameSystemContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Senior Unity Game Developer | Interactive Projects Portfolio",
  description:
    "Explore interactive Unity game development projects spanning mobile, PC, multiplayer squad shooters, WebGL arcade, AR tactics, and VR deep-sea simulations.",
  keywords: [
    "Unity Developer",
    "Game Programmer",
    "Next.js Portfolio",
    "Framer Motion Portfolio",
    "C#",
    "VR/AR Developer",
    "Multiplayer Developer"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} min-h-screen antialiased`}>
      <body className="min-h-screen font-sans bg-[#030712] flex flex-col">
        <GameSystemProvider>
          <GlobalBackground />
          {children}
        </GameSystemProvider>
      </body>
    </html>
  );
}
