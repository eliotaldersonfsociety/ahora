import db from "@/lib/db/productos/db";
import { productsTable } from "@/lib/products/schema";
import { orderItemsTable } from "@/lib/ordenes/schema";
import { eq } from "drizzle-orm";

export async function getTotalCostOfSoldItems(): Promise<number> {
  const allOrderItems = await db.select().from(orderItemsTable);

  let totalCost = 0;

  for (const item of allOrderItems) {
    const productId = item.productId;

    const [product] = await db
      .select({ cost: productsTable.cost_per_item })
      .from(productsTable)
      .where(eq(productsTable.id, productId));

    if (product?.cost !== undefined && product?.cost !== null) {
      totalCost += product.cost * item.quantity;
    }
  }

  return totalCost;
}
