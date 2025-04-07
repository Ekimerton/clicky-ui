import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ClickyUI",
  description: "The Audio-Driven UI Library.",
  metadataBase: new URL("https://clicky-ui.vercel.app/"),
  keywords: [],
  authors: [
    { name: "Ekim Karabey", url: "https://ekimerton.github.io/" },
    { name: "Hannah Larsen", url: "https://hannah-larsen.github.io/" },
  ],
  generator: "Next.js",
  applicationName: "ClickyUI",
  openGraph: {
    title: "ClickyUI",
    description: "The Audio-Driven UI Library.",
    url: "https://clicky-ui.vercel.app/",
    siteName: "ClickyUI",
    images: [
      {
        url: "https://clicky-ui.vercel.app/og_image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics gaId="G-TG1Z6GCKM4" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
