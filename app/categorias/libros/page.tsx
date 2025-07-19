// app/categorias/electronica/page.tsx

import { Suspense } from "react";
import { getProducts } from "@/app/helpers/getProducts";
import { Product } from "@/lib/products/schema";
import Libros from "@/components/hero/libros";
import HeroBanner from "@/components/hero/page";
import { ProductGrid } from "@/components/product-grid";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";
import PaginationControls from "@/components/ui/PaginationControls";

interface PageProps {
  params?: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function ProductsSection({ page = "1" }: { page: string }) {
  const rawProducts = await getProducts();

  const filteredProducts: Product[] = rawProducts
    .filter((product: any) => product.category === "libros")
    .map((product: any) => ({
      ...product,
      tags: Array.isArray(product.tags) ? product.tags.join(', ') : product.tags,
      status: Boolean(product.status),
    }));

  const currentPage = parseInt(page, 10) || 1;
  const pageSize = 20;
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <ProductGrid products={paginatedProducts} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/categorias/libros"
      />
    </>
  );
}

export default async function PaginaPage({ searchParams }: PageProps) {
    // Await searchParams antes de usarlo
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams?.page as string || "1";

  return (
    <>
      <Libros />
      <div className="w-full bg-gray-200 min-h-screen">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-4 p-4 md:p-8">
          <Suspense fallback={<ProductSkeletonGrid />}>
            <ProductsSection page={page} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
