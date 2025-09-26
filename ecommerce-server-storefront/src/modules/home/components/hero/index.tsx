"use client"

import { Button, Heading, Input } from "@medusajs/ui"
import { Search, Tv, ShoppingBag, Utensils, Heart } from "lucide-react" // ✅ icons for classification

const Hero = () => {
  return (
    <div className="relative w-full border-b border-ui-border-base bg-white">
      {/* Search Bar */}
      <div className="bg-blue-600 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex-1 relative">
            <Input
              placeholder="Search for products, brands and categories"
              className="pl-10 pr-4 py-2 rounded-lg w-full"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
            Search
          </Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-8">
        {/* Left Classification */}
        <div className="bg-gray-50 border rounded-lg p-4 space-y-4 shadow-sm">
          <Heading level="h3" className="text-gray-700 text-lg font-semibold">
            Categories
          </Heading>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <Tv size={18} /> Electronics
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <ShoppingBag size={18} /> Fashion
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <Utensils size={18} /> Groceries
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <Heart size={18} /> Health & Beauty
            </li>
          </ul>
        </div>

        {/* Main Banner & Ads */}
        <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Banner */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-md">
            <img
              src="/banner" 
              alt="Main Banner"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Heading
                level="h2"
                className="text-white text-3xl font-bold drop-shadow-lg"
              >
                Big Sale - Up to 50% Off!
              </Heading>
            </div>
          </div>

          {/* Side Banners (1 & 2) */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="/banner"
                alt="Promo 1"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white font-semibold">Promo 1</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src="/banner"
                alt="Promo 2"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white font-semibold">Promo 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
