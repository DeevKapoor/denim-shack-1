"use client";

import React, { useState } from "react";
import Link from "next/link";
import Layout from "../layout";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const mockWomenProducts = [
  { id: 1, name: "Women's Product 1", price: 90, image: "/women-product1.jpg", description: "Stylish women's product 1" },
  { id: 2, name: "Women's Product 2", price: 140, image: "/women-product2.jpg", description: "Elegant women's product 2" },
  { id: 3, name: "Women's Product 3", price: 190, image: "/women-product3.jpg", description: "Modern women's product 3" },
  { id: 4, name: "Women's Product 4", price: 240, image: "/women-product4.jpg", description: "Chic women's product 4" },
  // Add more products as needed
];

export default function Women() {
  const [cart, setCart] = useState<Product[]>([]);

  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }


  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Women&apos;s Collection
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockWomenProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ProductCard product={product}>
                <Button
                  size="sm"
                  className="mt-4"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
                <Link href={`/women/${product.id}`}>
                  <Button size="sm" variant="outline" className="mt-2">
                    View Details
                  </Button>
                </Link>
              </ProductCard>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/women">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              View All Women&apos;s Collection
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}