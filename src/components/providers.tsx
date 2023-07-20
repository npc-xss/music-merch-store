"use client";

import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cart: any[];
};

const CartContext = createContext<CartContextType | null>(null);

export default function Providers({ children }: ProvidersProps) {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  return (
    <SessionProvider>
      <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
    </SessionProvider>
  );
}
