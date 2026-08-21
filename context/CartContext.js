import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product, quantity) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
