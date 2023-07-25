import { title } from "process";
import { createContext, useContext, useState } from "react";

interface CartContextProps {
  items: { category: string; title: string; price: number; imageSrc: string }[];
  addToCart: (
    category: string,
    title: string,
    price: number,
    imageSrc: string
  ) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<
    { category: string; title: string; price: number; imageSrc: string }[]
  >([]);

  function addToCart(
    category: string,
    title: string,
    price: number,
    imageSrc: string
  ) {
    setItems(
      (
        prev: {
          category: string;
          title: string;
          price: number;
          imageSrc: string;
        }[]
      ) => [...prev, { category, title, price, imageSrc }]
    );
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext) as CartContextProps;
}
