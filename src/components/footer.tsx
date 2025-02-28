"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              At Denim Shack, we believe in creating timeless pieces that blend contemporary design with sustainable
              practices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://instagram.com" target="_blank" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://pinterest.com" target="_blank" className="hover:underline">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Sign up for our newsletter to get the latest news, updates, and special offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; 2025 Denim Shack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}