import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";

import {umarAvatar} from "./images"

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
        <meta property="og:image" content={umarAvatar} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={umarAvatar} />

        <link rel="canonical" href="https://muhammadumarwaseem.com/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#2b5797"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Umar Waseem",
            "description": metadata.description,
            "url": "https://muhammadumarwaseem.com/",
            "image": umarAvatar
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
