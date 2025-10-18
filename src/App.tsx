import React from "react";
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const products = [
  {
    image: "https://images.unsplash.com/photo-1717664644983-fa919d287460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc25lYWtlcnMlMjB3aGl0ZXxlbnwxfHx8fDE3NjA3NzI1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    colorways: "2 Colours",
    price: "8,695.00",
    label: "Just In"
  },
  {
    image: "https://images.unsplash.com/photo-1695748966450-3abe5c25b481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYWlyJTIwam9yZGFufGVufDF8fHx8MTc2MDc3MjUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Air Jordan 1 Mid",
    category: "Men's Shoes",
    colorways: "1 Colour",
    price: "12,295.00",
    label: "Promo Exclusion"
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwcnVubmluZyUyMHNob2VzfGVufDF8fHx8MTc2MDczNTY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Nike React Infinity Run",
    category: "Men's Running Shoes",
    colorways: "3 Colours",
    price: "14,995.00",
    label: "Just In"
  },
  {
    image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYmFza2V0YmFsbCUyMHNob2VzfGVufDF8fHx8MTc2MDY4MTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Nike Blazer Mid '77",
    category: "Men's Shoes",
    colorways: "4 Colours",
    price: "9,695.00",
    label: "Just In"
  },
  {
    image: "https://images.unsplash.com/photo-1693115297088-bf53ff941cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwZHVuayUyMHNuZWFrZXJzfGVufDF8fHx8MTc2MDY4ODE1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    colorways: "2 Colours",
    price: "8,995.00",
    label: "Sustainable Materials"
  },
  {
    image: "https://images.unsplash.com/photo-1711491559395-c82f70a68bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYWlyJTIwbWF4fGVufDF8fHx8MTc2MDczNTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Nike Air Max 270",
    category: "Men's Shoes",
    colorways: "3 Colours",
    price: "13,995.00",
    label: "Just In"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-100 overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwcnVubmluZyUyMHNob2VzfGVufDF8fHx8MTc2MDczNTY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-20">
          <div className="text-center text-white space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl">JUST DO IT</h1>
            <p className="text-xl">Step into the latest Nike sneakers</p>
            <Button size="lg" className="mt-4 bg-white text-black hover:bg-gray-200">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b bg-white sticky top-16 z-40">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>New (500)</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                Hide Filters
              </Button>
              <Button variant="outline">
                Sort By
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4">FIND A STORE</h3>
              <ul className="space-y-2 text-gray-400">
                <li>BECOME A MEMBER</li>
                <li>SIGN UP FOR EMAIL</li>
                <li>Send Us Feedback</li>
                <li>STUDENT DISCOUNTS</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">GET HELP</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">ABOUT NIKE</h3>
              <ul className="space-y-2 text-gray-400">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div className="text-gray-400">
              <p>© 2025 Nike, Inc. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
