import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import GoogleAnalytics from './components/googleanalytics';

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const JSONLD = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "url": "https://muhammadumarwaseem.com",
  "logo": "https://muhammadumarwaseem.com/favicon-32x32.png",
  "contactPoint": {
    "@type": "EmailAddress",
    "email": "umar.waseem@example.com",
    "contactType": "personal email"
  },
  "sameAs": [
    "https://twitter.com/umarwaseeem",
    "https://www.linkedin.com/in/umarwaseeem/",
    "https://github.com/umarwaseeem"
  ],
  "name": "Muhammad Umar Waseem",
  "image": "https://avatars.githubusercontent.com/u/76011160?v=4",
  "description": "Muhammad is a Pakistan-based Full Stack Software Engineer and CS graduate skilled in Web, Mobile app, and AI solutions for diverse clients.",
  "jobTitle": "Software Engineer",
  "address": {
    "addressCountry": "Pakistan"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <JSONLD data={structuredData} />
      <body className={exo2.className}>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
