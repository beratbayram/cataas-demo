import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat as a Service",
  description: "Providing feline companions on demand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
