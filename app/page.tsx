// app/paginxxa/page.tsx
import { getProducts } from "@/app/helpers/getProducts";
import HeroBanner from "@/components/hero/page";
import { ProductGrid } from "@/components/product-grid";
import { Suspense } from "react";
import FeatureCards from "@/components/FeatureCards";
import { Product } from '@/lib/products/schema';
import OffersSliderWrapper from "@/components/OffersSliderWrapper";
import PromoCards from "@/components/promo";
import CategoryCards from "@/components/CategoryCards";
import Banner from "./banner";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";

async function ProductsSection() {
  const rawProducts = await getProducts();
  const products: Product[] = rawProducts.map((product: any) => ({
  ...product,
  tags: Array.isArray(product.tags) ? product.tags.join(', ') : product.tags,
  status: Boolean(product.status), // ✅ Conversión explícita
}));

  const limitedProducts = products.slice(0, 20); // 👈 Limita a 20


  return <ProductGrid products={limitedProducts} />;
}

export default async function PaginaPage() {

  return (
    <>
      <HeroBanner />
      <FeatureCards/>
      <OffersSliderWrapper />
      <CategoryCards />
      <div className="w-full bg-gray-200 min-h-screen">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-4 p-4 md:p-8">
      <Suspense fallback={<ProductSkeletonGrid />}>
        <ProductsSection />
      </Suspense>
        </div>
        </div>
        <PromoCards />
        <Banner/>
    </>
  );
}
