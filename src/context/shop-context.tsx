import { merch } from "@/constants/merch";
import { createContext, useState } from "react";

interface ShopContextType {
  cartItems: Record<number, number>;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const ShopContext = createContext<ShopContextType | null>(null);

const getDefaultCart = (): Record<number, number> => {
  let cart: Record<number, number> = {};
  for (let i = 1; i < merch.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function ShopContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

  const addToCart = (id: number) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
