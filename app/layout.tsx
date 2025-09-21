import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "CHILPTECH | Customer Support Solutions",
  description: "CHILPTECH delivers reliable, AI-enabled customer support for businesses across Africa—phone, email, live chat, and social media in English, Kinyarwanda, and French.",
  keywords: ["customer support", "outsourced support", "Rwanda", "Africa", "multilingual support", "help desk", "call center"],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e40af",
  openGraph: {
    title: "CHILPTECH | Customer Support Solutions",
    description: "Multilingual, tech-driven support that boosts satisfaction, loyalty, and growth across Africa.",
    url: "https://chilptech.com",
    siteName: "CHILPTECH",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-gray-50`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
