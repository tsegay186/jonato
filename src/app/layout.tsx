import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import AppMenu from "./Components/AppMenu";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-y h-fit pb-32 pt-6 ">
        {children}
        </div>
        <div style={{maxWidth:"416px", width:"100%"}}  className="flex  relative">
        <AppMenu/>
        </div>
      </body>
    </html>
  );
}
