import type { Metadata } from "next";
import {Geist} from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sales Management System",
  description: "Finance and sales dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <div className="relative min-h-screen bg-zinc-950 overflow-hidden">

          <div className="absolute inset-0 z-0">
            <div className="absolute left-0 top-0 h-100 w-100 rounded-full bg-amber-500/10 blur-[120px]" />

            <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-blue-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
