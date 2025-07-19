import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src="/tsn.webp?height=80&width=200" alt="Colombia Importadora Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tienda Texas</h1>
          <p className="text-lg text-gray-600 mb-4">Términos y Condiciones de Servicio</p>
          <Badge variant="outline" className="text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            Última actualización: Enero 2025
          </Badge>
        </div>

        {/* Main Content */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Términos y Condiciones de Servicio</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            {/* Sección 1: Información General */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información General</h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Teinda Texas</strong> es una empresa líder en la venta de artículos diversos por
                  internet, ubicada en EEUU. Ofrecemos una amplia gama de productos de calidad con envíos a todo el
                  territorio nacional.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Los presentes términos y condiciones regulan el uso de nuestro sitio web y la compra de productos a
                través de nuestra plataforma de comercio electrónico.
              </p>
            </section>

            <Separator />

            {/* Sección 2: Aceptación de Términos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Aceptación de Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al acceder y utilizar nuestro sitio web, usted acepta estar sujeto a estos términos y condiciones. Si no
                está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>El uso de nuestro sitio web implica la aceptación total de estos términos</li>
                <li>Los términos son aplicables a todos los usuarios y visitantes</li>
                <li>Nos reservamos el derecho de modificar estos términos en cualquier momento</li>
              </ul>
            </section>

            <Separator />

            {/* Sección 3: Productos y Servicios */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Productos y Servicios</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tienda Texas ofrece una amplia variedad de productos a través de su plataforma de comercio
                electrónico:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Nuestros Productos</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Artículos diversos de calidad</li>
                    <li>• Productos importados</li>
                    <li>• Amplio catálogo disponible</li>
                    <li>• Nuevos productos regularmente</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Disponibilidad</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Sujeto a disponibilidad de inventario</li>
                    <li>• Precios pueden variar sin previo aviso</li>
                    <li>• Imágenes son referenciales</li>
                    <li>• Especificaciones pueden cambiar</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 4: Precios y Pagos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Precios y Forma de Pago</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-green-800 font-medium mb-2">💰 Pago Contra Entrega</p>
                <p className="text-green-700 text-sm">
                  En Tienda Texas manejamos exclusivamente el sistema de <strong>pago contra entrega</strong>.
                  Usted paga únicamente cuando recibe su producto en perfecto estado.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">¿Cómo Funciona el Pago Contra Entrega?</h3>
                  <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                    <li>Realiza tu pedido sin necesidad de pago anticipado</li>
                    <li>Nuestro equipo confirma tu pedido y procesa el envío</li>
                    <li>Recibes el producto en la dirección indicada</li>
                    <li>Verificas que el producto esté en perfecto estado</li>
                    <li>Realizas el pago al momento de la entrega</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">Formas de Pago Aceptadas:</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm">
                      <li>Efectivo</li>
                      <li>Transferencia bancaria (Nequi, Daviplata)</li>
                      <li>Tarjeta débito (con datafono)</li>
                      <li>Tarjeta crédito (con datafono)</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Ventajas del Sistema:</h3>
                    <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                      <li>✅ Cero riesgo para el cliente</li>
                      <li>✅ Verificas el producto antes de pagar</li>
                      <li>✅ No necesitas tarjetas de crédito</li>
                      <li>✅ Mayor confianza en tu compra</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Condiciones Importantes:</h3>
                  <ul className="list-disc list-inside text-orange-700 space-y-1 text-sm">
                    <li>Los precios están expresados en dolares (USD)</li>
                    <li>Los precios incluyen IVA cuando aplique</li>
                    <li>El costo de envío se informa al momento del pedido</li>
                    <li>Los precios pueden cambiar sin previo aviso</li>
                    <li>Si no se encuentra en casa, se reagenda la entrega</li>
                    <li>Máximo 2 intentos de entrega por pedido</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 5: Envíos y Entregas */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Envíos y Entregas</h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 font-medium">
                  Realizamos envíos a todo el territorio EEUU con los mejores tiempos de entrega.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Cobertura de Envíos:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Todas las ciudades principales</li>
                    <li>Municipios y zonas rurales</li>
                    <li>Islas (sujeto a disponibilidad)</li>
                    <li>Zonas especiales con recargo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Tiempos de Entrega:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ciudades principales: 1-3 días hábiles</li>
                    <li>Otras ciudades: 3-5 días hábiles</li>
                    <li>Zonas rurales: 5-8 días hábiles</li>
                    <li>Sujeto a disponibilidad del producto</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Nota:</strong> Los tiempos de entrega son estimados y pueden variar por factores externos como
                  condiciones climáticas, días festivos o situaciones de fuerza mayor.
                </p>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Proceso de Entrega y Pago:</h4>
                <ol className="list-decimal list-inside text-green-700 text-sm space-y-1">
                  <li>Nuestro mensajero se comunica antes de la entrega</li>
                  <li>Se presenta en la dirección indicada con el producto</li>
                  <li>Usted verifica que el producto esté en perfecto estado</li>
                  <li>Realiza el pago por el método de su preferencia</li>
                  <li>Recibe su factura de compra</li>
                </ol>
              </div>
            </section>

            <Separator />

            {/* Sección 6: Devoluciones y Garantías */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Devoluciones y Garantías</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Política de Devoluciones:</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• Derecho de retracto: 5 días calendario desde la entrega</li>
                    <li>• Productos deben estar en perfecto estado</li>
                    <li>• Embalaje original y etiquetas intactas</li>
                    <li>• Algunos productos no admiten devolución por razones de higiene</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Garantías:</h3>
                  <ul className="text-purple-700 space-y-1">
                    <li>• Garantía legal de conformidad</li>
                    <li>• Garantía del fabricante cuando aplique</li>
                    <li>• Productos defectuosos: cambio o reembolso</li>
                    <li>• Proceso de garantía según normativa EEUU</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 7: Responsabilidades del Usuario */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Responsabilidades del Usuario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al utilizar nuestros servicios, el usuario se compromete a:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Uso Apropiado:</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Proporcionar información veraz y actualizada</li>
                    <li>Usar el sitio web de manera legal y ética</li>
                    <li>No realizar actividades fraudulentas</li>
                    <li>Respetar los derechos de propiedad intelectual</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Cuenta de Usuario:</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Mantener la confidencialidad de credenciales</li>
                    <li>Notificar uso no autorizado de la cuenta</li>
                    <li>Actualizar información de contacto</li>
                    <li>Ser responsable de todas las actividades en su cuenta</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 8: Limitaciones de Responsabilidad */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitaciones de Responsabilidad</h2>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-800 font-medium mb-2">Importante:</p>
                <p className="text-red-700 text-sm">
                  Tienda Texas no será responsable por daños indirectos, incidentales o consecuenciales que
                  puedan surgir del uso de nuestros productos o servicios.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Interrupciones del servicio por mantenimiento o causas técnicas</li>
                <li>Pérdida de datos o información</li>
                <li>Daños causados por terceros</li>
                <li>Situaciones de fuerza mayor</li>
                <li>Uso inadecuado de los productos por parte del usuario</li>
              </ul>
            </section>

            <Separator />

            {/* Sección 9: Privacidad y Protección de Datos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacidad y Protección de Datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tienda Texas se compromete a proteger la privacidad y los datos personales de nuestros usuarios
                de acuerdo con la Ley 1581 de 2012 y demás normativas aplicables en EEUU.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-2">Tratamiento de Datos:</h3>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Recolección de datos necesarios para la prestación del servicio</li>
                  <li>• Uso de datos para procesamiento de pedidos y comunicación</li>
                  <li>• No compartimos datos con terceros sin autorización</li>
                  <li>• Derecho de acceso, rectificación y cancelación de datos</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Sección 10: Modificaciones */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modificaciones de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tienda Texas se reserva el derecho de modificar estos términos y condiciones en cualquier
                momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Recomendación:</strong> Revise periódicamente estos términos para mantenerse informado sobre
                  cualquier cambio que pueda afectar sus derechos y obligaciones.
                </p>
              </div>
            </section>

            <Separator />

            {/* Sección 11: Ley Aplicable */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos términos y condiciones se rigen por las leyes de EEUU. Cualquier disputa será
                resuelta por los tribunales competentes de EEUU.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  En caso de controversia, las partes se someterán a la jurisdicción de los jueces y tribunales de la
                  ciudad donde se encuentre domiciliada Tienda Texas.
                </p>
              </div>
            </section>

            <Separator />

            {/* Sección 12: Contacto */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Información de Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para cualquier consulta, reclamo o solicitud relacionada con estos términos y condiciones, puede
                contactarnos a través de los siguientes medios:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 mb-1">Email</h3>
                  <p className="text-blue-700 text-sm">info@tiendatexas.com</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 mb-1">Teléfono</h3>
                  <p className="text-green-700 text-sm">+12146295109</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-800 mb-1">Ubicación</h3>
                  <p className="text-purple-700 text-sm">Texas, EEUU</p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">© 2025 Tienda Texas. Todos los derechos reservados.</p>
              <p className="text-gray-500 text-xs mt-2">
                Estos términos y condiciones fueron actualizados por última vez en enero de 2025.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
