import type { Metadata } from "next"; // tiltle , description, keywords, author, openGraph, twitter, icons, manifest, themeColor, viewport, alternates . inf SEO
import { Geist, Geist_Mono } from "next/font/google"; // Google Fonts
import "./globals.css"; 
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], // english only 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], // english only 
});

export const metadata: Metadata = {
  title: "Hasad",
  description: "AI system for plant disease detection and treatment recommendation",
  keywords : "AI, plant disease detection, treatment recommendation, agriculture, machine learning",
  authors : [{"name" : "Ahmed Ezz"}, {"name" : "Ahmed Ezz Eldin Khailil Mohamed"}],
  openGraph: {
    title: "Hasad",
    description: "AI system for plant disease detection and treatment recommendation",
    url: "https://hasad.com",
    siteName: "Hasad",
    images: [
      {
        url: "https://hasad.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hasad Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasad",
    description: "AI system for plant disease detection and treatment recommendation",
    siteId: "@hasad",
    creatorId: "@hasad_team",
    images: [
      {
        url: "https://hasad.com/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hasad Twitter Image",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


// antialiased : to imporove the font rendering and make it smoother and more readable. It applies anti-aliasing to the text, which helps to reduce jagged edges and improve the overall appearance of the fonts on the screen.



// layout.tsx
//   |
//   | 
//   |-->children
//  |
//  |
//  |-->page.tsx
