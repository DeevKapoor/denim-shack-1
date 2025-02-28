"use client";

import React, { useState } from "react";
import Link from "next/link";
import Layout from "../layout";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const mockMenProducts = [
  { id: 1, name: "Men's Product 1", price: 100, image: "/men-product1.jpg", description: "Stylish men's product 1" },
  { id: 2, name: "Men's Product 2", price: 150, image: "/men-product2.jpg", description: "Elegant men's product 2" },
  { id: 3, name: "Men's Product 3", price: 200, image: "/men-product3.jpg", description: "Modern men's product 3" },
  { id: 4, name: "Men's Product 4", price: 250, image: "/men-product4.jpg", description: "Chic men's product 4" },
  // Add more products as needed
];

export default function Men() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; image: string; description: string }[]>([]);

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
          Men&apos;s Collection
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMenProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ProductCard product={product} />
              <Button
                size="sm"
                className="mt-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
              <Link href={`/men/${product.id}`}>
                <Button size="sm" variant="outline" className="mt-2">
                  View Details
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/men">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              View All Men&apos;s Collection
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}