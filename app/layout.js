import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const inter = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
});

export const metadata = {
  title: "muhammad umar waseem",
  description: "pakistan based full stack software engineer and computer science grad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
