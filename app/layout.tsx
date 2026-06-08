import type { Metadata, Viewport } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/dm-mono/latin-400.css";
import "@fontsource/dm-mono/latin-500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pavansae99.github.io/pavan-portfolio/"),
  title: "Pavan Sai Lankalapalli | Senior Software Engineer",
  description:
    "Senior Software Engineer at Google building secure distributed systems, cloud-native platforms, and intelligent automation.",
  keywords: [
    "Pavan Sai Lankalapalli",
    "Senior Software Engineer",
    "Golang",
    "Python",
    "Java",
    "Kubernetes",
    "Distributed Systems",
    "Agentic AI",
  ],
  authors: [{ name: "Pavan Sai Lankalapalli" }],
  creator: "Pavan Sai Lankalapalli",
  alternates: {
    canonical: "https://pavansae99.github.io/pavan-portfolio/",
  },
  openGraph: {
    type: "website",
    url: "https://pavansae99.github.io/pavan-portfolio/",
    title: "Pavan Sai Lankalapalli | Senior Software Engineer",
    description:
      "Senior Software Engineer at Google specializing in distributed systems, cloud-native platforms, and Agentic AI.",
    siteName: "Pavan Sai Lankalapalli",
  },
  twitter: {
    card: "summary",
    title: "Pavan Sai Lankalapalli | Senior Software Engineer",
    description:
      "Distributed systems, cloud-native platforms, and intelligent AI agents.",
  },
  manifest: "https://pavansae99.github.io/pavan-portfolio/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#f4f5f1",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
