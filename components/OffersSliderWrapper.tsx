import { getPromotionalProducts } from "@/app/helpers/getPromotions";
import OffersSliderClient from "./oferts";

export default async function OffersSliderWrapper() {
  const offers = await getPromotionalProducts();
  return <OffersSliderClient products={offers} />;
}
