import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Comment j'ai automatisé ma location de yacht avec l'IA",
  description:
    "De 40h de gestion manuelle à un système autonome : découvrez comment l'IA a transformé notre activité de location de yacht.",
  openGraph: {
    title: "Comment j'ai automatisé ma location de yacht avec l'IA",
    description:
      "De 40h de gestion manuelle à un système autonome : découvrez comment l'IA a transformé notre activité de location de yacht.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
