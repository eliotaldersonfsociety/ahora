import { getProductById } from "@/app/helpers/getProductsOne";
import { getPromotionalProducts } from "@/app/helpers/getPromotions";
import ProductPageClient from "./ProductPageClient";

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  // Obtenemos producto y ofertas en paralelo
  const [product, offersRaw] = await Promise.all([
    getProductById(productId),
    getPromotionalProducts()
  ]);

  // Mapear las ofertas para que coincidan con el tipo Product
  const offers = offersRaw.map((offer: any) => ({
    ...offer,
    title: offer.name ?? "",
    compare: offer.regular_price ?? 0,
    cost_per_item: 0,
    vendor: "",
    // Agrega valores predeterminados para los campos faltantes según la definición de Product
    // Ejemplo:
    // inventory_quantity: 0,
    // sku: "",
    // etc.
  }));

  if (!product) {
    return <div className="text-center py-10">Producto no encontrado</div>;
  }

  return <ProductPageClient product={product} initialOffers={offers} />;
}