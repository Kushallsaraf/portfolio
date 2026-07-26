import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Kushall Saraf — Software Developer & Researcher",
  description:
    "Portfolio of Kushall Saraf, a University of Toronto student building full-stack applications and researching natural-language interfaces for data visualization.",
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
