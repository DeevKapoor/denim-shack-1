"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { motion } from "framer-motion";


const featuredProducts = [
  {
    id: 1,
    name: "Premium Denim Jacket",
    price: 149.99,
    image: "/placeholder.svg",
    category: "Jackets",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 89.99,
    image: "/placeholder.svg",
    category: "Jeans",
  },
  {
    id: 3,
    name: "Classic White Tee",
    price: 29.99,
    image: "/placeholder.svg",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "Leather Boots",
    price: 199.99,
    image: "/placeholder.svg",
    category: "Shoes",
  },
  {
    id: 5,
    name: "Casual Hoodie",
    price: 59.99,
    image: "/placeholder.svg",
    category: "Hoodies",
  },
];

export function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {featuredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[300px] snap-start"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      <div className="hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background shadow-lg"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background shadow-lg"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}