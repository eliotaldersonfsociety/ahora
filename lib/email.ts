import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendOrderConfirmationEmail({
  to,
  adminCopy,
  orderId,
  deliveryInfo,
  items,
  total,
  logoUrl,
}: {
  to: string
  adminCopy?: boolean
  orderId: string
  deliveryInfo: {
    name: string
    address: string
    city: string
    department: string
    phone: string
    email: string
  }
  items: {
    name: string
    quantity: number
    price: number
    image?: string
  }[]
  total: number
  logoUrl?: string
}) {
  const productList = items
    .map(
      (item) => `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 16px 0; display: flex; align-items: center;">
          ${
            item.image
              ? `
            <img src="${item.image}" alt="${item.name}" 
                 style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; margin-right: 12px;" />
          `
              : ""
          }
          <div>
            <p style="margin: 0; font-weight: 600; color: #111827;">${item.name}</p>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">Cantidad: ${item.quantity}</p>
          </div>
        </td>
        <td style="padding: 16px 0; text-align: right; font-weight: 600; color: #111827;">
          $${(item.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    `,
    )
    .join("")

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación de Pedido</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #8000000 0%, #8000000 100%); padding: 40px 30px; text-align: center;">
          ${
            logoUrl
              ? `
            <img src="${logoUrl}" alt="Logo" style="max-width: 120px; height: auto; margin-bottom: 20px;" />
          `
              : ""
          }
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">
            ¡Gracias por tu compra!
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">
            Tu pedido ha sido confirmado
          </p>
        </div>

        <!-- Order Info -->
        <div style="padding: 30px;">
          <div style="background-color: #f3f4f6; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
            <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
              Pedido #${orderId}
            </h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 500;">CLIENTE</p>
                <p style="margin: 4px 0 0 0; color: #111827; font-weight: 600;">${deliveryInfo.name}</p>
              </div>
              <div>
                <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 500;">TELÉFONO</p>
                <p style="margin: 4px 0 0 0; color: #111827; font-weight: 600;">${deliveryInfo.phone}</p>
              </div>
            </div>
            <div style="margin-top: 16px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 500;">DIRECCIÓN DE ENTREGA</p>
              <p style="margin: 4px 0 0 0; color: #111827; font-weight: 600;">
                ${deliveryInfo.address}<br>
                ${deliveryInfo.city}, ${deliveryInfo.department}
              </p>
            </div>
          </div>

          <!-- Products -->
          <h3 style="color: #111827; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
            Productos Pedidos
          </h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            ${productList}
          </table>

          <!-- Total -->
          <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; border: 2px solid #e5e7eb;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 18px; font-weight: 600; color: #111827;">Total a Pagar:</span>
              <span style="font-size: 24px; font-weight: 700; color: #059669;">$${total.toFixed(2)}</span>
            </div>
          </div>

          <!-- Status -->
          <div style="margin-top: 30px; padding: 20px; background-color: #ecfdf5; border-radius: 12px; border-left: 4px solid #10b981;">
            <div style="display: flex; align-items: center;">
              <div style="width: 12px; height: 12px; background-color: #10b981; border-radius: 50%; margin-right: 12px;"></div>
              <p style="margin: 0; color: #065f46; font-weight: 600;">
                Pedido Confirmado - En Proceso
              </p>
            </div>
            <p style="margin: 8px 0 0 24px; color: #047857; font-size: 14px;">
              Te contactaremos pronto para coordinar la entrega
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
            ¿Tienes preguntas sobre tu pedido?
          </p>
          <p style="margin: 0; color: #4f46e5; font-weight: 600;">
            Contáctanos: ${deliveryInfo.email}
          </p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
              © 2024 Tu Tienda. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const recipients = adminCopy ? [to, "tucorreo@tudominio.com"] : [to]

  await resend.emails.send({
    from: "Tu Tienda <onboarding@resend.dev>",
    to: recipients,
    subject: `✅ Confirmación de pedido #${orderId}`,
    html,
  })
}
