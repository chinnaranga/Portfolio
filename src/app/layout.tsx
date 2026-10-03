import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravipatichinna.com"),
  title: {
    default: "Ravipati Chinna Rangaswamy Reddy — Machine Learning Engineer & Full-Stack Developer",
    template: "%s | Ravipati Chinna Rangaswamy Reddy",
  },
  description:
    "Machine Learning Engineer, Full-Stack Developer, and Healthcare Tech Builder based in Hyderabad, India. Building intelligent software systems across AI, full-stack engineering, and clinical healthcare architectures.",
  keywords: [
    "Ravipati Chinna Rangaswamy Reddy",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "AI Engineer Hyderabad",
    "Healthcare Tech Builder",
    "Next.js Developer",
    "Python PyTorch Engineer",
    "HealthChain",
    "Woxsen University CSE",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravipatichinna.com",
    title: "Ravipati Chinna Rangaswamy Reddy — Machine Learning Engineer & Full-Stack Developer",
    description:
      "Building intelligent software systems and production-ready digital products across AI, full-stack engineering, and healthcare technology.",
    siteName: "Ravipati Chinna Rangaswamy Reddy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravipati Chinna Rangaswamy Reddy — ML & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravipati Chinna Rangaswamy Reddy — ML & Full-Stack Engineer",
    description:
      "Machine Learning Engineer, Full-Stack Developer, and Healthcare Tech Builder based in Hyderabad, India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ravipatichinna.com/#person",
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        jobTitle: "Machine Learning Engineer & Full-Stack Developer",
        description: siteConfig.subheadline,
        url: "https://ravipatichinna.com",
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "India",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Woxsen University",
        },
        sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
        knowsAbout: [
          "Machine Learning",
          "Deep Learning",
          "Full Stack Development",
          "Healthcare Technology",
          "Next.js",
          "React",
          "Python",
          "Cloud Architecture",
          "FastAPI",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://ravipatichinna.com/#website",
        url: "https://ravipatichinna.com",
        name: `${siteConfig.name} Portfolio`,
        publisher: {
          "@id": "https://ravipatichinna.com/#person",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground bg-tech-grid">
        {children}
      </body>
    </html>
  );
}
