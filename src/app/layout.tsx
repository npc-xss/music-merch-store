import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/lib/auth";
import Providers from "@/lib/providers"
import Home from "./page"
import Profile from "./profile/page"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eye Crown",
  description: "Music & merch store",
};


export default async function RootLayout() {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand text-white`}>
        <Providers session={session}>
          {!session ? (
            <Home />
          ) : (
            <Profile />
          )}
        </Providers>
      </body>
    </html>
  )
}
