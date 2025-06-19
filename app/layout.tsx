import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hieu Hoang",
  description: "Hi, I'm Hieu",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
