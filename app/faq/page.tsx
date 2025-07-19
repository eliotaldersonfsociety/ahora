import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Es seguro el pago en esta plataforma?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Sí, todos nuestros servicios son contra entrega, pagas cuando recibas el producto en la puerta de tu casa.
            No necesitas proporcionar información bancaria por adelantado, lo que garantiza tu seguridad financiera.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Puedo hacer cambios en mi pedido después de realizarlo?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Depende del artículo. Para algunos productos es posible realizar modificaciones dentro de las primeras 24
            horas después de la compra. Le recomendamos contactar a nuestro servicio al cliente lo antes posible si
            necesita hacer algún cambio en su pedido.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Cuál es la política de garantía?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Todos nuestros productos cuentan con 7 días de garantía desde la fecha de entrega. Si su producto presenta
            algún defecto de fábrica o no funciona correctamente, puede solicitar un reemplazo o devolución dentro de
            este período. Para hacer efectiva la garantía, deberá presentar su comprobante de compra y el producto en su
            empaque original.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Cuánto tiempo tarda la entrega?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Los tiempos de entrega varían según tu ubicación. En zonas urbanas principales, entregamos entre 24-48
            horas. Para zonas rurales o más alejadas, el tiempo puede extenderse de 3 a 5 días hábiles. Te notificaremos
            el tiempo estimado al confirmar tu pedido.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿A qué ciudades hacen entregas?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Realizamos entregas a nivel nacional. Cubrimos todas las principales ciudades y la mayoría de municipios. Al
            momento de realizar tu pedido, podrás verificar si tu dirección está dentro de nuestra zona de cobertura. Si
            tienes dudas sobre tu ubicación, contáctanos para confirmarlo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Tienen costo los envíos?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Los costos de envío varían según la distancia y el peso del producto. En muchas ciudades principales
            ofrecemos envío gratuito para compras superiores a $50.000. El costo exacto del envío se calculará
            automáticamente al ingresar tu dirección de entrega.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Qué pasa si no estoy en casa al momento de la entrega?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Nuestro repartidor intentará contactarte antes de llegar. Si no estás disponible, reprogramaremos la entrega
            para otro momento conveniente sin costo adicional. También puedes autorizar la entrega con otra persona
            mayor de edad en tu dirección.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Cómo puedo contactar al servicio al cliente?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Puedes contactarnos a través de WhatsApp, llamada telefónica o correo electrónico. Nuestro horario de
            atención es de lunes a sábado de 8:00 AM a 6:00 PM. También puedes usar el chat en vivo disponible en
            nuestro sitio web durante el horario de atención.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Qué hago si el producto llega dañado?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Si recibes un producto dañado, no lo aceptes y comunícate inmediatamente con nosotros. Si ya lo recibiste,
            tienes 24 horas para reportar el daño con fotos del producto. Procederemos con el reemplazo inmediato sin
            costo adicional para ti.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10" className="border rounded-lg px-4">
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            ¿Puedo devolver un producto si no me gusta?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-4">
            Sí, aceptamos devoluciones dentro de los primeros 7 días después de la entrega, siempre que el producto esté
            en perfectas condiciones, sin usar y en su empaque original. Algunos productos como ropa interior, productos
            de higiene personal o artículos personalizados no son elegibles para devolución por razones de higiene y
            seguridad.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
