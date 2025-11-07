import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What's New in Flutter for Developers",
  description: "Highlights of the latest features, updates, and tools in Flutter for developers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${inter.className} text-slate-100`}>{children}</body>
    </html>
  );
}
