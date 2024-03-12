import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Smash",
  description: "Project Smash website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="synthwave">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
