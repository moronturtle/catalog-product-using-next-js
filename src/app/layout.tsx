import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "@/styles/_main.scss";
import Carousel from "@/components/Carousel";
import { imagesDummy } from "@/utils/constants";


export const metadata: Metadata = {
  title: "Catalog Product Using Next.js",
  description: "Create By Giri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          <Carousel images={imagesDummy} />
          <div style={{ width: '100%' }}>
            {children}
          </div>
      </body>
    </html>
  );
}
