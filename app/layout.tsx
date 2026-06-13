import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Listing Seasonal Optimizer",
  description: "Optimize Etsy listings for seasonal search trends. AI-powered title, tag, and description updates for better visibility."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="122f5920-b0b0-45bd-b5fc-0da1e4e6bc68"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
