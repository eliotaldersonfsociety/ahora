// components/hero/OfertServer.tsx
import { getPromotionalProducts } from "@/app/helpers/getPromotions";
import OfertClient from "./page";

export default async function OfertServer() {
  const products = await getPromotionalProducts();
  return <OfertClient products={products} />;
}
