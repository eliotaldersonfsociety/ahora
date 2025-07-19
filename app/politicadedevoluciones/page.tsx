import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Calendar, RotateCcw, Package, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function ReturnsPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src="/tsn.webp" alt="Colombia Importadora Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tienda Texas</h1>
          <p className="text-lg text-gray-600 mb-4">Política de Devoluciones y Cambios</p>
          <Badge variant="outline" className="text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            Última actualización: Enero 2025
          </Badge>
        </div>

        {/* Main Content */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <RotateCcw className="w-6 h-6 mr-2" />
              Política de Devoluciones y Cambios
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            {/* Introducción */}
            <section>
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-2" />
                  <h2 className="text-xl font-semibold text-orange-800">Su Satisfacción es Nuestra Prioridad</h2>
                </div>
                <p className="text-orange-700 leading-relaxed">
                  En <strong>Tienda Texas</strong> trabajamos con un modelo de dropshipping, lo que significa
                  que nuestros productos son enviados directamente desde nuestros proveedores especializados hasta su
                  hogar. Esta política explica claramente sus derechos y nuestros procesos de devolución.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">¿Qué es Dropshipping?</h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Es un modelo de negocio donde Tienda Texas actúa como intermediario entre usted y nuestros
                  proveedores confiables. Cuando realiza un pedido, coordinamos directamente con el proveedor para que
                  le envíe el producto, garantizando calidad y mejores precios.
                </p>
              </div>
            </section>

            <Separator />

            {/* Sección 1: Derecho de Retracto */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Derecho de Retracto Legal</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <Package className="w-5 h-5 text-green-600 mr-2" />
                  <p className="text-green-800 font-medium">Protección Legal Garantizada</p>
                </div>
                <p className="text-green-700 text-sm">
                  De acuerdo con la normativa de EEUU de protección al consumidor, usted tiene derecho a devolver
                  productos sin necesidad de justificación.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">⏰ Plazo de Retracto:</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>
                      • <strong>5 días calendario</strong> desde la entrega
                    </li>
                    <li>• Se cuenta desde que recibe físicamente el producto</li>
                    <li>• Incluye fines de semana y festivos</li>
                    <li>• No requiere justificación</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">📋 Condiciones Básicas:</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Producto en perfecto estado</li>
                    <li>• Embalaje original intacto</li>
                    <li>• Etiquetas y sellos sin remover</li>
                    <li>• Accesorios y manuales incluidos</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 2: Productos No Retornables */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Productos No Retornables</h2>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  <p className="text-red-800 font-medium">Excepciones por Higiene y Seguridad</p>
                </div>
                <p className="text-red-700 text-sm">
                  Por razones de higiene, seguridad y normativas sanitarias, algunos productos no pueden ser devueltos
                  una vez entregados.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">🚫 No Retornables:</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Productos de higiene personal</li>
                    <li>• Ropa interior y trajes de baño</li>
                    <li>• Productos alimenticios perecederos</li>
                    <li>• Medicamentos y suplementos</li>
                    <li>• Productos personalizados</li>
                    <li>• Software y productos digitales</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-2">✅ Excepciones:</h3>
                  <ul className="text-teal-700 text-sm space-y-1">
                    <li>• Productos defectuosos de fábrica</li>
                    <li>• Productos dañados en el envío</li>
                    <li>• Productos diferentes a los pedidos</li>
                    <li>• Garantía del fabricante aplicable</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 3: Proceso de Devolución */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Proceso de Devolución Paso a Paso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro proceso está diseñado para ser simple y transparente, considerando que trabajamos con
                proveedores especializados:
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">📞 Paso 1: Contacto Inicial</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Cómo Contactarnos:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• WhatsApp: +12146295109</li>
                        <li>• Email: devoluciones@tiendatexas.com</li>
                        <li>• Teléfono: +12146295109</li>
                        <li>• Horario: Lunes a Viernes 8AM - 6PM</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 mb-2">Información Requerida:</h4>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• Número de pedido</li>
                        <li>• Motivo de la devolución</li>
                        <li>• Fotos del producto (si aplica)</li>
                        <li>• Datos de contacto actualizados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">🔍 Paso 2: Evaluación y Autorización</h3>
                  <div className="space-y-2">
                    <p className="text-green-700 text-sm">
                      <strong>Tiempo de respuesta:</strong> 24-48 horas hábiles
                    </p>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Verificamos que el producto califique para devolución</li>
                      <li>• Coordinamos con nuestro proveedor especializado</li>
                      <li>• Le enviamos la autorización de devolución</li>
                      <li>• Proporcionamos instrucciones específicas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">📦 Paso 3: Recolección del Producto</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Opciones de Recolección:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>
                          • <strong>Recolección gratuita:</strong> En ciudades principales
                        </li>
                        <li>
                          • <strong>Punto de entrega:</strong> Oficinas de mensajería
                        </li>
                        <li>
                          • <strong>Envío por cuenta propia:</strong> Con guía prepagada
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 mb-2">Empaque Requerido:</h4>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Caja o empaque original</li>
                        <li>• Todos los accesorios incluidos</li>
                        <li>• Factura o comprobante</li>
                        <li>• Autorización de devolución impresa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">⚖️ Paso 4: Inspección y Procesamiento</h3>
                  <div className="space-y-2">
                    <p className="text-orange-700 text-sm">
                      <strong>Tiempo de procesamiento:</strong> 5-10 días hábiles (incluye coordinación con proveedor)
                    </p>
                    <ul className="text-orange-600 text-sm space-y-1">
                      <li>• El proveedor inspecciona el producto devuelto</li>
                      <li>• Verificamos que cumple las condiciones de devolución</li>
                      <li>• Procesamos el reembolso o cambio autorizado</li>
                      <li>• Le notificamos el resultado de la inspección</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-3">💰 Paso 5: Reembolso o Cambio</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Opciones Disponibles:</h4>
                      <ul className="text-teal-600 text-sm space-y-1">
                        <li>
                          • <strong>Reembolso completo</strong> del valor pagado
                        </li>
                        <li>
                          • <strong>Cambio por otro producto</strong> de igual valor
                        </li>
                        <li>
                          • <strong>Nota crédito</strong> para futuras compras
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-teal-700 mb-2">Tiempos de Reembolso:</h4>
                      <ul className="text-teal-600 text-sm space-y-1">
                        <li>• Efectivo: Inmediato (si pagó en efectivo)</li>
                        <li>• Transferencia: 1-3 días hábiles</li>
                        <li>• Tarjeta: 5-15 días hábiles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 4: Productos Defectuosos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Productos Defectuosos o Dañados</h2>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  <p className="text-red-800 font-medium">Proceso Prioritario</p>
                </div>
                <p className="text-red-700 text-sm">
                  Si recibe un producto defectuoso, dañado o diferente al pedido, tiene derecho a cambio inmediato o
                  reembolso completo, incluyendo costos de envío.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">🚨 Reporte Inmediato:</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Contacte inmediatamente al recibir el producto</li>
                    <li>• Tome fotos detalladas del defecto o daño</li>
                    <li>• No use el producto si presenta defectos</li>
                    <li>• Conserve todo el empaque original</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">⚡ Proceso Acelerado:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Respuesta en menos de 24 horas</li>
                    <li>• Recolección gratuita garantizada</li>
                    <li>• Reembolso completo + costos de envío</li>
                    <li>• Cambio prioritario si prefiere</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 5: Costos y Responsabilidades */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Costos de Devolución</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✅ Devoluciones Gratuitas:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Productos defectuosos o dañados</li>
                    <li>• Error en el pedido (nuestro error)</li>
                    <li>• Producto diferente al solicitado</li>
                    <li>• Garantía del fabricante</li>
                    <li>• Ciudades principales (Bogotá, Medellín, Cali)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">💰 Costos a Cargo del Cliente:</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Cambio de opinión (derecho de retracto)</li>
                    <li>• Ciudades intermedias y municipios</li>
                    <li>• Costo aproximado: $15,000 - $25,000</li>
                    <li>• Se descuenta del reembolso</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📍 Cobertura de Recolección Gratuita:</h3>
                <div className="grid md:grid-cols-3 gap-4 mt-2">
                  <div>
                    <h4 className="font-medium text-blue-700 text-sm">Bogotá y Área Metropolitana</h4>
                    <p className="text-blue-600 text-xs">Recolección gratuita en toda la ciudad</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 text-sm">Medellín y Valle de Aburrá</h4>
                    <p className="text-blue-600 text-xs">Servicio sin costo adicional</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 text-sm">Cali y Área Metropolitana</h4>
                    <p className="text-blue-600 text-xs">Recolección incluida</p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 6: Tiempos y Plazos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tiempos y Plazos del Proceso</h2>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-indigo-600 mr-2" />
                  <p className="text-indigo-800 font-medium">Cronograma Detallado</p>
                </div>
                <p className="text-indigo-700 text-sm">
                  Los tiempos pueden variar debido a la coordinación con nuestros proveedores especializados, pero
                  siempre mantenemos comunicación constante.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">⏱️ Tiempos Estándar:</h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>
                        • <strong>Respuesta inicial:</strong> 24-48 horas
                      </li>
                      <li>
                        • <strong>Autorización:</strong> 1-2 días hábiles
                      </li>
                      <li>
                        • <strong>Recolección:</strong> 2-5 días hábiles
                      </li>
                      <li>
                        • <strong>Inspección:</strong> 3-7 días hábiles
                      </li>
                      <li>
                        • <strong>Reembolso:</strong> 1-15 días hábiles
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🚀 Casos Prioritarios:</h3>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>
                        • <strong>Productos defectuosos:</strong> 24 horas
                      </li>
                      <li>
                        • <strong>Recolección urgente:</strong> 1-2 días
                      </li>
                      <li>
                        • <strong>Inspección rápida:</strong> 1-3 días
                      </li>
                      <li>
                        • <strong>Reembolso express:</strong> 1-5 días
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">📅 Factores que Pueden Afectar los Tiempos:</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Ubicación geográfica (zonas rurales o de difícil acceso)</li>
                    <li>• Disponibilidad del proveedor para inspección</li>
                    <li>• Días festivos y fines de semana</li>
                    <li>• Condiciones climáticas adversas</li>
                    <li>• Volumen de devoluciones en temporadas altas</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 7: Garantías */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Garantías de Productos</h2>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="text-purple-800 font-medium mb-2">Garantía Dual:</p>
                <p className="text-purple-700 text-sm">
                  Nuestros productos cuentan con garantía legal de conformidad y garantía del fabricante cuando aplique.
                  Trabajamos con proveedores que respaldan la calidad de sus productos.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-2">🛡️ Garantía Legal:</h3>
                  <ul className="text-teal-700 text-sm space-y-1">
                    <li>• Todos los productos tienen garantía legal</li>
                    <li>• Mínimo 1 año desde la compra</li>
                    <li>• Cubre defectos de fabricación</li>
                    <li>• Procesada a través de Tienda Texas</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 mb-2">🏭 Garantía del Fabricante:</h3>
                  <ul className="text-indigo-700 text-sm space-y-1">
                    <li>• Varía según el producto y marca</li>
                    <li>• Puede ser de 6 meses a 3 años</li>
                    <li>• Incluye repuestos y servicio técnico</li>
                    <li>• Coordinamos con el fabricante</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 8: Casos Especiales */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Casos Especiales en Dropshipping</h2>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="text-orange-800 font-medium mb-2">Transparencia Total:</p>
                <p className="text-orange-700 text-sm">
                  Como trabajamos con dropshipping, algunos casos requieren coordinación adicional con nuestros
                  proveedores. Siempre mantenemos comunicación transparente sobre el estado de su solicitud.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🔄 Productos Agotados:</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Si el producto de cambio no está disponible</li>
                    <li>• Ofrecemos producto similar o reembolso completo</li>
                    <li>• Notificación inmediata de la situación</li>
                    <li>• Prioridad en próximas llegadas</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">📦 Productos Importados:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Algunos productos vienen directamente del exterior</li>
                    <li>• Tiempos de devolución pueden extenderse</li>
                    <li>• Coordinación con proveedores internacionales</li>
                    <li>• Comunicación constante sobre el progreso</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">🤝 Mediación de Conflictos:</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Tienda Texas actúa como mediador</li>
                    <li>• Protegemos los derechos del consumidor</li>
                    <li>• Negociamos con proveedores en su nombre</li>
                    <li>• Soluciones justas y equitativas</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 9: Contacto */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contacto para Devoluciones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro equipo especializado en devoluciones está disponible para ayudarle en todo el proceso:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 mb-1">Email Devoluciones</h3>
                  <p className="text-blue-700 text-sm">devoluciones@tiendatexas.com</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 mb-1">WhatsApp</h3>
                  <p className="text-green-700 text-sm">+12146295109</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">📞 Horarios de Atención:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>
                        • <strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM
                      </li>
                      <li>
                        • <strong>Sábados:</strong> 9:00 AM - 2:00 PM
                      </li>
                      <li>
                        • <strong>Domingos:</strong> Solo WhatsApp
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>
                        • <strong>Email:</strong> Respuesta en 24 horas
                      </li>
                      <li>
                        • <strong>WhatsApp:</strong> Respuesta inmediata
                      </li>
                      <li>
                        • <strong>Llamadas:</strong> Atención personalizada
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">© 2025 Tienda Texas. Todos los derechos reservados.</p>
              <p className="text-gray-500 text-xs mt-2">
                Esta política de devoluciones fue actualizada por última vez en enero de 2025.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Cumplimos con todas las normativas EEUU de protección al consumidor.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
