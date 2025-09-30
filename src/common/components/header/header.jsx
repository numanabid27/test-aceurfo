"use client";
import { Menu, X, Calculator } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import logo from "@/common/assets/img/logo.png"
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logo} width={180} height={180} alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              About
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Blogs
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Pricing
            </Link>
           
            <Link href="/contact" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
           
            <button className="bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#00A63E] transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              About
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Blogs
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Pricing
            </Link>
           
            <Link href="/contact" className="text-gray-700 hover:text-[#00A63E] font-medium transition-colors">
              Contact
            </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
               
                <button className="bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#00A63E] transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}