import { createContext, useContext, useState } from "react";
interface Item {
  category: string;
  title: string;
  price: number;
  imageSrc: string;
}
interface CartContextProps {
  items: Item[];
  addToCart: (item: Item) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  function addToCart(item: Item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)!;
}
