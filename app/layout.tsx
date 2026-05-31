import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogSync — Auto-generate changelogs from Jira",
  description: "Automatically create customer-facing changelogs from completed Jira tickets using AI. Save hours every sprint."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="399e692d-a0c6-4278-8db6-7c9cf2b66aaf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
