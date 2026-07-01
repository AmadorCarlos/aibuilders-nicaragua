import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Builders Nicaragua — La comunidad de quienes construyen con IA",
  description:
    "El punto de encuentro de los capítulos locales de las herramientas que están cambiando el mundo — empezando por Cursor. No es un esfuerzo comercial: es comunidad.",
  openGraph: {
    title: "AI Builders Nicaragua",
    description:
      "La comunidad de quienes construyen con IA en Nicaragua. Workshops, meetups y aprendizaje colectivo.",
    locale: "es_NI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-white">
        {children}
      </body>
    </html>
  );
}
