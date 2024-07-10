import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content="https://muhammadumarwaseem.com/" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/76011160?v=4" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/76011160?v=4" />

        <link rel="canonical" href="https://muhammadumarwaseem.com/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Umar Waseem",
            "description": metadata.description,
            "url": "https://muhammadumarwaseem.com/",
            "image": "https://avatars.githubusercontent.com/u/76011160?v=4"
          }) }}
        />
      </head>
      <body className={exo2.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
