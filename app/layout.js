import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";

const inter = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
});

export const metadata = {
  title: "Muhammad Umar Waseem",
  description: "Muhammad is a Pakistan-based Full Stack Software Engineer and Computer Science graduate whose skills range from creating software solutions including Web, Mobile apps to AI-based solutions for a variety of clients",
  keywords: "Full Stack Developer, Software Engineer, Pakistan, AI, Web Development, Mobile Development, Machine Learning Engineer, Machine Learning, Langchain, Deep Learning, Flutter, Next.js, ReactJs, NodeJs, Python, Tech Blogs, Developer, Developer Blogs",
  author: "Muhammad Umar Waseem"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        
        <meta property="og:title" content="Muhammad Umar Waseem" />
        <meta property="og:site_name" content="Muhammad Umar Waseem" />
        <meta property="og:url" content="https://muhammadumarwaseem.vercel.app" />
        <meta property="og:description" content="Pakistan-based Full Stack Software/AI Engineer and Computer Science graduate" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/76011160?v=4" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@umar_terminator" />
        <meta name="twitter:creator" content="@umar_terminator" />
        <meta name="twitter:title" content="Muhammad Umar Waseem" />
        <meta name="twitter:description" content="Pakistan-based Full Stack Software/ML Engineer and Computer Science graduate" />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/76011160?v=4" />

      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
