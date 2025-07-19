// app/categorias/ofertas/page.tsx

import { Suspense } from "react";
import { getProducts } from "@/app/helpers/getProducts";
import { Product } from "@/lib/products/schema";
import Ofertas from "@/components/hero/ofertas";
import { ProductGrid } from "@/components/product-grid";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";
import PaginationControls from "@/components/ui/PaginationControls";

interface ProductWithDiscount extends Product {
  tags: string;
  status: boolean;
}

// Hacer la función async y await searchParams
async function PaginaPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>; // Cambiar el tipo
}) {
  // Await searchParams antes de usarlo
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams?.page || "1";

  return (
    <>
      <Ofertas />
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

export default PaginaPage;

async function ProductsSection({ page = "1" }: { page: string }) {
  const rawProducts = await getProducts();

  const filteredProducts: ProductWithDiscount[] = rawProducts
    .filter((product: any) => {
      if (!product.compare_at_price || product.compare_at_price <= product.price) return false;
      const discount = ((product.compare_at_price - product.price) / product.compare_at_price) * 100;
      return discount >= 40;
    })
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
        basePath="/categorias/ofertas"
      />
    </>
  );
}