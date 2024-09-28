import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Overall/Navbar/Navbar";
import Footer from "./_components/Overall/Footer/Footer";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "eField League",
  description:
    "Where every play matters, and every player shines. Welcome to eField.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} bg-BgColor overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <Loading />
      </body>
    </html>
  );
}
