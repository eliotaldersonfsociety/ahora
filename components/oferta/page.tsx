"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  regular_price: number;
  sale_price: number;
  images: string[];
  description?: string;
}

interface OfertClientProps {
  products: Product[];
}

export default function OfertClient({ products }: OfertClientProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(2);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 320; // Ajusta según el tamaño de tus tarjetas
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 2 : 3);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Scroll automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 320;

        // Detecta si estamos cerca del final para reiniciar
        const isAtEnd =
          container.scrollLeft + container.offsetWidth >= container.scrollWidth - scrollAmount;

        container.scrollBy({
          left: isAtEnd ? -container.scrollLeft : scrollAmount,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (products.length === 0) {
    return <p className="text-center text-lg font-semibold">No hay ofertas disponibles.</p>;
  }

  return (
    <div className="bg-gray-100 w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Ofertas del Día</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => scroll("left")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scroll("right")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div
              className="flex gap-2 overflow-x-auto snap-x scrollbar-hide"
              ref={scrollContainerRef}
            >
              {products.map((product) => {
                const discount = Math.round(
                  ((product.regular_price - product.sale_price) / product.regular_price) * 100
                );

                return (
                  <div
                    key={product.id}
                    className="min-w-[140px] max-w-[160px] mx-2 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col snap-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-24 w-full bg-gray-100">
                      <Image
                        loader={({ src }) => src}
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        {discount > 0 && (
                          <span className="px-2 py-1 text-xs font-semibold rounded bg-red-500 text-white">
                            -{discount}%
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                      <h2 className="font-semibold text-sm mb-1 line-clamp-1">
                        {product.name}
                      </h2>
                      <p className="text-gray-500 text-xs mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-auto flex justify-between items-center">
                        <p className="font-bold text-sm">${product.sale_price.toFixed(2)}</p>
                        <Link href={`/product/${product.id}`}>
                          <button className="bg-red-800 hover:bg-red-900 transition-colors text-white px-2 py-1 rounded text-xs">
                            Ver
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
