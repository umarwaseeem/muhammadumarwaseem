import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";

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
        <meta property="og:title" content="muhammad umar waseem" />
        <meta property="og:site_name" content="muhammad umar waseem" />
        <meta property="og:url" content="https://muhammadumarwaseem.vercel.app" />
        <meta property="og:description" content="pakistan based full stack software/ai engineer and computer science graduate" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/76011160?v=4"></meta>
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
