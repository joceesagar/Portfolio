import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//components
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgressBar from "@/components/ScrollProgressBar";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ScrollProgressBar/>
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
