"use client";

import React, { useState } from "react";
import Link from "next/link";
import Layout from "../layout";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const mockAccessories = [
  { id: 1, name: "Accessory 1", price: 50, image: "/accessory1.jpg", description: "Stylish accessory 1" },
  { id: 2, name: "Accessory 2", price: 75, image: "/accessory2.jpg", description: "Elegant accessory 2" },
  { id: 3, name: "Accessory 3", price: 85, image: "/accessory3.jpg", description: "Modern accessory 3" },
  { id: 4, name: "Accessory 4", price: 95, image: "/accessory4.jpg", description: "Chic accessory 4" },
  { id: 5, name: "Accessory 5", price: 60, image: "/accessory5.jpg", description: "Trendy accessory 5" },
  { id: 6, name: "Accessory 6", price: 80, image: "/accessory6.jpg", description: "Fashionable accessory 6" },
  // Add more products as needed
];

export default function Accessories() {
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
          Accessories
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAccessories.map((product) => (
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
              <Link href={`/accessories/${product.id}`}>
                <Button size="sm" variant="outline" className="mt-2">
                  View Details
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/accessories">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              View All Accessories
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}