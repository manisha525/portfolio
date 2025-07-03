import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GemAI from "@/components/GemAI";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";

import { Toaster } from "react-hot-toast";

import SessionInitializer from "@/components/SessionInitializer";

export const metadata: Metadata = {
  title: "Manisha Shah | Full-Stack & AI Developer Portfolio",
  description: "Explore Manisha Shah's professional portfolio — showcasing AI/ML projects, Game Development, Academic background, and an embedded AI agent (GemAI).",
  keywords: [
      "Manisha Shah", "Portfolio", "Personal Website", "AI Developer", "Frontend Developer",  "React Developer", 
      "Next.js", "Machine Learning", "Full Stack Developer", "Artificial Intelligence", "RAG", "Retrieval Augmented Generation",
      "Python Developer", "Resume", "Projects", "TypeScript", "Natural Language Processing", "NLP", "NLTK",
      "Pace University", "Pokhara University", "Nepal", "GemAI", "AI Agent", "AI in Portfolio",
    ],
  robots: "index, follow",
  authors: [{ name: "Manisha Shah", url: "https://www.linkedin.com/in/shah-manisha/"}],
  openGraph: {
    title: "Manisha Shah | AI Developer Portfolio",
    description: "Meet manisha — a passionate full-stack and AI/ML developer with industry experience and academic strength.",
    url: "https://www.manishashah7.com",
    siteName: "Manisha Shah",
    images: [
      {
        url: "https://www.manishashah7.com/manisha.webp",
        width: 1200,
        height: 630,
        alt: "Manisha Shah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manisha Shah | Full-Stack & AI Developer",
    description: "Explore manisha's projects, resume, and GemAI agent.",
    images: ["https://www.manishashah7.com/manisha.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="canonical" href="https://www.manishashah7.com" />
        <link rel="preload" as="image" href="/manisha.webp" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Manisha Shah",
            url: "https://www.manishashah7.com",
            sameAs: [
              "https://www.linkedin.com/in/shah-manisha/",
              "https://github.com/manisha525"
            ],
            "publisher": {
              "@type": "Person",
              "name": "Manisha Shah"
            },
            jobTitle: "AI/ML & Full-Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Pace University"
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Pace University"
            },
            description: "Explore Manisha Shah's portfolio highlighting AI/ML and React-based projects with a built-in AI agent.",
          }),
        }} />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
          <ThemeProvider>
              <SessionInitializer />
              <div className="flex flex-col min-h-screen relative">
                <Navbar />
                <ThemeToggleButton />
                <Toaster position="top-center" reverseOrder={false} /> {/* email sent pop-up */}
                <main className="flex-1 w-full pt-24 px-5">{children}</main>
                <Footer />
                <GemAI /> {/* Floating button now correctly inside layout */}
              </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
