"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "@/types/product";

interface CartContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("cart-items");
      return storedItems ? JSON.parse(storedItems) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, { ...product }];
    });
  };

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const totalItems = items.length;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};