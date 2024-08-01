import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import AppContextProvider from "./Contexts/AppContextProvider";
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
      <head>
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className={inter.className}>
        <main className="overflow-y pb-28 pt-6">
          <AppContextProvider>{children}</AppContextProvider>
        </main>
        <footer>
          <AppMenu />
        </footer>
      </body>
    </html>
  );
}
