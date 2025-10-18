import { Search, ShoppingBag, Heart, Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <svg className="h-8 w-16" viewBox="0 0 1000 356.39" fill="currentColor">
              <path d="M232.11 357.36L0 292.87l21.24-21.51 232.86 47.69L1000 90.75l-10.26 13.29L232.11 357.36z"/>
            </svg>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-gray-600 transition-colors">New & Featured</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Men</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Women</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Kids</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Sale</a>
              <a href="#" className="hover:text-gray-600 transition-colors">SNKRS</a>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
              <Search className="h-5 w-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent border-none outline-none ml-2 w-full"
              />
            </div>

            {/* Icons */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
