import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoiko Group",
  description:
    "Zoiko Group — a global family of companies across technology, telecommunications, mobility, media and consumer brands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
