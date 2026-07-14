import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TerminalProvider } from "@/context/TerminalContext";
import TerminalOverlay from "@/components/TerminalOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syntharasight | Command Center",
  description: "Synthetic Intelligence for Physical Creation. Deep-Tech orchestration engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <TerminalProvider>
          {children}
          <TerminalOverlay />
        </TerminalProvider>
      </body>
    </html>
  );
}

