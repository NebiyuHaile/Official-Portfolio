import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nebiyu Haile — Backend & AI Systems Engineer",
  description:
    "Nebiyu Haile is a CS student and backend/AI systems engineer building auth, WebSocket, AI routing, telemetry, and data systems for real users.",
  keywords: [
    "Nebiyu Haile",
    "backend engineer",
    "AI systems engineer",
    "software engineer intern",
    "Next.js",
    "FastAPI",
    "PostgreSQL",
  ],
  authors: [{ name: "Nebiyu Haile" }],
  creator: "Nebiyu Haile",
  openGraph: {
    title: "Nebiyu Haile — Backend & AI Systems Engineer",
    description:
      "Backend, AI infrastructure, and full-stack systems work with real users, measurable reliability, and production-minded project proof.",
    type: "website",
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
