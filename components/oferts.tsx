"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCartStore } from "@/lib/cartStore";

type Product = {
  id: number;
  name: string;
  price: number;
  regular_price: number;
  sale_price: number;
  images: string[];
  description?: string;
};

const externalImageLoader = ({ src }: { src: string }) => src;

export default function OffersSlider({ products }: { products: Product[] }) {
  const { addToCart } = useCartStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(
    (dir: "left" | "right") => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const scrollAmount = 320;

      if (dir === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentIndex((prev) => Math.min(filteredProducts.length - 1, prev + 1));
      }
    },
    []
  );

  const filteredProducts = products.filter((p) => {
    const discount = ((p.regular_price - p.sale_price) / p.regular_price) * 100;
    return discount > 40;
  });

  return (
    <div className="w-full bg-gray-200 relative">
      <div className="w-full max-w-[1150px] mx-auto flex flex-col gap-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
        </div>

        <div className="relative">
          {/* Botón Izquierdo */}
          <Button
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
            variant="outline"
            size="icon"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Carrusel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x pb-6 scrollbar-hide"
          >
            {/* Card promocional */}
            <Card className="min-w-[280px] max-w-[280px] h-[300px] flex flex-col justify-center items-center snap-start bg-red-900 text-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold mb-4">Ofertas del Día</h3>
                <p className="mb-6">Solo lo mejor con +40% de descuento</p>
                <Link href="/pages/categorias/promociones">
                  <Badge variant="secondary" className="text-lg py-1 px-4">
                    Ver más
                  </Badge>
                </Link>
              </CardContent>
            </Card>

            {filteredProducts.map((p) => {
              const discount = Math.round(
                ((p.regular_price - p.sale_price) / p.regular_price) * 100
              );

              return (
                <Card
                  key={p.id}
                  className="min-w-[220px] max-w-[220px] h-[300px] flex flex-col justify-between snap-start hover:shadow-md"
                >
                  <CardContent className="p-3 pt-2 pb-1 flex-grow flex flex-col">
                    <div className="relative w-full mb-2">
                      <Badge className="absolute top-2 right-2 bg-red-500 z-10">
                        -{discount}%
                      </Badge>
                      <Image
                        loader={externalImageLoader}
                        src={p.images[0] || "/placeholder.svg"}
                        alt={p.name}
                        width={300}
                        height={100}
                        className="w-full h-[100px] object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm line-clamp-2 h-[38px]">
                      {p.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {p.description || "No hay descripción"}
                    </p>
                    <div className="mt-0.5 mb-1">
                      <span className="text-base font-bold text-primary">
                        ${p.sale_price}
                      </span>
                      <span className="text-xs line-through ml-2 text-red-500">
                        ${p.regular_price}
                      </span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-2 pt-0">
                    <Button
                      className="w-full gap-2 h-8 text-xs bg-red-800 hover:bg-red-900 text-white"
                      onClick={() =>
                        addToCart({
                          id: p.id,
                          name: p.name,
                          price: p.sale_price,
                          quantity: 1,
                          image: p.images[0],
                        })
                      }
                    >
                      <ShoppingCart className="h-3 w-3" />
                      Añadir
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Botón Derecho */}
          <Button
            onClick={() => scroll("right")}
            disabled={currentIndex >= filteredProducts.length - 1}
            variant="outline"
            size="icon"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
