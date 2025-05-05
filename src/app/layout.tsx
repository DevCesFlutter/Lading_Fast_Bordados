// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FastBordados",
    template: "%s – FastBordados",
  },
  description:
    "Tienda profesional de bordados personalizados en Peñaflor y Talagante. Calidad, precisión y estilo en cada diseño.",
  keywords: [
    "bordados personalizados",
    "bordados Peñaflor",
    "bordados Talagante",
    "FastBordados",
  ],
  authors: [{ name: "FastBordados", url: "https://fastbordados.vercel.app" }],
  openGraph: {
    title: "FastBordados – Bordados en Peñaflor y Talagante",
    description:
      "Tienda profesional de bordados personalizados. Calidad, precisión y estilo en cada diseño.",
    url: "https://fastbordados.vercel.app",
    siteName: "FastBordados",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FastBordados Logo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "L7-pDBOHJ-PlUrkLfzrEPGm1YTrjwleSzQghMp-c42A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
