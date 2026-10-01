import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hari Om Mishra — Java / Spring Boot / React",
  description: "Engineering portfolio of Hari Om Mishra: Java, Spring Boot, microservices, REST APIs and React.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
