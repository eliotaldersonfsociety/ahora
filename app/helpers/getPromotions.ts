import db from '@/lib/db/productos/db';
import { productsTable } from "@/lib/products/schema";
import { desc } from 'drizzle-orm';

function parseMaybeJSONOrCSV(value: any): string[] {
  if (!value || value === "" || value === "null") return [];
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return typeof value === "string" ? value.split(",").map((v) => v.trim()) : [];
  }
}

function getValidImages(images: any): string[] {
  const imgs = parseMaybeJSONOrCSV(images);
  if (!imgs.length || !imgs[0]) {
    return ["/no-image.png"];
  }
  return imgs;
}

export async function getPromotionalProducts() {
  try {
    const products = await db.select().from(productsTable);
    console.log("📦 Productos crudos:", products);

    const promocionales = products.filter((p: any) =>
      parseFloat(p.compare_at_price || 0) > parseFloat(p.price || 0)
    );

    console.log("🔥 Productos en promoción:", promocionales);

    return promocionales.map((p: any) => ({
      id: p.id,
      name: p.title,
      price: parseFloat(p.price),
      regular_price: parseFloat(p.compare_at_price || p.price),
      sale_price: parseFloat(p.price),
      images: getValidImages(p.images),
      description: p.description || "",
    }));
  } catch (error) {
    console.error("❌ Error al obtener productos en promoción:", error);
    return [];
  }
}
