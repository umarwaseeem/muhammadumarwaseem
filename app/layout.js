import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
});

export const metadata = {
  title: "muhammad umar waseem",
  description: "software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
