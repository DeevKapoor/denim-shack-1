"use client";

import React, { useState } from "react";
import Link from "next/link";
import Layout from "../layout";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const mockBestsellers = [
  { id: 1, name: "Bestseller 1", price: 110, image: "/bestseller1.jpg", description: "Popular bestseller 1" },
  { id: 2, name: "Bestseller 2", price: 160, image: "/bestseller2.jpg", description: "Trending bestseller 2" },
  { id: 3, name: "Bestseller 3", price: 210, image: "/bestseller3.jpg", description: "Top-rated bestseller 3" },
  { id: 4, name: "Bestseller 4", price: 260, image: "/bestseller4.jpg", description: "Highly recommended bestseller 4" },
  // Add more products as needed
];

export default function Bestsellers() {
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
          Bestsellers
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockBestsellers.map((product) => (
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
                <Link href={`/bestsellers/${product.id}`}>
                  <Button size="sm" variant="outline" className="mt-2">
                    View Details
                  </Button>
                </Link>
              </ProductCard>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/bestsellers">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              View All Bestsellers
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}