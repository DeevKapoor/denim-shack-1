"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "@/types/product";

interface RecentlyViewedContextType {
  items: Product[];
  addItem: (product: Product) => void;
  clearItems: () => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export const useRecentlyViewed = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error("useRecentlyViewed must be used within a RecentlyViewedProvider");
  }
  return context;
};

export const RecentlyViewedProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("recently-viewed-items");
      return storedItems ? JSON.parse(storedItems) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("recently-viewed-items", JSON.stringify(items));
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

  const clearItems = () => {
    setItems([]);
  };

  return (
    <RecentlyViewedContext.Provider
      value={{
        items,
        addItem,
        clearItems,
      }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
};