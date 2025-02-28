"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CategoryNav } from "@/components/category-nav";
import { FeaturedProducts } from "@/components/featured-products";
import { TrendingProducts } from "@/components/trending-products";
import { InstagramFeed } from "@/components/instagram-feed";
import { Newsletter } from "@/components/newsletter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative text-center text-white space-y-6 max-w-3xl mx-auto px-4"
        >
          <span className="text-sm uppercase tracking-widest">New Season</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Future of Fashion</h1>
          <p className="text-lg md:text-xl text-white/80">
            Discover our latest collection of premium streetwear essentials
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/men">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Shop Men
              </Button>
            </Link>
            <Link href="/women">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Shop Women
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Category Navigation */}
      <CategoryNav />

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <FeaturedProducts />
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
              <p className="text-gray-600">Discover what&apos;s hot this season</p>
            </div>
            <Link href="/trending">
              <Button variant="link" size="lg">
                View All
              </Button>
            </Link>
          </div>
          <TrendingProducts />
        </div>
      </section>

      {/* Featured Story */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-widest text-primary">Our Story</span>
              <h2 className="text-4xl font-bold tracking-tight">Crafting Modern Essentials Since 2024</h2>
              <p className="text-lg text-gray-600">
                We believe in creating timeless pieces that blend contemporary design with sustainable practices. Our
                commitment to quality and innovation drives everything we do.
              </p>
              <Link href="/about">
                <Button size="lg">Learn More</Button>
              </Link>
            </div>
            <div className="relative aspect-square">
              <Image src="/brand-story.jpg" alt="Brand Story" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">@denimshack</h2>
            <p className="text-gray-600">Follow us on Instagram for daily inspiration</p>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}