import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";

const inter = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
});

export const metadata = {
  title: "Muhammad Umar Waseem",
  description: "Muhammad is a Pakistan-based Full Stack Software Engineer and CS graduate skilled in Web, Mobile app, and AI solutions for diverse clients.",
  keywords: "Full Stack Software Engineer, AI Engineer, Web Developer, Mobile App Developer, Pakistan",
  author: "Muhammad Umar Waseem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        <meta property="og:title" content="Muhammad Umar Waseem" />
        <meta property="og:site_name" content="Muhammad Umar Waseem" />
        <meta property="og:url" content="https://muhammadumarwaseem.com/" />
        <meta property="og:description" content="Pakistan-based full stack software/AI engineer and computer science graduate" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/76011160?v=4" />
        
        <meta name="twitter:card" content="https://avatars.githubusercontent.com/u/76011160?v=4" />
        <meta name="twitter:title" content="Muhammad Umar Waseem" />
        <meta name="twitter:description" content="Pakistan-based full stack software/AI engineer and computer science graduate" />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/76011160?v=4" />

        <link rel="canonical" href="https://muhammadumarwaseem.com/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Muhammad Umar Waseem",
            "url": "https://muhammadumarwaseem.com",
            "sameAs": [
              "https://www.linkedin.com/in/umarwaseem/",
              "https://github.com/Umar-Waseem"
            ],
            "jobTitle": "Full Stack Software Engineer",
            "alumniOf": {
              "@type": "University",
              "name": "Fast National University Of Computer And Emerging Sciences Islamabad"
            },
            "image": "https://avatars.githubusercontent.com/u/76011160?v=4"
          })}
        </script>
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
