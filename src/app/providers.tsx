"use client";

import { SessionProvider } from "next-auth/react";
import ShopContextProvider from "@/context/shop-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ShopContextProvider>{children}</ShopContextProvider>
    </SessionProvider>
  );
}
