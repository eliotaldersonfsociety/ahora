"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import Link from "next/link";

export default function Contact() {
  const [state, action, isPending] = useActionState(
    async (_state: { success: boolean; message: string } | null, formData: FormData) => {
      return await submitContactForm(formData)
    },
    null
  )

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
        <p className="text-gray-600 text-lg">
          Estamos aquí para ayudarte. Envíanos un mensaje o contáctanos
          directamente.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Envíanos un mensaje
            </CardTitle>
            <CardDescription>
              Completa el formulario y te responderemos lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={action} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    required
                    disabled={isPending}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Select name="subject" disabled={isPending}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el motivo de tu consulta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pedido">
                      Consulta sobre pedido
                    </SelectItem>
                    <SelectItem value="producto">
                      Información de producto
                    </SelectItem>
                    <SelectItem value="entrega">
                      Problemas con entrega
                    </SelectItem>
                    <SelectItem value="garantia">
                      Garantía y devoluciones
                    </SelectItem>
                    <SelectItem value="facturacion">Facturación</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe tu consulta o mensaje..."
                  rows={4}
                  required
                  disabled={isPending}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-700 "
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>

              {state && (
                <div
                  className={`p-4 rounded-lg text-center ${
                    state.success
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {state.message}
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Información de contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-red-800 mt-1" />
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-gray-600">+57 (316) 174-4421</p>
                  <p className="text-sm text-gray-500">Respuesta inmediata</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-800 mt-1" />
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-gray-600">+57 (316) 174-4421</p>
                  <p className="text-sm text-gray-500">Línea directa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-800 mt-1" />
                <div>
                  <h4 className="font-medium">Correo electrónico</h4>
                  <p className="text-gray-600">
                    colombiaimportadora51@gmail.com
                  </p>
                  <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red-800 mt-1" />
                <div>
                  <h4 className="font-medium">Horario de atención</h4>
                  <p className="text-gray-600">Lunes a Sábado</p>
                  <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">
                    Domingos: Solo WhatsApp
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">Oficina Principal</p>
                <p className="text-gray-600">
                  Cucuta
                  <br />
                  Norte de Santander, Colombia
                  <br />
                  Código Postal: 110111
                </p>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Nota:</strong> Trabajamos principalmente con entregas
                  a domicilio. Las visitas a oficina requieren cita previa.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preguntas frecuentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">
                Antes de contactarnos, revisa nuestras preguntas frecuentes.
                Podrías encontrar la respuesta que buscas.
              </p>
              <Link href="/faq" passHref>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver FAQ
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
