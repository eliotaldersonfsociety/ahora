"use client"
import type React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ShippingService {
  name: string
  balance: number
}

interface ShippingMethodProps {
  shippingMethod: string
  setShippingMethod: (value: string) => void
  services: ShippingService[]
  isProcessing?: boolean
}

// Función auxiliar para calcular días estimados
const getEstimatedDeliveryTime = (serviceName: string): number => {
  const times: Record<string, number> = {
    servientrega: 3,
    interrapidisimo: 2,
    veloces: 4,
    envia: 3,
    coordinadora: 5,
    "99minutos": 1,
    futura: 4,
    tcc: 5,
  }
  return times[serviceName] || 3
}

// Función para obtener información adicional del servicio
const getServiceInfo = (serviceName: string) => {
  const serviceDetails: Record<string, { description: string; speed: "express" | "standard" | "economy" }> = {
    servientrega: { description: "Cobertura nacional confiable", speed: "standard" },
    interrapidisimo: { description: "Entrega rápida y segura", speed: "express" },
    veloces: { description: "Servicio económico", speed: "economy" },
    envia: { description: "Envíos seguros", speed: "standard" },
    coordinadora: { description: "Red nacional extensa", speed: "economy" },
    "99minutos": { description: "Entrega ultra rápida", speed: "express" },
    futura: { description: "Servicio confiable", speed: "standard" },
    tcc: { description: "Transporte especializado", speed: "economy" },
  }
  return serviceDetails[serviceName] || { description: "Servicio de envío", speed: "standard" as const }
}

const getSpeedBadgeColor = (speed: "express" | "standard" | "economy") => {
  switch (speed) {
    case "express":
      return "bg-red-100 text-red-800 border-red-200"
    case "standard":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "economy":
      return "bg-green-100 text-green-800 border-green-200"
  }
}

const getSpeedLabel = (speed: "express" | "standard" | "economy") => {
  switch (speed) {
    case "express":
      return "Rápido"
    case "standard":
      return "Estándar"
    case "economy":
      return "Económico"
  }
}

export const ShippingMethod: React.FC<ShippingMethodProps> = ({
  shippingMethod,
  setShippingMethod,
  services,
  isProcessing = false,
}) => {
  console.log("🚚 Servicios de envío recibidos:", services)

  return (
    <div className="mb-6">
      <Accordion type="single" collapsible>
        <AccordionItem value="shipping-method" className="border rounded-lg">
          <AccordionTrigger className="text-xl font-bold px-6 py-4 hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              Método de Envío
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6 mt-4">
              {/* Información introductoria */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Opciones de Envío</h3>
                <p className="text-sm text-gray-600">
                  Selecciona la opción de envío que mejor se adapte a tus necesidades.
                </p>
              </div>

              {services.length > 0 ? (
                <div className="space-y-4">
                  <RadioGroup
                    value={shippingMethod}
                    onValueChange={setShippingMethod}
                    className="space-y-3"
                    disabled={isProcessing}
                  >
                    {services.map((service) => {
                      const serviceInfo = getServiceInfo(service.name)
                      const estimatedDays = getEstimatedDeliveryTime(service.name)
                      const isSelected = shippingMethod === service.name

                      return (
                        <div
                          key={service.name}
                          className={`border rounded-lg p-4 transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-green-50 border-green-500 ring-2 ring-green-200 shadow-sm"
                              : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                          } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          <label className="flex items-center gap-4 w-full cursor-pointer">
                            <RadioGroupItem value={service.name} className="mt-1" />

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="h-6 w-12 relative flex-shrink-0">
                                  <img
                                    src={`/${service.name}.png`}
                                    alt={`Logo ${service.name}`}
                                    className="h-full w-auto object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement
                                      target.style.display = "none"
                                    }}
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-gray-900 capitalize">{service.name}</span>
                                    <span
                                      className={`px-2 py-1 text-xs font-medium rounded-full border ${getSpeedBadgeColor(
                                        serviceInfo.speed,
                                      )}`}
                                    >
                                      {getSpeedLabel(serviceInfo.speed)}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600">{serviceInfo.description}</p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-1 text-gray-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span>{estimatedDays} días hábiles</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="text-lg font-bold text-green-600">
                                    {service.balance > 0 ? `$${service.balance.toLocaleString()}` : "Gratis"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      )
                    })}
                  </RadioGroup>

                  {/* Información del servicio seleccionado */}
                  {shippingMethod && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="text-sm text-red-800">
                          <p className="font-medium mb-1">Resumen del envío:</p>
                          <p>
                            Tu pedido será enviado por <strong className="capitalize">{shippingMethod}</strong>. Entrega
                            estimada en <strong>{getEstimatedDeliveryTime(shippingMethod)} días hábiles</strong> después
                            del despacho.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">No hay servicios de envío disponibles</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Por favor, verifica la información del producto o contacta con soporte.
                  </p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
