import React from "react";
import Layout from "../layout";
import { ProductCard } from "@/components/product-card";

const mockNewProducts = [
  { id: 1, name: "New Product 1", price: 120, image: "/new-product1.jpg", category: "New" },
  { id: 2, name: "New Product 2", price: 180, image: "/new-product2.jpg", category: "New" },
  { id: 3, name: "New Product 3", price: 220, image: "/new-product3.jpg", category: "New" },
  { id: 4, name: "New Product 4", price: 280, image: "/new-product4.jpg", category: "New" },
];

export default function New() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockNewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}