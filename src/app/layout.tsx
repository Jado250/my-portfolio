import type { Metadata } from "next";
// Self-hosted fonts (via fontsource), instead of next/font/google.
// no runtime dependency on fonts.googleapis.com, better privacy & reliability.
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import BackToTop from "@/components/BackToTop";

const SITE_URL = "https://jeandedieukwizera.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jean de Dieu KWIZERA, Full-Stack Developer & IT Consultant, Rwanda",
    template: "%s | Jean de Dieu KWIZERA",
  },
  description:
    "Jean de Dieu KWIZERA is an Information Technology student and full-stack developer in Rwanda, building web systems, business software, and digital infrastructure for real companies.",
  keywords: [
    "Jean de Dieu KWIZERA",
    "full-stack developer Rwanda",
    "web developer Kigali",
    "IPRC IT student",
    "React developer Rwanda",
    "Next.js developer Rwanda",
    "software developer Rwanda",
  ],
  authors: [{ name: "Jean de Dieu KWIZERA" }],
  creator: "Jean de Dieu KWIZERA",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Jean de Dieu KWIZERA, Full-Stack Developer & IT Consultant",
    description:
      "Building digital solutions that make businesses smarter: web systems, software, and IT consulting from Rwanda.",
    siteName: "Jean de Dieu KWIZERA",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean de Dieu KWIZERA, Full-Stack Developer & IT Consultant",
    description:
      "Building digital solutions that make businesses smarter: web systems, software, and IT consulting from Rwanda.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jean de Dieu KWIZERA",
  jobTitle: "Full-Stack Developer & IT Consultant",
  description:
    "Information Technology student at IPRC (A1), Rwanda, building web systems, business software, and digital infrastructure.",
  url: SITE_URL,
  email: "mailto:kjado250@gmail.com",
  telephone: "+250789759248",
  address: { "@type": "PostalAddress", addressCountry: "Rwanda" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "IPRC" },
  knowsAbout: [
    "Web Development",
    "Software Development",
    "Database Design",
    "REST API Development",
    "UI/UX Design",
    "IT Consulting",
    "Networking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint to avoid theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: light)').matches;var mode=t||(m?'light':'dark');document.documentElement.classList.add(mode==='light'?'light':'dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
