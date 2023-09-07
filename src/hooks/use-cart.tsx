import { createContext, useContext, useState } from "react";

interface Item {
  category: string;
  title: string;
  price: number;
  image: string;
}

interface CartContextTypes {
  items: Item[];
  addToCart: (item: Item) => void;
}

const CartContext = createContext<CartContextTypes | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setItems((prevState) => [...prevState, item]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)!;
}
