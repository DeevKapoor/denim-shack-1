"use client";

import { Space_Grotesk } from "next/font/google";
import "../app/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/components/cart-provider";
import { WishlistProvider } from "@/components/wishlist-provider";
import { RecentlyViewedProvider } from "@/components/recently-viewed-provider";
import type { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div role="alert" className="p-4 bg-red-100 text-red-700 rounded-md">
          <p className="font-bold">Something went wrong:</p>
          <pre className="whitespace-pre-wrap">{error.message}</pre>
          <button 
            onClick={resetErrorBoundary}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Try again
          </button>
        </div>
      )}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={spaceGrotesk.className}
    >
      <body className="bg-white text-gray-900">
        <ErrorBoundary>
          <CartProvider>
            <WishlistProvider>
              <RecentlyViewedProvider>
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <Toaster />
              </RecentlyViewedProvider>
            </WishlistProvider>
          </CartProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}