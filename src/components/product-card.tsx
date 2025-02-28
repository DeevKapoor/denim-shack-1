"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
      <div className="relative w-full h-64">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-primary">${product.price}</p>
        <Button className="mt-4 w-full" onClick={() => addItem(product)}>Add to Cart</Button>
      </div>
    </div>
  );
};