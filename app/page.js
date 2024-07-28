import { type } from 'os';
import Main from './components/main';
import { umarAvatar } from './images';

export default function Home() {
  return (
    <Main />
  );
}

const metadata = {
  title: "Home | Muhammad Umar Waseem",
  description: "Muhammad is a Pakistan-based Full Stack Software Engineer and CS graduate skilled in Web, Mobile app, and AI solutions for diverse clients.",
  keywords: "Full Stack Software Engineer, AI Engineer, Web Developer, Mobile App Developer, Pakistan",
  author: "Muhammad Umar Waseem",
};


export async function generateMetadata() {
  return {
    title: metadata.title,
    description: metadata.description,
    image: umarAvatar,
    openGraph: {
      title: "Muhammad Umar Waseem",
      description: metadata.description,
      url: "https://muhammadumarwaseem.com/blogs",
      image: umarAvatar,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [umarAvatar],
    },
    icons: {
      icon: '',
      shortcut: '/favicon-32x32.png',
      apple: [
        { url: '/apple-touch-icon.png' },
        { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
        { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
        { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
        { url: '/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
        { url: '/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      ],
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
      alternates: {
        canonical: 'https://muhammadumarwaseem.com/',
      },
      category: 'software',
    },
  };
}
