"use client";

import { useEffect } from "react";
import ProductDisplay from "./product-display";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Product } from "@/types/productos";

interface ProductPageClientProps {
  product: Product;
  initialOffers?: Product[];  // Nueva prop
}

export default function ProductPageClient({ 
  product, 
  initialOffers = []  // Valor por defecto array vacío
}: ProductPageClientProps) {
  useEffect(() => {
    console.log("🔄 Producto recibido como prop:", product);
    console.log("🎁 Ofertas recibidas:", initialOffers);  // Log para debug
  }, [product, initialOffers]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Skeleton height={50} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Skeleton height={400} />
            <Skeleton height={100} />
          </div>
          <div className="flex flex-col space-y-6">
            <Skeleton height={30} width={200} />
            <Skeleton height={20} width={150} />
            <Skeleton height={50} />
            <Skeleton height={30} width={100} />
            <Skeleton height={20} width={150} />
            <Skeleton height={50} />
            <Skeleton height={50} />
          </div>
        </div>
      </div>
    );
  }

  return <ProductDisplay product={product} initialOffers={initialOffers} />;
}