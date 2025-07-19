import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Shield, Lock, Eye, UserCheck } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src="/tsb.png?height=80&width=200" alt="Colombia Importadora Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tienda Texas</h1>
          <p className="text-lg text-gray-600 mb-4">Política de Privacidad y Protección de Datos</p>
          <Badge variant="outline" className="text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            Última actualización: Enero 2025
          </Badge>
        </div>

        {/* Main Content */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Política de Privacidad y Protección de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            {/* Introducción */}
            <section>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-3">
                  <Lock className="w-6 h-6 text-green-600 mr-2" />
                  <h2 className="text-xl font-semibold text-green-800">Compromiso con su Privacidad</h2>
                </div>
                <p className="text-green-700 leading-relaxed">
                  En <strong>Tienda Texas</strong> respetamos y protegemos la privacidad de nuestros usuarios.
                  Esta política describe cómo recolectamos, usamos, almacenamos y protegemos su información personal de
                  acuerdo con la <strong>Ley 1581 de 2012</strong> y demás normativas EEUU aplicables.
                </p>
              </div>
            </section>

            {/* Sección 1: Responsable del Tratamiento */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Responsable del Tratamiento de Datos</h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-800 mb-2">Información del Responsable:</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>
                    <strong>Razón Social:</strong> Tienda Texas
                  </li>
                  <li>
                    <strong>Actividad:</strong> Comercio electrónico y venta de artículos diversos
                  </li>
                  <li>
                    <strong>Ubicación:</strong> Texas, EEUU
                  </li>
                  <li>
                    <strong>Email:</strong> info@tiendatexas.com
                  </li>
                  <li>
                    <strong>Teléfono:</strong> +12146295109
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Tienda Texas actúa como responsable del tratamiento de los datos personales que usted nos
                proporciona a través de nuestros canales digitales y durante el proceso de compra.
              </p>
            </section>

            <Separator />

            {/* Sección 2: Datos que Recolectamos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Información que Recolectamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recolectamos únicamente la información necesaria para brindarle nuestros servicios de manera eficiente:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Datos de Identificación:</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Nombre completo</li>
                    <li>• Número de documento de identidad</li>
                    <li>• Fecha de nacimiento (cuando sea requerida)</li>
                    <li>• Fotografía (si es proporcionada)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Datos de Contacto:</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Dirección de correo electrónico</li>
                    <li>• Número de teléfono móvil</li>
                    <li>• Dirección física de entrega</li>
                    <li>• Ciudad y departamento</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-800 mb-2">Datos de Navegación:</h3>
                  <ul className="text-indigo-700 text-sm space-y-1">
                    <li>• Dirección IP</li>
                    <li>• Tipo de navegador</li>
                    <li>• Páginas visitadas</li>
                    <li>• Tiempo de navegación</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-2">Datos Comerciales:</h3>
                  <ul className="text-teal-700 text-sm space-y-1">
                    <li>• Historial de compras</li>
                    <li>• Preferencias de productos</li>
                    <li>• Métodos de pago preferidos</li>
                    <li>• Comentarios y reseñas</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 3: Finalidades del Tratamiento */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. ¿Para qué Usamos sus Datos?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos su información personal únicamente para las siguientes finalidades legítimas:
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🛒 Procesamiento de Pedidos:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Confirmar y procesar sus órdenes de compra</li>
                    <li>• Coordinar la entrega de productos</li>
                    <li>• Facilitar el pago contra entrega</li>
                    <li>• Generar facturas y comprobantes</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📞 Comunicación y Servicio:</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Confirmar pedidos y coordinar entregas</li>
                    <li>• Brindar soporte al cliente</li>
                    <li>• Responder consultas y reclamos</li>
                    <li>• Enviar notificaciones importantes</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">📊 Mejora de Servicios:</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Personalizar su experiencia de compra</li>
                    <li>• Analizar tendencias y preferencias</li>
                    <li>• Mejorar nuestros productos y servicios</li>
                    <li>• Desarrollar nuevas funcionalidades</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">📢 Marketing (Solo con su Consentimiento):</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Enviar ofertas y promociones especiales</li>
                    <li>• Informar sobre nuevos productos</li>
                    <li>• Invitar a eventos y actividades</li>
                    <li>• Realizar encuestas de satisfacción</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 4: Base Legal */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base Legal del Tratamiento</h2>
              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="text-indigo-800 font-medium mb-2">Fundamento Legal:</p>
                <p className="text-indigo-700 text-sm">
                  El tratamiento de sus datos personales se basa en las siguientes bases legales reconocidas por la
                  legislación EEUU:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Consentimiento Informado:</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Autorización expresa para marketing</li>
                    <li>Consentimiento para cookies no esenciales</li>
                    <li>Autorización para comunicaciones promocionales</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Ejecución Contractual:</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Procesamiento de pedidos y entregas</li>
                    <li>Facturación y cobro</li>
                    <li>Servicio al cliente y soporte</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 5: Compartir Información */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. ¿Compartimos su Información?</h2>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <Eye className="w-5 h-5 text-red-600 mr-2" />
                  <p className="text-red-800 font-medium">Principio de Confidencialidad</p>
                </div>
                <p className="text-red-700 text-sm">
                  <strong>NO vendemos, alquilamos ni compartimos</strong> su información personal con terceros para
                  fines comerciales sin su consentimiento expreso.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Compartimos Únicamente Cuando es Necesario:</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>
                      • <strong>Empresas de mensajería:</strong> Para coordinar entregas (solo datos de contacto y
                      dirección)
                    </li>
                    <li>
                      • <strong>Proveedores de tecnología:</strong> Para mantener nuestros sistemas seguros
                    </li>
                    <li>
                      • <strong>Autoridades competentes:</strong> Cuando sea requerido por ley
                    </li>
                    <li>
                      • <strong>Asesores legales:</strong> Para cumplimiento normativo
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Medidas de Protección:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Contratos de confidencialidad con terceros</li>
                    <li>• Transferencia mínima de datos necesarios</li>
                    <li>• Verificación de medidas de seguridad de terceros</li>
                    <li>• Supervisión continua del cumplimiento</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 6: Seguridad */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seguridad de sus Datos</h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <Lock className="w-5 h-5 text-blue-600 mr-2" />
                  <p className="text-blue-800 font-medium">Protección Integral</p>
                </div>
                <p className="text-blue-700 text-sm">
                  Implementamos medidas técnicas, administrativas y físicas para proteger su información contra acceso
                  no autorizado, pérdida, alteración o destrucción.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Medidas Técnicas:</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Encriptación de datos</li>
                    <li>• Conexiones seguras (SSL)</li>
                    <li>• Firewalls y antivirus</li>
                    <li>• Respaldos regulares</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">Medidas Administrativas:</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Políticas de seguridad</li>
                    <li>• Capacitación del personal</li>
                    <li>• Control de acceso</li>
                    <li>• Auditorías regulares</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-800 mb-2">Medidas Físicas:</h3>
                  <ul className="text-teal-700 text-sm space-y-1">
                    <li>• Servidores seguros</li>
                    <li>• Control de acceso físico</li>
                    <li>• Sistemas de vigilancia</li>
                    <li>• Destrucción segura</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 7: Sus Derechos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Sus Derechos como Titular de Datos</h2>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <UserCheck className="w-5 h-5 text-green-600 mr-2" />
                  <p className="text-green-800 font-medium">Derechos Garantizados por Ley</p>
                </div>
                <p className="text-green-700 text-sm">
                  Como titular de datos personales, usted tiene los siguientes derechos que puede ejercer en cualquier
                  momento de forma gratuita:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-semibold text-blue-800 text-sm mb-1">🔍 Derecho de Acceso</h3>
                    <p className="text-blue-700 text-xs">Conocer qué datos tenemos sobre usted</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 text-sm mb-1">✏️ Derecho de Rectificación</h3>
                    <p className="text-yellow-700 text-xs">Corregir datos inexactos o incompletos</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h3 className="font-semibold text-red-800 text-sm mb-1">🗑️ Derecho de Cancelación</h3>
                    <p className="text-red-700 text-xs">Solicitar la eliminación de sus datos</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h3 className="font-semibold text-purple-800 text-sm mb-1">🚫 Derecho de Oposición</h3>
                    <p className="text-purple-700 text-xs">Oponerse al tratamiento de sus datos</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <h3 className="font-semibold text-indigo-800 text-sm mb-1">📋 Derecho de Información</h3>
                    <p className="text-indigo-700 text-xs">Conocer el uso que damos a sus datos</p>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <h3 className="font-semibold text-teal-800 text-sm mb-1">⚖️ Derecho de Reclamo</h3>
                    <p className="text-teal-700 text-xs">Presentar quejas ante la SIC</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">¿Cómo Ejercer sus Derechos?</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Para ejercer cualquiera de estos derechos, puede contactarnos a través de:
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>
                    • <strong>Email:</strong> privacidad@tiendatexas.com
                  </li>
                  <li>
                    • <strong>Teléfono:</strong> +12146295109
                  </li>
                  <li>
                    • <strong>Tiempo de respuesta:</strong> Máximo 15 días hábiles
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Sección 8: Retención de Datos */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. ¿Por Cuánto Tiempo Conservamos sus Datos?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conservamos su información personal únicamente durante el tiempo necesario para cumplir con las
                finalidades descritas en esta política:
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Datos de Clientes Activos:</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Mientras mantenga una relación comercial con nosotros</li>
                    <li>• Hasta 5 años después de la última compra (fines tributarios)</li>
                    <li>• Datos de marketing: hasta que retire su consentimiento</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Datos de Navegación:</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Cookies técnicas: durante la sesión</li>
                    <li>• Cookies analíticas: hasta 24 meses</li>
                    <li>• Logs del servidor: hasta 12 meses</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Eliminación Segura:</h3>
                  <p className="text-green-700 text-sm">
                    Una vez cumplido el período de retención, eliminamos de forma segura e irreversible toda su
                    información personal de nuestros sistemas.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Sección 9: Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Uso de Cookies y Tecnologías Similares</h2>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="text-orange-800 font-medium mb-2">¿Qué son las Cookies?</p>
                <p className="text-orange-700 text-sm">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro
                  sitio web para mejorar su experiencia de navegación.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Cookies Esenciales:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Funcionamiento del carrito de compras</li>
                    <li>• Mantenimiento de sesión</li>
                    <li>• Seguridad del sitio web</li>
                    <li>
                      • <em>No requieren consentimiento</em>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Cookies Analíticas:</h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Análisis de tráfico web</li>
                    <li>• Mejora de la experiencia</li>
                    <li>• Estadísticas de uso</li>
                    <li>
                      • <em>Requieren su consentimiento</em>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Control de Cookies:</strong> Puede gestionar sus preferencias de cookies a través de la
                  configuración de su navegador o nuestro panel de consentimiento.
                </p>
              </div>
            </section>

            <Separator />

            {/* Sección 10: Menores de Edad */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Protección de Menores de Edad</h2>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-800 font-medium mb-2">Política Estricta:</p>
                <p className="text-red-700 text-sm">
                  Nuestros servicios están dirigidos a personas mayores de 18 años. No recolectamos intencionalmente
                  información personal de menores de edad.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Si Detectamos Datos de Menores:</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Eliminaremos inmediatamente la información</li>
                  <li>• Contactaremos a los padres o tutores</li>
                  <li>• Implementaremos medidas preventivas adicionales</li>
                  <li>• Reportaremos el incidente si es necesario</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Sección 11: Cambios en la Política */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificaciones a esta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras
                prácticas o por requisitos legales.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Proceso de Actualización:</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Publicaremos la nueva versión en nuestro sitio web</li>
                  <li>• Notificaremos cambios significativos por email</li>
                  <li>• Indicaremos la fecha de la última actualización</li>
                  <li>• Mantendremos versiones anteriores disponibles</li>
                </ul>
              </div>
            </section>

            <Separator />

            {/* Sección 12: Contacto */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contacto y Consultas</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para cualquier consulta, solicitud o reclamo relacionado con el tratamiento de sus datos personales,
                puede contactarnos a través de:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 mb-1">Email Privacidad</h3>
                  <p className="text-blue-700 text-sm">privacidad@tiendatexas.com</p>
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
              <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-2">Superintendencia de Industria y Comercio (SIC):</h3>
                <p className="text-indigo-700 text-sm">
                  Si no está satisfecho con nuestra respuesta, puede presentar una queja ante la SIC, autoridad de
                  control en materia de protección de datos personales en EEUU.
                </p>
                <p className="text-indigo-700 text-sm mt-2">
                  <strong>Web:</strong> www.sic.gov.eu | <strong>Línea:</strong> 018000 910165
                </p>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">© 2025 Tienda Texas. Todos los derechos reservados.</p>
              <p className="text-gray-500 text-xs mt-2">
                Esta política de privacidad fue actualizada por última vez en enero de 2025.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Cumplimos con la Ley 1581 de 2012 y demás normativas EEUU de protección de datos.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
