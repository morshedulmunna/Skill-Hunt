import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/thems/ThemeProvider";
import Navbar from "@/components/shared/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200, 300, 400, 500, 600, 700, 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 200, 300, 400, 500, 600, 700, 800 900",
});

export const metadata: Metadata = {
  title: "Skill Hunt - Job seeking web application",
  description: "Job Portal - Job search web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full  antialiased   bg-foreground dark:bg-background text-black dark:text-white`}
      >
        <ThemeProvider>
          <div className="fixed bg-foreground dark:bg-background shadow-sm top-0 w-full">
            <Navbar />
          </div>
          <main className="mt-20"> {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
