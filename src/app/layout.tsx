import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Providers from "@/app/providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eye Crown",
  description: "Music & merch store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
