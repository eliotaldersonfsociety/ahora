'use server';

import db from '@/lib/db/productos/db';
import { ordersTable, orderItemsTable } from '@/lib/ordenes/schema';
import { productsTable } from '@/lib/products/schema';
import { nanoid } from 'nanoid';
import { eq } from 'drizzle-orm';
import type { CartItem, DeliveryInfo, ShippingService } from '@/types/productos';
import { sendOrderConfirmationEmail } from '@/lib/email';

interface SaveOrderOptions {
  items: CartItem[];
  deliveryInfo: DeliveryInfo;
  paymentMethod: string;
  shippingMethod: string;
  selectedService: ShippingService | null;
  total: number;
  status: string;
}

export async function saveOrderAction({
  items,
  deliveryInfo,
  paymentMethod,
  shippingMethod,
  selectedService,
  total,
  status,
}: SaveOrderOptions): Promise<{ orderId: string }> {
  const orderId = nanoid(12);

  // Guardar la orden principal
  await db.insert(ordersTable).values({
    id: orderId,
    name: deliveryInfo.name,
    email: deliveryInfo.email,
    phone: deliveryInfo.phone,
    address: deliveryInfo.address,
    city: deliveryInfo.city,
    department: deliveryInfo.department,
    paymentMethod,
    shippingMethod,
    shippingServiceName: selectedService?.name || null,
    shippingServiceBalance: selectedService?.balance || null,
    total,
    status,
    createdAt: new Date().toISOString(),
  });

  console.log('✅ Orden guardada en DB:', orderId);

  for (const item of items) {
    const productId = Number(item.id);
    const quantityToDeduct = item.quantity;

    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, productId));

    if (!product) {
      console.error(`❌ Producto con ID ${productId} no encontrado.`);
      throw new Error(`Producto con ID ${productId} no encontrado.`);
    }

    if (product.quantity < quantityToDeduct) {
      console.error(`❌ Stock insuficiente para "${item.name}".`);
      throw new Error(`Stock insuficiente para "${item.name}".`);
    }

    await db
      .update(productsTable)
      .set({ quantity: product.quantity - quantityToDeduct })
      .where(eq(productsTable.id, productId));

    await db.insert(orderItemsTable).values({
      orderId,
      productId,
      name: item.name,
      price: Number(item.price),
      quantity: item.quantity,
      image: typeof item.image === 'string' ? item.image : '',
      color: item.color || '',
      size: item.size || '',
      sizeRange: item.sizeRange || '',
    });

    console.log(`✅ Producto ${item.name} procesado.`);
  }

  try {
    console.log('📧 Enviando correo de confirmación a:', deliveryInfo.email);
    await sendOrderConfirmationEmail({
      to: deliveryInfo.email,
      orderId,
      deliveryInfo,
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: typeof item.image === 'string'
          ? item.image
          : Array.isArray(item.image)
            ? item.image[0]
            : undefined,
      })),
      total,
    });
    console.log('✅ Correo de confirmación enviado con éxito.');
  } catch (error) {
    console.error('❌ Error al enviar el correo de confirmación:', error);
  }

  return { orderId };
}
