"use client";

import React from "react";
import { useWishlist } from "@/components/wishlist-provider";
import { ProductCard } from "@/components/product-card";

export const Wishlist = () => {
  const { items, removeItem } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Your Wishlist</h2>
      {items.length === 0 ? (
        <p className="text-lg text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => removeItem(product.id.toString())}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};