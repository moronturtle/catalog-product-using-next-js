import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "@/global_styles/_main.scss";
import { GlobalProvider } from "@/context/GlobalContext";

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
        <GlobalProvider>
          <Navbar />
          <div style={{ width: "100%" }}>{children}</div>
        </GlobalProvider>
      </body>
    </html>
  );
}
