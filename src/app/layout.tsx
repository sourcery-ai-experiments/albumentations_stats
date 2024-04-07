import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stats for Albumentations",
  description: "Stats for Albumentations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/albumentations_logo.svg" />
        {/* Fallback for browsers that do not support SVG favicons */}
        <link rel="alternate icon" type="image/png" href="/albumentations_logo.png" />
        <title>Stats for Albumentations</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
