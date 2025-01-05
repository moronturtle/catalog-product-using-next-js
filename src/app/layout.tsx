import type { Metadata } from "next";
import Sidebar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import "@/styles/_main.scss";


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
          <Sidebar />
          <div style={{ width: '100%' }}>
            <Navbar />
            {children}
          </div>
      </body>
    </html>
  );
}
