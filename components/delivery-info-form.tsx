"use client"
import type React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface DeliveryInfo {
  name: string
  address: string
  phone: string
  city: string
  department: string
  email: string
}

interface DeliveryInfoFormProps {
  deliveryInfo: DeliveryInfo
  handleDeliveryInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  isProcessing: boolean
}

export const DeliveryInfoForm: React.FC<DeliveryInfoFormProps> = ({
  deliveryInfo,
  handleDeliveryInfoChange,
  isProcessing,
}) => {
  return (
    <Accordion type="single" collapsible className="mb-6">
      <AccordionItem value="delivery" className="border rounded-lg">
        <AccordionTrigger className="text-xl font-bold px-6 py-4 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            Información de Entrega
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-6 mt-4">
            {/* Información Personal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Datos Personales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nombre y Apellido *</label>
                  <input
                    type="text"
                    name="name"
                    value={deliveryInfo.name}
                    onChange={handleDeliveryInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    disabled={isProcessing}
                    required
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Correo Electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    value={deliveryInfo.email}
                    onChange={handleDeliveryInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    disabled={isProcessing}
                    required
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Teléfono *</label>
                <input
                  type="tel"
                  name="phone"
                  value={deliveryInfo.phone}
                  onChange={handleDeliveryInfoChange}
                  className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  disabled={isProcessing}
                  required
                  placeholder="+57 300 123 4567"
                />
              </div>
            </div>

            {/* Información de Dirección */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Dirección de Entrega</h3>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Dirección Completa *</label>
                <input
                  type="text"
                  name="address"
                  value={deliveryInfo.address}
                  onChange={handleDeliveryInfoChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  disabled={isProcessing}
                  required
                  placeholder="Calle, número, barrio, referencias adicionales"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Ciudad *</label>
                  <input
                    type="text"
                    name="city"
                    value={deliveryInfo.city}
                    onChange={handleDeliveryInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    disabled={isProcessing}
                    required
                    placeholder="Nombre de la ciudad"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Departamento *</label>
                  <input
                    type="text"
                    name="department"
                    value={deliveryInfo.department}
                    onChange={handleDeliveryInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    disabled={isProcessing}
                    required
                    placeholder="Nombre del departamento"
                  />
                </div>
              </div>
            </div>

            {/* Nota informativa */}
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
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
                  <p className="font-medium mb-1">Información importante:</p>
                  <p>
                    Asegúrate de que todos los datos sean correctos para garantizar una entrega exitosa. Los campos
                    marcados con (*) son obligatorios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
