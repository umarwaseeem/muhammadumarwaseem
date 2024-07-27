import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";

import { umarAvatar } from "./images"

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
