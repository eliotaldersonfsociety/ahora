"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface NavigationMenuProps {
  mobileMenuOpen: boolean;
  isLoggedIn: boolean;
}

export default function NavigationMenu({
  mobileMenuOpen,
  isLoggedIn,
}: NavigationMenuProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const toggleDropdown = () => {
    if (isMobile) {
      setShowDropdown((prev) => !prev);
    }
  };

  return (
    <nav
      className={cn(
        "pb-3 md:flex md:justify-center items-center space-x-6 text-sm font-medium",
        mobileMenuOpen ? "block" : "hidden md:flex"
      )}
    >
      <Link href="/" className="block py-2 md:py-0">
        Home
      </Link>

      {/* Categorías Dropdown */}
      <div
        className="relative inline-block text-left"
        onMouseEnter={() => !isMobile && setShowDropdown(true)}
        onMouseLeave={() => !isMobile && setShowDropdown(false)}
      >
        <button
          onClick={toggleDropdown}
          className="block py-2 md:py-0"
        >
          Categorías
        </button>

        {showDropdown && (
          <div className="absolute z-20 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg max-h-[400px] overflow-y-auto">
            {[
              "automotriz",
              "motos",
              "libros",
              "moda",
              "hogaryjardin",
              "belleza",
              "salud",
              "mascotas",
              "celulares",
              "computadoras",
              "gamer",
              "deportes",
              "electronica",
              "alimentos",
              "juguetes",
              "arte",
            ].map((cat) => (
              <Link
                key={cat}
                href={`/categorias/${cat}`}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700 capitalize"
                onClick={() => setShowDropdown(false)}
              >
                {cat.replace(/([a-z])([A-Z])/g, "$1 $2").replaceAll("-", " ")}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link href="/categorias/ofertas" className="block py-2 md:py-0 relative">
        Ofertas
        <Badge variant="outline" className="ml-1 bg-red-800 text-white">
          -40%
        </Badge>
      </Link>

      {/* Mobile login/register */}
      <div className="md:hidden flex flex-col space-y-2 pt-2 border-t mt-2">
        {!isLoggedIn && (
          <>
            <Link href="/login" className="block py-1">
              Login
            </Link>
            <Link href="/register" className="block py-1">
              Crear cuenta
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
