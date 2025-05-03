import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Definición de las fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos del sitio
export const metadata: Metadata = {
  title: "FastBordados - Bordados Personalizados",
  description:
    "Tienda profesional de bordados personalizados. Calidad, precisión y estilo en cada diseño.",
  openGraph: {
    title: "FastBordados - Bordados Personalizados",
    description:
      "Tienda profesional de bordados personalizados. Calidad, precisión y estilo en cada diseño.",
    url: "https://fastbordados.vercel.app",
    siteName: "FastBordados",
    images: [
      {
        url: "/logo.png", // La imagen debe estar en la carpeta public
        width: 1200,
        height: 630,
        alt: "FastBordados",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

// Componente principal de layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="logo.png" />
        {/* Si prefieres un favicon PNG o SVG, usa el siguiente formato */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
