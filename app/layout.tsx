import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

//components
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgressBar from "@/components/ScrollProgressBar";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ScrollProgressBar/>
        <Header/>
        {children}
        <Toaster position="top-right" richColors/>
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
