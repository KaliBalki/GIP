import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eField League",
  description:
    "Where every play matters, and every player shines. Welcome to eField.",
  openGraph: {
    title: "eField League",
    description:
      "Where every play matters, and every player shines. Welcome to eField.",
    url: "https://e-field-khaki.vercel.app", // This should be your actual base URL
    type: "website",
    images: [
      {
        url: "/NoBG_White.png",
        width: 1200,
        height: 630,
        alt: "eField League Open Graph Image",
      },
    ],
  },
  metadataBase: new URL("https://e-field-khaki.vercel.app"), // Add this line
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-BgColor`}>{children}</body>
    </html>
  );
}
