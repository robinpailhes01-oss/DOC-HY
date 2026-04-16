import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
